import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription } from "./ui/alert";
import {
  Mountain,
  AlertTriangle,
  TrendingUp,
  MapPin,
  Layers,
  Calendar,
  Activity,
  BarChart3,
} from "lucide-react";
// Removed recharts dependency to avoid build errors

interface DashboardProps {
  analysisData: any;
}

export function Dashboard({ analysisData }: DashboardProps) {
  // Mock trend data
  const trendData = [
    { month: "Jan", authorized: 100, illegal: 20, predicted: false },
    { month: "Feb", authorized: 120, illegal: 25, predicted: false },
    { month: "Mar", authorized: 150, illegal: 30, predicted: false },
    { month: "Apr", authorized: 180, illegal: 35, predicted: false },
    { month: "May", authorized: 200, illegal: 40, predicted: false },
    { month: "Jun", authorized: 220, illegal: 45, predicted: false },
    { month: "Jul", authorized: 240, illegal: 50, predicted: true },
    { month: "Aug", authorized: 260, illegal: 55, predicted: true },
    { month: "Sep", authorized: 280, illegal: 60, predicted: true },
    { month: "Oct", authorized: 300, illegal: 65, predicted: true },
  ];

  const volumeData = [
    { month: "Jan", volume: 5200, predicted: false },
    { month: "Feb", volume: 5800, predicted: false },
    { month: "Mar", volume: 6100, predicted: false },
    { month: "Apr", volume: 6400, predicted: false },
    { month: "May", volume: 6700, predicted: false },
    { month: "Jun", volume: 6890, predicted: false },
    { month: "Jul", volume: 7100, predicted: true },
    { month: "Aug", volume: 7350, predicted: true },
    { month: "Sep", volume: 7600, predicted: true },
    { month: "Oct", volume: 7850, predicted: true },
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

  const complianceRate = (
    (analysisData.authorizedArea / analysisData.totalMiningArea) *
    100
  ).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Alert for illegal mining */}
      {analysisData.illegalArea > 0 && (
        <Alert className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Critical:</strong> {analysisData.illegalArea} hectares of
            illegal mining activity detected outside permitted boundaries.
          </AlertDescription>
        </Alert>
      )}

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Mining Area
            </CardTitle>
            <Mountain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analysisData.totalMiningArea} ha
            </div>
            <p className="text-xs text-muted-foreground">
              {analysisData.illegalArea > 0 ? "+" : ""}
              {analysisData.illegalArea} ha from last analysis
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Compliance Rate
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{complianceRate}%</div>
            <Progress value={parseFloat(complianceRate)} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Estimated Volume
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>

          <CardContent className="space-y-2">
            <div className="text-2xl font-bold">
              {analysisData.estimatedVolume.toLocaleString()} m³
            </div>

            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">
                Avg depth: {analysisData.estimatedDepth} m
              </p>
              <p className="text-xs text-muted-foreground">
                Max depth: {(analysisData.estimatedDepth * 1.8).toFixed(1)} m
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Environmental Risk Assessment
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Badge
              variant={
                analysisData.riskLevel === "High" ? "destructive" : "secondary"
              }
              className="text-sm"
            >
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
    <CardDescription>
      Authorized vs Unauthorized mining over time (including predictions)
    </CardDescription>
  </CardHeader>

  <CardContent>
    <div className="h-80 flex items-end justify-between gap-2 p-4 border rounded-lg bg-gray-50">
      {trendData.map((data) => {
        const totalMax = 500; // max total area to normalize heights
        const authorizedHeight = (data.authorized / totalMax) * 100;
        const illegalHeight = (data.illegal / totalMax) * 100;

        return (
          <div key={data.month} className="flex flex-col items-center gap-2 flex-1">
            <div className="relative w-full h-48 flex flex-col justify-end">
              {/* Unauthorized (bottom) */}
              <div
                className="w-full rounded-t-sm"
                style={{
                  height: `${illegalHeight}%`,
                  background: data.predicted
                    ? "repeating-linear-gradient(45deg, #f87171, #f87171 6px, #fecaca 6px, #fecaca 12px)" // red striped pattern
                    : "#ef4444", // solid red for actual
                }}
                title={`Unauthorized: ${data.illegal} ha`}
              ></div>
              {/* Authorized (top) */}
              <div
                className="w-full rounded-t-sm"
                style={{
                  height: `${authorizedHeight}%`,
                  background: data.predicted
                    ? "repeating-linear-gradient(45deg, #34d399, #34d399 6px, #bbf7d0 6px, #bbf7d0 12px)" // green striped pattern
                    : "#22c55e", // solid green for actual
                }}
                title={`Authorized: ${data.authorized} ha`}
              ></div>
            </div>
            <span className="text-xs text-gray-600">{data.month}</span>
          </div>
        );
      })}
    </div>

    {/* Legend */}
    <div className="flex justify-center gap-4 mt-4 text-sm">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-green-500 rounded"></div>
        <span>Authorized</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded"></div>
        <span>Unauthorized</span>
      </div>
      <div className="flex items-center gap-2">
        <div
          className="w-3 h-3 rounded"
          style={{
            background:
              "repeating-linear-gradient(45deg, #34d399, #34d399 6px, #bbf7d0 6px, #bbf7d0 12px)",
          }}
        ></div>
        <span>Predicted Authorized</span>
      </div>
      <div className="flex items-center gap-2">
        <div
          className="w-3 h-3 rounded"
          style={{
            background:
              "repeating-linear-gradient(45deg, #f87171, #f87171 6px, #fecaca 6px, #fecaca 12px)",
          }}
        ></div>
        <span>Predicted Unauthorized</span>
      </div>
    </div>
  </CardContent>
</Card>


        <Card>
          <CardHeader>
            <CardTitle>Volume Extraction</CardTitle>
            <CardDescription>
              Estimated mining volume over time (Actual vs Predicted)
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="h-80 flex items-end justify-between gap-2 p-4 border rounded-lg bg-gray-50">
              {volumeData.map((data) => (
                <div
                  key={data.month}
                  className="flex flex-col items-center gap-2 flex-1"
                >
                  <div className="relative w-full h-48 flex items-end">
                    <div
                      className="w-full rounded-t-sm"
                      style={{
                        height: `${(data.volume / 8000) * 100}%`,
                        background: data.predicted
                          ? "repeating-linear-gradient(45deg, #60a5fa, #60a5fa 6px, #bfdbfe 6px, #bfdbfe 12px)" // blue shades pattern
                          : "#3b82f6", // solid Tailwind blue
                      }}
                      title={`${
                        data.predicted ? "Predicted" : "Actual"
                      } Volume: ${data.volume.toLocaleString()} m³`}
                    />
                  </div>
                  <span className="text-xs text-gray-600">{data.month}</span>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span>Actual Volume</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded"
                  style={{
                    background:
                      "repeating-linear-gradient(45deg, #60a5fa, #60a5fa 6px, #bfdbfe 6px, #bfdbfe 12px)", // pattern for legend
                  }}
                ></div>
                <span>Predicted Volume</span>
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
              <span className="font-medium text-green-600">
                {analysisData.authorizedArea} ha
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Outside Boundary:</span>
              <span className="font-medium text-red-600">
                {analysisData.illegalArea} ha
              </span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="text-sm font-medium">Total Area:</span>
              <span className="font-bold">
                {analysisData.totalMiningArea} ha
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Layers className="h-4 w-4" />
      Carbon Impact & Credits
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-2">
    <div className="flex justify-between">
      <span className="text-sm text-gray-600">Estimated CO₂ Emissions:</span>
      <span className="font-medium">12,450 kg</span>
    </div>
    <div className="flex justify-between">
      <span className="text-sm text-gray-600">Suggested Carbon Credits:</span>
      <span className="font-medium">1,245 credits</span>
    </div>
    <p className="text-xs text-gray-500 mt-2">
      • Estimate CO₂ from deforestation/soil removal.<br />
      • Suggest carbon credits needed to offset.<br />
      • Adds policy + sustainability relevance.
    </p>
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
              <span className="font-medium">
                {analysisData.lastAnalysisDate}
              </span>
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
