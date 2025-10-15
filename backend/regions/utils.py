import math
import ee

def fetch_ee_data(polygon_coords, start_pre, end_pre, start_post, end_post):
    """Fetch NDVI (MODIS), NDBI (Landsat 8 C02), mean DEM, area, and rough volume estimate."""
    poly = ee.Geometry.Polygon(polygon_coords)

    # --- Helper to compute mean of an image collection band ---
    def mean_index(coll, band, scale_factor=1.0):
        result = coll.select(band).mean().multiply(scale_factor).reduceRegion(
            reducer=ee.Reducer.mean(),
            geometry=poly,
            scale=30
        ).getInfo()
        return result.get(band, None)

    # --- NDVI (MODIS, scaled by 0.0001) ---
    ndvi_pre = mean_index(
        ee.ImageCollection('MODIS/061/MOD13Q1').filterDate(start_pre, end_pre),
        'NDVI',
        0.0001
    )
    ndvi_post = mean_index(
        ee.ImageCollection('MODIS/061/MOD13Q1').filterDate(start_post, end_post),
        'NDVI',
        0.0001
    )

    # --- Landsat 8 Surface Reflectance cloud masking ---
    def mask_l8_sr(img):
        qa = img.select('QA_PIXEL')
        # Bits 3 and 4: Cloud and Cloud Shadow
        cloud_mask = qa.bitwiseAnd(1 << 3).eq(0).And(qa.bitwiseAnd(1 << 4).eq(0))
        return img.updateMask(cloud_mask)

    # --- NDBI (Landsat 8 C02) ---
    def ndbi(img):
        img = mask_l8_sr(img)
        return img.normalizedDifference(['SR_B6', 'SR_B5']).rename('ndbi')

    ndbi_pre = mean_index(
        ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
        .filterDate(start_pre, end_pre)
        .map(ndbi),
        'ndbi'
    )

    ndbi_post = mean_index(
        ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
        .filterDate(start_post, end_post)
        .map(ndbi),
        'ndbi'
    )

    # --- Mean DEM (SRTM) ---
    dem_mean = ee.Image('USGS/SRTMGL1_003').reduceRegion(
        reducer=ee.Reducer.mean(),
        geometry=poly,
        scale=30
    ).getInfo().get('elevation', None)

    # --- Area (km²) ---
    area_km2 = calculate_area(polygon_coords)

    # --- Approximate "volume" (m³) ---
    volume_m3 = dem_mean * area_km2 * 1e6 if dem_mean is not None else None

    return {
        'ndvi_pre': ndvi_pre,
        'ndvi_post': ndvi_post,
        'ndbi_pre': ndbi_pre,
        'ndbi_post': ndbi_post,
        'dem_mean': dem_mean,
        'area_km2': area_km2,
        'volume_m3': volume_m3
    }


def fetch_region_report(region, start_pre, end_pre, start_post, end_post):
    """Fetch EE data for all polygons in a region."""
    report = []
    polygons = region.polygon or []
    for geom in polygons:
        if isinstance(geom, dict) and geom.get('type') == 'Polygon':
            coords = geom['coordinates']  # <--- use full coordinates, not [0]
            if len(coords) < 3:
                continue
            report.append(fetch_ee_data(coords, start_pre, end_pre, start_post, end_post))
        # Optional: handle old list-of-points format
        elif isinstance(geom, list) and len(geom) >= 3:
            report.append(fetch_ee_data(geom, start_pre, end_pre, start_post, end_post))
    return report


def fetch_dem_raster(features):
    """
    Fetch DEM raster (2D elevation array) for the first feature with >3 coordinates.
    Returns a 2D array of elevations (meters).
    """
    valid_polygon = None
    for feature in features:
        if len(feature['coordinates']) > 3:
            valid_polygon = feature['coordinates']
            break

    if not valid_polygon:
        return []  # No valid polygon found

    # Convert to EE geometry (wrap in extra list for rings)
    poly = ee.Geometry.Polygon([valid_polygon])

    # Load SRTM DEM
    dem_image = ee.Image('USGS/SRTMGL1_003')

    # Sample rectangle with defaultValue=0 to avoid fully masked pixels
    dem_raster = dem_image.sampleRectangle(
        region=poly,
        defaultValue=0
    ).getInfo()

    return dem_raster.get('properties',{}).get('elevation',[])

def extract_geometries(root):
    geometries = []

    def extract_coords(coord_text):
        coords = []
        for c in coord_text.strip().split():
            parts = c.split(',')
            lon, lat = float(parts[0]), float(parts[1])
            coords.append([lon, lat])
        return coords

    for placemark in root.Document.Folder.Placemark:
        if hasattr(placemark, 'Polygon'):
            coords = extract_coords(
                placemark.Polygon.outerBoundaryIs.LinearRing.coordinates.text
            )
            area = calculate_area(coords)
            geometries.append({
                "type": "Polygon",
                "coordinates": coords,
                "area_km2": area
            })
        elif hasattr(placemark, 'LineString'):
            coords = extract_coords(
                placemark.LineString.coordinates.text
            )
            geometries.append({
                "type": "LineString",
                "coordinates": coords
            })

    return geometries


def calculate_area(coords):
    if len(coords) < 3:
        return 0
    R = 6371
    area = 0
    for i in range(len(coords)):
        lon1, lat1 = coords[i]
        lon2, lat2 = coords[(i + 1) % len(coords)]
        lon1, lat1, lon2, lat2 = map(math.radians, [lon1, lat1, lon2, lat2])
        area += (lon2 - lon1) * (2 + math.sin(lat1) + math.sin(lat2))
    return abs(area * (R ** 2) / 2)
