"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Video,
  Shield,
  Wifi,
  BarChart3,
  Laptop,
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
  Building2,
  FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EducationIndustryPage() {
  const solutions = [
    {
      icon: BookOpen,
      title: "Learning Management Systems",
      description: "Comprehensive LMS platforms that enhance teaching effectiveness and student engagement with modern learning experiences.",
      benefits: ["Course Management", "Student Tracking", "Assessment Tools", "Content Library"]
    },
    {
      icon: Video,
      title: "Virtual Classroom Solutions",
      description: "Enable effective remote and hybrid learning with interactive virtual classroom environments and collaboration tools.",
      benefits: ["Live Streaming", "Breakout Rooms", "Recording & Playback", "Interactive Whiteboards"]
    },
    {
      icon: Wifi,
      title: "Campus Network Infrastructure",
      description: "Design and deploy reliable, high-performance campus networks that support modern educational technology.",
      benefits: ["Campus-wide WiFi", "Network Security", "High Bandwidth", "IoT Support"]
    },
    {
      icon: Shield,
      title: "Student Data Protection",
      description: "Comprehensive data security solutions ensuring FERPA compliance and protection of sensitive student information.",
      benefits: ["FERPA Compliance", "Access Controls", "Data Encryption", "Privacy Management"]
    },
    {
      icon: BarChart3,
      title: "Student Analytics",
      description: "Data-driven insights into student performance, engagement, and outcomes to improve educational effectiveness.",
      benefits: ["Learning Analytics", "Early Warning Systems", "Performance Tracking", "Outcome Prediction"]
    },
    {
      icon: Building2,
      title: "Smart Campus Solutions",
      description: "IoT-enabled campus management including facilities, security, and resource optimization systems.",
      benefits: ["Building Automation", "Energy Management", "Safety Systems", "Resource Scheduling"]
    }
  ]

  const capabilities = [
    "K-12 Education Systems",
    "Higher Education Platforms",
    "Student Information Systems",
    "Library Management Systems",
    "Enrollment & Registration",
    "Financial Aid Systems",
    "Alumni Management",
    "Research Collaboration Tools"
  ]

  const caseStudies = [
    {
      title: "State University System",
      challenge: "Multiple campuses with inconsistent technology and no unified student experience",
      solution: "Unified digital campus platform with integrated SIS, LMS, and collaboration tools",
      results: ["30% increase in student engagement", "50% reduction in IT support tickets", "Unified experience across 8 campuses"]
    },
    {
      title: "K-12 School District",
      challenge: "Rapid shift to remote learning with limited infrastructure and training",
      solution: "Complete remote learning platform with teacher training and family support",
      results: ["Improved student connectivity", "Strong teacher adoption rate", "Smooth hybrid learning transition"]
    },
    {
      title: "Private University",
      challenge: "Aging campus network unable to support modern educational technologies",
      solution: "Complete network modernization with high-density WiFi and cloud integration",
      results: ["3x bandwidth increase", "99.95% network uptime", "Expanded IoT and AV support"]
    }
  ]

  const stats = [
    { value: "500K+", label: "Students Served" },
    { value: "200+", label: "Education Clients" },
    { value: "99.9%", label: "System Uptime" },
    { value: "50+", label: "LMS Deployments" }
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
                <GraduationCap className="w-4 h-4" />
                Education Technology Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Technology That Empowers
                <span className="text-primary"> Learning</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Transform educational experiences with technology that engages students, 
                empowers educators, and enables institutional excellence. From K-12 to 
                higher education, we build solutions that shape the future of learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/quote">Get Education Assessment</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Talk to EdTech Expert</Link>
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
              Education Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive EdTech solutions for modern learning environments
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
              Education Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep expertise across all education technology domains
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
              Education Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from educational institutions we have partnered with
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
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Partner with education technology experts who understand your 
            unique challenges and deliver solutions that enhance learning.
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
