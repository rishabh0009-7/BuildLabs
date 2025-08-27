"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { AuroraBackground } from "@/components/ui/aurora-background"
import {
  ArrowRight,
  Check,
  MessageCircle,
  Map,
  Palette,
  Code,
  Rocket,
  Heart,
  Home,
  User,
  Briefcase,
  FileText,
  Phone,
  Menu,
  X,
} from "lucide-react"

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
    <div className="min-h-screen w-full bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Title */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MVP Labs</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.url.substring(1))}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Book Call Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
              >
                Book a Call
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.url.substring(1))}
                    className="text-left text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-purple-600 hover:bg-purple-700 text-white w-full mt-4"
                >
                  Book a Call
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuroraBackground>
        <section id="home" className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="bg-purple-100 text-purple-800 border-purple-200 px-4 py-2 text-sm font-medium">
                AUGUST: 2 BUILD SLOTS - $3,497 EACH
              </Badge>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Build Your MVP Before the Market Moves.
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                From idea to launch in just 3-5 weeks, we design, develop, and deliver a real, working MVP your users
                can start using from day one.
              </p>

              <p className="text-lg text-gray-700 mb-12 font-medium">
                We don't just build products. We build momentum.
              </p>

              <ShimmerButton className="px-8 py-4 text-lg">
                Book a 15-min intro
                <ArrowRight className="ml-2 h-5 w-5" />
              </ShimmerButton>
            </div>
          </div>
        </section>
      </AuroraBackground>

      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How We Ship Your MVP in Weeks</h2>
            <p className="text-xl text-gray-600">Six focused steps from first call to live product.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="h-8 w-8" />,
                title: "Conversation",
                subtitle: "Discovery",
                description: "A 30-45 min call to align on users, goals, and constraints. No forms, just clarity.",
              },
              {
                icon: <Map className="h-8 w-8" />,
                title: "Roadmap",
                subtitle: "Strategy",
                description: "Written scope, milestones, and success metrics with a fixed price and timeline.",
              },
              {
                icon: <Palette className="h-8 w-8" />,
                title: "Simplicity",
                subtitle: "Design",
                description: "Flows first, pixels second. Clickable prototype in days so we validate before we build.",
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Progress",
                subtitle: "Development",
                description: "Staging link from week one. Weekly demos, async updates, and transparent tracking.",
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Live",
                subtitle: "Launch",
                description: "Production deploy with analytics, error monitoring, and basic onboarding in place.",
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Partnership",
                subtitle: "Support",
                description: "Four weeks of post-launch fixes and iteration based on real user feedback.",
              },
            ].map((step, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200">
                <CardContent className="p-0">
                  <div className="text-purple-600 mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-purple-600 font-medium mb-3">{step.subtitle}</p>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Real Products. Real People.</h2>
            <p className="text-xl text-gray-600">A few of the MVPs we've launched and the teams behind them.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "KrutAI",
                description: "AI Co-pilot for E-commerce Brands",
                image: "/ai-ecommerce-dashboard-interface.png",
              },
              {
                name: "A2A Point",
                description: "Mobile platform for real estate agents",
                image: "/real-estate-app-interface.png",
              },
              {
                name: "Plunge",
                description: "Community app connecting people",
                image: "/social-community-app-interface.png",
              },
              {
                name: "ChatBot Platform",
                description: "Custom chatbot solution",
                image: "/chatbot-platform-interface.png",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white border-gray-200"
              >
                <div className="aspect-video bg-gray-100">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple Pricing. Real Builds. Fast Launches.
            </h2>
            <p className="text-xl text-gray-600">
              No hidden fees. Fixed timelines. Weekly demos. Post-launch support included.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "MVP Launch",
                price: "from $3,497",
                timeline: "Your app live in 3-5 weeks",
                popular: true,
                features: [
                  "Written scope + success metrics",
                  "UX flows & clean UI",
                  "Full-stack development",
                  "Production deployment",
                  "4 weeks post-launch support",
                ],
              },
              {
                name: "Landing Page Build",
                price: "from $2,497",
                timeline: "Launch-ready in 5 days",
                features: [
                  "Audience-focused messaging & sections",
                  "Mobile-first, full responsive",
                  "SEO optimization",
                  "Analytics setup",
                  "Contact form integration",
                ],
              },
              {
                name: "App Redesign",
                price: "from $1,997",
                timeline: "Modern UI without rewrite",
                features: [
                  "Modern UI/UX without a rewrite",
                  "New UI kit & components",
                  "Improved user experience",
                  "Mobile optimization",
                  "Design system documentation",
                ],
              },
              {
                name: "AI Internal Tools",
                price: "from $1,997",
                timeline: "Custom AI solutions",
                features: [
                  "Custom GPT/chatbots for dev/support",
                  "RAG databases on your docs",
                  "Workflow automation",
                  "API integrations",
                  "Training & documentation",
                ],
              },
              {
                name: "Growth Partner",
                price: "from $2,999/month",
                timeline: "Ongoing development",
                features: [
                  "Same-day bug fixes",
                  "User-requested features",
                  "Performance monitoring",
                  "Monthly strategy calls",
                  "Priority support",
                ],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-xl transition-shadow duration-300 relative ${plan.popular ? "border-purple-500 border-2" : "border-gray-200"} bg-white`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600 mb-6">{plan.timeline}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <ShimmerButton
                    className={`w-full mt-6 ${plan.popular ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-900"}`}
                  >
                    Get Started
                  </ShimmerButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Straight Answers, No Fluff</h2>
            <p className="text-xl text-gray-600">Common questions about our process, timelines, and what you get.</p>
          </div>

          <div className="max-w-3xl mx-auto">
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
                  className="bg-white border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
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
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">b</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MVP Labs</span>
            </div>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to turn your idea into a real product? Let's build something amazing together.
            </p>

            <ShimmerButton className="px-8 py-4 text-lg mb-8">
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </ShimmerButton>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-500 text-sm">© 2024 MVP Labs. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
