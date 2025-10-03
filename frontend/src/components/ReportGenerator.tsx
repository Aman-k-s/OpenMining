import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  FileText, 
  Download, 
  Send, 
  Calendar, 
  MapPin, 
  AlertTriangle,
  CheckCircle,
  Clock,
  User,
  Building,
  Printer,
  Mail
} from 'lucide-react';

interface ReportGeneratorProps {
  analysisData: any;
}

export function ReportGenerator({ analysisData }: ReportGeneratorProps) {
  const [reportConfig, setReportConfig] = useState({
    title: 'Mining Activity Compliance Report',
    period: 'monthly',
    includeImages: true,
    include3D: true,
    includeRecommendations: true,
    recipientName: '',
    recipientEmail: '',
    recipientOrganization: 'State Mining Department'
  });

  const [generatedReports, setGeneratedReports] = useState([
    {
      id: 1,
      title: 'Monthly Compliance Report - December 2024',
      type: 'Compliance',
      generatedDate: '2024-12-28',
      status: 'Sent',
      recipient: 'State Mining Department',
      violations: 4,
      size: '2.4 MB'
    },
    {
      id: 2,
      title: 'Violation Alert Report - Zone C',
      type: 'Alert',
      generatedDate: '2024-12-20',
      status: 'Pending',
      recipient: 'District Collector',
      violations: 1,
      size: '1.8 MB'
    },
    {
      id: 3,
      title: 'Environmental Impact Assessment',
      type: 'Environmental',
      generatedDate: '2024-12-15',
      status: 'Draft',
      recipient: 'Environmental Board',
      violations: 0,
      size: '3.2 MB'
    }
  ]);

  const generateReport = () => {
    const newReport = {
      id: generatedReports.length + 1,
      title: reportConfig.title,
      type: 'Custom',
      generatedDate: new Date().toISOString().split('T')[0],
      status: 'Generated',
      recipient: reportConfig.recipientOrganization,
      violations: analysisData?.illegalArea > 0 ? Math.ceil(analysisData.illegalArea / 20) : 0,
      size: `${(Math.random() * 2 + 1).toFixed(1)} MB`
    };

    setGeneratedReports([newReport, ...generatedReports]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Sent': return 'default';
      case 'Pending': return 'secondary';
      case 'Draft': return 'outline';
      case 'Generated': return 'secondary';
      default: return 'outline';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Compliance': return 'default';
      case 'Alert': return 'destructive';
      case 'Environmental': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="generate" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="generate">Generate Report</TabsTrigger>
          <TabsTrigger value="history">Report History</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="generate" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Report Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Report Configuration
                </CardTitle>
                <CardDescription>
                  Configure report settings and content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="report-title">Report Title</Label>
                  <Input
                    id="report-title"
                    value={reportConfig.title}
                    onChange={(e) => setReportConfig({ ...reportConfig, title: e.target.value })}
                    placeholder="Enter report title"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="report-period">Reporting Period</Label>
                  <select
                    id="report-period"
                    value={reportConfig.period}
                    onChange={(e) => setReportConfig({ ...reportConfig, period: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="annual">Annual</option>
                    <option value="custom">Custom Range</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <Label>Include in Report</Label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={reportConfig.includeImages}
                        onChange={(e) => setReportConfig({ ...reportConfig, includeImages: e.target.checked })}
                      />
                      <span className="text-sm">Satellite imagery and maps</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={reportConfig.include3D}
                        onChange={(e) => setReportConfig({ ...reportConfig, include3D: e.target.checked })}
                      />
                      <span className="text-sm">3D visualizations</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={reportConfig.includeRecommendations}
                        onChange={(e) => setReportConfig({ ...reportConfig, includeRecommendations: e.target.checked })}
                      />
                      <span className="text-sm">Recommendations and actions</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recipient-org">Recipient Organization</Label>
                  <select
                    id="recipient-org"
                    value={reportConfig.recipientOrganization}
                    onChange={(e) => setReportConfig({ ...reportConfig, recipientOrganization: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="State Mining Department">State Mining Department</option>
                    <option value="District Collector">District Collector</option>
                    <option value="Environmental Board">Environmental Board</option>
                    <option value="Ministry of Mines">Ministry of Mines</option>
                    <option value="Forest Department">Forest Department</option>
                  </select>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="recipient-name">Recipient Name</Label>
                    <Input
                      id="recipient-name"
                      value={reportConfig.recipientName}
                      onChange={(e) => setReportConfig({ ...reportConfig, recipientName: e.target.value })}
                      placeholder="Officer name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="recipient-email">Email Address</Label>
                    <Input
                      id="recipient-email"
                      type="email"
                      value={reportConfig.recipientEmail}
                      onChange={(e) => setReportConfig({ ...reportConfig, recipientEmail: e.target.value })}
                      placeholder="official@domain.gov.in"
                    />
                  </div>
                </div>

                <Button onClick={generateReport} className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
              </CardContent>
            </Card>

            {/* Report Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Report Preview
                </CardTitle>
                <CardDescription>
                  Preview of the generated report
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Report Header Preview */}
                  <div className="p-4 border rounded-lg bg-gray-50">
                    <h3 className="font-bold text-lg">{reportConfig.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date().toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {reportConfig.recipientOrganization}
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics Preview */}
                  {analysisData && (
                    <div className="space-y-3">
                      <h4 className="font-medium">Executive Summary</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 border rounded">
                          <div className="text-lg font-bold">{analysisData.totalMiningArea} ha</div>
                          <div className="text-xs text-gray-600">Total Mining Area</div>
                        </div>
                        <div className="p-3 border rounded">
                          <div className="text-lg font-bold text-red-600">{analysisData.illegalArea} ha</div>
                          <div className="text-xs text-gray-600">Violations</div>
                        </div>
                      </div>
                      
                      {analysisData.illegalArea > 0 && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-600" />
                            <span className="text-sm font-medium text-red-800">
                              Critical violations detected requiring immediate action
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Content Sections */}
                  <div className="space-y-2">
                    <h4 className="font-medium">Report Sections</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>Mining Activity Overview</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>Boundary Compliance Analysis</span>
                      </div>
                      {reportConfig.includeImages && (
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>Satellite Imagery & Maps</span>
                        </div>
                      )}
                      {reportConfig.include3D && (
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>3D Volume Analysis</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>Environmental Impact Assessment</span>
                      </div>
                      {reportConfig.includeRecommendations && (
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>Recommendations & Action Items</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.print()}
                    >
                      <Printer className="h-4 w-4 mr-2" />
                      Print
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => alert('PDF download would start here')}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      PDF
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => {
                        if (reportConfig.recipientEmail) {
                          alert(`Report would be sent to ${reportConfig.recipientEmail}`);
                        } else {
                          alert('Please enter recipient email address');
                        }
                      }}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Report History
              </CardTitle>
              <CardDescription>
                Previously generated reports and their status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {generatedReports.map((report) => (
                  <div key={report.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-medium">{report.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant={getTypeColor(report.type)}>{report.type}</Badge>
                          <Badge variant={getStatusColor(report.status)}>{report.status}</Badge>
                          {report.violations > 0 && (
                            <Badge variant="destructive" className="flex items-center gap-1">
                              <AlertTriangle className="h-3 w-3" />
                              {report.violations} violations
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <div>{report.generatedDate}</div>
                        <div>{report.size}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Building className="h-4 w-4" />
                        <span>{report.recipient}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => alert(`Downloading ${report.title}`)}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => alert(`Email sent to ${report.recipient}`)}
                        >
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Standard Templates</CardTitle>
                <CardDescription>Pre-configured report templates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  {
                    name: 'Monthly Compliance Report',
                    description: 'Standard compliance report for state authorities',
                    frequency: 'Monthly'
                  },
                  {
                    name: 'Violation Alert Report',
                    description: 'Immediate alert for boundary violations',
                    frequency: 'As needed'
                  },
                  {
                    name: 'Environmental Impact Report',
                    description: 'Environmental assessment and impact analysis',
                    frequency: 'Quarterly'
                  },
                  {
                    name: 'Volume Analysis Report',
                    description: 'Detailed volume calculation and trends',
                    frequency: 'Monthly'
                  }
                ].map((template, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{template.name}</h4>
                        <p className="text-sm text-gray-600">{template.description}</p>
                        <Badge variant="outline" className="mt-1 text-xs">{template.frequency}</Badge>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => {
                          setReportConfig(prev => ({
                            ...prev,
                            title: template.name,
                            period: template.frequency.toLowerCase()
                          }));
                          alert(`Template "${template.name}" loaded`);
                        }}
                      >
                        Use Template
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Templates</CardTitle>
                <CardDescription>Create and manage custom report templates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => alert('Template creation dialog would open here')}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Create New Template
                  </Button>
                  
                  <div className="text-center text-gray-500 py-8">
                    <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>No custom templates created yet</p>
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