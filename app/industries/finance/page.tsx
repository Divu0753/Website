"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Building2, 
  Shield, 
  TrendingUp, 
  CreditCard,
  Landmark,
  Lock,
  BarChart3,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
  Cloud,
  FileCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FinanceIndustryPage() {
  const solutions = [
    {
      icon: Landmark,
      title: "Core Banking Modernization",
      description: "Transform legacy core banking systems into modern, API-first platforms that enable digital innovation and operational efficiency.",
      benefits: ["Legacy Migration", "API Integration", "Real-time Processing", "Scalable Architecture"]
    },
    {
      icon: Shield,
      title: "Financial Cybersecurity",
      description: "Comprehensive security solutions designed for the unique threat landscape and compliance requirements of financial services.",
      benefits: ["Threat Detection", "Fraud Prevention", "SOC Operations", "Compliance Monitoring"]
    },
    {
      icon: TrendingUp,
      title: "Risk Management Systems",
      description: "Advanced risk analytics and management platforms that provide real-time visibility into credit, market, and operational risks.",
      benefits: ["Risk Modeling", "Regulatory Reporting", "Stress Testing", "Portfolio Analytics"]
    },
    {
      icon: Smartphone,
      title: "Digital Banking",
      description: "Build engaging digital banking experiences that meet modern customer expectations across web, mobile, and emerging channels.",
      benefits: ["Mobile Banking", "Online Platforms", "Digital Onboarding", "Personal Finance Tools"]
    },
    {
      icon: BarChart3,
      title: "Trading & Investment Platforms",
      description: "High-performance trading systems and investment platforms with low latency, high availability, and regulatory compliance.",
      benefits: ["Trading Systems", "Portfolio Management", "Market Data", "Algorithmic Trading"]
    },
    {
      icon: FileCheck,
      title: "RegTech Solutions",
      description: "Automate compliance processes and reporting with intelligent solutions that reduce costs and improve accuracy.",
      benefits: ["Automated Reporting", "KYC/AML", "Audit Trails", "Policy Management"]
    }
  ]

  const compliance = [
    { name: "SOX", description: "Sarbanes-Oxley compliance" },
    { name: "PCI DSS", description: "Payment Card Industry standards" },
    { name: "GDPR", description: "Data protection compliance" },
    { name: "Basel III/IV", description: "Banking regulations" },
    { name: "MiFID II", description: "Investment services directive" },
    { name: "Dodd-Frank", description: "Financial reform compliance" }
  ]

  const caseStudies = [
    {
      title: "Regional Bank Transformation",
      challenge: "Legacy core system limiting digital initiatives and increasing operational costs",
      solution: "Phased core banking modernization with cloud-native architecture",
      results: ["60% faster product launches", "40% reduction in IT costs", "3x increase in digital adoption"]
    },
    {
      title: "Investment Management Firm",
      challenge: "Manual compliance processes creating bottlenecks and increasing risk",
      solution: "Automated RegTech platform with real-time monitoring and reporting",
      results: ["80% reduction in compliance time", "Zero regulatory findings", "50% cost savings"]
    },
    {
      title: "Digital-First Neobank",
      challenge: "Needed to scale rapidly while maintaining security and compliance",
      solution: "Cloud-native infrastructure with automated security and compliance controls",
      results: ["Scaled onboarding operations", "99.95% platform uptime", "SOC 2 control alignment support"]
    }
  ]

  const stats = [
    { value: "$50B+", label: "Assets Protected" },
    { value: "99.95%", label: "System Uptime" },
    { value: "100+", label: "Financial Clients" },
    { value: "0", label: "Security Breaches" }
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
                <Building2 className="w-4 h-4" />
                Financial Services IT
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Secure Technology for
                <span className="text-primary"> Financial Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Empowering banks, investment firms, and fintech companies with secure, 
                compliant, and innovative technology solutions. We understand the unique 
                demands of financial services and deliver systems that perform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/quote">Get Financial Assessment</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Talk to FinTech Expert</Link>
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
              Financial Services Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technology solutions built for the demands of financial services
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

      {/* Compliance Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Regulatory Compliance Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep understanding of financial regulations and compliance requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compliance.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
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
              Financial Services Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven results from financial institutions we&apos;ve partnered with
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
            Ready to Modernize Your Financial Technology?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Partner with technology experts who understand financial services 
            and deliver secure, compliant solutions.
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
