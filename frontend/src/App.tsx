import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Alert, AlertDescription } from './components/ui/alert';
import { Mountain, Map, Upload, FileText, AlertTriangle, Activity } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { BoundaryUpload } from './components/DataUpload'; // updated import
import { InteractiveMap } from './components/InteractiveMap';
import { Visualization3D } from './components/Visualization3D';
import { ReportGenerator } from './components/ReportGenerator';
import { BoundaryManager } from './components/BoundaryManager';
import api from './lib/api';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [analysisData, setAnalysisData] = useState<any>(null);
  const [illegalMiningDetected, setIllegalMiningDetected] = useState(false);
  const [regions, setRegions] = useState<any[] | null>(null);

  // Mock analysis results
  const mockAnalysisResults = {
    totalMiningArea: 450.2,
    authorizedArea: 380.5,
    illegalArea: 69.7,
    estimatedDepth: 15.3,
    estimatedVolume: 6890.4,
    lastAnalysisDate: '2024-12-28',
    riskLevel: 'High'
  };

  useEffect(() => {
    // Fetch regions and then report for the first region
    let mounted = true;
    api
      .listRegions()
      .then((rs: any[]) => {
        if (!mounted) return;
        setRegions(rs);
        const firstRegion = rs && rs.length ? rs[0] : null;
        if (firstRegion && firstRegion.id) {
          return api.getRegionReport(firstRegion.id).then((r: any) => {
            if (!mounted) return;
            // map backend report structure to analysisData shape used by Dashboard
            const rep = r.report && r.report[0] ? r.report[0] : null;
            if (rep) {
              const mapped = {
                totalMiningArea: rep.area_km2 ? +(rep.area_km2 * 100).toFixed(2) : mockAnalysisResults.totalMiningArea,
                authorizedArea: rep.area_km2 ? +(rep.area_km2 * 100 * 0.9).toFixed(2) : mockAnalysisResults.authorizedArea,
                illegalArea: rep.area_km2 ? +(rep.area_km2 * 100 * 0.1).toFixed(2) : mockAnalysisResults.illegalArea,
                estimatedDepth: rep.dem_mean ? +rep.dem_mean.toFixed(1) : mockAnalysisResults.estimatedDepth,
                estimatedVolume: rep.volume_m3 ? +rep.volume_m3 : mockAnalysisResults.estimatedVolume,
                lastAnalysisDate: new Date().toISOString().split('T')[0],
                riskLevel: 'Medium',
              };
              setAnalysisData(mapped);
              setIllegalMiningDetected(mapped.illegalArea > 0);
            }
          });
        }
      })
      .catch((e) => {
        console.warn('Failed loading regions:', e.message || e);
        // fallback to mock
        setAnalysisData(mockAnalysisResults);
        setIllegalMiningDetected(mockAnalysisResults.illegalArea > 0);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Mountain className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-semibold text-gray-900">TerraGuard</h1>
              <p className="text-sm text-gray-500">Mining Impact & Compliance Monitor</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="flex w-full space-x-2 overflow-x-auto">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="boundaries" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Boundaries
            </TabsTrigger>
            {/* <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Data Upload
            </TabsTrigger> */}
            <TabsTrigger value="map" className="flex items-center gap-2">
              <Map className="h-4 w-4" />
              Interactive Map
            </TabsTrigger>
            <TabsTrigger value="3d" className="flex items-center gap-2">
              <Mountain className="h-4 w-4" />
              3D Visualization
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <Dashboard analysisData={analysisData} />
          </TabsContent>

          {/* <TabsContent value="upload">
            {/* Replaced DataUpload with BoundaryUpload */}
            {/* <BoundaryUpload onDataUploaded={setAnalysisData} />
          </TabsContent> */}

          <TabsContent value="map">
            <InteractiveMap analysisData={analysisData} />
          </TabsContent>

          <TabsContent value="3d">
            <Visualization3D analysisData={analysisData} />
          </TabsContent>

          <TabsContent value="boundaries">
            <BoundaryManager />
          </TabsContent>

          <TabsContent value="reports">
            <ReportGenerator analysisData={analysisData} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default App;
