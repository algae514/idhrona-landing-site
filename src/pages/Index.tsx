import { Users, TrendingUp, Code, Lightbulb, BarChart3, BookOpen, GraduationCap, ArrowRight, Play, Sparkles, Brain, Target, Zap, MessageSquare, Terminal, CheckCircle2, Bot, Send } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import logo from "@/assets/logo.jpeg";

// Dot pattern background component
const DotPattern = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dot-pattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary/10" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  </div>
);

// Top tagline bar inspired by Dronacharya
const TaglineBar = () => (
  <div className="bg-primary text-primary-foreground text-center py-2 px-4 text-sm font-medium">
    <span className="opacity-90">iDhrona</span>
    <span className="mx-2 opacity-50">—</span>
    <span className="italic opacity-80">"When the student is ready, the master appears."</span>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-10 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50" role="navigation" aria-label="Main navigation">
    <div className="container mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <a href="/" aria-label="iDhrona Home" itemProp="url">
          <img 
            src={logo} 
            alt="iDhrona - Interactive Learning Platform for Programming Educators" 
            className="h-10 w-auto" 
            width="120" 
            height="40" 
            loading="eager"
            itemProp="logo"
          />
        </a>
      </div>
      <div className="hidden md:flex items-center gap-8" role="menubar">
        <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium" role="menuitem" aria-label="View Features section">Features</a>
        <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors font-medium" role="menuitem" aria-label="See Demo section">Demo</a>
        <a href="#courses" className="text-muted-foreground hover:text-foreground transition-colors font-medium" role="menuitem" aria-label="View Courses section">Courses</a>
        <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium" role="menuitem" aria-label="Learn how it works">How It Works</a>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <a 
          href="http://app.idhrona.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </nav>
);

// Floating circles component for right side of hero (like Skelo.in)
const HeroCircles = () => (
  <div className="relative w-full h-full" aria-hidden="true">
    {/* Large center circle */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-4 border-primary/40 bg-primary/10 animate-float-slow shadow-xl shadow-primary/20" />
    
    {/* Top right circle */}
    <div className="absolute top-4 right-8 w-28 h-28 rounded-full border-4 border-accent/50 bg-accent/15 animate-float-slow shadow-lg" style={{ animationDelay: '0.5s' }} />
    
    {/* Top left circle */}
    <div className="absolute top-16 left-8 w-24 h-24 rounded-full border-4 border-primary/35 bg-primary/10 animate-float-slow shadow-lg" style={{ animationDelay: '1s' }} />
    
    {/* Middle right circle */}
    <div className="absolute top-1/3 right-0 w-36 h-36 rounded-full border-4 border-primary/30 bg-primary/8 animate-float-slow shadow-lg" style={{ animationDelay: '1.5s' }} />
    
    {/* Bottom right circle */}
    <div className="absolute bottom-12 right-16 w-32 h-32 rounded-full border-4 border-accent/40 bg-accent/12 animate-float-slow shadow-lg" style={{ animationDelay: '2s' }} />
    
    {/* Bottom left circle */}
    <div className="absolute bottom-4 left-12 w-24 h-24 rounded-full border-4 border-primary/40 bg-primary/10 animate-float-slow shadow-lg" style={{ animationDelay: '2.5s' }} />
    
    {/* Small accent circles */}
    <div className="absolute top-1/4 left-1/3 w-16 h-16 rounded-full border-3 border-accent/35 bg-accent/15 animate-float-slow shadow-md" style={{ animationDelay: '3s' }} />
    <div className="absolute bottom-1/3 right-1/4 w-20 h-20 rounded-full border-3 border-primary/30 bg-primary/10 animate-float-slow shadow-md" style={{ animationDelay: '3.5s' }} />
  </div>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-28" aria-label="Hero section" itemScope itemType="https://schema.org/WebPageElement">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" aria-hidden="true" />
    
    {/* Dot pattern */}
    <DotPattern />
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <header className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in border border-primary/20" role="status" aria-label="Platform tagline">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            Your AI Guru for Programming
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 animate-slide-up" itemProp="headline">
            Learn to Code with
            <br />
            <span className="text-gradient">AI by Your Side</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }} itemProp="description">
            Interactive textbooks with a built-in code compiler, real-time explanations, and an AI tutor that guides you like a true guru — patient, wise, and always available.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a 
              href="http://app.idhrona.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Start Learning Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-background border-2 border-border text-foreground rounded-full font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <Play className="w-5 h-5" />
              See it in Action
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }} role="group" aria-label="Platform statistics">
            <div className="flex flex-col gap-1" itemScope itemType="https://schema.org/QuantitativeValue">
              <span className="text-2xl font-bold text-foreground" itemProp="value">50K+</span>
              <span className="text-sm" itemProp="name">Students</span>
            </div>
            <div className="w-px h-10 bg-border" aria-hidden="true" />
            <div className="flex flex-col gap-1" itemScope itemType="https://schema.org/QuantitativeValue">
              <span className="text-2xl font-bold text-foreground" itemProp="value">100+</span>
              <span className="text-sm" itemProp="name">Institutions</span>
            </div>
            <div className="w-px h-10 bg-border" aria-hidden="true" />
            <div className="flex flex-col gap-1" itemScope itemType="https://schema.org/QuantitativeValue">
              <span className="text-2xl font-bold text-foreground" itemProp="value">4.9★</span>
              <span className="text-sm" itemProp="name">Rating</span>
            </div>
          </div>
        </header>

        {/* Right side - Floating Circles (like Skelo.in) */}
        <div className="relative h-[400px] lg:h-[500px] hidden lg:flex items-center justify-center">
          <HeroCircles />
        </div>
      </div>
    </div>
  </section>
);

// Mockup Code Editor Component
const CodeEditorMockup = () => (
  <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
    {/* Editor Header */}
    <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-white/60 text-xs ml-2 font-mono">main.c</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-white/40 text-xs px-2 py-1 bg-white/5 rounded">C (GCC 9.2.0)</span>
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-primary rounded text-xs font-medium text-white">
          <Play className="w-3 h-3" /> RUN CODE
        </button>
      </div>
    </div>
    
    {/* Code Content */}
    <div className="p-4 font-mono text-sm leading-relaxed">
      <div className="flex">
        <div className="text-white/30 text-right pr-4 select-none">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
            <div key={n}>{n}</div>
          ))}
        </div>
        <div className="flex-1 overflow-hidden">
          <div><span className="text-[#c586c0]">#include</span> <span className="text-[#ce9178]">&lt;stdio.h&gt;</span></div>
          <div className="h-4"></div>
          <div><span className="text-[#569cd6]">int</span> <span className="text-[#dcdcaa]">main</span><span className="text-white">() {'{'}</span></div>
          <div className="pl-4"><span className="text-[#569cd6]">int</span> <span className="text-[#9cdcfe]">a</span>, <span className="text-[#9cdcfe]">b</span>, <span className="text-[#9cdcfe]">sum</span>;</div>
          <div className="pl-4"><span className="text-[#dcdcaa]">printf</span><span className="text-white">(</span><span className="text-[#ce9178]">"Enter two numbers: "</span><span className="text-white">);</span></div>
          <div className="pl-4"><span className="text-[#dcdcaa]">scanf</span><span className="text-white">(</span><span className="text-[#ce9178]">"%d %d"</span>, &<span className="text-[#9cdcfe]">a</span>, &<span className="text-[#9cdcfe]">b</span><span className="text-white">);</span></div>
          <div className="pl-4"><span className="text-[#9cdcfe]">sum</span> = <span className="text-[#9cdcfe]">a</span> + <span className="text-[#9cdcfe]">b</span>;</div>
          <div className="pl-4"><span className="text-[#dcdcaa]">printf</span><span className="text-white">(</span><span className="text-[#ce9178]">"Sum = %d\n"</span>, <span className="text-[#9cdcfe]">sum</span><span className="text-white">);</span></div>
          <div><span className="text-white">{'}'}</span></div>
        </div>
      </div>
    </div>
    
    {/* Output Section */}
    <div className="border-t border-white/10 bg-[#1a1a1a]">
      <div className="px-4 py-2 text-white/40 text-xs uppercase tracking-wider border-b border-white/5">Output</div>
      <div className="p-4 font-mono text-sm text-green-400">
        <div className="text-white/60">Enter two numbers: <span className="text-[#9cdcfe]">5 3</span></div>
        <div>Sum = 8</div>
        <div className="mt-2 text-white/40 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-3 h-3 text-green-500" /> Program exited with code 0
        </div>
      </div>
    </div>
  </div>
);

// Mockup AI Tutor Chat Component
const AIChatMockup = () => (
  <div className="bg-card rounded-2xl overflow-hidden shadow-2xl border border-border">
    {/* Chat Header */}
    <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <Bot className="w-4 h-4 text-primary" />
        </div>
        <div>
          <div className="font-medium text-sm">AI Tutor</div>
          <div className="text-xs text-muted-foreground">Your personal guru</div>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="px-3 py-1.5 text-xs font-medium bg-secondary rounded-full flex items-center gap-1">
          <MessageSquare className="w-3 h-3" /> Chat
        </button>
        <button className="px-3 py-1.5 text-xs font-medium text-muted-foreground rounded-full flex items-center gap-1">
          <Code className="w-3 h-3" /> Code
        </button>
      </div>
    </div>
    
    {/* Chat Messages */}
    <div className="p-4 space-y-4 h-[280px] overflow-y-auto">
      {/* User Message */}
      <div className="flex justify-end">
        <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
          <p className="text-sm">Why do we use &a instead of just a in scanf?</p>
        </div>
      </div>
      
      {/* AI Response */}
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
          <Bot className="w-4 h-4 text-primary" />
        </div>
        <div className="bg-secondary/50 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
          <p className="text-sm leading-relaxed">
            Great question! In C, <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs font-mono">scanf()</code> needs to know <strong>where</strong> to store the value in memory.
          </p>
          <div className="mt-3 p-3 bg-[#1e1e1e] rounded-lg font-mono text-xs">
            <span className="text-[#9cdcfe]">a</span> <span className="text-white/60">→ the value (e.g., 5)</span><br/>
            <span className="text-[#9cdcfe]">&a</span> <span className="text-white/60">→ the address (e.g., 0x7fff)</span>
          </div>
          <p className="text-sm mt-3 leading-relaxed">
            The <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs font-mono">&</code> operator gives the memory address so scanf can write directly to that location! 🎯
          </p>
        </div>
      </div>
    </div>
    
    {/* Chat Input */}
    <div className="p-4 border-t border-border bg-secondary/30">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask your AI guru anything..."
          className="flex-1 bg-background border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

// Product Demo Section with mockups
const DemoSection = () => (
  <section id="demo" className="py-24 bg-secondary/30 relative overflow-hidden">
    <DotPattern className="opacity-30" />
    
    <div className="container mx-auto px-6 relative z-10">
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
          <Play className="w-4 h-4" />
          See it in Action
        </div>
        <h2 className="font-serif text-4xl md:text-5xl mb-4">
          Experience the Platform
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A glimpse into how iDhrona combines interactive coding, AI guidance, and structured learning
        </p>
      </header>
      
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Code Editor Demo */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Built-in Code Compiler</h3>
              <p className="text-sm text-muted-foreground">Write, run, and debug code in your browser</p>
            </div>
          </div>
          <CodeEditorMockup />
        </div>
        
        {/* AI Chat Demo */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">AI Tutor — Your Personal Guru</h3>
              <p className="text-sm text-muted-foreground">Get instant explanations for any concept</p>
            </div>
          </div>
          <AIChatMockup />
        </div>
      </div>
    </div>
  </section>
);

// Feature highlights
const featureHighlights = [
  {
    title: "Interactive Textbooks",
    description: "Learn from beautifully designed modules with embedded code examples, visualizations, and hands-on exercises.",
    icon: BookOpen,
    gradient: "from-primary/20 to-primary/5"
  },
  {
    title: "Real-time Feedback",
    description: "Get instant feedback on your code. See what works, understand what doesn't, and learn from every attempt.",
    icon: Zap,
    gradient: "from-accent/20 to-accent/5"
  },
  {
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed analytics. See your strengths and areas for improvement.",
    icon: BarChart3,
    gradient: "from-primary/15 to-primary/5"
  },
  {
    title: "Smart Hints",
    description: "Stuck on a problem? Get AI-powered hints that guide you without giving away the answer.",
    icon: Lightbulb,
    gradient: "from-accent/15 to-accent/5"
  }
];

const FeaturesSection = () => (
  <section id="features" className="py-24 relative overflow-hidden" aria-labelledby="features-heading" itemScope itemType="https://schema.org/ItemList">
    <DotPattern className="opacity-50" />
    
    <div className="container mx-auto px-6 relative z-10">
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
          <Sparkles className="w-4 h-4" />
          Why Choose iDhrona
        </div>
        <h2 id="features-heading" className="font-serif text-4xl md:text-5xl mb-4" itemProp="name">
          Everything You Need to Master Coding
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto" itemProp="description">
          A complete learning environment that adapts to you — like a guru who understands every student's unique journey
        </p>
      </header>
      
      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {featureHighlights.map((feature, index) => (
          <div
            key={feature.title}
            className={`relative group rounded-3xl bg-gradient-to-br ${feature.gradient} border border-border/50 p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 animate-scale-in overflow-hidden`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute inset-0 bg-card/90 backdrop-blur-sm" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const courses = [
  {
    language: "C Programming",
    description: "Master the fundamentals of programming with hands-on exercises and real-time feedback.",
    color: "from-primary to-primary/70",
    icon: Code,
    available: true,
    modules: 24
  },
  {
    language: "Data Science with Python",
    description: "Explore data analysis, visualization, and machine learning concepts.",
    color: "from-accent to-accent/70",
    icon: BarChart3,
    available: false,
    modules: 18
  },
  {
    language: "Machine Learning",
    description: "Build intelligent systems with supervised and unsupervised learning.",
    color: "from-primary to-primary/70",
    icon: Brain,
    available: false,
    modules: 20
  },
  {
    language: "Mathematics for AI",
    description: "Essential mathematical foundations for artificial intelligence.",
    color: "from-accent to-accent/70",
    icon: Target,
    available: false,
    modules: 16
  },
  {
    language: "Data Structures",
    description: "Learn efficient data organization and algorithmic thinking.",
    color: "from-primary to-primary/70",
    icon: Lightbulb,
    available: false,
    modules: 22
  },
  {
    language: "Deep Learning",
    description: "Neural networks, CNNs, RNNs, and transformers explained.",
    color: "from-accent to-accent/70",
    icon: Sparkles,
    available: false,
    modules: 15
  }
];

const CoursesSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCourseClick = (e: React.MouseEvent, course: typeof courses[0]) => {
    if (course.available) {
      return;
    } else {
      e.preventDefault();
      setIsDialogOpen(true);
    }
  };

  return (
    <section id="courses" className="py-24 relative overflow-hidden" itemScope itemType="https://schema.org/ItemList">
      <DotPattern className="opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <BookOpen className="w-4 h-4" />
            Interactive Courses
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4" itemProp="name">
            Learn by Doing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" itemProp="description">
            Interactive textbooks with embedded code editors, AI explanations, and hands-on exercises
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <a
              key={course.language}
              href={course.available ? "http://app.idhrona.com/" : "#"}
              target={course.available ? "_blank" : undefined}
              rel={course.available ? "noopener noreferrer" : undefined}
              onClick={(e) => handleCourseClick(e, course)}
              className={`group relative rounded-3xl bg-card border border-border/50 p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 animate-scale-in overflow-hidden ${course.available ? 'ring-2 ring-primary/30' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              itemScope
              itemType="https://schema.org/Course"
              itemProp="itemListElement"
              aria-label={course.available ? `Navigate to ${course.language} course` : `Book a demo for ${course.language}`}
            >
              {/* Gradient blob */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${course.color} opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity`} aria-hidden="true" />
              
              {course.available && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                  Available Now
                </div>
              )}
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 shadow-lg`} aria-hidden="true">
                  <course.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-serif text-xl font-semibold mb-3" itemProp="name">{course.language}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4" itemProp="description">{course.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{course.modules} modules</span>
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all text-sm">
                    {course.available ? 'Start Learning' : 'Coming Soon'}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-card border-border shadow-xl rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-card-foreground">Coming Soon</DialogTitle>
            <DialogDescription className="text-base mt-2 text-muted-foreground">
              This course is currently in development. Sign up to be notified when it launches and get early access.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

const steps = [
  {
    number: "01",
    title: "Pick a Course",
    description: "Choose from our library of interactive courses. Start with C Programming or explore upcoming topics.",
    icon: BookOpen
  },
  {
    number: "02",
    title: "Learn Interactively",
    description: "Read concepts, run code examples in the built-in editor, and experiment with modifications.",
    icon: Terminal
  },
  {
    number: "03",
    title: "Ask the AI Guru",
    description: "Stuck on something? Ask the AI tutor for explanations, examples, or help debugging your code.",
    icon: Bot
  },
  {
    number: "04",
    title: "Track Your Progress",
    description: "Complete exercises, earn badges, and see your learning journey unfold with detailed analytics.",
    icon: TrendingUp
  }
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 bg-secondary/30 relative overflow-hidden" itemScope itemType="https://schema.org/HowTo">
    <DotPattern className="opacity-30" />
    
    <div className="container mx-auto px-6 relative z-10">
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
          <Target className="w-4 h-4" />
          Simple Process
        </div>
        <h2 className="font-serif text-4xl md:text-5xl mb-4" itemProp="name">
          How It Works
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto" itemProp="description">
          Your learning journey in four simple steps
        </p>
      </header>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="group relative rounded-3xl bg-card border border-border/50 p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              itemScope
              itemType="https://schema.org/HowToStep"
              itemProp="step"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/25" itemProp="position" content={step.number}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2">{step.number}</div>
                  <h3 className="font-serif text-xl mb-2" itemProp="name">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed" itemProp="text">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24 relative overflow-hidden" itemScope itemType="https://schema.org/WebPageElement">
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" aria-hidden="true" />
    <DotPattern className="opacity-10" />
    <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 border border-white/20">
          <Sparkles className="w-4 h-4" />
          Start for free, no credit card required
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-6" itemProp="headline">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10" itemProp="description">
          Join thousands of students learning to code with AI guidance. When you're ready to learn, your AI guru awaits.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="http://app.idhrona.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Start Learning Free
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all"
          >
            <Play className="w-5 h-5" />
            See Demo
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-border bg-secondary/30" itemScope itemType="https://schema.org/WPFooter">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="iDhrona - Interactive Learning Platform for Programming Educators" className="h-10 w-auto" width="120" height="40" itemProp="logo" />
        </div>
        <div className="flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Features</a>
          <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Demo</a>
          <a href="#courses" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Courses</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm">How It Works</a>
        </div>
        <p className="text-muted-foreground text-sm" itemProp="copyrightHolder">
          © <span itemProp="copyrightYear">2025</span> <span itemProp="name">iDhrona</span>. When the student is ready, the master appears.
        </p>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background" itemScope itemType="https://schema.org/WebPage" lang="en-US">
      {/* Fixed tagline at the very top */}
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <TaglineBar />
      </div>
      <Navbar />
      <HeroSection />
      <DemoSection />
      <FeaturesSection />
      <CoursesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
