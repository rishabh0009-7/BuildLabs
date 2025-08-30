"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Menu,
  X,
  Check,
  ArrowRight,
  Star,
  Rocket,
  Code,
  Heart,
  MessageCircle,
  Map,
  Palette,
  Home,
  User,
  Briefcase,
  FileText,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { PricingCards } from "@/components/ui/pricing-cards";
import Globe from "@/components/ui/globe";
import { InfiniteSlider } from "@/components/core/infinite-slider";

// Counter component for animated numbers
const AnimatedCounter = ({
  end,
  duration = 2000,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function MVPLabsLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [pricingMode, setPricingMode] = useState<"mvp" | "maintenance">("mvp");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "Portfolio", url: "#portfolio", icon: Briefcase },
    { name: "Pricing", url: "#pricing", icon: FileText },
    { name: "FAQ", url: "#faq", icon: User },
    { name: "Contact", url: "#contact", icon: Phone },
  ];

  return (
    <div className="min-h-screen w-full relative bg-white">
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg overflow-hidden">
        <div className="relative container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Empty space - Left Side */}
          <div></div>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-800 hover:text-orange-600 font-semibold relative group transition-colors duration-200"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </button>

            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-800 hover:text-orange-600 font-semibold relative group transition-colors duration-200"
            >
              Project
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </button>

            <button
              onClick={() => scrollToSection("process")}
              className="text-gray-800 hover:text-orange-600 font-semibold relative group transition-colors duration-200"
            >
              Our Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </button>

            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-800 hover:text-orange-600 font-semibold relative group transition-colors duration-200"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-800 hover:text-orange-600 font-semibold relative group transition-colors duration-200"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* CTA Button - Right Side */}
          <div className="hidden md:block">
            <button
              onClick={() =>
                window.open(
                  "https://cal.com/rishabhbuildsmvp/30min?overlayCalendar=true",
                  "_blank"
                )
              }
              className="px-6 py-2 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
            >
              Book a Call →
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95">
            <nav className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.url.substring(1));
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  window.open(
                    "https://cal.com/rishabhbuildsmvp/30min?overlayCalendar=true",
                    "_blank"
                  );
                  setIsMenuOpen(false);
                }}
                className="w-full mt-2 px-6 py-2 bg-orange-500 text-white rounded-full font-bold transition-colors duration-200 hover:bg-orange-600 shadow-lg"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
              >
                Book a Call
              </button>
            </nav>
          </div>
        )}
      </header>

      <section
        id="home"
        className="relative pt-20 pb-2 overflow-hidden z-10 h-screen flex items-center justify-center"
      >
        <div className="relative container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center h-full">
            {/* Mobile Hero Image - Shows on smaller screens */}
            <div className="lg:hidden flex items-center justify-center mb-8">
              <img
                src="/herosection.jpg"
                alt="Hero section illustration"
                className="w-full max-w-7xl h-auto object-contain"
                style={{
                  mixBlendMode: "multiply",
                  filter: "none",
                }}
              />
            </div>

            {/* Left side - Content */}
            <div className="text-left max-w-4xl">
              {/* Hero Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                THIS MONTH: 2 BUILD SLOTS · $3,497 FIXED
              </div>
              {/* Main Heading - Left aligned */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-4 leading-tight tracking-wide font-[var(--font-hero)]">
                <div className="block">
                  Launch Your <span className="text-[#FF6B35]">MVP</span>
                </div>
                <div className="block mt-1 md:mt-2">
                  <span className="ml-8">
                    In <span className="text-[#FF6B35]">Days</span> ,
                  </span>
                  <br />
                  Not <span className="line-through text-gray-400">Months</span>
                </div>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-gray-700 mb-6 max-w-2xl leading-relaxed">
                We help founders and businesses transform ideas into
                investor-ready products—fast, affordable, and scalable.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  onClick={() =>
                    window.open(
                      "https://cal.com/rishabhbuildsmvp/30min?overlayCalendar=true",
                      "_blank"
                    )
                  }
                  className="px-8 py-4 text-lg bg-[#FF6B35] text-white rounded-full font-bold hover:bg-[#E55A2B] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{ textShadow: "0 1px 3px rgba(0,0,0,0.2)" }}
                >
                  Book a Free Strategy Call
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://cal.com/rishabhbuildsmvp/30min?overlayCalendar=true",
                      "_blank"
                    )
                  }
                  className="px-8 py-4 text-lg bg-white/90 backdrop-blur-sm text-orange-600 border-2 border-orange-200 rounded-full font-medium hover:bg-white hover:border-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Your MVP Now
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  No upfront payment
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Money-back guarantee
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Unlimited revisions
                </div>
              </div>
            </div>

            {/* Right side - Hero Image */}
            <div className="hidden lg:flex items-center justify-center">
              <img
                src="/herosection.jpg"
                alt="Hero section illustration"
                className="w-full max-w-8xl h-auto object-contain"
                style={{
                  mixBlendMode: "multiply",
                  filter: "none",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just developers—we're startup partners who understand
              the urgency of getting to market fast with a product that works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Speed</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Launch your MVP in as little as 4–6 weeks.
              </p>
            </Card>

            <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Check className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Affordability
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transparent pricing, no hidden costs.
              </p>
            </Card>

            <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Expert Team
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Developers, designers, and product strategists who understand
                startups.
              </p>
            </Card>

            <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Built with modern tech to grow with your business.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="py-20 bg-gray-900 relative z-10 overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From idea to launch in just a few weeks. Here's our proven process
              that gets your MVP to market fast.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Central Flow Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-500/30 transform -translate-x-1/2 hidden md:block"></div>

            {[
              {
                step: "Step 01",
                title: "Discovery Call",
                description:
                  "We dive deep into your idea, goals, and user needs. By the end of this call, we'll have a clear understanding of what we're building and how we'll build it.",
                position: "left",
              },
              {
                step: "Step 02",
                title: "Design & Planning",
                description:
                  "We create wireframes and define the MVP scope. You'll get a visual blueprint of exactly what we're going to build, ensuring we're aligned on every detail.",
                position: "right",
              },
              {
                step: "Step 03",
                title: "Development Sprint",
                description:
                  "Our team builds your MVP using modern technologies. You'll get regular updates and can provide feedback throughout the development process.",
                position: "left",
              },
              {
                step: "Step 04",
                title: "Testing & Refinement",
                description:
                  "We thoroughly test every feature and refine based on your feedback. Quality assurance ensures your MVP is ready for real users.",
                position: "right",
              },
              {
                step: "Step 05",
                title: "Launch & Deploy",
                description:
                  "Your MVP goes live with full deployment, hosting, and launch support. You're ready to start collecting user feedback and growing your business.",
                position: "left",
              },
            ].map((step, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, amount: 0.3 });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex items-center mb-16 ${
                    step.position === "right" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Number Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + 0.2,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center z-10 hidden md:flex"
                  >
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    initial={{
                      x: step.position === "right" ? 100 : -100,
                      opacity: 0,
                    }}
                    animate={
                      isInView
                        ? { x: 0, opacity: 1 }
                        : {
                            x: step.position === "right" ? 100 : -100,
                            opacity: 0,
                          }
                    }
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className={`w-full md:w-5/12 ${
                      step.position === "right"
                        ? "md:mr-auto md:ml-0"
                        : "md:ml-auto md:mr-0"
                    }`}
                  >
                    <Card className="bg-gray-800 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
                      <CardContent className="p-8">
                        <div className="mb-4">
                          <Badge className="bg-orange-500/20 text-orange-400 px-3 py-1 text-xs font-medium rounded-full mb-3">
                            {step.step}
                          </Badge>
                          <h3 className="text-2xl font-bold text-orange-400 mb-4">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 text-base leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* End Triangle */}
            <div className="flex justify-center mt-8">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-orange-500"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="py-20 bg-white relative z-10 overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              Our Projects
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We've Built
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These apps all started as nothing but an idea. We turned them into
              real tools used by customers, shown to investors, and shipped to
              market.
            </p>
          </div>

          <div className="mb-12">
            <InfiniteSlider speedOnHover={10} gap={32}>
              {/* TripGuide Card */}
              <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 w-[350px] flex-shrink-0 group hover:scale-105">
                <div className="relative">
                  <div className="aspect-video bg-gray-100 rounded-t-xl overflow-hidden">
                    <img
                      src="/ai-ecommerce-dashboard-interface.png"
                      alt="TripGuide - Travel App"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Travel App
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      TripGuide
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      A smart travel planning app that helps users discover
                      destinations, plan itineraries, and book accommodations
                      seamlessly.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      React Native
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      Node.js
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      MongoDB
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* PostKit Card */}
              <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 w-[350px] flex-shrink-0 group hover:scale-105">
                <div className="relative">
                  <div className="aspect-video bg-gray-100 rounded-t-xl overflow-hidden">
                    <img
                      src="/chatbot-platform-interface.png"
                      alt="PostKit - Web App"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Web App
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      PostKit
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      An AI-powered social media management platform that helps
                      creators and small businesses plan, create, and schedule
                      content.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      Next.js
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      TypeScript
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      PostgreSQL
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* EventSync Card */}
              <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 w-[350px] flex-shrink-0 group hover:scale-105">
                <div className="relative">
                  <div className="aspect-video bg-gray-100 rounded-t-xl overflow-hidden">
                    <img
                      src="/real-estate-app-interface.png"
                      alt="EventSync - Mobile App"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Mobile App
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      EventSync
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      A comprehensive event management app that helps organizers
                      create, promote, and manage events seamlessly.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      Flutter
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      Firebase
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      Dart
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* FormSnap Card */}
              <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 w-[350px] flex-shrink-0 group hover:scale-105">
                <div className="relative">
                  <div className="aspect-video bg-gray-100 rounded-t-xl overflow-hidden">
                    <img
                      src="/social-community-app-interface.png"
                      alt="FormSnap - Web App"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Web App
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      FormSnap
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      A simple form automation tool that lets users create smart
                      forms, collect responses, and send automated emails.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      React
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      Express.js
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      MySQL
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* HostSync Card */}
              <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 w-[350px] flex-shrink-0 group hover:scale-105">
                <div className="relative">
                  <div className="aspect-video bg-gray-100 rounded-t-xl overflow-hidden">
                    <img
                      src="/ai-ecommerce-dashboard-interface.png"
                      alt="HostSync - Mobile App"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Mobile App
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      HostSync
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      A property and guest management app that helps property
                      owners develop positive routines and track daily progress.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      React Native
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      GraphQL
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      AWS
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* SellScale Card */}
              <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 w-[350px] flex-shrink-0 group hover:scale-105">
                <div className="relative">
                  <div className="aspect-video bg-gray-100 rounded-t-xl overflow-hidden">
                    <img
                      src="/chatbot-platform-interface.png"
                      alt="SellScale - Web App"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Web App
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      SellScale
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      A comprehensive sales automation platform that helps teams
                      identify, automate, and optimize sales processes.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      Vue.js
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      Python
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200">
                      Redis
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </InfiniteSlider>
          </div>
        </div>
      </section>

      {/* Inspirational Text Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Your idea deserves more than{" "}
              <span className="text-gray-600">just a prototype.</span>
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                We turn visions into validated MVPs.
              </span>
            </h3>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="py-20 bg-white relative z-10 overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Actually Launch Your MVP
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Validate your app idea, get something real in front of users, and
              skip the 6-month dev cycle. All for a flat, founder-friendly
              price.
            </p>

            {/* Toggle Buttons */}
            <div className="flex justify-center mb-12">
              <div className="bg-white/80 backdrop-blur-sm p-1 rounded-full flex border border-orange-100 shadow-lg">
                <button
                  onClick={() => setPricingMode("mvp")}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    pricingMode === "mvp"
                      ? "bg-orange-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900 hover:bg-orange-50"
                  }`}
                >
                  MVP Development
                </button>
                <button
                  onClick={() => setPricingMode("maintenance")}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    pricingMode === "maintenance"
                      ? "bg-orange-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900 hover:bg-orange-50"
                  }`}
                >
                  Existing App Maintenance
                </button>
              </div>
            </div>
          </div>

          {/* MVP Development Plans */}
          {pricingMode === "mvp" && (
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {/* Left Card - Black */}
              <Card className="relative p-8 bg-gray-900 border border-gray-700 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Landing Page
                    </h3>
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold text-white">
                        $599
                      </span>
                      <span className="text-gray-300 text-lg">USD</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Custom responsive landing page
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          SEO-ready design
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Smooth animations
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Delivered in 7 days
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Unlimited revisions until satisfied
                        </span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 group-hover:scale-105 bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl"
                  >
                    Start Your Project →
                  </button>
                </CardContent>
              </Card>

              {/* Center Card - Orange */}
              <Card className="relative p-8 bg-orange-500 border border-orange-400 hover:shadow-xl transition-all duration-300 group scale-105">
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Complete MVP
                    </h3>
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold text-white">
                        $1,999
                      </span>
                      <span className="text-orange-100 text-lg">USD</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-white">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm leading-relaxed text-white">
                          Full MVP with custom UI
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-white">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm leading-relaxed text-white">
                          API integration
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-white">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm leading-relaxed text-white">
                          Backend setup
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-white">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm leading-relaxed text-white">
                          2–4 weeks delivery
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-white">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm leading-relaxed text-white">
                          Unlimited revisions until satisfied
                        </span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 group-hover:scale-105 bg-white text-orange-500 hover:bg-gray-100 shadow-lg hover:shadow-xl"
                  >
                    Start Your Project →
                  </button>
                </CardContent>
              </Card>

              {/* Right Card - Black */}
              <Card className="relative p-8 bg-gray-900 border border-gray-700 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Custom Solution
                    </h3>
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold text-white">
                        $2,999+
                      </span>
                      <span className="text-gray-300 text-lg">USD</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Fully tailored solution
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Advanced features
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Scaling-ready architecture
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Timelines based on requirements
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Dedicated project manager
                        </span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 group-hover:scale-105 bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl"
                  >
                    Start Your Project →
                  </button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Maintenance Plans */}
          {pricingMode === "maintenance" && (
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {/* Left Card - Black */}
              <Card className="relative p-8 bg-gray-900 border border-gray-700 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Basic Plan
                    </h3>
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold text-white">
                        $399
                      </span>
                      <span className="text-gray-300 text-lg">month</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Bug fixes
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Minor feature additions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Performance improvements
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Security updates
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Email support
                        </span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 group-hover:scale-105 bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl"
                  >
                    Start Your Project →
                  </button>
                </CardContent>
              </Card>

              {/* Center Card - Orange */}
              <Card className="relative p-8 bg-orange-500 border border-orange-400 hover:shadow-xl transition-all duration-300 group scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-500 text-white px-4 py-2 text-sm font-medium rounded-full">
                    Recommended
                  </Badge>
                </div>
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Standard Plan
                    </h3>
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold text-white">
                        $799
                      </span>
                      <span className="text-orange-100 text-lg">month</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-white">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm leading-relaxed text-white">
                          Everything in Basic
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-white">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm leading-relaxed text-white">
                          Major feature additions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-white">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm leading-relaxed text-white">
                          Priority support
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-white">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm leading-relaxed text-white">
                          Monthly performance reports
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-white">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm leading-relaxed text-white">
                          Code optimization
                        </span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 group-hover:scale-105 bg-white text-orange-500 hover:bg-gray-100 shadow-lg hover:shadow-xl"
                  >
                    Start Your Project →
                  </button>
                </CardContent>
              </Card>

              {/* Right Card - Black */}
              <Card className="relative p-8 bg-gray-900 border border-gray-700 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Premium Plan
                    </h3>
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold text-white">
                        $1,199
                      </span>
                      <span className="text-gray-300 text-lg">month</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Everything in Standard
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          24/7 support
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Custom feature roadmap
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Monthly health reports
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-orange-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed text-gray-300">
                          Dedicated developer
                        </span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 group-hover:scale-105 bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl"
                  >
                    Start Your Project →
                  </button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Custom Solution Text */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Need a custom solution?{" "}
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                Contact us for personalized pricing.
              </button>
            </p>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="py-24 bg-gradient-to-br from-gray-50 to-orange-50 relative z-10 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full text-sm font-medium mb-5">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              FAQ
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-5">
              Frequently Asked Questions
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Everything you need to know about our MVP development process and
              services.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="p-12 bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl border border-orange-200/50 hover:shadow-orange-500/10 transition-all duration-300">
              <Accordion
                type="single"
                collapsible
                className="space-y-6"
                defaultValue="item-0"
              >
                {[
                  {
                    question: "How fast can you launch an MVP?",
                    answer: (
                      <>
                        <p className="mb-4">
                          Most MVPs go live within weeks, not months. Our
                          process covers:
                        </p>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start">
                            <Check
                              className="text-orange-500 mr-2 mt-1 flex-shrink-0"
                              size={18}
                            />
                            <span>Defining essential features</span>
                          </li>
                          <li className="flex items-start">
                            <Check
                              className="text-orange-500 mr-2 mt-1 flex-shrink-0"
                              size={18}
                            />
                            <span>Building frontend and backend</span>
                          </li>
                          <li className="flex items-start">
                            <Check
                              className="text-orange-500 mr-2 mt-1 flex-shrink-0"
                              size={18}
                            />
                            <span>Deploying a functional, testable app</span>
                          </li>
                        </ul>
                        <p>
                          For more complex ideas, the timeline might extend
                          slightly—but with our AI-driven workflow, you'll get
                          speed without sacrificing quality.
                        </p>
                      </>
                    ),
                  },
                  {
                    question: "What's included in your MVP package?",
                    answer: (
                      <>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start">
                            <Check
                              className="text-orange-500 mr-2 mt-1 flex-shrink-0"
                              size={18}
                            />
                            <span>
                              3–4 core features (auth, dashboards, payments,
                              etc.)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <Check
                              className="text-orange-500 mr-2 mt-1 flex-shrink-0"
                              size={18}
                            />
                            <span>A fully functional, hosted web app</span>
                          </li>
                          <li className="flex items-start">
                            <Check
                              className="text-orange-500 mr-2 mt-1 flex-shrink-0"
                              size={18}
                            />
                            <span>
                              A responsive landing page for your product
                            </span>
                          </li>
                          <li className="flex items-start">
                            <Check
                              className="text-orange-500 mr-2 mt-1 flex-shrink-0"
                              size={18}
                            />
                            <span>
                              Minimal yet professional UI (AI-assisted for speed
                              and polish)
                            </span>
                          </li>
                        </ul>
                        <p>
                          Custom UI/UX design can be added on request—this adds
                          some extra time.
                        </p>
                      </>
                    ),
                  },
                  {
                    question: "Do you use no-code tools or custom coding?",
                    answer:
                      "We build everything with custom code enhanced by AI tools. While no-code platforms work for prototypes, they often struggle with scalability. Our approach ensures you get production-grade, future-proof software—without the limitations of low-code solutions.",
                  },
                  {
                    question: "What happens once the MVP is delivered?",
                    answer: (
                      <>
                        <p className="mb-3">You decide the next step:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check
                              className="text-orange-500 mr-2 mt-1 flex-shrink-0"
                              size={18}
                            />
                            <span>
                              <strong>Ongoing partnership</strong>—we keep
                              building new features, improving performance, and
                              maintaining your product.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <Check
                              className="text-orange-500 mr-2 mt-1 flex-shrink-0"
                              size={18}
                            />
                            <span>
                              <strong>Full handoff</strong>—we give you a clean,
                              documented codebase that any developer can work on
                              immediately.
                            </span>
                          </li>
                        </ul>
                        <p className="mt-3">
                          Either way, your MVP is built to scale.
                        </p>
                      </>
                    ),
                  },
                  {
                    question: "Can you include all the features I want?",
                    answer:
                      "If you have 10–15 features in mind, that's beyond an MVP. We'll help you prioritize the most critical 3–4 features so you can validate your idea quickly. Future phases can then be planned based on real user data, not assumptions.",
                  },
                  {
                    question:
                      "What AI tools do you use to speed up development?",
                    answer:
                      "We leverage AI-powered coding assistants and design accelerators to write code, automate testing, and optimize workflows. This means faster delivery without cutting corners—your product is still built with human oversight for quality and scalability.",
                  },
                  {
                    question: "Do you provide ongoing support and maintenance?",
                    answer:
                      "Yes! After launch, you can stay on a monthly plan where we handle updates, bug fixes, and new feature development. If you prefer full control, we'll hand over the codebase with documentation for a smooth transition.",
                  },
                ].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white/90 backdrop-blur-sm border border-orange-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <AccordionTrigger className="text-left font-semibold text-xl text-gray-900 hover:text-orange-600 px-8 py-8 hover:bg-orange-50/30 transition-all duration-300 [&[data-state=open]]:bg-orange-50/30 [&>svg]:transition-transform [&>svg]:duration-300 group-hover:scale-[1.02]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-8 pt-4 text-gray-700 text-lg leading-relaxed data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="py-16 bg-gray-900 border-t border-gray-800 relative z-10"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            {/* Logo and Description - Left Side (Much Bigger) */}
            <div className="md:col-span-6">
              <div className="mb-6">
                <span className="text-2xl font-bold text-white">MVP Labs</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Turn Your Idea Into a Revenue-Ready MVP in 2 Weeks
              </h3>
            </div>

            {/* Empty Center Space */}
            <div className="md:col-span-3"></div>

            {/* Pages Column - Right Side */}
            <div className="md:col-span-1.5">
              <h4 className="font-semibold text-white mb-4">Pages</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-300 hover:text-white text-base transition-colors font-medium"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("process")}
                    className="text-gray-300 hover:text-white text-base transition-colors font-medium"
                  >
                    Process
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="text-gray-300 hover:text-white text-base transition-colors font-medium"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="text-gray-300 hover:text-white text-base transition-colors font-medium"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="text-gray-300 hover:text-white text-base transition-colors font-medium"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal Column - Right Side */}
            <div className="md:col-span-1.5">
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-base transition-colors font-medium"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-base transition-colors font-medium"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-base transition-colors font-medium"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <span className="text-gray-300 text-base font-medium">
                    hello@mvplabs.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm text-center">
              © 2025 MVP Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
