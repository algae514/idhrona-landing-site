import { Users, TrendingUp, Code, Lightbulb, BarChart3, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50" role="navigation" aria-label="Main navigation">
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
        <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors" role="menuitem" aria-label="View Features section">Features</a>
        <a href="#courses" className="text-muted-foreground hover:text-foreground transition-colors" role="menuitem" aria-label="View Courses section">Courses</a>
        <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors" role="menuitem" aria-label="Learn how it works">How It Works</a>
      </div>
      <Button variant="accent" size="lg" aria-label="Get started with iDhrona">Get Started</Button>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" aria-label="Hero section" itemScope itemType="https://schema.org/WebPageElement">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" aria-hidden="true" />
    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" aria-hidden="true" />
    <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} aria-hidden="true" />
    
    <div className="container mx-auto px-6 relative z-10">
      <header className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in" role="status" aria-label="Platform tagline">
          <Lightbulb className="w-4 h-4" aria-hidden="true" />
          Live Interactive Textbooks for Modern Educators
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl font-normal leading-tight mb-6 animate-slide-up" itemProp="headline">
          Understand Your Students.
          <br />
          <span className="text-gradient">Transform Your Teaching.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }} itemProp="description">
          Empower your classroom with real-time insights into student challenges. 
          Our interactive textbooks help you identify struggles early and adapt your approach for better outcomes.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }} role="group" aria-label="Call to action buttons">
          <Button variant="accent" size="xl" aria-label="Start your free trial of iDhrona" itemProp="url">
            Start Free Trial
          </Button>
          <Button variant="heroOutline" size="xl" aria-label="Watch a demo of iDhrona platform">
            Watch Demo
          </Button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }} role="group" aria-label="Platform statistics">
          <div className="flex items-center gap-2" itemScope itemType="https://schema.org/QuantitativeValue">
            <Users className="w-5 h-5" aria-hidden="true" />
            <span className="text-sm">
              <span className="sr-only">Over </span>
              <span itemProp="value">5,000+</span> <span itemProp="name">Educators</span>
            </span>
          </div>
          <div className="flex items-center gap-2" itemScope itemType="https://schema.org/QuantitativeValue">
            <BarChart3 className="w-5 h-5" aria-hidden="true" />
            <span className="text-sm">
              <span className="sr-only">Up to </span>
              <span itemProp="value">40%</span> <span itemProp="name">Better Outcomes</span>
            </span>
          </div>
        </div>
      </header>
    </div>
  </section>
);

const features = [
  {
    icon: Users,
    title: "Student Behavior Analytics",
    description: "Track reading patterns, time spent on concepts, and identify where students struggle most in real-time."
  },
  {
    icon: TrendingUp,
    title: "Progress Dashboards",
    description: "Visual dashboards showing class-wide trends and individual student progress through interactive content."
  },
  {
    icon: Lightbulb,
    title: "Problem Detection",
    description: "AI-powered insights that highlight common misconceptions and suggest targeted interventions."
  },
  {
    icon: BookOpen,
    title: "Interactive Content",
    description: "Live coding exercises, quizzes, and challenges embedded directly in the textbook experience."
  },
  {
    icon: Code,
    title: "Code Execution",
    description: "Students run code directly in the browser while you see their attempts and error patterns."
  },
  {
    icon: BarChart3,
    title: "Teaching Insights",
    description: "Get personalized recommendations to improve your explanations based on student data."
  }
];

const FeaturesSection = () => (
  <section id="features" className="py-24 bg-secondary/30" aria-labelledby="features-heading" itemScope itemType="https://schema.org/ItemList">
    <div className="container mx-auto px-6">
      <header className="text-center mb-16">
        <h2 id="features-heading" className="font-serif text-4xl md:text-5xl mb-4" itemProp="name">
          Everything You Need to Excel
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto" itemProp="description">
          Powerful tools designed specifically for programming educators
        </p>
      </header>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
        {features.map((feature, index) => (
          <article 
            key={feature.title}
            className="card-elevated p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            role="listitem"
            itemScope
            itemType="https://schema.org/SoftwareApplication"
            itemProp="itemListElement"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4" aria-hidden="true">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl mb-2" itemProp="name">{feature.title}</h3>
            <p className="text-muted-foreground" itemProp="description">{feature.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const courses = [
  {
    language: "C Programming",
    level: "Fundamentals to Advanced",
    topics: ["Pointers & Memory", "Data Structures", "File I/O", "Algorithms"],
    color: "from-primary to-primary-glow",
    icon: "C"
  },
  {
    language: "Python Programming",
    level: "Beginner to Intermediate",
    topics: ["Core Syntax", "OOP Concepts", "Libraries", "Data Analysis"],
    color: "from-accent to-accent/70",
    icon: "Py"
  }
];

const CoursesSection = () => (
  <section id="courses" className="py-24" itemScope itemType="https://schema.org/ItemList">
    <div className="container mx-auto px-6">
      <header className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl mb-4" itemProp="name">
          Available Courses
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto" itemProp="description">
          Comprehensive interactive textbooks for foundational programming languages
        </p>
      </header>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {courses.map((course, index) => (
          <article 
            key={course.language}
            className="card-elevated p-8 relative overflow-hidden group animate-scale-in"
            style={{ animationDelay: `${index * 0.15}s` }}
            itemScope
            itemType="https://schema.org/Course"
            itemProp="itemListElement"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} aria-hidden="true" />
            
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6`} aria-hidden="true">
              <span className="text-2xl font-bold text-primary-foreground">{course.icon}</span>
            </div>
            
            <h3 className="font-serif text-2xl mb-2" itemProp="name">{course.language}</h3>
            <p className="text-muted-foreground mb-6" itemProp="educationalLevel">{course.level}</p>
            
            <div className="flex flex-wrap gap-2 mb-6" itemProp="teaches" itemScope itemType="https://schema.org/ItemList">
              {course.topics.map(topic => (
                <span key={topic} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm" itemProp="itemListElement">
                  {topic}
                </span>
              ))}
            </div>
            
            <Button variant="hero" className="w-full" aria-label={`Explore ${course.language} course`}>
              Explore Course
            </Button>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const steps = [
  {
    number: "01",
    title: "Assign Interactive Content",
    description: "Share live textbook chapters with your students. They access engaging, executable content online."
  },
  {
    number: "02",
    title: "Monitor Real-Time Progress",
    description: "See which sections take longer, where students re-read, and what code they struggle with."
  },
  {
    number: "03",
    title: "Get Actionable Insights",
    description: "Receive suggestions on which concepts need revisiting and how to improve explanations."
  },
  {
    number: "04",
    title: "Improve & Iterate",
    description: "Refine your teaching approach based on data. Watch student outcomes improve over time."
  }
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 bg-secondary/30" itemScope itemType="https://schema.org/HowTo">
    <div className="container mx-auto px-6">
      <header className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl mb-4" itemProp="name">
          How It Works
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto" itemProp="description">
          A simple workflow that transforms how you understand and teach your students
        </p>
      </header>
      
      <div className="max-w-4xl mx-auto" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
        {steps.map((step, index) => (
          <div 
            key={step.number}
            className="flex gap-6 mb-8 last:mb-0 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
            itemScope
            itemType="https://schema.org/HowToStep"
            itemProp="step"
          >
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center" itemProp="position" content={step.number}>
                <span className="text-primary-foreground font-bold" aria-hidden="true">{step.number}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 h-16 bg-border mx-auto mt-2" aria-hidden="true" />
              )}
            </div>
            <div className="pt-2">
              <h3 className="font-serif text-xl mb-2" itemProp="name">{step.title}</h3>
              <p className="text-muted-foreground" itemProp="text">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24 relative overflow-hidden" itemScope itemType="https://schema.org/WebPageElement">
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" aria-hidden="true" />
    <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-6" itemProp="headline">
        Ready to Transform Your Teaching?
      </h2>
      <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10" itemProp="description">
        Join thousands of educators who are using data-driven insights to help their students succeed in programming.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="accent" size="xl" aria-label="Start your free trial of iDhrona">
          Start Your Free Trial
        </Button>
        <Button 
          variant="outline" 
          size="xl"
          className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
          aria-label="Schedule a demo of iDhrona"
        >
          Schedule a Demo
        </Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-border" itemScope itemType="https://schema.org/WPFooter">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="iDhrona - Interactive Learning Platform for Programming Educators" className="h-10 w-auto" width="120" height="40" itemProp="logo" />
        </div>
        <p className="text-muted-foreground text-sm" itemProp="copyrightHolder">
          © <span itemProp="copyrightYear">2025</span> <span itemProp="name">iDhrona</span>. Empowering educators with interactive learning.
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
      <FeaturesSection />
      <CoursesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
