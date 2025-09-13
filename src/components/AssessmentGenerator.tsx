import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Brain, 
  Target,
  Clock,
  Award,
  Settings,
  Zap,
  FileText,
  CheckCircle,
  Play
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Document {
  id: string;
  name: string;
  type: string;
  keyPoints: number;
  topics: string[];
}

interface GeneratedAssessment {
  id: string;
  title: string;
  type: 'quiz' | 'test' | 'practice';
  questions: number;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: number;
  topics: string[];
  createdAt: Date;
}

export const AssessmentGenerator = () => {
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);
  const [assessmentType, setAssessmentType] = useState<'quiz' | 'test' | 'practice'>('quiz');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [questionCount, setQuestionCount] = useState([10]);
  const [includeTypes, setIncludeTypes] = useState({
    multipleChoice: true,
    shortAnswer: false,
    essay: false,
    truefalse: true
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAssessments, setGeneratedAssessments] = useState<GeneratedAssessment[]>([
    {
      id: '1',
      title: 'Machine Learning Fundamentals Quiz',
      type: 'quiz',
      questions: 15,
      difficulty: 'medium',
      estimatedTime: 20,
      topics: ['Neural Networks', 'Supervised Learning', 'Data Preprocessing'],
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000)
    },
    {
      id: '2',
      title: 'Database Design Comprehensive Test',
      type: 'test',
      questions: 25,
      difficulty: 'hard',
      estimatedTime: 45,
      topics: ['Normalization', 'ER Models', 'Indexing', 'Query Optimization'],
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000)
    }
  ]);

  const { toast } = useToast();

  const availableDocuments: Document[] = [
    {
      id: '1',
      name: 'Machine Learning Fundamentals.pdf',
      type: 'PDF',
      keyPoints: 47,
      topics: ['Neural Networks', 'Supervised Learning', 'Data Preprocessing']
    },
    {
      id: '2',
      name: 'Database Design Principles.docx',
      type: 'DOCX', 
      keyPoints: 32,
      topics: ['Normalization', 'ER Models', 'Indexing']
    },
    {
      id: '3',
      name: 'Linear Algebra Notes.pdf',
      type: 'PDF',
      keyPoints: 38,
      topics: ['Matrices', 'Vectors', 'Eigenvalues']
    },
    {
      id: '4',
      name: 'Data Structures Guide.pdf',
      type: 'PDF',
      keyPoints: 41,
      topics: ['Arrays', 'Trees', 'Graphs', 'Sorting']
    }
  ];

  const handleDocumentToggle = (documentId: string) => {
    setSelectedDocuments(prev => 
      prev.includes(documentId) 
        ? prev.filter(id => id !== documentId)
        : [...prev, documentId]
    );
  };

  const handleGenerateAssessment = async () => {
    if (selectedDocuments.length === 0) {
      toast({
        title: "No Documents Selected",
        description: "Please select at least one document to generate an assessment.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    // Simulate AI generation
    setTimeout(() => {
      const selectedDocs = availableDocuments.filter(doc => selectedDocuments.includes(doc.id));
      const allTopics = selectedDocs.flatMap(doc => doc.topics);
      
      const newAssessment: GeneratedAssessment = {
        id: Date.now().toString(),
        title: `${selectedDocs[0]?.name.split('.')[0]} ${assessmentType.charAt(0).toUpperCase() + assessmentType.slice(1)}`,
        type: assessmentType,
        questions: questionCount[0],
        difficulty,
        estimatedTime: Math.ceil(questionCount[0] * (difficulty === 'easy' ? 1 : difficulty === 'medium' ? 1.5 : 2)),
        topics: allTopics,
        createdAt: new Date()
      };

      setGeneratedAssessments(prev => [newAssessment, ...prev]);
      setIsGenerating(false);

      toast({
        title: "Assessment Generated!",
        description: `Created ${questionCount[0]} questions from selected documents.`,
      });
    }, 3000);
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'easy': return 'bg-study-green text-study-green';
      case 'medium': return 'bg-accent-orange text-accent-orange';
      case 'hard': return 'bg-destructive text-destructive';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'quiz': return <Target className="h-4 w-4" />;
      case 'test': return <Award className="h-4 w-4" />;
      case 'practice': return <Brain className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Assessment Generator */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-accent-purple" />
            <span>AI Assessment Generator</span>
          </CardTitle>
          <CardDescription>
            Create personalized quizzes and tests from your study materials using AI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Document Selection */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Select Source Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {availableDocuments.map(doc => (
                <div key={doc.id} className="border border-border rounded-lg p-3 transition-academic hover:border-primary/50">
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      checked={selectedDocuments.includes(doc.id)}
                      onCheckedChange={() => handleDocumentToggle(doc.id)}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium truncate">{doc.name}</p>
                        <Badge variant="outline">{doc.type}</Badge>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-muted-foreground">{doc.keyPoints} key points</p>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {doc.topics.slice(0, 2).map(topic => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                        {doc.topics.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{doc.topics.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment Configuration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Assessment Type</label>
                <Select value={assessmentType} onValueChange={(value: any) => setAssessmentType(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quiz">Quick Quiz (10-15 questions)</SelectItem>
                    <SelectItem value="test">Comprehensive Test (20-30 questions)</SelectItem>
                    <SelectItem value="practice">Practice Session (5-10 questions)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Difficulty Level</label>
                <Select value={difficulty} onValueChange={(value: any) => setDifficulty(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy - Basic concepts</SelectItem>
                    <SelectItem value="medium">Medium - Applied knowledge</SelectItem>
                    <SelectItem value="hard">Hard - Complex analysis</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Number of Questions: {questionCount[0]}</label>
                <Slider 
                  value={questionCount}
                  onValueChange={setQuestionCount}
                  min={5}
                  max={50}
                  step={1}
                  className="py-2"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Question Types</h3>
              <div className="space-y-3">
                {Object.entries(includeTypes).map(([type, checked]) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox 
                      checked={checked}
                      onCheckedChange={(checked) => 
                        setIncludeTypes(prev => ({ ...prev, [type]: !!checked }))
                      }
                    />
                    <label className="text-sm">
                      {type === 'multipleChoice' && 'Multiple Choice'}
                      {type === 'shortAnswer' && 'Short Answer'}
                      {type === 'essay' && 'Essay Questions'}
                      {type === 'truefalse' && 'True/False'}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <Button 
            onClick={handleGenerateAssessment}
            disabled={isGenerating || selectedDocuments.length === 0}
            className="w-full"
            variant="hero"
          >
            {isGenerating ? (
              <>
                <Settings className="h-4 w-4 mr-2 animate-spin" />
                Generating Assessment...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4 mr-2" />
                Generate Assessment
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Generated Assessments */}
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Generated Assessments</CardTitle>
              <CardDescription>Your AI-created quizzes and tests</CardDescription>
            </div>
            <Badge variant="outline" className="text-primary border-primary">
              {generatedAssessments.length} assessments
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {generatedAssessments.length === 0 ? (
              <div className="text-center py-8">
                <Brain className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">No assessments generated yet</p>
              </div>
            ) : (
              generatedAssessments.map(assessment => (
                <div key={assessment.id} className="border border-border rounded-lg p-4 transition-academic hover:shadow-card">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(assessment.type)}
                        <h3 className="font-medium">{assessment.title}</h3>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline" className={`${getDifficultyColor(assessment.difficulty)} bg-opacity-20`}>
                          {assessment.difficulty}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {assessment.questions} questions
                        </span>
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          ~{assessment.estimatedTime} min
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {assessment.topics.map(topic => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>

                      <p className="text-xs text-muted-foreground">
                        Created {assessment.createdAt.toLocaleDateString()} at {assessment.createdAt.toLocaleTimeString()}
                      </p>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="success">
                        <Play className="h-4 w-4 mr-1" />
                        Start
                      </Button>
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4 mr-1" />
                        Preview
                      </Button>
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