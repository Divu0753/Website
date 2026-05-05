"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Factory, 
  Cog, 
  Truck, 
  BarChart3,
  Shield,
  Cpu,
  Activity,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
  Eye,
  Boxes
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ManufacturingIndustryPage() {
  const solutions = [
    {
      icon: Cpu,
      title: "Industrial IoT",
      description: "Connect machines, sensors, and systems to create smart factories with real-time visibility into production processes.",
      benefits: ["Machine Connectivity", "Sensor Integration", "Real-time Monitoring", "Edge Computing"]
    },
    {
      icon: Activity,
      title: "Predictive Maintenance",
      description: "Prevent unplanned downtime with AI-powered predictive maintenance that identifies potential failures before they occur.",
      benefits: ["Failure Prediction", "Asset Health Monitoring", "Maintenance Scheduling", "Cost Reduction"]
    },
    {
      icon: Cog,
      title: "MES & Production Systems",
      description: "Manufacturing Execution Systems that optimize production scheduling, quality control, and shop floor operations.",
      benefits: ["Production Scheduling", "Quality Management", "Work Order Management", "Traceability"]
    },
    {
      icon: Truck,
      title: "Supply Chain Solutions",
      description: "End-to-end supply chain visibility and optimization from suppliers to customers with intelligent logistics management.",
      benefits: ["Supplier Management", "Inventory Optimization", "Logistics Planning", "Demand Forecasting"]
    },
    {
      icon: Eye,
      title: "Digital Twin Technology",
      description: "Create virtual replicas of physical assets and processes for simulation, optimization, and predictive analytics.",
      benefits: ["Process Simulation", "What-if Analysis", "Performance Optimization", "Training & Testing"]
    },
    {
      icon: BarChart3,
      title: "Manufacturing Analytics",
      description: "Transform production data into actionable insights for continuous improvement and operational excellence.",
      benefits: ["OEE Analytics", "Quality Analytics", "Energy Management", "Performance Dashboards"]
    }
  ]

  const industry40 = [
    "Smart Factory Implementation",
    "Connected Worker Solutions",
    "Autonomous Systems",
    "Additive Manufacturing",
    "AR/VR for Training",
    "Robotic Process Automation",
    "AI Quality Inspection",
    "Digital Thread Integration"
  ]

  const caseStudies = [
    {
      title: "Automotive Parts Manufacturer",
      challenge: "High unplanned downtime causing production losses and delivery delays",
      solution: "IoT-based predictive maintenance system with machine learning analytics",
      results: ["40% reduction in downtime", "25% lower maintenance costs", "15% increased output"]
    },
    {
      title: "Electronics Manufacturer",
      challenge: "Quality issues detected late in production causing rework and waste",
      solution: "AI-powered visual inspection and real-time quality monitoring system",
      results: ["90% defect detection rate", "60% reduction in rework", "30% faster inspection"]
    },
    {
      title: "Food & Beverage Producer",
      challenge: "Complex supply chain with limited visibility and compliance requirements",
      solution: "End-to-end traceability platform with automated compliance reporting",
      results: ["Improved traceability coverage", "Faster recall response process", "Stronger compliance reporting readiness"]
    }
  ]

  const stats = [
    { value: "40%", label: "Efficiency Gains" },
    { value: "100+", label: "Manufacturing Clients" },
    { value: "99.9%", label: "System Availability" },
    { value: "$500M+", label: "Savings Delivered" }
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
                <Factory className="w-4 h-4" />
                Manufacturing IT Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Industry 4.0 Solutions for
                <span className="text-primary"> Smart Manufacturing</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Transform your manufacturing operations with smart factory technologies. 
                From IoT and predictive maintenance to supply chain optimization, we help 
                manufacturers achieve operational excellence and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/quote">Get Manufacturing Assessment</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Talk to Industry Expert</Link>
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
              Manufacturing Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive Industry 4.0 solutions for modern manufacturing
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

      {/* Industry 4.0 Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industry 4.0 Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced technologies driving the future of manufacturing
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industry40.map((capability, index) => (
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
              Manufacturing Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from manufacturers we have partnered with
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
            Ready to Build Your Smart Factory?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Partner with manufacturing technology experts who understand your 
            industry and deliver solutions that drive operational excellence.
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
