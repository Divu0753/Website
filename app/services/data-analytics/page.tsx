"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  BarChart3, 
  PieChart, 
  LineChart, 
  Database,
  Brain,
  Workflow,
  Target,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Layers,
  Zap,
  Eye,
  GitBranch
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DataAnalyticsPage() {
  const services = [
    {
      icon: Database,
      title: "Data Warehousing & Lakes",
      description: "Build modern data infrastructure that consolidates data from multiple sources into unified, queryable repositories optimized for analytics.",
      features: ["Data Lake Architecture", "ETL/ELT Pipelines", "Data Modeling", "Real-time Streaming"]
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with comprehensive BI solutions including dashboards, reports, and self-service analytics.",
      features: ["Interactive Dashboards", "Automated Reporting", "KPI Tracking", "Data Visualization"]
    },
    {
      icon: Brain,
      title: "Advanced Analytics & AI",
      description: "Leverage machine learning and AI to uncover patterns, predict outcomes, and automate decision-making with advanced analytical models.",
      features: ["Predictive Analytics", "Machine Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      icon: LineChart,
      title: "Real-time Analytics",
      description: "Process and analyze data in real-time to enable immediate insights and automated responses to critical business events.",
      features: ["Stream Processing", "Real-time Dashboards", "Event Detection", "Alerting Systems"]
    },
    {
      icon: Eye,
      title: "Data Visualization",
      description: "Create compelling visual stories from your data that communicate insights effectively to stakeholders at all levels.",
      features: ["Custom Visualizations", "Interactive Charts", "Embedded Analytics", "Mobile Dashboards"]
    },
    {
      icon: Workflow,
      title: "Data Governance",
      description: "Establish robust data governance frameworks that ensure data quality, security, and compliance across your organization.",
      features: ["Data Quality Management", "Metadata Management", "Access Controls", "Compliance Monitoring"]
    }
  ]

  const platforms = [
    { name: "Snowflake", category: "Data Warehouse" },
    { name: "Databricks", category: "Analytics Platform" },
    { name: "AWS Redshift", category: "Data Warehouse" },
    { name: "Google BigQuery", category: "Data Warehouse" },
    { name: "Azure Synapse", category: "Analytics Platform" },
    { name: "Apache Spark", category: "Processing Engine" },
    { name: "Tableau", category: "Visualization" },
    { name: "Power BI", category: "Visualization" },
    { name: "Looker", category: "BI Platform" },
    { name: "dbt", category: "Transformation" },
    { name: "Airflow", category: "Orchestration" },
    { name: "Kafka", category: "Streaming" }
  ]

  const useCases = [
    {
      title: "Customer Analytics",
      description: "Understand customer behavior, predict churn, segment audiences, and personalize experiences with comprehensive customer analytics.",
      metrics: ["360° Customer View", "Churn Prediction", "Lifetime Value", "Segmentation"]
    },
    {
      title: "Operational Intelligence",
      description: "Optimize operations with real-time visibility into processes, predictive maintenance, and automated anomaly detection.",
      metrics: ["Process Optimization", "Predictive Maintenance", "Quality Control", "Resource Planning"]
    },
    {
      title: "Financial Analytics",
      description: "Gain deeper financial insights with advanced forecasting, risk modeling, and performance analysis across your organization.",
      metrics: ["Revenue Forecasting", "Risk Analysis", "Cost Optimization", "P&L Analytics"]
    },
    {
      title: "Marketing Analytics",
      description: "Maximize marketing ROI with attribution modeling, campaign analytics, and data-driven optimization strategies.",
      metrics: ["Attribution Modeling", "Campaign Performance", "Channel Optimization", "ROI Analysis"]
    }
  ]

  const benefits = [
    { value: "3x", label: "Faster Insights", description: "Accelerate time to insight with modern analytics" },
    { value: "40%", label: "Cost Reduction", description: "Lower analytics infrastructure costs" },
    { value: "85%", label: "Data Accuracy", description: "Improve data quality and reliability" },
    { value: "3x", label: "ROI Improvement", description: "Increase return on analytics investment" }
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
                <BarChart3 className="w-4 h-4" />
                Data Analytics Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Transform Data Into
                <span className="text-primary"> Competitive Advantage</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Unlock the full potential of your data with comprehensive analytics solutions. 
                From data infrastructure to AI-powered insights, we help organizations make 
                smarter, faster, data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/quote">Start Your Data Journey</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Schedule Assessment</Link>
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
            {benefits.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Analytics Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end analytics solutions that turn data into strategic assets
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
                  {service.features.map((feature, i) => (
                    <span key={i} className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Analytics Use Cases
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven applications that deliver measurable business value
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {useCase.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Platforms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technology Platforms
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with leading analytics platforms to build best-fit solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-4 border border-border text-center hover:border-primary/50 transition-colors"
              >
                <div className="text-sm font-medium text-foreground">{platform.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{platform.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Unlock Your Data Potential?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our analytics solutions can transform your data 
            into strategic competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/quote">Get Started</Link>
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
