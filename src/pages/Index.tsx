import { useState } from 'react';
import { StudyDashboard } from '@/components/StudyDashboard';
import { DocumentProcessor } from '@/components/DocumentProcessor';
import { AssessmentGenerator } from '@/components/AssessmentGenerator';
import { ProgressAnalytics } from '@/components/ProgressAnalytics';
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Upload, 
  Brain, 
  BarChart3,
  Github
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'documents', label: 'Documents', icon: Upload },
    { id: 'assessments', label: 'Assessments', icon: Brain },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <StudyDashboard />;
      case 'documents':
        return <DocumentProcessor />;
      case 'assessments':
        return <AssessmentGenerator />;
      case 'analytics':
        return <ProgressAnalytics />;
      default:
        return <StudyDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                StudyForge
              </h1>
              <div className="flex space-x-1">
                {navigation.map(item => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? "hero" : "ghost"}
                      onClick={() => setActiveTab(item.id)}
                      className="transition-academic"
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {item.label}
                    </Button>
                  );
                })}
              </div>
            </div>
            
            <Button variant="outline" className="flex items-center space-x-2">
              <Github className="h-4 w-4" />
              <span>Connect GitHub</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
