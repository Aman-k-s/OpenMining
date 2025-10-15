import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import "leaflet/dist/leaflet.css";
import {
  Map,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  MapPin,
  AlertTriangle,
  Satellite,
  Mountain,
  Eye,
  EyeOff,
} from "lucide-react";
import api from '../lib/api';

interface InteractiveMapProps {
  analysisData?: any;
}

export function InteractiveMap({ analysisData }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);
  const [mapView, setMapView] = useState("satellite");
  const [showLayers, setShowLayers] = useState({
    mining: true,
    boundaries: true,
    illegal: true,
    dem: false,
  });
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [coordinates, setCoordinates] = useState({
    lat: 23.2599,
    lng: 77.4126,
  });
  const [zoom, setZoom] = useState(12);
  const [mapLoading, setMapLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);
  const [regionsLoading, setRegionsLoading] = useState(false);
  const [regionsError, setRegionsError] = useState<string | null>(null);

  

  // No local placeholder areas: we will draw regions from API only

  // Initialize Leaflet map
  useEffect(() => {
    if (mapRef.current && !leafletMapRef.current) {
      setMapLoading(true);
      setMapError(null);

      // Dynamically import Leaflet to avoid SSR issues
      import("leaflet")
        .then((L) => {
          try {
            // Create map
            const map = L.map(mapRef.current!).setView(
              [coordinates.lat, coordinates.lng],
              zoom
            );

            // Add tile layers
            const satelliteLayer = L.tileLayer(
              "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
              {
                attribution: "© Esri © OpenStreetMap contributors",
                maxZoom: 18,
              }
            );

            const terrainLayer = L.tileLayer(
              "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
              {
                attribution: "© Esri © OpenStreetMap contributors",
                maxZoom: 18,
              }
            );

            const hybridLayer = L.tileLayer(
              "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
              {
                attribution: "© Esri © OpenStreetMap contributors",
                maxZoom: 18,
              }
            );

            // Fallback OpenStreetMap layer
            const osmLayer = L.tileLayer(
              "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
              {
                attribution: "© OpenStreetMap contributors",
                maxZoom: 19,
              }
            );

            // Set initial layer (start with OSM for reliability)
            osmLayer.addTo(map);

            // Store references
            leafletMapRef.current = {
              map,
              layers: {
                satellite: satelliteLayer,
                terrain: terrainLayer,
                hybrid: hybridLayer,
                osm: osmLayer,
              },
              markers: [],
              polygons: [],
            };

            // We'll fetch regions from backend and draw those polygons (no placeholders)

            // Provide a loadRegions helper so we can reload on demand and clear old polygons
            const loadRegions = async () => {
              try {
                setRegionsLoading(true);
                setRegionsError(null);

                // remove existing polygons
                if (leafletMapRef.current?.polygons) {
                  leafletMapRef.current.polygons.forEach(({ polygon }: any) => {
                    try {
                      if (map.hasLayer(polygon)) map.removeLayer(polygon);
                    } catch (err) {
                      // ignore
                    }
                  });
                  leafletMapRef.current.polygons = [];
                }

                const regions: any[] = await api.listRegions();
                const drawnPolys: any[] = [];

                regions.forEach((reg) => {
                  const geoms = reg.polygon || [];

                  const looksLikeRing = Array.isArray(geoms) && geoms.length > 0 && typeof geoms[0][0] === 'number';
                  const processGeoms = looksLikeRing ? [geoms] : geoms;

                  processGeoms.forEach((g: any) => {
                    if (Array.isArray(g) && g.length && Array.isArray(g[0])) {
                      if (g.length >= 3) {
                        const latlngs = g.map((pt: any) => [pt[1], pt[0]]);
                        const first = latlngs[0];
                        const last = latlngs[latlngs.length - 1];
                        if (first[0] !== last[0] || first[1] !== last[1]) latlngs.push(first);
                        const poly = L.polygon(latlngs, { color: '#0f172a', weight: 2, fillOpacity: 0.12 });
                        poly.bindPopup(`<strong>${reg.name}</strong><br/>Region ID: ${reg.id}`);
                        poly.on('click', () => {
                          setSelectedFeature(reg);
                          map.fitBounds(poly.getBounds(), { padding: [20, 20] });
                        });
                        if (showLayers.boundaries) poly.addTo(map);
                        leafletMapRef.current.polygons.push({ polygon: poly, area: reg });
                        drawnPolys.push(poly);
                      }
                    } else if (g && g.type === 'Polygon' && Array.isArray(g.coordinates)) {
                      const ring = g.coordinates[0] || [];
                      if (ring.length >= 3) {
                        const latlngs = ring.map((pt: any) => [pt[1], pt[0]]);
                        const first = latlngs[0];
                        const last = latlngs[latlngs.length - 1];
                        if (first[0] !== last[0] || first[1] !== last[1]) latlngs.push(first);
                        const poly = L.polygon(latlngs, { color: '#065f46', weight: 2, fillOpacity: 0.12 });
                        poly.bindPopup(`<strong>${reg.name}</strong><br/>Region ID: ${reg.id}`);
                        poly.on('click', () => {
                          setSelectedFeature(reg);
                          map.fitBounds(poly.getBounds(), { padding: [20, 20] });
                        });
                        if (showLayers.boundaries) poly.addTo(map);
                        leafletMapRef.current.polygons.push({ polygon: poly, area: reg });
                        drawnPolys.push(poly);
                      }
                    }
                  });
                });

                // Fit map to all polygons if any drawn
                if (drawnPolys.length > 0) {
                  const group = L.featureGroup(drawnPolys);
                  map.fitBounds(group.getBounds(), { padding: [20, 20] });
                }

                // store a helper for manual reload
                leafletMapRef.current.loadRegions = loadRegions;
                // set a small region count in state by setting selectedFeature to null to avoid re-render complexity
                console.debug('Regions drawn:', drawnPolys.length);
              } catch (e) {
                console.warn('Failed to load regions', e);
                setRegionsError(String(e));
              } finally {
                setRegionsLoading(false);
              }
            };

            // initial load
            loadRegions();

            // Map event listeners
            map.on("move", () => {
              const center = map.getCenter();
              setCoordinates({ lat: center.lat, lng: center.lng });
            });

            map.on("zoom", () => {
              setZoom(map.getZoom());
            });

            // Map is ready
            map.whenReady(() => {
              setMapLoading(false);
              console.log("Map loaded successfully");
            });

            // Force a resize after a short delay to ensure proper rendering
            setTimeout(() => {
              map.invalidateSize();
            }, 100);
          } catch (error) {
            console.error("Error initializing map:", error);
            setMapError("Failed to initialize map");
            setMapLoading(false);
          }
        })
        .catch((error) => {
          console.error("Error loading Leaflet:", error);
          setMapError("Failed to load map library");
          setMapLoading(false);
        });
    }

    return () => {
      if (leafletMapRef.current?.map) {
        leafletMapRef.current.map.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  // Update map layers when view changes
  useEffect(() => {
    if (leafletMapRef.current) {
      const { map, layers } = leafletMapRef.current;

      // Remove all layers
      Object.values(layers).forEach((layer: any) => {
        map.removeLayer(layer);
      });

      // Add selected layer
      switch (mapView) {
        case "satellite":
          layers.satellite.addTo(map);
          break;
        case "terrain":
          layers.terrain.addTo(map);
          break;
        case "hybrid":
          layers.satellite.addTo(map); // Use satellite for hybrid view
          break;
        default:
          layers.osm.addTo(map);
          break;
      }
    }
  }, [mapView]);

  // Update layer visibility when showLayers changes
  useEffect(() => {
    if (leafletMapRef.current?.markers && leafletMapRef.current?.polygons) {
      // Handle marker visibility
      leafletMapRef.current.markers.forEach(({ marker, area }: any) => {
        if (area.type === "illegal" && !showLayers.illegal) {
          leafletMapRef.current.map.removeLayer(marker);
        } else if (area.type === "authorized" && !showLayers.mining) {
          leafletMapRef.current.map.removeLayer(marker);
        } else {
          if (!leafletMapRef.current.map.hasLayer(marker)) {
            marker.addTo(leafletMapRef.current.map);
          }
        }
      });

      // Handle polygon visibility
      leafletMapRef.current.polygons.forEach(({ polygon, area }: any) => {
        if (showLayers.boundaries) {
          if (!leafletMapRef.current.map.hasLayer(polygon)) {
            polygon.addTo(leafletMapRef.current.map);
          }
        } else {
          leafletMapRef.current.map.removeLayer(polygon);
        }
      });
    }
  }, [showLayers]);

  const handleZoomIn = () => {
    if (leafletMapRef.current?.map) {
      leafletMapRef.current.map.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (leafletMapRef.current?.map) {
      leafletMapRef.current.map.zoomOut();
    }
  };

  const handleReset = () => {
    if (leafletMapRef.current?.map) {
      leafletMapRef.current.map.setView([23.2599, 77.4126], 12);
    }
  };

  const handleFeatureClick = (feature: any) => {
    setSelectedFeature(feature);
    if (leafletMapRef.current?.map) {
      leafletMapRef.current.map.setView(
        [feature.coordinates[0], feature.coordinates[1]],
        15
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-4">
            <div className="md:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Map className="h-5 w-5" />
                        Mining Activity Map
                      </CardTitle>
                      <CardDescription>
                        Real-time satellite imagery with mining area overlays
                      </CardDescription>
                    </div>

                    {/* View Toggle */}
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant={
                          mapView === "satellite" ? "default" : "outline"
                        }
                        onClick={() => setMapView("satellite")}
                      >
                        <Satellite className="h-4 w-4 mr-1" />
                        Satellite
                      </Button>
                      <Button
                        size="sm"
                        variant={mapView === "terrain" ? "default" : "outline"}
                        onClick={() => setMapView("terrain")}
                      >
                        <Mountain className="h-4 w-4 mr-1" />
                        Terrain
                      </Button>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline" onClick={() => {
                          // allow manual reload of regions and show errors in UI
                          try {
                            const ref = leafletMapRef.current;
                            if (ref && ref.loadRegions) ref.loadRegions();
                          } catch (e) {
                            console.warn('Manual reload failed', e);
                          }
                        }}>Reload Regions</Button>
                        <div className="text-xs bg-white/90 px-2 py-1 rounded text-slate-900 border">Regions: {leafletMapRef.current?.polygons?.length ?? 0}</div>
                      </div>
                      {/* <Button
                        size="sm"
                        variant={mapView === 'hybrid' ? 'default' : 'outline'}
                        onClick={() => setMapView('hybrid')}
                      >
                        <Layers className="h-4 w-4 mr-1" />
                        Hybrid
                      </Button> */}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    {/* Leaflet Map Container */}
                    <div
                      ref={mapRef}
                      className="w-full h-96 rounded-lg border overflow-hidden bg-gray-100"
                      style={{ zIndex: 1, minHeight: "384px" }}
                    />

                    {/* Loading Overlay */}
                    {mapLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                        <div className="text-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                          <p className="text-sm text-gray-600">
                            Loading map...
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Error Overlay */}
                    {mapError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-red-50 rounded-lg">
                        <div className="text-center p-4">
                          <p className="text-red-600 font-medium mb-2">
                            Map Error
                          </p>
                          <p className="text-sm text-red-500">{mapError}</p>
                        </div>
                      </div>
                    )}

                    {/* Map Controls */}
                    <div
                      className="absolute top-4 right-4 flex flex-col gap-2"
                      style={{ zIndex: 1000 }}
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={handleZoomIn}
                      >
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={handleZoomOut}
                      >
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={handleReset}
                      >
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Coordinates Display */}
                    <div
                      className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm"
                      style={{ zIndex: 1000 }}
                    >
                      {coordinates.lat.toFixed(4)}°N,{" "}
                      {coordinates.lng.toFixed(4)}°E | Zoom: {zoom}
                    </div>

                    {/* Scale Bar */}
                    <div
                      className="absolute bottom-4 right-4 bg-white/90 px-2 py-1 rounded text-xs border"
                      style={{ zIndex: 1000 }}
                    >
                      <div className="flex items-center gap-1">
                        <div className="w-8 h-0.5 bg-black"></div>
                        <span>1 km</span>
                      </div>
                    </div>
                    {/* Regions loader/error */}
                    {regionsLoading && (
                      <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-sm border" style={{ zIndex: 1000 }}>
                        Loading regions...
                      </div>
                    )}

                    {regionsError && (
                      <div className="absolute top-4 left-4 bg-red-50 px-3 py-1 rounded text-sm border text-red-600" style={{ zIndex: 1000 }}>
                        Regions: {regionsError}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Feature Details Panel */}
            <div className="space-y-4">

              {/* Legend */}
              {/* Legend */}
<Card>
  <CardHeader>
    <CardTitle>Legend</CardTitle>
  </CardHeader>
  <CardContent className="space-y-2">
    <div className="flex items-center gap-2 text-sm">
      <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
      <span>Authorized Mining</span>
    </div>
    <div className="flex items-center gap-2 text-sm">
      <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white"></div>
      <span>Illegal Mining</span>
    </div>
    <div className="flex items-center gap-2 text-sm">
      <div className="w-4 h-1 bg-green-500/30 border border-green-500"></div>
      <span>Authorized Boundary</span>
    </div>
    <div className="flex items-center gap-2 text-sm">
      <div className="w-4 h-1 bg-red-500/30 border border-red-500"></div>
      <span>Violation Area</span>
    </div>

    {/* Info Note */}
    <p className="text-xs text-gray-500 mt-3">
      💡 Click on any site/location on the map to view additional details.
    </p>
  </CardContent>
</Card>

            </div>
          </div>
    </div>
  );
}
