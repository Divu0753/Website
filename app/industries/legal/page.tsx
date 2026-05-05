"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Scale, 
  FileText, 
  Shield, 
  Search,
  Users,
  Clock,
  BarChart3,
  Lock,
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
  Building2,
  Briefcase
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LegalIndustryPage() {
  const solutions = [
    {
      icon: Briefcase,
      title: "Legal Practice Management",
      description: "Comprehensive practice management solutions that streamline operations, improve client service, and increase profitability.",
      benefits: ["Matter Management", "Time Tracking", "Billing Automation", "Client Portal"]
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Secure document management systems designed for legal workflows with version control, collaboration, and compliance features.",
      benefits: ["Secure Storage", "Version Control", "Collaboration Tools", "Retention Policies"]
    },
    {
      icon: Search,
      title: "eDiscovery Solutions",
      description: "Advanced eDiscovery platforms with AI-powered review, predictive coding, and comprehensive litigation support.",
      benefits: ["Data Collection", "AI-Powered Review", "Predictive Coding", "Production Tools"]
    },
    {
      icon: Shield,
      title: "Legal Cybersecurity",
      description: "Specialized security solutions protecting confidential client information and ensuring compliance with legal industry standards.",
      benefits: ["Data Protection", "Access Controls", "Threat Detection", "Compliance Monitoring"]
    },
    {
      icon: BarChart3,
      title: "Contract Analytics",
      description: "AI-powered contract analysis and management solutions that extract insights and automate contract workflows.",
      benefits: ["Contract Review", "Clause Analysis", "Risk Identification", "Obligation Tracking"]
    },
    {
      icon: Globe,
      title: "Secure Remote Work",
      description: "Enable secure remote work for legal professionals with VPN, virtual desktops, and collaboration tools.",
      benefits: ["Secure Access", "Virtual Desktops", "Collaboration Tools", "Mobile Access"]
    }
  ]

  const compliance = [
    { name: "Attorney-Client Privilege", description: "Protecting confidential communications" },
    { name: "ABA Model Rules", description: "Technology competence requirements" },
    { name: "State Bar Requirements", description: "Jurisdiction-specific compliance" },
    { name: "GDPR & CCPA", description: "Data privacy regulations" },
    { name: "SOC 2 Type II", description: "Security controls certification" },
    { name: "ISO 27001", description: "Information security management" }
  ]

  const caseStudies = [
    {
      title: "Am Law 100 Firm",
      challenge: "Inefficient document review processes causing project overruns and reduced profitability",
      solution: "AI-powered eDiscovery platform with predictive coding and workflow automation",
      results: ["70% reduction in review time", "40% cost savings", "Improved accuracy rates"]
    },
    {
      title: "Regional Law Firm",
      challenge: "Multiple office locations with inconsistent technology and collaboration challenges",
      solution: "Unified cloud platform with practice management, DMS, and secure collaboration",
      results: ["60% improvement in collaboration", "35% increase in billable hours", "Single source of truth"]
    },
    {
      title: "Corporate Legal Department",
      challenge: "Managing contracts across multiple business units with limited visibility",
      solution: "Enterprise contract management platform with AI analytics and workflow automation",
      results: ["50% faster contract processing", "90% contract visibility", "Reduced risk exposure"]
    }
  ]

  const stats = [
    { value: "60%", label: "Time Savings" },
    { value: "150+", label: "Legal Clients" },
    { value: "99.95%", label: "System Availability" },
    { value: "0", label: "Data Breaches" }
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
                <Scale className="w-4 h-4" />
                Legal Technology Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Technology Built for
                <span className="text-primary"> Legal Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Streamline legal operations with secure, compliant technology solutions. 
                From practice management to eDiscovery, we help law firms and legal 
                departments work smarter while protecting client confidentiality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/quote">Get Legal Tech Assessment</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Talk to Legal IT Expert</Link>
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
              Legal Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure, efficient technology designed for legal professionals
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
              Legal Compliance Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep understanding of legal industry compliance requirements
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
              Legal Industry Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from legal organizations we have partnered with
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
            Ready to Modernize Your Legal Operations?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Partner with legal technology experts who understand your unique 
            challenges and deliver secure, compliant solutions.
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
