# StudyForge - AI-Powered Learning Platform

## 🎯 Overview

StudyForge is a comprehensive personalized study system that leverages AI to transform your learning experience. Upload documents, generate intelligent assessments, track progress with detailed analytics, and receive AI-driven study recommendations.

## ✨ Features

### 📄 **Document Processing**
- Upload PDF, DOCX, PPTX, and TXT files up to 20MB
- AI-powered content analysis and key insight extraction
- Automatic topic identification and concept mapping
- Smart document organization and management

### 🧠 **AI Assessment Generator**
- Create personalized quizzes and tests from your materials
- Multiple question types: Multiple Choice, Short Answer, Essay, True/False
- Adjustable difficulty levels: Easy, Medium, Hard
- Customizable question count (5-50 questions)
- Estimated completion times

### 📊 **Progress Analytics**
- Detailed study time tracking and goal monitoring
- Subject-specific progress visualization
- Performance analytics with score trends
- Learning efficiency measurements
- Weekly and monthly progress reports

### 🎓 **AI Study Recommendations**
- Personalized study suggestions based on performance
- Optimal study time recommendations
- Focus area identification for improvement
- Learning pattern analysis and insights

### 🎨 **Modern Interface**
- Clean, academic design with professional color scheme
- Responsive layout for desktop and mobile
- Intuitive navigation and user experience
- Real-time progress updates and notifications

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd studyforge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 🎨 Design System

StudyForge features a carefully crafted design system with:

- **Academic Color Palette**: Professional blues and greens
- **Semantic Tokens**: Consistent theming across components
- **Responsive Design**: Optimized for all screen sizes
- **Accessibility**: WCAG compliant interface elements
- **Performance**: Optimized animations and transitions

## 🛠 Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React for consistent iconography
- **State Management**: React Hooks and Context API
- **Routing**: React Router for navigation

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (shadcn)
│   ├── StudyDashboard.tsx     # Main dashboard component
│   ├── DocumentProcessor.tsx   # Document upload and processing
│   ├── AssessmentGenerator.tsx # AI quiz/test generation
│   └── ProgressAnalytics.tsx  # Analytics and insights
├── pages/               # Route components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── assets/              # Images and static files
└── index.css           # Global styles and design system
```

## 🎯 Usage Guide

### 1. **Upload Documents**
- Click "Upload Documents" on the dashboard
- Select or drag files (PDF, DOCX, PPTX, TXT)
- Wait for AI processing to extract key insights
- View processed documents in your library

### 2. **Generate Assessments**
- Navigate to the "Assessments" tab
- Select source documents from your library
- Configure assessment type, difficulty, and question count
- Choose question types to include
- Click "Generate Assessment" to create your quiz/test

### 3. **Track Progress**
- Visit the "Analytics" tab for detailed insights
- Monitor daily study hours and weekly goals
- Review subject-specific progress and performance
- Analyze learning patterns and efficiency metrics

### 4. **Follow AI Recommendations**
- Check the dashboard for personalized study suggestions
- Implement recommended focus areas and study schedules
- Optimize your learning based on performance insights

## 🔧 Customization

### Design System
Edit `src/index.css` and `tailwind.config.ts` to customize:
- Color schemes and gradients
- Typography and spacing
- Component variants and animations
- Responsive breakpoints

### Components
Modify components in `src/components/` to:
- Add new features and functionality
- Customize UI behavior and appearance
- Integrate additional AI services
- Enhance analytics capabilities

## 🚀 Deployment

### Using Lovable (Recommended)
1. Click the "Publish" button in the Lovable editor
2. Configure your domain settings
3. Deploy instantly to global CDN

### Manual Deployment
```bash
# Build for production
npm run build

# Deploy the dist/ folder to your hosting provider
```

## 🤝 Contributing

StudyForge is built with modern web technologies and follows best practices for:
- Code organization and modularity
- TypeScript strict mode compliance
- Responsive design principles
- Accessibility standards
- Performance optimization

## 📄 License

This project is built with Lovable and includes the latest web development tools and practices for creating modern, scalable applications.

---

**Built with ❤️ using Lovable** - The fastest way to build modern web applications.