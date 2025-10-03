import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Upload, 
  Download, 
  MapPin, 
  AlertTriangle, 
  CheckCircle, 
  Edit,
  Trash2,
  Plus,
  FileText,
  Map
} from 'lucide-react';

export function BoundaryManager() {
  const [boundaries, setBoundaries] = useState([
    {
      id: 1,
      name: 'Mining Lease ML-001',
      type: 'Authorized',
      area: 380.5,
      coordinates: '23.2599°N, 77.4126°E',
      status: 'Active',
      uploadDate: '2024-01-15',
      format: 'Shapefile',
      violations: 0
    },
    {
      id: 2,
      name: 'Environmental Buffer Zone',
      type: 'Restricted',
      area: 150.0,
      coordinates: '23.2650°N, 77.4200°E',
      status: 'Active',
      uploadDate: '2024-01-20',
      format: 'KML',
      violations: 3
    },
    {
      id: 3,
      name: 'District Boundary - Sector 7',
      type: 'Administrative',
      area: 2500.0,
      coordinates: '23.2700°N, 77.4300°E',
      status: 'Active',
      uploadDate: '2024-02-01',
      format: 'GeoJSON',
      violations: 1
    }
  ]);

  const [newBoundary, setNewBoundary] = useState({
    name: '',
    type: 'Authorized',
    file: null
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setNewBoundary({ ...newBoundary, file });
    }
  };

  const addBoundary = () => {
    if (newBoundary.name && newBoundary.file) {
      const newBoundaryData = {
        id: boundaries.length + 1,
        name: newBoundary.name,
        type: newBoundary.type,
        area: Math.random() * 1000 + 100,
        coordinates: `${(23.2 + Math.random() * 0.1).toFixed(4)}°N, ${(77.4 + Math.random() * 0.1).toFixed(4)}°E`,
        status: 'Active',
        uploadDate: new Date().toISOString().split('T')[0],
        format: newBoundary.file.name.includes('.shp') ? 'Shapefile' : 
                 newBoundary.file.name.includes('.kml') ? 'KML' : 'GeoJSON',
        violations: 0
      };
      
      setBoundaries([...boundaries, newBoundaryData]);
      setNewBoundary({ name: '', type: 'Authorized', file: null });
    }
  };

  const deleteBoundary = (id: number) => {
    setBoundaries(boundaries.filter(b => b.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'secondary';
      case 'Inactive': return 'outline';
      default: return 'secondary';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Authorized': return 'default';
      case 'Restricted': return 'destructive';
      case 'Administrative': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with alerts */}
      <div className="space-y-4">
        <Alert className="border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            4 boundary violations detected across all mining zones. Immediate action required.
          </AlertDescription>
        </Alert>
      </div>

      <Tabs defaultValue="manage" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="manage">Manage Boundaries</TabsTrigger>
          <TabsTrigger value="upload">Upload New</TabsTrigger>
          <TabsTrigger value="analysis">Violation Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="manage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="h-5 w-5" />
                Boundary Management
              </CardTitle>
              <CardDescription>
                Manage mining lease boundaries, restricted zones, and administrative boundaries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {boundaries.map((boundary) => (
                  <div key={boundary.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-medium">{boundary.name}</h3>
                        <div className="flex items-center gap-2">
                          <Badge variant={getTypeColor(boundary.type)}>{boundary.type}</Badge>
                          <Badge variant={getStatusColor(boundary.status)}>{boundary.status}</Badge>
                          {boundary.violations > 0 && (
                            <Badge variant="destructive" className="flex items-center gap-1">
                              <AlertTriangle className="h-3 w-3" />
                              {boundary.violations} violations
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => deleteBoundary(boundary.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Area:</span>
                        <p className="font-medium">{boundary.area.toFixed(1)} ha</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Coordinates:</span>
                        <p className="font-medium text-xs">{boundary.coordinates}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Format:</span>
                        <p className="font-medium">{boundary.format}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Uploaded:</span>
                        <p className="font-medium">{boundary.uploadDate}</p>
                      </div>
                    </div>

                    {boundary.violations > 0 && (
                      <Alert className="border-red-200 bg-red-50">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        <AlertDescription className="text-red-800">
                          {boundary.violations} mining activities detected outside this boundary
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload New Boundary
              </CardTitle>
              <CardDescription>
                Upload boundary files in Shapefile, KML, or GeoJSON format
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="boundary-name">Boundary Name</Label>
                  <Input
                    id="boundary-name"
                    value={newBoundary.name}
                    onChange={(e) => setNewBoundary({ ...newBoundary, name: e.target.value })}
                    placeholder="Enter boundary name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="boundary-type">Boundary Type</Label>
                  <select
                    id="boundary-type"
                    value={newBoundary.type}
                    onChange={(e) => setNewBoundary({ ...newBoundary, type: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="Authorized">Authorized Mining Area</option>
                    <option value="Restricted">Restricted Zone</option>
                    <option value="Administrative">Administrative Boundary</option>
                  </select>
                </div>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <div className="space-y-2">
                  <Label htmlFor="boundary-file" className="text-lg font-medium cursor-pointer">
                    Select Boundary File
                  </Label>
                  <p className="text-sm text-gray-500">
                    Supported formats: .shp, .kml, .kmz, .geojson
                  </p>
                  <Input
                    id="boundary-file"
                    type="file"
                    accept=".shp,.kml,.kmz,.geojson"
                    onChange={handleFileUpload}
                    className="mt-4"
                  />
                </div>
              </div>

              {newBoundary.file && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-green-800 font-medium">File selected: {newBoundary.file.name}</span>
                  </div>
                </div>
              )}

              <Button
                onClick={addBoundary}
                disabled={!newBoundary.name || !newBoundary.file}
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Boundary
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>File Format Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <h4 className="font-medium">Shapefile (.shp)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Include .shx, .dbf files</li>
                    <li>• Coordinate system: WGS84</li>
                    <li>• Max size: 50MB</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">KML/KMZ (.kml/.kmz)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Google Earth compatible</li>
                    <li>• Include polygon features</li>
                    <li>• Max size: 25MB</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">GeoJSON (.geojson)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• RFC 7946 compliant</li>
                    <li>• UTF-8 encoding</li>
                    <li>• Max size: 10MB</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-4">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Boundary Violation Analysis
                </CardTitle>
                <CardDescription>
                  Detailed analysis of mining activities outside authorized boundaries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold text-red-600">4</div>
                      <div className="text-sm text-gray-600">Total Violations</div>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">69.7 ha</div>
                      <div className="text-sm text-gray-600">Illegal Mining Area</div>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">15.5%</div>
                      <div className="text-sm text-gray-600">Violation Rate</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Recent Violations</h4>
                    <div className="space-y-2">
                      {[
                        {
                          location: 'Zone C - East Sector',
                          area: '45.2 ha',
                          date: '2024-12-20',
                          severity: 'High'
                        },
                        {
                          location: 'Zone A - North Boundary',
                          area: '12.8 ha',
                          date: '2024-12-18',
                          severity: 'Medium'
                        },
                        {
                          location: 'Buffer Zone - South',
                          area: '8.5 ha',
                          date: '2024-12-15',
                          severity: 'Low'
                        }
                      ].map((violation, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{violation.location}</p>
                            <p className="text-sm text-gray-600">{violation.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{violation.area}</p>
                            <Badge variant={
                              violation.severity === 'High' ? 'destructive' :
                              violation.severity === 'Medium' ? 'secondary' : 'outline'
                            }>
                              {violation.severity}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-800">Immediate Action Required</p>
                      <p className="text-sm text-red-700">Stop mining activities in Zone C - East Sector (45.2 ha violation)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <MapPin className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-orange-800">Site Inspection</p>
                      <p className="text-sm text-orange-700">Schedule inspection for Zone A - North Boundary within 7 days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-800">Report Generation</p>
                      <p className="text-sm text-blue-700">Prepare violation report for district authorities</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}