import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Upload, 
  File, 
  Map, 
  CheckCircle, 
  AlertTriangle,
  Loader2
} from 'lucide-react';
import api from '../lib/api';

interface BoundaryUploadProps {
  onDataUploaded: (data: any) => void;
}

export function BoundaryUpload({ onDataUploaded }: BoundaryUploadProps) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>, fileType: string) => {
    const files = event.target.files;
    if (!files?.length) return;

    setIsProcessing(true);
    setUploadProgress(5);

    const fd = new FormData();
    fd.append('name', files[0].name.replace(/\.[^/.]+$/, ''));
    fd.append('file', files[0]);

    try {
      for (let i = 5; i <= 40; i += 10) {
        setUploadProgress(i);
        // small delay so progress is visible
        // eslint-disable-next-line no-await-in-loop
        await new Promise((r) => setTimeout(r, 160));
      }

      const resp = await api.uploadRegion(fd);
      setUploadProgress(70);

      const newFile = {
        name: files[0].name,
        type: fileType,
        size: files[0].size,
        uploadedAt: new Date().toISOString(),
        status: 'processed',
      };
      setUploadedFiles((prev) => [...prev, newFile]);

      // if server returned region info, fetch its report and forward mapped analysis to parent
      if (resp && resp.region && resp.region.id) {
        try {
          const rep = await api.getRegionReport(resp.region.id);
          setUploadProgress(95);
          const r = rep.report && rep.report[0] ? rep.report[0] : null;
          if (r) {
            const mapped = {
              totalMiningArea: r.area_km2 ? +(r.area_km2 * 100).toFixed(2) : undefined,
              authorizedArea: r.area_km2 ? +(r.area_km2 * 100 * 0.9).toFixed(2) : undefined,
              illegalArea: r.area_km2 ? +(r.area_km2 * 100 * 0.1).toFixed(2) : undefined,
              estimatedDepth: r.dem_mean ? +r.dem_mean.toFixed(1) : undefined,
              estimatedVolume: r.volume_m3 ? +r.volume_m3 : undefined,
              lastAnalysisDate: new Date().toISOString().split('T')[0],
              riskLevel: 'Medium',
            };
            onDataUploaded(mapped);
          }
        } catch (e) {
          console.warn('Failed to fetch report after upload', e);
        }
      }
    } catch (e: any) {
      console.error('Upload failed', e);
      alert('Upload failed: ' + (e.message || e));
    } finally {
      setIsProcessing(false);
      setUploadProgress(0);
    }
  };

  const supportedFormats = {
    boundaries: ['.shp', '.kml', '.kmz', '.geojson']
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Boundaries Upload
            </CardTitle>
            <CardDescription>
              Upload mining lease boundary files for automated analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="upload">Upload New</TabsTrigger>
              </TabsList>

              <TabsContent value="upload" className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                  <Map className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <div className="space-y-2">
                    <Label htmlFor="boundary-upload" className="text-lg font-medium cursor-pointer">
                      Upload Boundary Files
                    </Label>
                    <p className="text-sm text-gray-500">
                      Mining lease boundaries in Shapefile or KML format
                    </p>
                    <Input
                      id="boundary-upload"
                      type="file"
                      accept={supportedFormats.boundaries.join(',')}
                      onChange={(e) => handleFileUpload(e, 'boundary')}
                      className="mt-4"
                    />
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Supported formats: {supportedFormats.boundaries.join(', ')}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Processing Status */}
        {isProcessing && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                Processing Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress value={uploadProgress} className="w-full" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Analyzing boundary data...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    Processing may take several minutes depending on data size and resolution.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <File className="h-5 w-5" />
                Uploaded Files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Map className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-gray-500">
                          {file.type} • {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-green-600 font-medium">Processed</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Data Processing Info */}
        <Card>
          <CardHeader>
            <CardTitle>Processing Pipeline</CardTitle>
            <CardDescription>Automated analysis steps performed on uploaded data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-medium">Image Processing</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Atmospheric correction</li>
                  <li>• Band combination and enhancement</li>
                  <li>• Noise reduction and filtering</li>
                  <li>• Geometric correction</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Mining Detection</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Spectral analysis for excavated areas</li>
                  <li>• Change detection algorithms</li>
                  <li>• Boundary comparison analysis</li>
                  <li>• Volume estimation using Simpson's method</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
