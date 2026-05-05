"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database,
  Layers,
  GitBranch,
  TestTube,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Workflow,
  Cpu,
  Cloud,
  Shield
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Custom web applications built with modern frameworks like React, Next.js, and Vue.js. Scalable, responsive, and optimized for performance.",
      technologies: ["React", "Next.js", "Vue.js", "Node.js", "TypeScript"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. Delivering seamless user experiences across all devices.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"]
    },
    {
      icon: Database,
      title: "Enterprise Software Solutions",
      description: "Large-scale enterprise applications designed to streamline operations, improve efficiency, and drive business growth.",
      technologies: [".NET", "Java", "Python", "Microservices", "APIs"]
    },
    {
      icon: Cloud,
      title: "SaaS Product Development",
      description: "End-to-end SaaS product development from concept to launch. Multi-tenant architecture, subscription management, and scalable infrastructure.",
      technologies: ["AWS", "Azure", "Stripe", "Auth0", "PostgreSQL"]
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning Solutions",
      description: "Intelligent applications powered by machine learning and AI. From chatbots to predictive analytics and computer vision.",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face"]
    },
    {
      icon: Workflow,
      title: "System Integration",
      description: "Seamless integration of disparate systems and applications. Connect your existing tools with custom APIs and middleware solutions.",
      technologies: ["REST APIs", "GraphQL", "Webhooks", "ETL", "Message Queues"]
    }
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We begin by understanding your business objectives, user needs, and technical requirements through comprehensive discovery sessions."
    },
    {
      step: "02",
      title: "Architecture & Design",
      description: "Our architects design scalable system architecture while UI/UX designers create intuitive user interfaces and experiences."
    },
    {
      step: "03",
      title: "Agile Development",
      description: "Using agile methodologies, we develop in iterative sprints, providing regular demos and incorporating feedback continuously."
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Rigorous testing including unit tests, integration tests, security audits, and performance testing ensures software quality."
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "Seamless deployment to production environments with CI/CD pipelines, monitoring setup, and launch support."
    },
    {
      step: "06",
      title: "Maintenance & Evolution",
      description: "Ongoing support, maintenance, and feature development to keep your software current and competitive."
    }
  ]

  const techStack = [
    { category: "Frontend", technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", technologies: ["Node.js", "Python", "Java", ".NET", "Go", "Rust"] },
    { category: "Mobile", technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "MySQL"] },
    { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "Vercel", "Docker", "Kubernetes"] },
    { category: "DevOps", technologies: ["GitHub Actions", "Jenkins", "Terraform", "Ansible", "Prometheus"] }
  ]

  const caseStudies = [
    {
      title: "Healthcare Patient Portal",
      industry: "Healthcare",
      description: "Built a HIPAA-compliant patient portal enabling secure communication, appointment scheduling, and medical record access for 500,000+ patients.",
      results: ["60% reduction in phone calls", "95% patient satisfaction", "40% faster check-ins"]
    },
    {
      title: "FinTech Trading Platform",
      industry: "Finance",
      description: "Developed a real-time trading platform for high-volume operations with resilient failover design and strong production stability.",
      results: ["High daily transaction volume", "Low-latency order flow", "99.95% uptime"]
    },
    {
      title: "Retail E-commerce Platform",
      industry: "Retail",
      description: "Created a scalable e-commerce platform with AI-powered recommendations, handling peak loads of 100,000+ concurrent users during sales events.",
      results: ["300% revenue increase", "100K+ concurrent users", "35% higher conversions"]
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
                <Code2 className="w-4 h-4" />
                Custom Software Development
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Building Software That
                <span className="text-primary"> Drives Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                From concept to deployment, we build custom software solutions that solve complex 
                business challenges and create competitive advantages. Modern technologies, agile 
                methodologies, and a focus on quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/quote">Start Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Development Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software development services tailored to your unique requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/10 mb-2">{phase.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage the latest technologies to build robust, scalable solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
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
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world examples of software solutions delivering measurable results
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
                <span className="text-xs font-medium text-primary uppercase tracking-wider">{study.industry}</span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">{study.title}</h3>
                <p className="text-muted-foreground mb-6">{study.description}</p>
                <div className="space-y-2">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{result}</span>
                    </div>
                  ))}
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
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your software development needs and create a solution 
            that transforms your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/quote">Get a Quote</Link>
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
