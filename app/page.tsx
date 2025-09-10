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
  Zap,
  DollarSign,
  Users,
  TrendingUp,
} from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
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

export default function BuildLabsLandingPage() {
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

  const testimonials = [
    {
      quote:
        "InvoiceAI has been a game-changer for our freelance business. What used to take hours of manual work now takes minutes. The templates are professional, and the automated reminders have drastically improved our cash flow.",
      name: "Ajay Sharma",
      title: "Founder, InvoiceAI",
      project: "InvoiceAI",
    },
    {
      quote:
        "The insights we've gained from BlackPulse are incredible. Their AI-driven approach to marketing helped us identify and target our ideal customer profile with an accuracy we never thought possible. Our campaign ROI has skyrocketed.",
      name: "Mark Robin",
      title: "CTO, BlackPulse",
      project: "BlackPulse",
    },
    {
      quote:
        "We were drowning in spreadsheets before SyncAI. Now, our entire sales workflow is streamlined in one place. The real-time analytics dashboard gives us a clear view of our pipeline, and the team loves how intuitive it is.",
      name: "Alex Klassen",
      title: "Co-founder, SyncAI",
      project: "SyncAI",
    },
  ];

  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "Why Choose Us", url: "#why-us", icon: Users },
    { name: "Portfolio", url: "#portfolio", icon: Briefcase },
    { name: "Testimonials", url: "#testimonials", icon: Star },
    { name: "Pricing", url: "#pricing", icon: FileText },
    { name: "FAQ", url: "#faq", icon: User },
    { name: "Contact", url: "#contact", icon: Phone },
  ];

  const projects = [
    {
      title: "BotCraft",
      image: "/BotCraft.png",
      description:
        "A cutting-edge multimodal AI chatbot that understands and responds to text, images, and voice. BotCraft offers a natural, human-like conversational experience, making it perfect for customer support, interactive learning, and personalized assistance.",
      tags: ["AI Chatbot", "React", "Node.js", "OpenAI"],
    },
    {
      title: "BlackPulse",
      image: "/BlackPulse.png",
      description:
        "A comprehensive AI-powered marketing platform that automates content creation, social media management, and campaign optimization. BlackPulse helps businesses scale their marketing efforts with intelligent automation and data-driven insights.",
      tags: ["AI Marketing", "Vue.js", "Python", "Figma"],
    },
    {
      title: "SyncAI",
      image: "/SyncAi.png",
      description:
        "An intelligent data synchronization platform that uses AI to seamlessly connect and sync data across multiple systems. SyncAI ensures data consistency, reduces manual work, and provides real-time insights across your entire tech stack.",
      tags: ["Data Sync", "TypeScript", "PostgreSQL", "Modern"],
    },
    {
      title: "Travista",
      image: "/Travista.png",
      description:
        "A modern travel booking platform that combines AI-powered recommendations with seamless booking experiences. Travista helps users discover, plan, and book their perfect trips with personalized suggestions and competitive pricing.",
      tags: ["Travel Platform", "Next.js", "MongoDB", "Stripe"],
    },
    {
      title: "InvoiceAI",
      image: "/InvoiceAi.png",
      description:
        "An intelligent invoice generation platform that automates billing processes with AI. InvoiceAI creates professional invoices, tracks payments, and provides insights to help businesses manage their finances more efficiently.",
      tags: ["AI Invoice", "React", "Express", "Stripe"],
    },
    {
      title: "Dashboard",
      image: "/Dashboard.png",
      description:
        "A comprehensive analytics dashboard that provides real-time insights and data visualization. This platform helps businesses make data-driven decisions with interactive charts, customizable reports, and advanced filtering capabilities.",
      tags: ["Analytics", "D3.js", "Python", "Modern"],
    },
  ];

  return (
    <div className="min-h-screen w-full relative bg-black scroll-smooth">
      <HeroGeometric
        badge="BuildLabs"
        title1="Launch Your MVP"
        title2="In Just 21 Days"
      >
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-[100] bg-transparent">
          <div className="relative container mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-white">BuildLabs</span>
            </a>

            {/* CTA Button - Right Side */}
            <div className="hidden md:block">
              <button
                onClick={() =>
                  window.open("https://cal.com/buildlabs/30min", "_blank")
                }
                className="px-6 py-2 bg-black text-white border-2 border-white rounded-full font-bold transition-colors duration-200 shadow-lg hover:shadow-xl"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
              >
                Book a Call →
              </button>
            </div>
          </div>
        </header>

        {/* Custom Content */}
        <motion.div
          custom={3}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 1.1,
              ease: [0.25, 0.4, 0.25, 1],
            },
          }}
          className="mt-8 transform transition-all duration-500 ease-out"
        >
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-3xl mx-auto leading-relaxed">
            We help founders and businesses transform ideas into investor-ready
            products—fast, affordable, and scalable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center">
            <button
              onClick={() =>
                window.open("https://cal.com/buildlabs/30min", "_blank")
              }
              className="px-8 py-4 text-lg bg-white text-black border-2 border-white rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 ease-out"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
            >
              Book a Spot →
            </button>
            <button
              onClick={() =>
                window.open("https://cal.com/buildlabs/30min", "_blank")
              }
              className="px-8 py-4 text-lg bg-black text-white border-2 border-white rounded-full font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 ease-out"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
            >
              Start Your MVP Now
            </button>
          </div>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-lg text-white/60">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              No upfront payment
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              Money-back guarantee
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              Unlimited revisions
            </div>
          </div>
        </motion.div>
      </HeroGeometric>

      <section
        id="portfolio"
        className="py-20 bg-black relative z-10 overflow-hidden"
      >
        <div className="container mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium mb-4 border border-white/20">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Our Projects
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Recent Work
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These apps all started as nothing but an idea. We turned them into
              real tools used by customers, shown to investors, and shipped to
              market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Default Content (visible when not hovering) */}
                <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}

            <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-500 ease-in-out group hover:scale-105">
              <div className="relative">
                <div className="aspect-video rounded-t-xl overflow-hidden">
                  <img
                    src="/SyncAi.png"
                    alt="SyncAi - AI CRM"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-800">SyncAi</h3>
                  <Badge className="ml-2 bg-orange-100 text-orange-800 text-xs px-2.5 py-1 rounded-full font-semibold">
                    AI CRM
                  </Badge>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-medium mb-4">
                  A modern AI-powered CRM that offers robust client management,
                  proposal tracking, a real-time analytics dashboard, and
                  intelligent business insights to streamline your sales
                  workflow and boost productivity.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full border border-gray-200">
                    React
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full border border-gray-200">
                    TypeScript
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full border border-gray-200">
                    Supabase
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Travista Card */}
            <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-500 ease-in-out group hover:scale-105">
              <div className="relative">
                <div className="aspect-video rounded-t-xl overflow-hidden">
                  <img
                    src="/Travista.png"
                    alt="Travista - AI Travel App"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-800">Travista</h3>
                  <Badge className="ml-2 bg-orange-100 text-orange-800 text-xs px-2.5 py-1 rounded-full font-semibold">
                    AI Travel App
                  </Badge>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  A modern, responsive AI-powered travel web app that helps
                  users discover destinations, plan trips, and get smart
                  recommendations for vacations. It features an intuitive
                  interface, personalized itineraries, and real-time travel
                  alerts to ensure a seamless journey from start to finish.
                </p>
              </CardContent>
            </Card>

            {/* Spensibly Card */}
            <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-500 ease-in-out group hover:scale-105">
              <div className="relative">
                <div className="aspect-video rounded-t-xl overflow-hidden">
                  <img
                    src="/Dashboard.png"
                    alt="Spensibly - Financial Management SaaS Dashboard"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-800">Spensibly</h3>
                  <Badge className="ml-2 bg-orange-100 text-orange-800 text-xs px-2.5 py-1 rounded-full font-semibold">
                    SaaS Dashboard
                  </Badge>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  Spensibly is a comprehensive SaaS dashboard for financial
                  management. It offers real-time expense tracking, budget
                  automation, and insightful analytics to help businesses
                  control spending and optimize financial health. With an
                  intuitive interface, it simplifies complex financial data,
                  making it accessible for teams to manage budgets
                  collaboratively and make informed decisions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-colors duration-200 shadow-lg hover:shadow-xl text-base group">
              See More{" "}
              <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">
                &rarr;
              </span>
            </button>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="py-20 bg-black relative z-10 overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with founders to turn great ideas into even better
              products.
            </p>
          </div>
        </div>

        <InfiniteSlider speedOnHover={40}>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card
              key={index}
              className="w-[380px] max-w-sm flex-shrink-0 bg-white border border-gray-200 shadow-lg rounded-xl p-6"
            >
              <CardContent className="p-0">
                <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-orange-500">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </InfiniteSlider>
      </section>

      <section
        id="pricing"
        className="py-20 bg-black relative z-10 overflow-hidden"
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
                          Delivered in 3-4 days
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
                    onClick={() =>
                      window.open("https://cal.com/buildlabs/30min", "_blank")
                    }
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
                    onClick={() =>
                      window.open("https://cal.com/buildlabs/30min", "_blank")
                    }
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
                    onClick={() =>
                      window.open("https://cal.com/buildlabs/30min", "_blank")
                    }
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
                    onClick={() =>
                      window.open("https://cal.com/buildlabs/30min", "_blank")
                    }
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
                    onClick={() =>
                      window.open("https://cal.com/buildlabs/30min", "_blank")
                    }
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
                    onClick={() =>
                      window.open("https://cal.com/buildlabs/30min", "_blank")
                    }
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
                onClick={() =>
                  window.open("https://cal.com/buildlabs/30min", "_blank")
                }
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
        className="py-24 bg-black relative z-10 overflow-hidden"
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
              <Accordion type="single" collapsible className="space-y-6">
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
              onClick={() =>
                window.open("https://cal.com/buildlabs/30min", "_blank")
              }
              className="px-8 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="py-16 bg-black border-t border-gray-800 relative z-10"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            {/* Logo and Description - Left Side (Much Bigger) */}
            <div className="md:col-span-6">
              <div className="mb-6">
                <span className="text-2xl font-bold text-white">BuildLabs</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Turn Your Idea Into a Revenue-Ready MVP in 2-3 Weeks
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
                    hello@buildlabs.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm text-center">
              © 2025 BuildLabs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
