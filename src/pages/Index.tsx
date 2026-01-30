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
  <div className="bg-primary text-primary-foreground text-center py-1.5 md:py-2 px-3 md:px-4 text-xs md:text-sm font-medium">
    <span className="opacity-90">iDhrona</span>
    <span className="mx-1 md:mx-2 opacity-50">—</span>
    <span className="italic opacity-80 hidden sm:inline">"When the student is ready, the master appears."</span>
    <span className="italic opacity-80 sm:hidden">"Ready, the master appears."</span>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50" role="navigation" aria-label="Main navigation">
    <div className="container mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <a href="/" aria-label="iDhrona Home" itemProp="url">
          <img 
            src={logo} 
            alt="iDhrona - Interactive Learning Platform for Programming Educators" 
            className="h-8 md:h-10 w-auto" 
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
        <a href="http://app.idhrona.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors font-medium" role="menuitem" aria-label="View Courses">Courses</a>
        <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium" role="menuitem" aria-label="Learn how it works">How It Works</a>
      </div>
      <div className="flex items-center gap-3">
      </div>
    </div>
  </nav>
);

// Floating circles component for right side of hero (like Skelo.in)
const HeroCircles = () => (
  <div className="relative w-full h-full" aria-hidden="true">
    {/* Large center circle */}
    <div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-4 border-primary/40 animate-float-slow shadow-xl shadow-primary/20" 
      style={{ 
        animation: 'floatSlow 8s ease-in-out infinite, circleInnerGlow 15s ease-in-out 0s infinite'
      } as React.CSSProperties}
    />
    
    {/* Top right circle - accent (orange) */}
    <div 
      className="absolute top-4 right-8 w-28 h-28 rounded-full border-4 border-accent/50 animate-float-slow shadow-xl shadow-accent/20" 
      style={{ 
        animation: 'floatSlow 8s ease-in-out 0.5s infinite, circlePulseFillAccent 12s ease-in-out 2s infinite'
      } as React.CSSProperties}
    />
    
    {/* Top left circle */}
    <div 
      className="absolute top-16 left-8 w-24 h-24 rounded-full border-4 border-primary/35 animate-float-slow shadow-lg shadow-primary/15" 
      style={{ 
        animation: 'floatSlow 8s ease-in-out 1s infinite, circleInnerGlow 10s ease-in-out 4s infinite'
      } as React.CSSProperties}
    />
    
    {/* Middle right circle */}
    <div 
      className="absolute top-1/3 right-0 w-36 h-36 rounded-full border-4 border-primary/30 animate-float-slow shadow-xl shadow-primary/15" 
      style={{ 
        animation: 'floatSlow 8s ease-in-out 1.5s infinite, circlePulseFill 15s ease-in-out 1s infinite'
      } as React.CSSProperties}
    />
    
    {/* Bottom right circle - accent (orange) */}
    <div 
      className="absolute bottom-12 right-16 w-32 h-32 rounded-full border-4 border-accent/40 animate-float-slow shadow-xl shadow-accent/20" 
      style={{ 
        animation: 'floatSlow 8s ease-in-out 2s infinite, circleInnerGlowAccent 12s ease-in-out 3s infinite'
      } as React.CSSProperties}
    />
    
    {/* Bottom left circle */}
    <div 
      className="absolute bottom-4 left-12 w-24 h-24 rounded-full border-4 border-primary/40 animate-float-slow shadow-lg shadow-primary/15" 
      style={{ 
        animation: 'floatSlow 8s ease-in-out 2.5s infinite, circlePulseFill 10s ease-in-out 5s infinite'
      } as React.CSSProperties}
    />
    
    {/* Small accent circles */}
    <div 
      className="absolute top-1/4 left-1/3 w-16 h-16 rounded-full border-3 border-accent/35 animate-float-slow shadow-lg shadow-accent/15" 
      style={{ 
        animation: 'floatSlow 8s ease-in-out 3s infinite, circleInnerGlowAccent 12s ease-in-out 6s infinite'
      } as React.CSSProperties}
    />
    <div 
      className="absolute bottom-1/3 right-1/4 w-20 h-20 rounded-full border-3 border-primary/30 animate-float-slow shadow-lg shadow-primary/15" 
      style={{ 
        animation: 'floatSlow 8s ease-in-out 3.5s infinite, circlePulseFill 15s ease-in-out 7s infinite'
      } as React.CSSProperties}
    />
    
    {/* Center area circles - filling empty space */}
    <div 
      className="absolute top-[45%] left-[45%] w-20 h-20 rounded-full border-3 border-primary/35 animate-float-slow shadow-lg shadow-primary/15" 
      style={{ 
        animation: 'floatSlow 8s ease-in-out 4s infinite, circlePulseFill 13s ease-in-out 8s infinite'
      } as React.CSSProperties}
    />
    <div 
      className="absolute top-[55%] left-[55%] w-16 h-16 rounded-full border-3 border-accent/40 animate-float-slow shadow-lg shadow-accent/15" 
      style={{ 
        animation: 'floatSlow 8s ease-in-out 4.5s infinite, circleInnerGlowAccent 11s ease-in-out 9s infinite'
      } as React.CSSProperties}
    />
    
    {/* Additional center area circles - average size */}
    <div 
      className="absolute top-[25%] left-[52%] w-24 h-24 rounded-full border-4 border-primary/35 animate-float-slow shadow-lg shadow-primary/15" 
      style={{ 
        animation: 'floatSlow 8s ease-in-out 5s infinite, circleInnerGlow 14s ease-in-out 10s infinite'
      } as React.CSSProperties}
    />
    <div 
      className="absolute top-[12%] left-[32%] w-28 h-28 rounded-full border-4 border-accent/40 animate-float-slow shadow-xl shadow-accent/20" 
      style={{ 
        animation: 'floatSlow 8s ease-in-out 5.5s infinite, circlePulseFillAccent 12s ease-in-out 11s infinite'
      } as React.CSSProperties}
    />
    <div 
      className="absolute top-[38%] left-[50%] w-26 h-26 rounded-full border-4 border-primary/30 animate-float-slow shadow-lg shadow-primary/15" 
      style={{ 
        animation: 'floatSlow 8s ease-in-out 6s infinite, circlePulseFill 15s ease-in-out 12s infinite'
      } as React.CSSProperties}
    />
  </div>
);

const HeroSection = () => (
  <section className="relative lg:min-h-screen flex items-center overflow-hidden pt-24 pb-8 md:pt-32 md:pb-0" aria-label="Hero section" itemScope itemType="https://schema.org/WebPageElement">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" aria-hidden="true" />
    
    {/* Dot pattern */}
    <DotPattern />
    
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left side - Text content */}
        <header className="max-w-xl">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4 md:mb-6 animate-slide-up" itemProp="headline">
            <div className="flex items-center gap-3 md:gap-4">
              <img 
                src={logo} 
                alt="iDhrona" 
                className="h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16" 
                width="64" 
                height="64"
              />
              <span>iDhrona</span>
            </div>
            <br />
            <span className="italic opacity-80">"When the student is ready, the master appears."</span>
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }} itemProp="description">
            Learn by doing — not by memorizing.
            <br />
            Solve real coding problems first. Let explanations and concepts unfold naturally, guided by an AI mentor that teaches when you're ready.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 md:gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a 
              href="http://app.idhrona.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>

          <div className="mt-8 md:mt-12 flex items-center justify-between sm:justify-start gap-4 sm:gap-8 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }} role="group" aria-label="Platform statistics">
            <div className="flex flex-col gap-0.5 md:gap-1" itemScope itemType="https://schema.org/QuantitativeValue">
              <span className="text-xl md:text-2xl font-bold text-foreground" itemProp="value">50K+</span>
              <span className="text-xs md:text-sm" itemProp="name">Students</span>
            </div>
            <div className="w-px h-8 md:h-10 bg-border" aria-hidden="true" />
            <div className="flex flex-col gap-0.5 md:gap-1" itemScope itemType="https://schema.org/QuantitativeValue">
              <span className="text-xl md:text-2xl font-bold text-foreground" itemProp="value">100+</span>
              <span className="text-xs md:text-sm" itemProp="name">Institutions</span>
            </div>
            <div className="w-px h-8 md:h-10 bg-border" aria-hidden="true" />
            <div className="flex flex-col gap-0.5 md:gap-1" itemScope itemType="https://schema.org/QuantitativeValue">
              <span className="text-xl md:text-2xl font-bold text-foreground" itemProp="value">4.9★</span>
              <span className="text-xs md:text-sm" itemProp="name">Rating</span>
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
  <div className="bg-[#1e1e1e] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/10">
    {/* Editor Header */}
    <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3 bg-[#2d2d2d] border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="flex gap-1 md:gap-1.5">
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/80" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-white/60 text-[10px] md:text-xs ml-1 md:ml-2 font-mono">main.c</span>
      </div>
      <div className="flex items-center gap-1.5 md:gap-2">
        <span className="text-white/40 text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 bg-white/5 rounded hidden sm:block">C (GCC 9.2.0)</span>
        <button className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-1.5 bg-primary rounded text-[10px] md:text-xs font-medium text-white">
          <Play className="w-2.5 h-2.5 md:w-3 md:h-3" /> RUN
        </button>
      </div>
    </div>
    
    {/* Code Content */}
    <div className="p-2 md:p-4 font-mono text-[10px] md:text-sm leading-relaxed overflow-x-auto">
      <div className="flex">
        <div className="text-white/30 text-right pr-2 md:pr-4 select-none">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
            <div key={n}>{n}</div>
          ))}
        </div>
        <div className="flex-1 overflow-hidden whitespace-nowrap">
          <div><span className="text-[#c586c0]">#include</span> <span className="text-[#ce9178]">&lt;stdio.h&gt;</span></div>
          <div className="h-3 md:h-4"></div>
          <div><span className="text-[#569cd6]">int</span> <span className="text-[#dcdcaa]">main</span><span className="text-white">() {'{'}</span></div>
          <div className="pl-2 md:pl-4"><span className="text-[#569cd6]">int</span> <span className="text-[#9cdcfe]">a</span>, <span className="text-[#9cdcfe]">b</span>, <span className="text-[#9cdcfe]">sum</span>;</div>
          <div className="pl-2 md:pl-4"><span className="text-[#dcdcaa]">printf</span><span className="text-white">(</span><span className="text-[#ce9178]">"Enter: "</span><span className="text-white">);</span></div>
          <div className="pl-2 md:pl-4"><span className="text-[#dcdcaa]">scanf</span><span className="text-white">(</span><span className="text-[#ce9178]">"%d %d"</span>, &<span className="text-[#9cdcfe]">a</span>, &<span className="text-[#9cdcfe]">b</span><span className="text-white">);</span></div>
          <div className="pl-2 md:pl-4"><span className="text-[#9cdcfe]">sum</span> = <span className="text-[#9cdcfe]">a</span> + <span className="text-[#9cdcfe]">b</span>;</div>
          <div className="pl-2 md:pl-4"><span className="text-[#dcdcaa]">printf</span><span className="text-white">(</span><span className="text-[#ce9178]">"Sum=%d\n"</span>, <span className="text-[#9cdcfe]">sum</span><span className="text-white">);</span></div>
          <div><span className="text-white">{'}'}</span></div>
        </div>
      </div>
    </div>
    
    {/* Output Section */}
    <div className="border-t border-white/10 bg-[#1a1a1a]">
      <div className="px-3 md:px-4 py-1.5 md:py-2 text-white/40 text-[10px] md:text-xs uppercase tracking-wider border-b border-white/5">Output</div>
      <div className="p-3 md:p-4 font-mono text-[10px] md:text-sm text-green-400">
        <div className="text-white/60">Enter: <span className="text-[#9cdcfe]">5 3</span></div>
        <div>Sum = 8</div>
        <div className="mt-1.5 md:mt-2 text-white/40 text-[10px] md:text-xs flex items-center gap-1.5 md:gap-2">
          <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-500" /> Exit code 0
        </div>
      </div>
    </div>
  </div>
);

// Mockup AI Tutor Chat Component
const AIChatMockup = () => (
  <div className="bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-border">
    {/* Chat Header */}
    <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3 bg-secondary/50 border-b border-border">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <Bot className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
        </div>
        <div>
          <div className="font-medium text-xs md:text-sm">AI Tutor</div>
          <div className="text-[10px] md:text-xs text-muted-foreground">Your personal guru</div>
        </div>
      </div>
      <div className="flex gap-1.5 md:gap-2">
        <button className="px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-medium bg-secondary rounded-full flex items-center gap-1">
          <MessageSquare className="w-2.5 h-2.5 md:w-3 md:h-3" /> Chat
        </button>
        <button className="px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-medium text-muted-foreground rounded-full flex items-center gap-1">
          <Code className="w-2.5 h-2.5 md:w-3 md:h-3" /> Code
        </button>
      </div>
    </div>
    
    {/* Chat Messages */}
    <div className="p-3 md:p-4 space-y-3 md:space-y-4 h-[220px] md:h-[280px] overflow-y-auto">
      {/* User Message */}
      <div className="flex justify-end">
        <div className="bg-primary text-primary-foreground rounded-xl md:rounded-2xl rounded-tr-sm px-3 md:px-4 py-1.5 md:py-2 max-w-[85%]">
          <p className="text-xs md:text-sm">Why use &a instead of a in scanf?</p>
        </div>
      </div>
      
      {/* AI Response */}
      <div className="flex gap-2 md:gap-3">
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
          <Bot className="w-3 h-3 md:w-4 md:h-4 text-primary" />
        </div>
        <div className="bg-secondary/50 rounded-xl md:rounded-2xl rounded-tl-sm px-3 md:px-4 py-2 md:py-3 max-w-[85%]">
          <p className="text-xs md:text-sm leading-relaxed">
            Great question! <code className="bg-primary/10 px-1 md:px-1.5 py-0.5 rounded text-[10px] md:text-xs font-mono">scanf()</code> needs the memory address.
          </p>
          <div className="mt-2 md:mt-3 p-2 md:p-3 bg-[#1e1e1e] rounded-lg font-mono text-[10px] md:text-xs">
            <span className="text-[#9cdcfe]">a</span> <span className="text-white/60">→ value (5)</span><br/>
            <span className="text-[#9cdcfe]">&a</span> <span className="text-white/60">→ address (0x7fff)</span>
          </div>
          <p className="text-xs md:text-sm mt-2 md:mt-3 leading-relaxed">
            <code className="bg-primary/10 px-1 md:px-1.5 py-0.5 rounded text-[10px] md:text-xs font-mono">&</code> gives the address! 🎯
          </p>
        </div>
      </div>
    </div>
    
    {/* Chat Input */}
    <div className="p-3 md:p-4 border-t border-border bg-secondary/30">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask your AI guru..."
          className="flex-1 bg-background border border-border rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-white">
          <Send className="w-3.5 h-3.5 md:w-4 md:h-4" />
        </button>
      </div>
    </div>
  </div>
);

// Product Demo Section with video
const DemoSection = () => (
  <section id="demo" className="py-12 md:py-24 bg-secondary/30 relative overflow-hidden">
    <DotPattern className="opacity-30" />
    
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <header className="text-center mb-8 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6 border border-primary/20">
          <Play className="w-3 h-3 md:w-4 md:h-4" />
          Platform Demo
        </div>
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-4">
          iDhrona in Action
        </h2>
        <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
          A glimpse into how iDhrona combines interactive coding, AI guidance, and structured learning
        </p>
      </header>
      
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        {/* Code Editor Demo */}
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Terminal className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm md:text-base">Built-in Code Compiler</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Write, run, and debug code in your browser</p>
            </div>
          </div>
          <CodeEditorMockup />
        </div>
        
        {/* AI Chat Demo */}
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Bot className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm md:text-base">AI Tutor — Your Personal Guru</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Get instant explanations for any concept</p>
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
  <section id="features" className="py-12 md:py-24 relative overflow-hidden" aria-labelledby="features-heading" itemScope itemType="https://schema.org/ItemList">
    <DotPattern className="opacity-50" />
    
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <header className="text-center mb-8 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6 border border-primary/20">
          <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
          Why Choose iDhrona
        </div>
        <h2 id="features-heading" className="font-serif text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-4" itemProp="name">
          Everything You Need to Master Coding
        </h2>
        <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto" itemProp="description">
          A complete learning environment that adapts to you — like a guru who understands every student's unique journey
        </p>
      </header>
      
      {/* Feature Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
        {featureHighlights.map((feature, index) => (
          <div
            key={feature.title}
            className={`relative group rounded-2xl md:rounded-3xl bg-gradient-to-br ${feature.gradient} border border-border/50 p-4 md:p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 animate-scale-in overflow-hidden`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute inset-0 bg-card/90 backdrop-blur-sm" />
            <div className="relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="font-serif text-sm md:text-lg font-semibold mb-1 md:mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const courses = [
  {
    language: "C Basic",
    description: "Master the fundamentals of C programming with hands-on exercises and real-time feedback.",
    color: "from-primary to-primary/70",
    icon: Code,
    available: true,
    path: "https://app.idhrona.com/course/c-programming"
  },
  {
    language: "C Advanced",
    description: "Deep dive into pointers, memory management, and advanced C concepts.",
    color: "from-accent to-accent/70",
    icon: Terminal,
    available: true,
    path: "https://app.idhrona.com/course/advanced-c-programming"
  },
  {
    language: "Python Basic",
    description: "Start your Python journey with interactive exercises and guided learning.",
    color: "from-primary to-primary/70",
    icon: Code,
    available: true,
    path: "https://app.idhrona.com/course/basic-python"
  },
  {
    language: "Python Advanced",
    description: "Master advanced Python concepts including decorators, generators, and more.",
    color: "from-accent to-accent/70",
    icon: Terminal,
    available: false
  },
  {
    language: "Python OOP",
    description: "Object-Oriented Programming in Python with practical projects.",
    color: "from-primary to-primary/70",
    icon: Lightbulb,
    available: false
  },
  {
    language: "Data Science with Python",
    description: "Explore data analysis, visualization, and machine learning concepts.",
    color: "from-accent to-accent/70",
    icon: BarChart3,
    available: false
  },
  {
    language: "OOPS through JAVA",
    description: "Learn object-oriented principles with Java programming language.",
    color: "from-primary to-primary/70",
    icon: Code,
    available: true,
    path: "https://app.idhrona.com/course/oops-java"
  },
  {
    language: "Data Structures using C++",
    description: "Implement fundamental data structures with C++ and STL.",
    color: "from-accent to-accent/70",
    icon: Lightbulb,
    available: false
  },
  {
    language: "Deep Learning using Pytorch",
    description: "Build neural networks and deep learning models with PyTorch.",
    color: "from-primary to-primary/70",
    icon: Sparkles,
    available: false
  },
  {
    language: "Machine Learning Basics",
    description: "Introduction to supervised and unsupervised learning algorithms.",
    color: "from-accent to-accent/70",
    icon: Brain,
    available: false
  },
  {
    language: "Mathematical Foundations for AI",
    description: "Essential math concepts: linear algebra, calculus, and statistics for AI.",
    color: "from-primary to-primary/70",
    icon: Target,
    available: false
  },
  {
    language: "Data Structures using C",
    description: "Learn efficient data organization and algorithmic thinking in C.",
    color: "from-accent to-accent/70",
    icon: Lightbulb,
    available: false
  }
];

const CoursesSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCourseClick = (e: React.MouseEvent, course: typeof courses[0]) => {
    if (course.available || course.path) {
      return;
    } else {
      e.preventDefault();
      setIsDialogOpen(true);
    }
  };

  return (
    <section id="courses" className="py-12 md:py-24 relative overflow-hidden" itemScope itemType="https://schema.org/ItemList">
      <DotPattern className="opacity-30" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <header className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6 border border-primary/20">
            <BookOpen className="w-3 h-3 md:w-4 md:h-4" />
            Interactive Courses
          </div>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-4" itemProp="name">
            Learn by Doing
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto" itemProp="description">
            Interactive textbooks with embedded code editors, AI explanations, and hands-on exercises
          </p>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <a
              key={course.language}
              href={course.path ? course.path : course.available ? "http://app.idhrona.com/" : "#"}
              target={course.path || course.available ? "_blank" : undefined}
              rel={course.path || course.available ? "noopener noreferrer" : undefined}
              onClick={(e) => handleCourseClick(e, course)}
              className={`group relative rounded-2xl md:rounded-3xl bg-card border border-border/50 p-5 md:p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 animate-scale-in overflow-hidden ${course.available ? 'ring-2 ring-primary/30' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              itemScope
              itemType="https://schema.org/Course"
              itemProp="itemListElement"
              aria-label={course.available ? `Navigate to ${course.language} course` : `Book a demo for ${course.language}`}
            >
              {/* Gradient blob */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${course.color} opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity`} aria-hidden="true" />
              
              <div className="relative z-10">
                <div className={`w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 md:mb-6 shadow-lg`} aria-hidden="true">
                  <course.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                
                <h3 className="font-serif text-base md:text-xl font-semibold mb-2 md:mb-3" itemProp="name">{course.language}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 md:mb-4" itemProp="description">{course.description}</p>
                
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
  <section id="how-it-works" className="py-12 md:py-24 bg-secondary/30 relative overflow-hidden" itemScope itemType="https://schema.org/HowTo">
    <DotPattern className="opacity-30" />
    
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <header className="text-center mb-8 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6 border border-primary/20">
          <Target className="w-3 h-3 md:w-4 md:h-4" />
          Simple Process
        </div>
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-4" itemProp="name">
          How It Works
        </h2>
        <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto" itemProp="description">
          Your learning journey in four simple steps
        </p>
      </header>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="group relative rounded-2xl md:rounded-3xl bg-card border border-border/50 p-4 md:p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              itemScope
              itemType="https://schema.org/HowToStep"
              itemProp="step"
            >
              <div className="flex items-start gap-3 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/25" itemProp="position" content={step.number}>
                    <step.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-xs md:text-sm font-bold text-primary mb-1 md:mb-2">{step.number}</div>
                  <h3 className="font-serif text-base md:text-xl mb-1 md:mb-2" itemProp="name">{step.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-base leading-relaxed" itemProp="text">{step.description}</p>
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
  <section className="py-12 md:py-24 relative overflow-hidden" itemScope itemType="https://schema.org/WebPageElement">
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" aria-hidden="true" />
    <DotPattern className="opacity-10" />
    <div className="absolute top-0 left-1/2 w-64 md:w-96 h-64 md:h-96 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
    
    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 text-white/90 text-xs md:text-sm font-medium mb-4 md:mb-6 border border-white/20">
          <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
          Start for free, no credit card required
        </div>
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 md:mb-6" itemProp="headline">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-primary-foreground/80 text-sm md:text-lg max-w-2xl mx-auto mb-6 md:mb-10" itemProp="description">
          Join thousands of students learning to code with AI guidance. When you're ready to learn, your AI guru awaits.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4">
          <a 
            href="http://app.idhrona.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 md:py-12 border-t border-border bg-secondary/30" itemScope itemType="https://schema.org/WPFooter">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="iDhrona - Interactive Learning Platform for Programming Educators" className="h-8 md:h-10 w-auto" width="120" height="40" itemProp="logo" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm">Features</a>
          <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm">Demo</a>
          <a href="http://app.idhrona.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm">Courses</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm">How It Works</a>
        </div>
        <p className="text-muted-foreground text-xs md:text-sm text-center" itemProp="copyrightHolder">
          © <span itemProp="copyrightYear">2025</span> <span itemProp="name">iDhrona</span>. When the student is ready, the master appears.
        </p>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background" itemScope itemType="https://schema.org/WebPage" lang="en-US">
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
