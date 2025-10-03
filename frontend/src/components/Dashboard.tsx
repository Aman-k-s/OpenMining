import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { 
  Mountain, 
  AlertTriangle, 
  TrendingUp, 
  MapPin, 
  Layers, 
  Calendar,
  Activity,
  BarChart3
} from 'lucide-react';
// Removed recharts dependency to avoid build errors

interface DashboardProps {
  analysisData: any;
}

export function Dashboard({ analysisData }: DashboardProps) {
  // Mock trend data
  const trendData = [
    { month: 'Jan', authorized: 320, illegal: 45 },
    { month: 'Feb', authorized: 340, illegal: 52 },
    { month: 'Mar', authorized: 355, illegal: 48 },
    { month: 'Apr', authorized: 370, illegal: 61 },
    { month: 'May', authorized: 380, illegal: 69 },
    { month: 'Jun', authorized: 380, illegal: 70 }
  ];

  const volumeData = [
    { month: 'Jan', volume: 5200 },
    { month: 'Feb', volume: 5800 },
    { month: 'Mar', volume: 6100 },
    { month: 'Apr', volume: 6400 },
    { month: 'May', volume: 6700 },
    { month: 'Jun', volume: 6890 }
  ];

  if (!analysisData) {
    return (
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const complianceRate = ((analysisData.authorizedArea / analysisData.totalMiningArea) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Alert for illegal mining */}
      {analysisData.illegalArea > 0 && (
        <Alert className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Critical:</strong> {analysisData.illegalArea} hectares of unauthorized mining detected outside permitted boundaries.
          </AlertDescription>
        </Alert>
      )}

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Mining Area</CardTitle>
            <Mountain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analysisData.totalMiningArea} ha</div>
            <p className="text-xs text-muted-foreground">
              {analysisData.illegalArea > 0 ? '+' : ''}{analysisData.illegalArea} ha from last analysis
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{complianceRate}%</div>
            <Progress value={parseFloat(complianceRate)} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estimated Volume</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analysisData.estimatedVolume.toLocaleString()} m³</div>
            <p className="text-xs text-muted-foreground">
              Avg depth: {analysisData.estimatedDepth}m
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Assessment</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Badge variant={analysisData.riskLevel === 'High' ? 'destructive' : 'secondary'} className="text-sm">
              {analysisData.riskLevel} Risk
            </Badge>
            <p className="text-xs text-muted-foreground mt-2">
              Last updated: {analysisData.lastAnalysisDate}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Mining Activity Trends</CardTitle>
            <CardDescription>Authorized vs Unauthorized mining over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-end justify-between gap-2 p-4 border rounded-lg bg-gray-50">
              {trendData.map((data, index) => (
                <div key={data.month} className="flex flex-col items-center gap-2 flex-1">
                  <div className="relative w-full h-48 flex flex-col justify-end">
                    <div 
                      className="w-full bg-green-500 rounded-t-sm"
                      style={{ height: `${(data.authorized / 400) * 100}%` }}
                      title={`Authorized: ${data.authorized} ha`}
                    ></div>
                    <div 
                      className="w-full bg-red-500 rounded-t-sm"
                      style={{ height: `${(data.illegal / 80) * 100}%` }}
                      title={`Unauthorized: ${data.illegal} ha`}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600">{data.month}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span>Authorized</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span>Unauthorized</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Volume Extraction</CardTitle>
            <CardDescription>Estimated mining volume over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-end justify-between gap-2 p-4 border rounded-lg bg-gray-50">
              {volumeData.map((data, index) => (
                <div key={data.month} className="flex flex-col items-center gap-2 flex-1">
                  <div className="relative w-full h-48 flex items-end">
                    <div 
                      className="w-full bg-blue-500 rounded-t-sm"
                      style={{ height: `${(data.volume / 7000) * 100}%` }}
                      title={`Volume: ${data.volume.toLocaleString()} m³`}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600">{data.month}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span>Volume (m³)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Boundary Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Within Boundary:</span>
              <span className="font-medium text-green-600">{analysisData.authorizedArea} ha</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Outside Boundary:</span>
              <span className="font-medium text-red-600">{analysisData.illegalArea} ha</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="text-sm font-medium">Total Area:</span>
              <span className="font-bold">{analysisData.totalMiningArea} ha</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-4 w-4" />
              Depth Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Average Depth:</span>
              <span className="font-medium">{analysisData.estimatedDepth} m</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Max Depth:</span>
              <span className="font-medium">{(analysisData.estimatedDepth * 1.8).toFixed(1)} m</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="text-sm font-medium">Est. Volume:</span>
              <span className="font-bold">{analysisData.estimatedVolume.toLocaleString()} m³</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Last Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Date:</span>
              <span className="font-medium">{analysisData.lastAnalysisDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Data Source:</span>
              <span className="font-medium">Satellite EO/SAR</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="text-sm font-medium">Status:</span>
              <Badge variant="secondary">Processed</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}