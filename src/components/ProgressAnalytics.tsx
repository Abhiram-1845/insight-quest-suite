import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Target,
  Calendar,
  Award,
  Brain,
  Activity
} from "lucide-react";

export const ProgressAnalytics = () => {
  const weeklyData = [
    { day: 'Mon', study: 2.5, target: 2 },
    { day: 'Tue', study: 3.2, target: 2 },
    { day: 'Wed', study: 1.8, target: 2 },
    { day: 'Thu', study: 4.1, target: 2 },
    { day: 'Fri', study: 2.9, target: 2 },
    { day: 'Sat', study: 3.5, target: 2 },
    { day: 'Sun', study: 2.2, target: 2 }
  ];

  const subjects = [
    { name: 'Machine Learning', progress: 85, score: 92, hours: 24.5, color: 'bg-primary' },
    { name: 'Database Design', progress: 78, score: 88, hours: 18.2, color: 'bg-study-green' },
    { name: 'Linear Algebra', progress: 65, score: 76, hours: 15.8, color: 'bg-accent-purple' },
    { name: 'Data Structures', progress: 45, score: 82, hours: 12.1, color: 'bg-accent-orange' },
  ];

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Study Time</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">127.5</div>
            <p className="text-xs text-muted-foreground">
              hours this month (+18%)
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <Award className="h-4 w-4 text-accent-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent-orange">84.5%</div>
            <p className="text-xs text-muted-foreground">
              +3.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
            <Activity className="h-4 w-4 text-study-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-study-green">12</div>
            <p className="text-xs text-muted-foreground">
              days in a row
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Efficiency</CardTitle>
            <TrendingUp className="h-4 w-4 text-accent-teal" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent-teal">3.2x</div>
            <p className="text-xs text-muted-foreground">
              faster than baseline
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Progress Chart */}
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span>Weekly Study Progress</span>
              </CardTitle>
              <CardDescription>Daily study hours vs. target goals</CardDescription>
            </div>
            <Badge variant="outline">This Week</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span>Week Goal: 14 hours</span>
              <span className="text-study-green font-medium">20.2 hours (144%)</span>
            </div>
            <div className="space-y-3">
              {weeklyData.map((day, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">{day.day}</span>
                    <span className="text-muted-foreground">{day.study}h / {day.target}h</span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={(day.study / day.target) * 100} 
                      className="h-2"
                    />
                    {day.study > day.target && (
                      <div className="absolute top-0 left-0 h-2 bg-study-green rounded-full" 
                           style={{ width: `${Math.min((day.study / day.target) * 100, 100)}%` }} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subject Progress */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-accent-teal" />
            <span>Subject Progress & Performance</span>
          </CardTitle>
          <CardDescription>Track your progress across different subjects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {subjects.map((subject, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded ${subject.color}`} />
                    <span className="font-medium">{subject.name}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-muted-foreground">{subject.hours}h studied</span>
                    <Badge variant="secondary">{subject.score}% avg</Badge>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{subject.progress}%</span>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Insights */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-accent-purple" />
            <span>Learning Insights</span>
          </CardTitle>
          <CardDescription>AI-powered analysis of your study patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-primary">Study Patterns</h3>
              <div className="space-y-3">
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock className="h-4 w-4 text-study-green" />
                    <span className="text-sm font-medium">Peak Performance</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You perform best between 2-4 PM with 92% average scores
                  </p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Calendar className="h-4 w-4 text-accent-teal" />
                    <span className="text-sm font-medium">Optimal Duration</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    45-minute sessions show highest retention rates
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-primary">Recommendations</h3>
              <div className="space-y-3">
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Target className="h-4 w-4 text-accent-orange" />
                    <span className="text-sm font-medium">Focus Areas</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Spend more time on Data Structures (45% progress)
                  </p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <TrendingUp className="h-4 w-4 text-accent-purple" />
                    <span className="text-sm font-medium">Next Goal</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Maintain current pace to reach 90% average by month end
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <Button variant="hero">
          <BarChart3 className="h-4 w-4 mr-2" />
          Export Report
        </Button>
        <Button variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          Set New Goals
        </Button>
        <Button variant="outline">
          <Brain className="h-4 w-4 mr-2" />
          Get AI Coaching
        </Button>
      </div>
    </div>
  );
};