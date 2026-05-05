"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Building2, 
  Heart, 
  ShoppingCart, 
  Factory,
  GraduationCap,
  Scale,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Zap,
  Users
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function IndustriesPage() {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      slug: "healthcare",
      description: "Modernize healthcare operations with secure IT foundations. From EHR integrations to telemedicine platforms, we help providers improve service continuity and data protection.",
      challenges: ["HIPAA Compliance", "Data Security", "System Integration", "Patient Experience"],
      solutions: ["EHR Integration", "Telemedicine", "Medical IoT", "Healthcare Analytics"],
      stats: { value: "Specialized", label: "Healthcare Experience" }
    },
    {
      icon: Building2,
      title: "Financial Services",
      slug: "finance",
      description: "Secure and compliance-aware technology support for banks, NBFCs, insurers, and fintech teams. We help institutions modernize operations while maintaining control and audit readiness.",
      challenges: ["Regulatory Compliance", "Cybersecurity", "Legacy Modernization", "Digital Banking"],
      solutions: ["Core Banking", "Risk Management", "Trading Platforms", "Mobile Banking"],
      stats: { value: "99.95%", label: "Uptime Achieved" }
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      slug: "retail",
      description: "Strengthen retail and e-commerce operations with reliable platforms, better inventory visibility, and smoother customer journeys across online and in-store channels.",
      challenges: ["Omnichannel Experience", "Inventory Management", "Customer Analytics", "Supply Chain"],
      solutions: ["E-commerce Platforms", "POS Systems", "Customer Data Platforms", "Supply Chain Tech"],
      stats: { value: "Outcome-Driven", label: "Retail Programs" }
    },
    {
      icon: Factory,
      title: "Manufacturing",
      slug: "manufacturing",
      description: "Improve manufacturing reliability with plant-floor visibility, integration, and data-driven planning. We support gradual modernization without disrupting production cycles.",
      challenges: ["Production Efficiency", "Quality Control", "Supply Chain Visibility", "Workforce Safety"],
      solutions: ["Industrial IoT", "Predictive Maintenance", "MES Systems", "Digital Twin"],
      stats: { value: "40%", label: "Efficiency Gains" }
    },
    {
      icon: GraduationCap,
      title: "Education",
      slug: "education",
      description: "Support schools and institutions with reliable digital learning infrastructure, secure access, and scalable classroom technology operations.",
      challenges: ["Remote Learning", "Student Engagement", "Data Privacy", "IT Infrastructure"],
      solutions: ["LMS Platforms", "Virtual Classrooms", "Student Analytics", "Campus Networks"],
      stats: { value: "Institution-Focused", label: "Education Delivery" }
    },
    {
      icon: Scale,
      title: "Legal",
      slug: "legal",
      description: "Streamline legal operations with secure document workflows, controlled collaboration, and confidentiality-first IT environments.",
      challenges: ["Data Confidentiality", "Document Management", "Compliance", "Remote Work"],
      solutions: ["Legal Practice Management", "eDiscovery", "Secure Collaboration", "Contract Analytics"],
      stats: { value: "60%", label: "Time Savings" }
    }
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Deep Industry Expertise",
      description: "Our consultants bring years of experience in your specific industry, understanding unique challenges and regulations."
    },
    {
      icon: Zap,
      title: "Proven Solutions",
      description: "We implement battle-tested solutions that have delivered results for organizations like yours."
    },
    {
      icon: Users,
      title: "Dedicated Teams",
      description: "Industry-focused teams that speak your language and understand your business priorities."
    },
    {
      icon: TrendingUp,
      title: "Measurable Outcomes",
      description: "We focus on delivering quantifiable business results, not just technology deployments."
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-background via-background to-primary/5 pt-32 pb-20 overflow-hidden">
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
                Industry Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                IT Solutions Tailored to
                <span className="text-primary"> Your Industry</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Every industry has its own operating pressure. Our Dubai and Ahmedabad teams
                deliver solutions shaped by real constraints, compliance needs, and practical delivery timelines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/quote">Get Industry Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Talk to a Specialist</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep expertise across key sectors, delivering specialized solutions
            </p>
          </div>
          
          <div className="space-y-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="grid md:grid-cols-3 gap-8 p-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <industry.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{industry.title}</h3>
                        <div className="text-sm text-primary font-medium">{industry.stats.value} {industry.stats.label}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{industry.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Key Challenges</h4>
                        <div className="space-y-2">
                          {industry.challenges.map((challenge, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {challenge}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Our Solutions</h4>
                        <div className="space-y-2">
                          {industry.solutions.map((solution, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary" />
                              {solution}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-end">
                    <Button asChild className="w-full md:w-auto">
                      <Link href={`/industries/${industry.slug}`}>
                        Explore {industry.title} Solutions
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Industry Expertise Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Generic solutions rarely deliver optimal results in specialized industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            We work with organizations across many sectors. Contact us to discuss 
            your specific industry needs and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/quote">Request Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
