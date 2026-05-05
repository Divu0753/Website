"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Heart, 
  Shield, 
  Stethoscope, 
  Activity,
  FileHeart,
  Users,
  Video,
  Lock,
  CheckCircle2,
  ArrowRight,
  Building2,
  Tablet,
  Cloud,
  BarChart3
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HealthcareIndustryPage() {
  const solutions = [
    {
      icon: FileHeart,
      title: "Electronic Health Records (EHR)",
      description: "Implement and optimize EHR systems that improve clinical workflows, enhance patient care coordination, and ensure HIPAA compliance.",
      benefits: ["Streamlined Documentation", "Better Care Coordination", "Reduced Errors", "Regulatory Compliance"]
    },
    {
      icon: Video,
      title: "Telemedicine Platforms",
      description: "Build secure, user-friendly telemedicine solutions that expand access to care while maintaining the quality of in-person visits.",
      benefits: ["Virtual Consultations", "Remote Monitoring", "Patient Portal", "Prescription Management"]
    },
    {
      icon: Activity,
      title: "Medical IoT & Devices",
      description: "Connect medical devices and wearables to create comprehensive patient monitoring systems and improve clinical decision-making.",
      benefits: ["Real-time Monitoring", "Alert Systems", "Device Integration", "Data Analytics"]
    },
    {
      icon: Shield,
      title: "Healthcare Cybersecurity",
      description: "Protect sensitive patient data with comprehensive security solutions designed specifically for healthcare environments.",
      benefits: ["HIPAA Compliance", "Threat Detection", "Access Controls", "Incident Response"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Migrate to HIPAA-compliant cloud environments that offer scalability, reliability, and disaster recovery capabilities.",
      benefits: ["HIPAA-Compliant Cloud", "Disaster Recovery", "Scalable Infrastructure", "Cost Optimization"]
    },
    {
      icon: BarChart3,
      title: "Healthcare Analytics",
      description: "Transform clinical and operational data into actionable insights that improve patient outcomes and organizational performance.",
      benefits: ["Population Health", "Clinical Analytics", "Financial Performance", "Quality Metrics"]
    }
  ]

  const complianceAreas = [
    { name: "HIPAA", description: "Health Insurance Portability and Accountability Act compliance" },
    { name: "HITECH", description: "Health Information Technology for Economic and Clinical Health Act" },
    { name: "FDA CFR Part 11", description: "Electronic records and signatures requirements" },
    { name: "HL7/FHIR", description: "Healthcare interoperability standards" },
    { name: "SOC 2", description: "Service Organization Control security compliance" },
    { name: "HITRUST", description: "Healthcare information security framework" }
  ]

  const caseStudies = [
    {
      title: "Regional Hospital Network",
      challenge: "Needed to modernize legacy systems while maintaining 24/7 operations",
      solution: "Phased cloud migration with zero downtime and improved disaster recovery",
      results: ["Lowered infrastructure overhead", "99.95% system uptime", "Improved security controls"]
    },
    {
      title: "Multi-Specialty Clinic Group",
      challenge: "Fragmented patient data across multiple locations",
      solution: "Unified EHR platform with real-time data synchronization",
      results: ["50% faster patient check-in", "30% reduction in duplicate tests", "Improved care coordination"]
    },
    {
      title: "Telehealth Startup",
      challenge: "Rapid scaling needs with strict compliance requirements",
      solution: "HIPAA-compliant cloud infrastructure with automated compliance monitoring",
      results: ["100K+ patient consultations", "Zero compliance violations", "5x traffic handling capacity"]
    }
  ]

  const stats = [
    { value: "200+", label: "Healthcare Clients" },
    { value: "99.95%", label: "Uptime Achieved" },
    { value: "0", label: "HIPAA Violations" },
    { value: "10+", label: "Years Experience" }
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
                <Heart className="w-4 h-4" />
                Healthcare IT Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Technology That Transforms
                <span className="text-primary"> Patient Care</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Empowering healthcare organizations with secure, compliant, and innovative 
                technology solutions. From hospitals to clinics to health tech startups, 
                we help you deliver better patient outcomes while meeting regulatory requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/quote">Get Healthcare Assessment</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Talk to Healthcare Expert</Link>
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
              Healthcare IT Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology services designed for the unique needs of healthcare
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
              Compliance & Regulatory Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep understanding of healthcare regulations and compliance requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{area.name}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
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
              Healthcare Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from healthcare organizations we&apos;ve partnered with
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
            Ready to Transform Healthcare Delivery?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Partner with healthcare IT experts who understand your unique challenges 
            and regulatory requirements.
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
