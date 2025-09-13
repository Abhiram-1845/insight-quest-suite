import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Upload, 
  Brain, 
  TrendingUp, 
  FileText, 
  Award,
  Clock,
  Target,
  BarChart3,
  Lightbulb
} from "lucide-react";
import heroImage from "@/assets/study-hero.jpg";

export const StudyDashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">
            StudyForge
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered personalized learning with document processing, automated assessments, and intelligent progress tracking
          </p>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary-glow to-accent-teal p-8 text-primary-foreground shadow-elevated mb-8">
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  AI-Powered Learning
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Transform Your Study Experience
                </h2>
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  Upload documents, generate AI assessments, track progress with analytics, and receive personalized study recommendations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Upload className="h-5 w-5 mr-2" />
                    Upload First Document
                  </Button>
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    View Demo
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img 
                  src={heroImage} 
                  alt="StudyForge AI Learning Platform"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card transition-academic hover:shadow-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Documents Processed</CardTitle>
              <FileText className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">24</div>
              <p className="text-xs text-muted-foreground">
                +3 this week
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card transition-academic hover:shadow-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Study Sessions</CardTitle>
              <Clock className="h-4 w-4 text-study-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-study-green">156</div>
              <p className="text-xs text-muted-foreground">
                12.5 hours total
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card transition-academic hover:shadow-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assessments Completed</CardTitle>
              <Award className="h-4 w-4 text-accent-orange" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent-orange">89</div>
              <p className="text-xs text-muted-foreground">
                82% average score
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card transition-academic hover:shadow-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Learning Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-accent-teal" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent-teal">73%</div>
              <p className="text-xs text-muted-foreground">
                +8% this month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Action Cards */}
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary-glow to-accent-teal p-8 text-primary-foreground shadow-elevated">
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  AI-Powered Learning
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Transform Your Study Experience
                </h2>
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  Upload documents, generate AI assessments, track progress with analytics, and receive personalized study recommendations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Upload className="h-5 w-5 mr-2" />
                    Upload First Document
                  </Button>
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    View Demo
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="/src/assets/study-hero.jpg" 
                  alt="StudyForge AI Learning Platform"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Document Processing */}
          <Card className="shadow-card transition-academic hover:shadow-elevated">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Upload className="h-6 w-6 text-primary" />
                <CardTitle>Document Processing</CardTitle>
              </div>
              <CardDescription>
                Upload and analyze study materials with AI-powered extraction
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center transition-academic hover:border-primary/50">
                <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-4">
                  Drop files here or click to browse
                </p>
                <Button variant="outline" className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Documents
                </Button>
              </div>
              <div className="text-xs text-muted-foreground">
                Supports PDF, DOCX, PPTX, TXT files up to 20MB
              </div>
            </CardContent>
          </Card>

          {/* AI Assessment Generator */}
          <Card className="shadow-card transition-academic hover:shadow-elevated">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Brain className="h-6 w-6 text-accent-purple" />
                <CardTitle>AI Assessment Generator</CardTitle>
              </div>
              <CardDescription>
                Create personalized quizzes and tests from your materials
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Ready Documents:</span>
                  <Badge variant="secondary">8 available</Badge>
                </div>
                <Button className="w-full gradient-primary text-primary-foreground hover:opacity-90">
                  <Brain className="h-4 w-4 mr-2" />
                  Generate Assessment
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">
                    <Target className="h-4 w-4 mr-1" />
                    Quiz
                  </Button>
                  <Button variant="outline" size="sm">
                    <Award className="h-4 w-4 mr-1" />
                    Test
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Analytics */}
          <Card className="shadow-card transition-academic hover:shadow-elevated">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-6 w-6 text-accent-teal" />
                <CardTitle>Progress Analytics</CardTitle>
              </div>
              <CardDescription>
                Track your learning journey with detailed insights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Weekly Goal:</span>
                  <span className="text-study-green">6/8 hours</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <Button variant="outline" className="w-full">
                <BarChart3 className="h-4 w-4 mr-2" />
                View Detailed Analytics
              </Button>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="p-2 bg-muted rounded-lg">
                  <div className="text-lg font-semibold text-primary">94%</div>
                  <div className="text-xs text-muted-foreground">Retention</div>
                </div>
                <div className="p-2 bg-muted rounded-lg">
                  <div className="text-lg font-semibold text-study-green">3.2x</div>
                  <div className="text-xs text-muted-foreground">Speed Up</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Recommendations */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Lightbulb className="h-6 w-6 text-accent-orange" />
                <CardTitle>AI Study Recommendations</CardTitle>
              </div>
              <Badge variant="outline">Powered by AI</Badge>
            </div>
            <CardDescription>
              Personalized suggestions based on your learning patterns and performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-muted rounded-lg space-y-2">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="font-medium">Focus Area</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Spend more time on Chapter 7: Data Structures. Your quiz scores suggest this needs attention.
                </p>
              </div>
              
              <div className="p-4 bg-muted rounded-lg space-y-2">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-study-green" />
                  <span className="font-medium">Optimal Time</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your peak performance is between 2-4 PM. Schedule complex topics during this window.
                </p>
              </div>

              <div className="p-4 bg-muted rounded-lg space-y-2">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-accent-teal" />
                  <span className="font-medium">Next Goal</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Complete 3 more practice assessments to reach your weekly target of 85% average score.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest study sessions and achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Completed assessment", subject: "Linear Algebra Quiz", score: "92%", time: "2 hours ago", type: "assessment" },
                { action: "Processed document", subject: "Machine Learning Notes.pdf", size: "2.3 MB", time: "5 hours ago", type: "document" },
                { action: "Study session", subject: "Database Design", duration: "45 min", time: "1 day ago", type: "session" },
                { action: "Generated quiz", subject: "Python Fundamentals", questions: "15 questions", time: "2 days ago", type: "generation" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg transition-academic hover:bg-muted">
                  <div className={`p-2 rounded-full ${
                    activity.type === 'assessment' ? 'bg-accent-orange/20 text-accent-orange' :
                    activity.type === 'document' ? 'bg-primary/20 text-primary' :
                    activity.type === 'session' ? 'bg-study-green/20 text-study-green' :
                    'bg-accent-purple/20 text-accent-purple'
                  }`}>
                    {activity.type === 'assessment' ? <Award className="h-4 w-4" /> :
                     activity.type === 'document' ? <FileText className="h-4 w-4" /> :
                     activity.type === 'session' ? <BookOpen className="h-4 w-4" /> :
                     <Brain className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.subject}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.score || activity.size || activity.duration || activity.questions}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};