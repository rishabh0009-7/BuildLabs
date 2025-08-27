"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu, X, Check, ArrowRight, Star, Rocket, Code, Heart, MessageCircle, Map, Palette, Home, User, Briefcase, FileText, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

export default function MVPLabsLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

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
    { name: "Pricing", url: "#pricing", icon: FileText },
    { name: "FAQ", url: "#faq", icon: User },
    { name: "Contact", url: "#contact", icon: Phone },
  ]

  return (
    <div className="min-h-screen w-full bg-green-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo - Left Side */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">MVP Labs</span>
          </div>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-gray-600 hover:text-gray-900 font-medium">Home</button>
            <button onClick={() => scrollToSection("process")} className="text-gray-600 hover:text-gray-900 font-medium">Process</button>
            <button onClick={() => scrollToSection("portfolio")} className="text-gray-600 hover:text-gray-900 font-medium">Project</button>
            <button onClick={() => scrollToSection("pricing")} className="text-gray-600 hover:text-gray-900 font-medium">Pricing</button>
            <button onClick={() => scrollToSection("faq")} className="text-gray-600 hover:text-gray-900 font-medium">FAQ</button>
          </nav>

          {/* CTA Button - Right Side */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors duration-200"
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
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.url.substring(1))
                    setIsMenuOpen(false)
                  }}
                  className="text-left text-white font-medium py-2 px-4 rounded hover:bg-black transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => {
                  scrollToSection("contact")
                  setIsMenuOpen(false)
                }}
                className="w-full mt-2 px-6 py-2 bg-white text-gray-900 border border-gray-300 rounded-md font-medium transition-colors duration-200 hover:bg-gray-50"
              >
                Book a Call
              </button>
            </nav>
          </div>
        )}
      </header>

      <section id="home" className="pt-32 pb-20 bg-gray-50 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Cards - Above Content */}
          <div className="absolute top-32 left-10 bg-white rounded-lg shadow-lg p-4 animate-bounce" style={{animationDuration: '3s'}}>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">MVP Ready</span>
            </div>
          </div>
          
          <div className="absolute top-40 right-16 bg-white rounded-lg shadow-lg p-4 animate-pulse">
            <div className="flex items-center space-x-2">
              <Rocket className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">14 Days</span>
            </div>
          </div>

          {/* Floating Cards - Below Content */}
          <div className="absolute bottom-32 left-20 bg-white rounded-lg shadow-lg p-4" style={{animation: 'float 4s ease-in-out infinite'}}>
            <div className="flex items-center space-x-2">
              <Code className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Full Stack</span>
            </div>
          </div>

          <div className="absolute bottom-40 right-32 bg-white rounded-lg shadow-lg p-4 animate-bounce" style={{animationDuration: '2.5s', animationDelay: '1s'}}>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Founder Love</span>
            </div>
          </div>

          {/* Floating Circles */}
          <div className="absolute top-16 right-10 w-16 h-16 bg-green-100 rounded-full opacity-60 animate-ping" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-20 right-20 w-12 h-12 bg-green-200 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-80 left-32 w-8 h-8 bg-green-300 rounded-full opacity-50" style={{animation: 'float 3s ease-in-out infinite'}}></div>
          <div className="absolute top-60 right-32 w-6 h-6 bg-green-200 rounded-full opacity-30 animate-bounce" style={{animationDuration: '2s'}}></div>
          <div className="absolute bottom-40 left-16 w-10 h-10 bg-green-100 rounded-full opacity-50 animate-ping" style={{animationDuration: '3.5s'}}></div>
          <div className="absolute top-96 right-8 w-4 h-4 bg-green-400 rounded-full opacity-60" style={{animation: 'float 2.5s ease-in-out infinite'}}></div>
          <div className="absolute bottom-60 right-40 w-14 h-14 bg-green-50 rounded-full opacity-40 animate-pulse" style={{animationDuration: '2.8s'}}></div>
          <div className="absolute top-40 left-40 w-5 h-5 bg-green-300 rounded-full opacity-45 animate-bounce" style={{animationDuration: '3.2s'}}></div>
          <div className="absolute bottom-80 left-8 w-7 h-7 bg-green-200 rounded-full opacity-35" style={{animation: 'float 4.2s ease-in-out infinite'}}></div>
          <div className="absolute top-72 right-60 w-9 h-9 bg-green-100 rounded-full opacity-55 animate-ping" style={{animationDuration: '5s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <Badge className="bg-green-500 text-white px-4 py-2 text-sm font-medium rounded-full inline-flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>Trusted by founders</span>
            </Badge>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Launch Your MVP in Just <span className="text-green-500">14 Days</span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              We help founders and businesses transform ideas into investor-ready products—fast, affordable, and scalable.
            </p>

            <p className="text-lg text-gray-700 mb-12 font-medium">
              From concept to live product in 2 weeks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 text-lg bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors duration-200"
              >
                Book a Free Strategy Call
              </button>
              <button 
                onClick={() => scrollToSection("pricing")}
                className="px-8 py-4 text-lg bg-white text-green-500 border-2 border-green-500 rounded-full font-medium hover:bg-green-50 transition-colors duration-200"
              >
                Start Your 14-Day MVP Now
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </section>

      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 px-4 py-2 text-sm font-medium rounded-full mb-4">Our Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How We Turn Your Idea into a Launch-Ready MVP</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You bring the idea, we turn it into something real. Here's what the 2-week journey looks like.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "STEP 1",
                title: "Kickoff Call",
                description: "We dive into your idea, goals and user needs — and by the end of the call, we'll understand what we're building and how we'll build it.",
                icon: "💬"
              },
              {
                step: "STEP 2",
                title: "MVP Blueprint",
                description: "We define what's in (and what's out). You'll get a fully functional wireframe directly into what we're going to build.",
                icon: "📋"
              },
              {
                step: "STEP 3",
                title: "Build Sprint",
                description: "We execute the code. You'll get a fully functional wireframe and an MVP in 10-14 days ready for users to signup.",
                icon: "⚡"
              },
              {
                step: "STEP 4",
                title: "Launch Day",
                description: "You go live with your support and success tools, post-launch fixes, and hands-on help if you want to keep building.",
                icon: "🚀"
              },
            ].map((step, index) => (
              <Card key={index} className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0 text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-green-500 text-sm font-semibold mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
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
                    <Badge className="bg-green-100 text-green-700 text-xs px-2 py-1">{project.category}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <button className="px-6 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors duration-200">
              Show More Projects
            </button>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 px-4 py-2 text-sm font-medium rounded-full mb-4">Pricing</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Actually Launch Your MVP
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Validate your app idea, get something real in front of users, and skip the 6-month dev cycle. All for a flat, founder-friendly price.
            </p>
            <div className="mt-6">
              <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-medium rounded-full">
                Limited availability - Only 2 spots left for 2024
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "MVP Development",
                price: "$4,500",
                subtitle: "One-time",
                timeline: "Go from idea to real app in 10-14 days, build, ship, and improve.",
                features: [
                  "Launch-ready web app or mobile app",
                  "Clean UI, login, payments, database",
                  "Full source code + ownership",
                  "1-month bug fixes + launch support",
                  "Delivered in just 10-14 days",
                ],
              },
              {
                name: "Continuous Support",
                price: "$2,500",
                subtitle: "/month",
                timeline: "Keep improving, shipping, and scaling. Without rebuilding your team or learning tech.",
                features: [
                  "Weekly updates + 1 check-ins",
                  "Dedicated dev time (no hourly caps)",
                  "SEO, analytics + performance tuning",
                  "Same-day fixes + roadmap support",
                  "Ongoing maintenance + feature builds",
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className="p-8 bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-4xl font-bold text-green-500">{plan.price}</span>
                    <span className="text-gray-600">{plan.subtitle}</span>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed">{plan.timeline}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">You'll get:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className={`w-full py-4 px-6 rounded-full font-semibold transition-colors duration-200 ${
                    index === 0 
                      ? "bg-green-500 text-white hover:bg-green-600" 
                      : "bg-white text-green-500 border-2 border-green-500 hover:bg-green-50"
                  }`}>
                    {index === 0 ? "Show Me My MVP →" : "Take My MVP To The Next Level →"}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">A Question Left Unanswered?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We work with founders every day who are asking the same things. Here's what they want to know before making the leap.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How fast can you take me from idea to launch?",
                  answer:
                    "Most MVPs launch in 3-5 weeks. Landing pages in 5 days. The timeline depends on scope, but we're committed to speed without sacrificing quality.",
                },
                {
                  question: "Will my product be custom-built or on a template?",
                  answer:
                    "Everything is custom-built for your specific needs. We don't use templates - every line of code and pixel is crafted for your unique requirements and brand.",
                },
                {
                  question: "What happens after my MVP is live?",
                  answer:
                    "You get 4 weeks of post-launch support included. Bug fixes, user feedback implementation, and performance monitoring. After that, you can continue with our Growth Partner plan.",
                },
                {
                  question: "How do you decide what features go into the MVP?",
                  answer:
                    "We start with your users and their core problem. Through our discovery process, we identify the minimum set of features that deliver maximum value - nothing more, nothing less.",
                },
                {
                  question: "Can you also do my landing page or redesign my app?",
                  answer:
                    "We offer dedicated landing page builds (5 days) and app redesigns that modernize your UI without a complete rewrite. Check our pricing section for details.",
                },
                {
                  question: "Do you work with AI features and automation?",
                  answer:
                    "Yes! We specialize in AI internal tools, custom chatbots, RAG databases, and workflow automation. AI is integrated thoughtfully where it adds real value.",
                },
                {
                  question: "What will I actually get at the end of the project?",
                  answer:
                    "A fully functional, deployed product with clean code, documentation, analytics setup, and everything needed to operate independently. Plus 4 weeks of support to ensure smooth operation.",
                },
                {
                  question: "How much involvement do you need from me?",
                  answer:
                    "Minimal but focused. One discovery call, weekly 30-minute demos, and quick feedback on key decisions. We handle the heavy lifting while keeping you informed.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-lg px-8 py-2"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg text-gray-900 hover:text-black py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2 pb-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MVP Labs</span>
            </div>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to turn your idea into a real product? Let's build something amazing together.
            </p>

            <ShimmerButton className="px-8 py-4 text-lg mb-8 bg-white text-gray-900 border border-gray-300 hover:bg-gray-50">
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </ShimmerButton>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-500 text-sm"> 2024 MVP Labs. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
