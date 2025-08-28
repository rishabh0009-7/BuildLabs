"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu, X, Check, ArrowRight, Star, Rocket, Code, Heart, MessageCircle, Map, Palette, Home, User, Briefcase, FileText, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { PricingCards } from "@/components/ui/pricing-cards"
import Globe from "@/components/ui/globe"

// Counter component for animated numbers
const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count}</span>
}

export default function MVPLabsLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [pricingMode, setPricingMode] = useState<'mvp' | 'maintenance'>('mvp')

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "Portfolio", url: "#portfolio", icon: Briefcase },
    { name: "Why Choose Us", url: "#why-choose-us", icon: Star },
    { name: "Pricing", url: "#pricing", icon: FileText },
    { name: "FAQ", url: "#faq", icon: User },
    { name: "Contact", url: "#contact", icon: Phone },
  ]

  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Cool Blue Glow Top */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage: `
            radial-gradient(
              circle at top center,
              rgba(70, 130, 180, 0.5),
              transparent 70%
            )
          `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md relative">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">MVP Labs</span>
          </div>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-gray-600 hover:text-gray-900 font-medium relative group transition-colors duration-200">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection("process")} className="text-gray-600 hover:text-gray-900 font-medium relative group transition-colors duration-200">
              Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-gray-600 hover:text-gray-900 font-medium relative group transition-colors duration-200">
              Project
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection("why-choose-us")} className="text-gray-600 hover:text-gray-900 font-medium relative group transition-colors duration-200">
              Why Choose Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-gray-600 hover:text-gray-900 font-medium relative group transition-colors duration-200">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-gray-600 hover:text-gray-900 font-medium relative group transition-colors duration-200">
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* CTA Button - Right Side */}
          <div className="hidden md:block">
            <button 
              onClick={() => window.open('https://cal.com/rishabhbuildsmvp/30min?overlayCalendar=true', '_blank')}
              className="px-6 py-2 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
              style={{textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}
            >
              Book a Call →
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                    scrollToSection(item.url.substring(1))
                    setIsMenuOpen(false)
                  }}
                  className="text-left text-gray-900 font-medium py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => {
                  window.open('https://cal.com/rishabhbuildsmvp/30min?overlayCalendar=true', '_blank')
                  setIsMenuOpen(false)
                }}
                className="w-full mt-2 px-6 py-2 bg-blue-500 text-white rounded-full font-bold transition-colors duration-200 hover:bg-blue-600 shadow-lg"
                style={{textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}
              >
                Book a Call
              </button>
            </nav>
          </div>
        )}
      </header>

      <section id="home" className="relative pt-20 pb-12 overflow-hidden z-10 min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-white"></div>

        <div className="relative container mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm text-blue-600 rounded-full text-sm font-medium mb-6 shadow-lg border border-blue-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              Launch Your Startup Faster
            </div>
  
            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-gray-900 mb-6 leading-tight tracking-tight font-[var(--font-phonk)]">
              <div className="block">Launch Your MVP</div>
              <div className="block mt-1 md:mt-2">
                in just <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">14 Days</span>, Not <span className="line-through text-gray-400">Months</span> .
              </div>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              We help founders and businesses transform ideas into investor-ready products—fast, affordable, and scalable.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button 
                onClick={() => window.open('https://cal.com/rishabhbuildsmvp/30min?overlayCalendar=true', '_blank')}
                className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-full font-bold hover:from-blue-700 hover:to-sky-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{textShadow: '0 1px 3px rgba(0,0,0,0.2)'}}
              >
                Book a Free Strategy Call
              </button>
              <button 
                onClick={() => window.open('https://cal.com/rishabhbuildsmvp/30min?overlayCalendar=true', '_blank')}
                className="px-8 py-4 text-lg bg-white/90 backdrop-blur-sm text-blue-600 border-2 border-blue-200 rounded-full font-medium hover:bg-white hover:border-blue-300 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Your 14-Day MVP Now
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                No upfront payment
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Money-back guarantee
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Unlimited revisions
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-gray-900 relative overflow-hidden z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How We Turn Your Idea into a Launch-Ready MVP</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You bring the idea, we turn it into something real. Here's what the 2-week journey looks like.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/30 transform -translate-x-1/2 hidden md:block"></div>
            
            {[
              {
                step: "Step 01",
                title: "Kickoff Call",
                description: "We dive into your idea, goals and user needs — and by the end of the call, we'll understand what we're building and how we'll build it.",
                position: "left"
              },
              {
                step: "Step 02", 
                title: "MVP Blueprint",
                description: "We define what's in (and what's out). You'll get a fully functional wireframe directly into what we're going to build.",
                position: "right"
              },
              {
                step: "Step 03",
                title: "Build Sprint", 
                description: "We execute the code. You'll get a fully functional wireframe and an MVP in 10-14 days ready for users to signup.",
                position: "left"
              },
              {
                step: "Step 04",
                title: "Launch Day",
                description: "You go live with your support and success tools, post-launch fixes, and hands-on help if you want to keep building.",
                position: "right"
              },
            ].map((step, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, amount: 0.3 });
              
              return (
                <motion.div 
                  key={index} 
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex items-center mb-16 ${step.position === 'right' ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Step Number Circle */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2, type: 'spring', stiffness: 100 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center z-10 hidden md:flex"
                  >
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </motion.div>
                  
                  {/* Card */}
                  <motion.div 
                    initial={{ x: step.position === 'right' ? 100 : -100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: step.position === 'right' ? 100 : -100, opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: 'spring', stiffness: 100 }}
                    className={`w-full md:w-5/12 ${step.position === 'right' ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'}`}
                  >
                    <Card className="bg-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <Badge className="bg-blue-500/20 text-blue-400 px-3 py-1 text-xs font-medium rounded-full mb-3">
                            {step.step}
                          </Badge>
                          <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We've Built</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These apps all started as nothing but an idea. We turned them into real tools used by customers, shown to investors, and shipped to market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "TripGuide",
                category: "Travel App",
                description: "A smart travel planning app that helps users discover destinations, plan itineraries, and book accommodations seamlessly — making travel planning effortless and enjoyable.",
                image: "/ai-ecommerce-dashboard-interface.png",
              },
              {
                name: "PostKit",
                category: "Web App",
                description: "An AI-powered social media management platform that helps creators and small businesses plan, create, and schedule content across all their platforms — from one unified dashboard.",
                image: "/chatbot-platform-interface.png",
              },
              {
                name: "EventSync",
                category: "Mobile App",
                description: "A comprehensive event management app that helps organizers create, promote, and manage events seamlessly with ticketing, attendee management, and real-time analytics.",
                image: "/real-estate-app-interface.png",
              },
              {
                name: "FormSnap",
                category: "Web App",
                description: "A simple form automation tool that lets users create smart forms, collect responses, and send automated emails — all without writing a single line of code.",
                image: "/social-community-app-interface.png",
              },
              {
                name: "HostSync",
                category: "Mobile App",
                description: "A property and guest management app that helps property owners develop positive routines, track daily progress, and build lasting habits with intuitive design and motivational features.",
                image: "/ai-ecommerce-dashboard-interface.png",
              },
              {
                name: "SellScale",
                category: "Web App",
                description: "A comprehensive sales automation platform that helps teams identify, automate, and optimize sales processes, track leads, analyze performance, and scale their business.",
                image: "/chatbot-platform-interface.png",
              },
            ].map((project, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                    <Badge className="bg-blue-100 text-blue-700 text-xs px-2 py-1">{project.category}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors duration-200">
              Show More Projects
            </button>
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="py-20 bg-gray-900 relative overflow-hidden z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why MVP Labs is Your Best Choice</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just developers—we're startup partners who understand the urgency of getting to market fast with a product that works.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-black text-blue-400 mb-4">
                <AnimatedCounter end={30} />+
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Projects Completed</h3>
              <p className="text-gray-400">MVPs launched and validated in the market</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-black text-blue-400 mb-4">
                <AnimatedCounter end={10} />+
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Happy Clients</h3>
              <p className="text-gray-400">Founders who trusted us with their vision</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-black text-blue-400 mb-4">
                <AnimatedCounter end={4} />+
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Years of Experience</h3>
              <p className="text-gray-400">Building products that scale and succeed</p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Lightning Fast Delivery",
                description: "14-day MVP delivery guaranteed. We use AI-powered development to move at startup speed without compromising quality."
              },
              {
                icon: Code,
                title: "Production-Ready Code",
                description: "No shortcuts, no technical debt. Every line of code is written to scale from day one with your growing user base."
              },
              {
                icon: Heart,
                title: "Founder-First Approach",
                description: "We think like founders, not just developers. Every decision is made with your business goals and user needs in mind."
              },
              {
                icon: Star,
                title: "Proven Track Record",
                description: "30+ successful MVPs launched, with founders raising funding and acquiring customers within months of launch."
              },
              {
                icon: MessageCircle,
                title: "Unlimited Revisions",
                description: "We don't stop until you're 100% satisfied. Your success is our success, and we'll iterate until we get it right."
              },
              {
                icon: Palette,
                title: "Modern Tech Stack",
                description: "Built with the latest technologies that investors and technical teams recognize and respect."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Actually Launch Your MVP
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Validate your app idea, get something real in front of users, and skip the 6-month dev cycle. All for a flat, founder-friendly price.
            </p>

            {/* Toggle Buttons */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 p-1 rounded-full flex">
                <button
                  onClick={() => setPricingMode('mvp')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    pricingMode === 'mvp'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  MVP Development
                </button>
                <button
                  onClick={() => setPricingMode('maintenance')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    pricingMode === 'maintenance'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Existing App Maintenance
                </button>
              </div>
            </div>
          </div>

          {/* MVP Development Plans */}
          {pricingMode === 'mvp' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
              {[
                {
                  name: "Landing Page",
                  price: "$599",
                  period: "USD",
                  features: [
                    "Custom responsive landing page",
                    "SEO-ready design",
                    "Smooth animations",
                    "Delivered in 7 days",
                    "Unlimited revisions until satisfied"
                  ],
                  buttonText: "Start Your Project →",
                  recommended: false
                },
                {
                  name: "Complete MVP",
                  price: "$1,999",
                  period: "USD",
                  features: [
                    "Full MVP with custom UI",
                    "API integration",
                    "Backend setup",
                    "2–4 weeks delivery",
                    "Unlimited revisions until satisfied"
                  ],
                  buttonText: "Start Your Project →",
                  recommended: true
                },
                {
                  name: "Custom Solution",
                  price: "$2,999+",
                  period: "USD",
                  features: [
                    "Fully tailored solution",
                    "Advanced features",
                    "Scaling-ready architecture",
                    "Timelines based on requirements",
                    "Dedicated project manager"
                  ],
                  buttonText: "Start Your Project →",
                  recommended: false
                }
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative p-8 bg-white hover:shadow-xl transition-all duration-300 group ${
                    plan.recommended
                      ? 'border-2 border-blue-500 shadow-lg scale-105'
                      : 'border border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white px-4 py-2 text-sm font-medium rounded-full">
                        Recommended
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-0">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                      <div className="flex items-baseline justify-center space-x-1">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-500 text-lg">{plan.period}</span>
                      </div>
                    </div>

                    <div className="mb-8">
                      <ul className="space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-blue-500">
                              <Check className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-sm leading-relaxed text-gray-700">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => {
                        const element = document.getElementById("contact")
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                      className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 group-hover:scale-105 ${
                        plan.recommended
                          ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl'
                          : 'bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-50 hover:border-blue-600'
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Maintenance Plans */}
          {pricingMode === 'maintenance' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
              {[
                {
                  name: "Basic Plan",
                  price: "$399",
                  period: "month",
                  features: [
                    "Bug fixes",
                    "Minor feature additions",
                    "Performance improvements",
                    "Security updates",
                    "Email support"
                  ],
                  buttonText: "Start Your Project →",
                  recommended: false
                },
                {
                  name: "Standard Plan",
                  price: "$799",
                  period: "month",
                  features: [
                    "Everything in Basic",
                    "Major feature additions",
                    "Priority support",
                    "Monthly performance reports",
                    "Code optimization"
                  ],
                  buttonText: "Start Your Project →",
                  recommended: true
                },
                {
                  name: "Premium Plan",
                  price: "$1,199",
                  period: "month",
                  features: [
                    "Everything in Standard",
                    "24/7 support",
                    "Custom feature roadmap",
                    "Monthly health reports",
                    "Dedicated developer"
                  ],
                  buttonText: "Start Your Project →",
                  recommended: false
                }
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative p-8 bg-white hover:shadow-xl transition-all duration-300 group ${
                    plan.recommended
                      ? 'border-2 border-blue-500 shadow-lg scale-105'
                      : 'border border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white px-4 py-2 text-sm font-medium rounded-full">
                        Recommended
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-0">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                      <div className="flex items-baseline justify-center space-x-1">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-500 text-lg">{plan.period}</span>
                      </div>
                    </div>

                    <div className="mb-8">
                      <ul className="space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-blue-500">
                              <Check className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-sm leading-relaxed text-gray-700">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => {
                        const element = document.getElementById("contact")
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                      className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 group-hover:scale-105 ${
                        plan.recommended
                          ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl'
                          : 'bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-50 hover:border-blue-600'
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Custom Solution Text */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Need a custom solution? <button onClick={() => {
                const element = document.getElementById("contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }} className="text-blue-500 hover:text-blue-600 font-medium">Contact us for personalized pricing.</button>
            </p>
          </div>
        </div>
      </section>

      <section id="remote" className="py-20 bg-gray-900 relative overflow-hidden z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              We Work Worldwide
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Global Collaboration, <span className="text-blue-400">Zero Boundaries</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  We collaborate with clients from every corner of the world. Distance doesn't limit innovation—our fully remote approach means we can deliver exceptional MVPs no matter where you're located.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Map className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Worldwide Reach</h3>
                    <p className="text-gray-300">From Silicon Valley to Singapore, we've built MVPs for clients across 6 continents.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Seamless Communication</h3>
                    <p className="text-gray-300">Real-time collaboration tools and regular check-ins keep you connected throughout the process.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Location Independent</h3>
                    <p className="text-gray-300">Your location doesn't determine your access to world-class MVP development.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => window.open('https://cal.com/rishabhbuildsmvp/30min?overlayCalendar=true', '_blank')}
                  className="px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Let's Build Together →
                </button>
              </div>
            </div>

            {/* Right side - Globe */}
            <div className="relative flex items-center justify-center">
              <Globe />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-5">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              FAQ
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">Everything you need to know about our MVP development process and services.</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="p-10 bg-white shadow-xl rounded-3xl border border-gray-100">
              <Accordion type="single" collapsible className="space-y-6">
              {[
                {
                  question: "How fast can you launch an MVP?",
                  answer: (
                    <>
                      <p className="mb-4">Most MVPs go live in 14 days. Our process covers:</p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                          <span>Defining essential features</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                          <span>Building frontend and backend</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                          <span>Deploying a functional, testable app</span>
                        </li>
                      </ul>
                      <p>For more complex ideas, the timeline might extend slightly—but with our AI-driven workflow, you'll get speed without sacrificing quality.</p>
                    </>
                  ),
                },
                {
                  question: "What's included in your MVP package?",
                  answer: (
                    <>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                          <span>3–4 core features (auth, dashboards, payments, etc.)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                          <span>A fully functional, hosted web app</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                          <span>A responsive landing page for your product</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                          <span>Minimal yet professional UI (AI-assisted for speed and polish)</span>
                        </li>
                      </ul>
                      <p>Custom UI/UX design can be added on request—this adds some extra time.</p>
                    </>
                  ),
                },
                {
                  question: "Do you use no-code tools or custom coding?",
                  answer: "We build everything with custom code enhanced by AI tools. While no-code platforms work for prototypes, they often struggle with scalability. Our approach ensures you get production-grade, future-proof software—without the limitations of low-code solutions.",
                },
                {
                  question: "What happens once the MVP is delivered?",
                  answer: (
                    <>
                      <p className="mb-3">You decide the next step:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                          <span><strong>Ongoing partnership</strong>—we keep building new features, improving performance, and maintaining your product.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                          <span><strong>Full handoff</strong>—we give you a clean, documented codebase that any developer can work on immediately.</span>
                        </li>
                      </ul>
                      <p className="mt-3">Either way, your MVP is built to scale.</p>
                    </>
                  ),
                },
                {
                  question: "Can you include all the features I want?",
                  answer: "If you have 10–15 features in mind, that's beyond an MVP. We'll help you prioritize the most critical 3–4 features so you can validate your idea quickly. Future phases can then be planned based on real user data, not assumptions.",
                },
                {
                  question: "What AI tools do you use to speed up development?",
                  answer: "We leverage AI-powered coding assistants and design accelerators to write code, automate testing, and optimize workflows. This means faster delivery without cutting corners—your product is still built with human oversight for quality and scalability.",
                },
                {
                  question: "Do you provide ongoing support and maintenance?",
                  answer: "Yes! After launch, you can stay on a monthly plan where we handle updates, bug fixes, and new feature development. If you prefer full control, we'll hand over the codebase with documentation for a smooth transition.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="text-left font-semibold text-lg text-gray-900 hover:text-blue-600 px-8 py-6 hover:bg-blue-50/50 transition-all duration-200 [&[data-state=open]]:bg-blue-50/50">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-gray-600">
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
                const element = document.getElementById("contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="px-8 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-16 bg-gray-900 border-t border-gray-800 relative z-10">
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
                <li><button onClick={() => scrollToSection("home")} className="text-gray-300 hover:text-white text-base transition-colors font-medium">Home</button></li>
                <li><button onClick={() => scrollToSection("process")} className="text-gray-300 hover:text-white text-base transition-colors font-medium">Process</button></li>
                <li><button onClick={() => scrollToSection("portfolio")} className="text-gray-300 hover:text-white text-base transition-colors font-medium">Projects</button></li>
                <li><button onClick={() => scrollToSection("pricing")} className="text-gray-300 hover:text-white text-base transition-colors font-medium">Pricing</button></li>
                <li><button onClick={() => scrollToSection("faq")} className="text-gray-300 hover:text-white text-base transition-colors font-medium">FAQ</button></li>
              </ul>
            </div>

            {/* Legal Column - Right Side */}
            <div className="md:col-span-1.5">
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white text-base transition-colors font-medium">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-base transition-colors font-medium">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-base transition-colors font-medium">Cookie Policy</a></li>
                <li><span className="text-gray-300 text-base font-medium">hello@mvplabs.com</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm text-center">© 2025 MVP Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
