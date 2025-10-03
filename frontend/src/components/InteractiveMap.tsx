import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import 'leaflet/dist/leaflet.css';
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
  EyeOff
} from 'lucide-react';

interface InteractiveMapProps {
  analysisData?: any;
}

export function InteractiveMap({ analysisData }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);
  const [mapView, setMapView] = useState('satellite');
  const [showLayers, setShowLayers] = useState({
    mining: true,
    boundaries: true,
    illegal: true,
    dem: false
  });
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [coordinates, setCoordinates] = useState({ lat: 23.2599, lng: 77.4126 });
  const [zoom, setZoom] = useState(12);
  const [mapLoading, setMapLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);

  // Mock mining areas data
  const miningAreas = [
    {
      id: 1,
      name: "Mining Site Alpha",
      type: "authorized",
      coordinates: [23.2599, 77.4126],
      area: 125.5,
      depth: 8.2,
      status: "Active",
      lastUpdate: "2024-12-28"
    },
    {
      id: 2,
      name: "Mining Site Beta", 
      type: "illegal",
      coordinates: [23.2650, 77.4200],
      area: 45.3,
      depth: 12.1,
      status: "Violation",
      lastUpdate: "2024-12-27"
    },
    {
      id: 3,
      name: "Mining Site Gamma",
      type: "authorized",
      coordinates: [23.2500, 77.4050],
      area: 87.9,
      depth: 6.5,
      status: "Active",
      lastUpdate: "2024-12-26"
    }
  ];

  // Initialize Leaflet map
  useEffect(() => {
    if (mapRef.current && !leafletMapRef.current) {
      setMapLoading(true);
      setMapError(null);
      
      // Dynamically import Leaflet to avoid SSR issues
      import('leaflet').then((L) => {
        try {
          // Create map
          const map = L.map(mapRef.current!).setView([coordinates.lat, coordinates.lng], zoom);

          // Add tile layers
          const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '© Esri © OpenStreetMap contributors',
            maxZoom: 18,
          });

          const terrainLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
            attribution: '© Esri © OpenStreetMap contributors',
            maxZoom: 18,
          });

          const hybridLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '© Esri © OpenStreetMap contributors',
            maxZoom: 18,
          });

          // Fallback OpenStreetMap layer
          const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19,
          });

          // Set initial layer (start with OSM for reliability)
          osmLayer.addTo(map);

          // Store references
          leafletMapRef.current = {
            map,
            layers: {
              satellite: satelliteLayer,
              terrain: terrainLayer,
              hybrid: hybridLayer,
              osm: osmLayer
            },
            markers: [],
            polygons: []
          };

          // Add mining area markers
          miningAreas.forEach(area => {
            const color = area.type === 'illegal' ? '#ef4444' : '#22c55e';
            const icon = L.divIcon({
              html: `
                <div style="
                  background-color: ${color};
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  border: 3px solid white;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                ">
                  <div style="
                    background-color: white;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                  "></div>
                </div>
              `,
              className: 'custom-mining-marker',
              iconSize: [20, 20],
              iconAnchor: [10, 10]
            });

            const marker = L.marker([area.coordinates[0], area.coordinates[1]], { icon })
              .addTo(map)
              .bindPopup(`
                <div style="min-width: 200px;">
                  <h3 style="margin: 0 0 8px 0; font-weight: 600;">${area.name}</h3>
                  <div style="margin-bottom: 4px;">
                    <span style="
                      background-color: ${area.type === 'illegal' ? '#fecaca' : '#bbf7d0'};
                      color: ${area.type === 'illegal' ? '#dc2626' : '#166534'};
                      padding: 2px 6px;
                      border-radius: 4px;
                      font-size: 12px;
                      font-weight: 500;
                    ">${area.status}</span>
                  </div>
                  <div style="font-size: 14px; line-height: 1.4;">
                    <div><strong>Area:</strong> ${area.area} hectares</div>
                    <div><strong>Depth:</strong> ${area.depth}m</div>
                    <div><strong>Last Updated:</strong> ${area.lastUpdate}</div>
                  </div>
                </div>
              `);

            // Store marker with area info for layer control
            leafletMapRef.current.markers.push({ marker, area });

            marker.on('click', () => {
              setSelectedFeature(area);
            });
          });

          // Add boundary polygons for mining areas
          miningAreas.forEach(area => {
            const bounds: [[number, number], [number, number]] = [
              [area.coordinates[0] - 0.002, area.coordinates[1] - 0.002],
              [area.coordinates[0] + 0.002, area.coordinates[1] + 0.002]
            ];
            
            const polygon = L.rectangle(bounds, {
              color: area.type === 'illegal' ? '#ef4444' : '#22c55e',
              weight: 2,
              fillOpacity: 0.1
            });

            if (showLayers.boundaries) {
              polygon.addTo(map);
            }

            // Store polygon with area info for layer control
            leafletMapRef.current.polygons.push({ polygon, area });
          });

          // Map event listeners
          map.on('move', () => {
            const center = map.getCenter();
            setCoordinates({ lat: center.lat, lng: center.lng });
          });

          map.on('zoom', () => {
            setZoom(map.getZoom());
          });

          // Map is ready
          map.whenReady(() => {
            setMapLoading(false);
            console.log('Map loaded successfully');
          });

          // Force a resize after a short delay to ensure proper rendering
          setTimeout(() => {
            map.invalidateSize();
          }, 100);

        } catch (error) {
          console.error('Error initializing map:', error);
          setMapError('Failed to initialize map');
          setMapLoading(false);
        }
      }).catch(error => {
        console.error('Error loading Leaflet:', error);
        setMapError('Failed to load map library');
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
        case 'satellite':
          layers.satellite.addTo(map);
          break;
        case 'terrain':
          layers.terrain.addTo(map);
          break;
        case 'hybrid':
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
        if (area.type === 'illegal' && !showLayers.illegal) {
          leafletMapRef.current.map.removeLayer(marker);
        } else if (area.type === 'authorized' && !showLayers.mining) {
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
      leafletMapRef.current.map.setView([feature.coordinates[0], feature.coordinates[1]], 15);
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="map" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="map">Interactive Map</TabsTrigger>
          <TabsTrigger value="layers">Layer Control</TabsTrigger>
          <TabsTrigger value="analysis">Site Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="map" className="space-y-4">
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
                        variant={mapView === 'satellite' ? 'default' : 'outline'}
                        onClick={() => setMapView('satellite')}
                      >
                        <Satellite className="h-4 w-4 mr-1" />
                        Satellite
                      </Button>
                      <Button
                        size="sm"
                        variant={mapView === 'terrain' ? 'default' : 'outline'}
                        onClick={() => setMapView('terrain')}
                      >
                        <Mountain className="h-4 w-4 mr-1" />
                        Terrain
                      </Button>
                      <Button
                        size="sm"
                        variant={mapView === 'hybrid' ? 'default' : 'outline'}
                        onClick={() => setMapView('hybrid')}
                      >
                        <Layers className="h-4 w-4 mr-1" />
                        Hybrid
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    {/* Leaflet Map Container */}
                    <div 
                      ref={mapRef}
                      className="w-full h-96 rounded-lg border overflow-hidden bg-gray-100"
                      style={{ zIndex: 1, minHeight: '384px' }}
                    />

                    {/* Loading Overlay */}
                    {mapLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                        <div className="text-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                          <p className="text-sm text-gray-600">Loading map...</p>
                        </div>
                      </div>
                    )}

                    {/* Error Overlay */}
                    {mapError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-red-50 rounded-lg">
                        <div className="text-center p-4">
                          <p className="text-red-600 font-medium mb-2">Map Error</p>
                          <p className="text-sm text-red-500">{mapError}</p>
                        </div>
                      </div>
                    )}

                    {/* Map Controls */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2" style={{ zIndex: 1000 }}>
                      <Button size="sm" variant="secondary" onClick={handleZoomIn}>
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" onClick={handleZoomOut}>
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" onClick={handleReset}>
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Coordinates Display */}
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm" style={{ zIndex: 1000 }}>
                      {coordinates.lat.toFixed(4)}°N, {coordinates.lng.toFixed(4)}°E | Zoom: {zoom}
                    </div>

                    {/* Scale Bar */}
                    <div className="absolute bottom-4 right-4 bg-white/90 px-2 py-1 rounded text-xs border" style={{ zIndex: 1000 }}>
                      <div className="flex items-center gap-1">
                        <div className="w-8 h-0.5 bg-black"></div>
                        <span>1 km</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Feature Details Panel */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Selected Site
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedFeature ? (
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-medium">{selectedFeature.name}</h3>
                        <Badge 
                          variant={selectedFeature.type === 'illegal' ? 'destructive' : 'secondary'}
                          className="mt-1"
                        >
                          {selectedFeature.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Area:</span>
                          <span>{selectedFeature.area} hectares</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Depth:</span>
                          <span>{selectedFeature.depth}m</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Last Update:</span>
                          <span>{selectedFeature.lastUpdate}</span>
                        </div>
                      </div>

                      <Button 
                        size="sm" 
                        className="w-full"
                        onClick={() => handleFeatureClick(selectedFeature)}
                      >
                        Center on Map
                      </Button>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">Click on a mining site to view details</p>
                  )}
                </CardContent>
              </Card>

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
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="layers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Layer Controls
              </CardTitle>
              <CardDescription>Toggle visibility of different map layers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mountain className="h-4 w-4 text-green-600" />
                    <span>Mining Areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setShowLayers(prev => ({ ...prev, mining: !prev.mining }))}
                    >
                      {showLayers.mining ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span>Violation Areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setShowLayers(prev => ({ ...prev, illegal: !prev.illegal }))}
                    >
                      {showLayers.illegal ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>Boundaries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setShowLayers(prev => ({ ...prev, boundaries: !prev.boundaries }))}
                    >
                      {showLayers.boundaries ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {miningAreas.map((area) => (
              <Card key={area.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{area.name}</CardTitle>
                    <Badge variant={area.type === 'illegal' ? 'destructive' : 'secondary'}>
                      {area.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Area:</span>
                      <span>{area.area} hectares</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Depth:</span>
                      <span>{area.depth}m</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Volume:</span>
                      <span>{(area.area * area.depth * 100).toLocaleString()} m³</span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full mt-3"
                    onClick={() => handleFeatureClick(area)}
                  >
                    View on Map
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}