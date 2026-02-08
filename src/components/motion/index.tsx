import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState, type ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// ─── ScrollReveal ──────────────────────────────────────────────────────────
// Pure CSS + IntersectionObserver approach — no flicker.
// Elements start hidden via CSS, observer adds a class to reveal.

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  distance = 20,
  once = true,
  amount = 0.2,
  className = "",
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        }
      },
      { threshold: amount }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, amount]);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)";
    switch (direction) {
      case "up": return `translate3d(0, ${distance}px, 0)`;
      case "down": return `translate3d(0, -${distance}px, 0)`;
      case "left": return `translate3d(${distance}px, 0, 0)`;
      case "right": return `translate3d(-${distance}px, 0, 0)`;
      case "none": return "translate3d(0, 0, 0)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

// ─── FadeInStagger ─────────────────────────────────────────────────────────
// Pure CSS staggered fade-in for card grids.
// Each child starts invisible via CSS, observer triggers class addition.

type StaggerVariant = "scale" | "slideUp";

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

interface StaggerItemProps {
  children: ReactNode;
  variant?: StaggerVariant;
  className?: string;
  // Injected props — internal use only
  _staggerIndex?: number;
  _staggerDelay?: number;
  [key: string]: any;
}

export const StaggerContainer = ({
  children,
  staggerDelay = 0.08,
  className = "",
}: StaggerContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Pass visibility and index info to children
  const childArray = Array.isArray(children) ? children : [children];
  const enhancedChildren = childArray.map((child: any, index: number) => {
    if (child && child.type === StaggerItem) {
      return { ...child, props: { ...child.props, _staggerIndex: index, _staggerDelay: staggerDelay, _isVisible: isVisible } };
    }
    // For mapped arrays that produce arrays of StaggerItems
    if (Array.isArray(child)) {
      return child.map((c: any, i: number) => {
        if (c && c.type === StaggerItem) {
          return { ...c, props: { ...c.props, _staggerIndex: i, _staggerDelay: staggerDelay, _isVisible: isVisible } };
        }
        return c;
      });
    }
    return child;
  });

  return (
    <div ref={ref} className={className}>
      {enhancedChildren}
    </div>
  );
};

export const StaggerItem = ({
  children,
  variant = "scale",
  className = "",
  _staggerIndex = 0,
  _staggerDelay = 0,
  _isVisible = false,
  ...rest
}: StaggerItemProps & { _isVisible?: boolean }) => {
  const getTransform = () => {
    if (_isVisible) return "translate3d(0, 0, 0) scale(1)";
    switch (variant) {
      case "scale": return "translate3d(0, 0, 0) scale(0.95)";
      case "slideUp": return "translate3d(0, 20px, 0) scale(1)";
    }
  };

  const delay = _staggerIndex * _staggerDelay;

  return (
    <div
      className={className}
      style={{
        opacity: _isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.4s ease-out ${delay}s, transform 0.4s ease-out ${delay}s`,
        willChange: _isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

// ─── ParallaxLayer ─────────────────────────────────────────────────────────
// This one stays as Framer Motion — it's a scroll-driven transform, not a
// visibility toggle, so it doesn't have the flicker problem.

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  enableOnMobile?: boolean;
}

export const ParallaxLayer = ({
  children,
  speed = 0.1,
  className,
  enableOnMobile = false,
}: ParallaxLayerProps) => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-speed * 100, speed * 100]);

  if (shouldReduce || (isMobile && !enableOnMobile)) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};
