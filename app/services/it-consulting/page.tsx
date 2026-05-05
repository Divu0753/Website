"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Lightbulb, 
  Target, 
  TrendingUp, 
  Users,
  BarChart3,
  Puzzle,
  Map,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Building2,
  Zap,
  Shield,
  Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ITConsultingPage() {
  const consultingServices = [
    {
      icon: Map,
      title: "IT Strategy & Roadmapping",
      description: "Develop comprehensive IT strategies aligned with your business goals. We create actionable roadmaps that guide technology investments and digital transformation initiatives.",
      deliverables: ["Technology Assessment", "Strategic Roadmap", "Investment Prioritization", "Risk Analysis"]
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "Navigate the complexities of digital transformation with expert guidance. We help organizations modernize operations, embrace new technologies, and create digital-first experiences.",
      deliverables: ["Process Optimization", "Technology Selection", "Change Management", "ROI Analysis"]
    },
    {
      icon: Building2,
      title: "Enterprise Architecture",
      description: "Design scalable, resilient IT architectures that support business growth. Our architects create blueprints for modern, cloud-native enterprise systems.",
      deliverables: ["Architecture Design", "Integration Planning", "Standards Definition", "Governance Framework"]
    },
    {
      icon: Shield,
      title: "IT Governance & Compliance",
      description: "Establish robust IT governance frameworks and ensure compliance with industry regulations. We help implement best practices for IT management and oversight.",
      deliverables: ["Policy Development", "Compliance Audits", "Risk Management", "Process Improvement"]
    },
    {
      icon: Users,
      title: "Technology Due Diligence",
      description: "Comprehensive technology assessments for M&A activities, investments, and partnerships. We evaluate technical capabilities, risks, and opportunities.",
      deliverables: ["Technical Assessment", "Risk Evaluation", "Integration Planning", "Valuation Support"]
    },
    {
      icon: Zap,
      title: "IT Operations Optimization",
      description: "Improve IT operational efficiency and reduce costs. We analyze current operations, identify inefficiencies, and implement improvements.",
      deliverables: ["Operations Assessment", "Cost Analysis", "Process Redesign", "Performance Metrics"]
    }
  ]

  const consultingApproach = [
    {
      phase: "Assess",
      title: "Current State Analysis",
      description: "We begin with a thorough assessment of your current IT landscape, business processes, and strategic objectives to understand your unique situation."
    },
    {
      phase: "Strategize",
      title: "Strategy Development",
      description: "Based on our findings, we develop tailored strategies and recommendations that align technology initiatives with your business goals."
    },
    {
      phase: "Plan",
      title: "Implementation Roadmap",
      description: "We create detailed implementation plans with clear milestones, resource requirements, and timelines to guide execution."
    },
    {
      phase: "Execute",
      title: "Guided Implementation",
      description: "Our consultants provide hands-on support during implementation, ensuring successful execution of strategic initiatives."
    }
  ]

  const industries = [
    { name: "Financial Services", icon: Building2 },
    { name: "Healthcare", icon: Users },
    { name: "Manufacturing", icon: Puzzle },
    { name: "Retail & E-commerce", icon: BarChart3 },
    { name: "Technology", icon: Zap },
    { name: "Professional Services", icon: Briefcase }
  ]

  const benefits = [
    {
      title: "Strategic Clarity",
      description: "Gain clear direction on technology investments and priorities aligned with business objectives."
    },
    {
      title: "Risk Mitigation",
      description: "Identify and address potential risks before they impact your business operations."
    },
    {
      title: "Cost Optimization",
      description: "Reduce IT spending while improving capabilities through strategic optimization."
    },
    {
      title: "Competitive Advantage",
      description: "Leverage technology strategically to differentiate your business in the market."
    },
    {
      title: "Accelerated Transformation",
      description: "Speed up digital initiatives with expert guidance and proven methodologies."
    },
    {
      title: "Knowledge Transfer",
      description: "Build internal capabilities through collaborative engagement and training."
    }
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
                <Lightbulb className="w-4 h-4" />
                IT Consulting Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Strategic IT Consulting for
                <span className="text-primary"> Business Growth</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Transform your technology investments into business value. Our experienced consultants 
                help organizations develop and execute IT strategies that drive innovation, efficiency, 
                and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/quote">Request Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Talk to an Expert</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Consulting Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert guidance across the full spectrum of IT and technology challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Consulting Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured methodology that delivers actionable results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingApproach.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {index + 1}
                </div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">{step.phase}</span>
                <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Value We Deliver
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable outcomes that impact your bottom line
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industry Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep domain knowledge across key industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/50 transition-colors"
              >
                <industry.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <span className="text-sm font-medium text-foreground">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready for Strategic IT Guidance?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our IT experts and discover how strategic 
            technology planning can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/quote">Request Consultation</Link>
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
