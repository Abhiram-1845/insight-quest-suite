import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileText, 
  File, 
  CheckCircle, 
  Clock,
  Brain,
  Download,
  Eye,
  Trash2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProcessedDocument {
  id: string;
  name: string;
  size: string;
  type: string;
  status: 'processing' | 'completed' | 'error';
  progress: number;
  insights: string[];
  keyPoints: number;
  uploadedAt: Date;
}

export const DocumentProcessor = () => {
  const [documents, setDocuments] = useState<ProcessedDocument[]>([
    {
      id: '1',
      name: 'Machine Learning Fundamentals.pdf',
      size: '2.3 MB',
      type: 'PDF',
      status: 'completed',
      progress: 100,
      insights: ['Neural Networks', 'Supervised Learning', 'Data Preprocessing'],
      keyPoints: 47,
      uploadedAt: new Date(Date.now() - 2 * 60 * 60 * 1000)
    },
    {
      id: '2', 
      name: 'Database Design Principles.docx',
      size: '1.8 MB',
      type: 'DOCX',
      status: 'completed',
      progress: 100,
      insights: ['Normalization', 'ER Models', 'Indexing'],
      keyPoints: 32,
      uploadedAt: new Date(Date.now() - 5 * 60 * 60 * 1000)
    },
    {
      id: '3',
      name: 'Linear Algebra Notes.pdf',
      size: '3.1 MB', 
      type: 'PDF',
      status: 'processing',
      progress: 65,
      insights: [],
      keyPoints: 0,
      uploadedAt: new Date(Date.now() - 10 * 60 * 1000)
    }
  ]);
  
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    
    for (const file of files) {
      const newDocument: ProcessedDocument = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(1) + ' MB',
        type: file.name.split('.').pop()?.toUpperCase() || 'UNKNOWN',
        status: 'processing',
        progress: 0,
        insights: [],
        keyPoints: 0,
        uploadedAt: new Date()
      };

      setDocuments(prev => [...prev, newDocument]);

      // Simulate processing
      const progressInterval = setInterval(() => {
        setDocuments(prev => prev.map(doc => {
          if (doc.id === newDocument.id && doc.progress < 100) {
            const newProgress = Math.min(doc.progress + Math.random() * 15, 100);
            if (newProgress >= 100) {
              clearInterval(progressInterval);
              return {
                ...doc,
                progress: 100,
                status: 'completed' as const,
                insights: ['Key Concepts', 'Important Formulas', 'Practice Problems'],
                keyPoints: Math.floor(Math.random() * 50) + 20
              };
            }
            return { ...doc, progress: newProgress };
          }
          return doc;
        }));
      }, 500);
    }

    setIsUploading(false);
    toast({
      title: "Upload Started",
      description: `Processing ${files.length} document(s)...`,
    });
  };

  const deleteDocument = (id: string) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
    toast({
      title: "Document Deleted",
      description: "Document removed from your library.",
    });
  };

  const getStatusIcon = (status: ProcessedDocument['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-study-green" />;
      case 'processing':
        return <Clock className="h-5 w-5 text-accent-orange" />;
      case 'error':
        return <File className="h-5 w-5 text-destructive" />;
      default:
        return <File className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getFileIcon = (type: string) => {
    return <FileText className="h-8 w-8 text-primary" />;
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Upload className="h-6 w-6 text-primary" />
            <span>Document Upload & Processing</span>
          </CardTitle>
          <CardDescription>
            Upload your study materials for AI-powered analysis and key insight extraction
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center transition-academic hover:border-primary/50">
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">Upload Study Documents</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Drag and drop files here, or click to select
              </p>
              <input
                type="file"
                multiple
                accept=".pdf,.docx,.pptx,.txt"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
                disabled={isUploading}
              />
              <label htmlFor="file-upload">
                <Button 
                  variant="outline" 
                  className="cursor-pointer"
                  disabled={isUploading}
                >
                  {isUploading ? (
                    <>
                      <Clock className="h-4 w-4 mr-2" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4 mr-2" />
                      Choose Files
                    </>
                  )}
                </Button>
              </label>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Supported formats: PDF, DOCX, PPTX, TXT • Max size: 20MB per file
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Document Library */}
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Document Library</CardTitle>
              <CardDescription>
                Your processed documents with AI-generated insights
              </CardDescription>
            </div>
            <Badge variant="outline" className="text-primary border-primary">
              {documents.length} documents
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documents.length === 0 ? (
              <div className="text-center py-8">
                <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">No documents uploaded yet</p>
              </div>
            ) : (
              documents.map(doc => (
                <div key={doc.id} className="border border-border rounded-lg p-4 transition-academic hover:shadow-card">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {getFileIcon(doc.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-sm font-medium truncate">{doc.name}</h3>
                          {getStatusIcon(doc.status)}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{doc.type}</Badge>
                          <Badge variant="secondary">{doc.size}</Badge>
                        </div>
                      </div>

                      {doc.status === 'processing' && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Processing document...</span>
                            <span>{Math.round(doc.progress)}%</span>
                          </div>
                          <Progress value={doc.progress} className="h-2" />
                        </div>
                      )}

                      {doc.status === 'completed' && (
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-sm">
                              <span className="text-muted-foreground">Key Points:</span>
                              <span className="ml-2 font-medium text-primary">{doc.keyPoints}</span>
                            </div>
                            <div className="text-sm">
                              <span className="text-muted-foreground">Uploaded:</span>
                              <span className="ml-2">{doc.uploadedAt.toLocaleTimeString()}</span>
                            </div>
                          </div>

                          {doc.insights.length > 0 && (
                            <div className="space-y-2">
                              <p className="text-sm text-muted-foreground">AI-Generated Insights:</p>
                              <div className="flex flex-wrap gap-2">
                                {doc.insights.map((insight, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs">
                                    <Brain className="h-3 w-3 mr-1" />
                                    {insight}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-1" />
                              Export
                            </Button>
                            <Button size="sm" variant="outline" className="text-primary">
                              <Brain className="h-4 w-4 mr-1" />
                              Generate Quiz
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="text-destructive hover:text-destructive"
                              onClick={() => deleteDocument(doc.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};