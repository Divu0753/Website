"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ShoppingCart, 
  Store, 
  Truck, 
  Users,
  BarChart3,
  Smartphone,
  CreditCard,
  Package,
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
  Heart,
  Tag
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RetailIndustryPage() {
  const solutions = [
    {
      icon: Globe,
      title: "E-commerce Platforms",
      description: "Build scalable, high-performance e-commerce platforms that deliver exceptional shopping experiences and handle peak traffic demands.",
      benefits: ["Custom Storefronts", "Mobile Commerce", "Multi-channel Selling", "Global Expansion"]
    },
    {
      icon: Store,
      title: "Point of Sale Systems",
      description: "Modern POS solutions that unify in-store and online operations, enabling seamless omnichannel experiences.",
      benefits: ["Unified Commerce", "Inventory Sync", "Mobile POS", "Customer Insights"]
    },
    {
      icon: Package,
      title: "Inventory & Supply Chain",
      description: "Intelligent inventory management and supply chain solutions that optimize stock levels and improve fulfillment efficiency.",
      benefits: ["Real-time Visibility", "Demand Forecasting", "Order Management", "Warehouse Automation"]
    },
    {
      icon: Users,
      title: "Customer Data Platforms",
      description: "Unify customer data across touchpoints to enable personalized marketing, loyalty programs, and enhanced customer experiences.",
      benefits: ["360 Customer View", "Personalization", "Loyalty Programs", "Marketing Automation"]
    },
    {
      icon: BarChart3,
      title: "Retail Analytics",
      description: "Transform retail data into actionable insights that drive merchandising decisions, optimize pricing, and improve operations.",
      benefits: ["Sales Analytics", "Price Optimization", "Assortment Planning", "Store Performance"]
    },
    {
      icon: Smartphone,
      title: "Mobile & Digital Experience",
      description: "Create engaging digital experiences including mobile apps, in-store technology, and innovative customer touchpoints.",
      benefits: ["Mobile Apps", "In-store Tech", "AR/VR Experiences", "Digital Signage"]
    }
  ]

  const capabilities = [
    "Headless Commerce Architecture",
    "Real-time Inventory Management",
    "AI-Powered Recommendations",
    "Omnichannel Fulfillment",
    "Dynamic Pricing Engines",
    "Customer Journey Analytics",
    "Payment Gateway Integration",
    "Fraud Detection Systems"
  ]

  const caseStudies = [
    {
      title: "National Retail Chain",
      challenge: "Disconnected systems creating inconsistent customer experiences across channels",
      solution: "Unified commerce platform with real-time inventory and customer data sync",
      results: ["35% increase in online sales", "50% reduction in stockouts", "40% higher customer retention"]
    },
    {
      title: "Fashion E-commerce Brand",
      challenge: "Legacy platform unable to handle traffic spikes during sales events",
      solution: "Cloud-native e-commerce platform with auto-scaling and global CDN",
      results: ["Handled peak seasonal traffic", "99.95% uptime during sales windows", "Improved online conversion rates"]
    },
    {
      title: "Grocery Delivery Startup",
      challenge: "Need for rapid scaling with complex logistics and inventory management",
      solution: "Microservices architecture with real-time inventory and route optimization",
      results: ["5x order volume increase", "30% faster deliveries", "25% reduction in waste"]
    }
  ]

  const stats = [
    { value: "300%", label: "Average ROI" },
    { value: "50+", label: "Retail Clients" },
    { value: "$2B+", label: "GMV Processed" },
    { value: "99.95%", label: "Platform Uptime" }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <ShoppingCart className="w-4 h-4" />
                Retail & E-commerce IT
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Technology That Powers
                <span className="text-primary"> Retail Success</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Transform your retail operations with technology that unifies commerce channels, 
                personalizes customer experiences, and drives growth. From startups to enterprise 
                retailers, we build solutions that scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/quote">Get Retail Assessment</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Talk to Retail Expert</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Retail Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end technology solutions for modern retail success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-4">{solution.description}</p>
                <div className="space-y-2">
                  {solution.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep expertise in modern retail technology
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-4 border border-border text-center"
              >
                <span className="text-sm font-medium text-foreground">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Retail Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from retail organizations we have partnered with
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">{study.title}</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">Challenge</span>
                    <p className="text-sm text-muted-foreground mt-1">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">Solution</span>
                    <p className="text-sm text-muted-foreground mt-1">{study.solution}</p>
                  </div>
                </div>
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">Results</span>
                  <div className="mt-2 space-y-2">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Retail Operations?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Partner with retail technology experts who understand your industry 
            and deliver solutions that drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/quote">Request Assessment</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
