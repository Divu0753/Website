"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Network, 
  Wifi, 
  Server, 
  Shield,
  Globe,
  Zap,
  Settings,
  Monitor,
  CheckCircle2,
  ArrowRight,
  Radio,
  Cable,
  Activity,
  Lock
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NetworkInfrastructurePage() {
  const services = [
    {
      icon: Network,
      title: "Network Design & Architecture",
      description: "Custom network designs that meet your performance, security, and scalability requirements. From campus networks to global WAN infrastructure.",
      features: ["Network Assessment", "Architecture Design", "Capacity Planning", "Documentation"]
    },
    {
      icon: Wifi,
      title: "Wireless Solutions",
      description: "Enterprise-grade wireless networks with seamless coverage, high performance, and robust security for modern mobile workforces.",
      features: ["Site Surveys", "WiFi 6/6E Deployment", "Guest Networks", "Wireless Security"]
    },
    {
      icon: Cable,
      title: "Structured Cabling",
      description: "Professional cabling infrastructure including fiber optics and copper cabling designed for reliability and future expansion.",
      features: ["Fiber Optics", "Cat6/6A Cabling", "Cable Management", "Testing & Certification"]
    },
    {
      icon: Shield,
      title: "Network Security",
      description: "Comprehensive network security solutions including firewalls, intrusion detection, VPNs, and zero-trust architecture implementation.",
      features: ["Next-Gen Firewalls", "IDS/IPS", "VPN Solutions", "Zero Trust"]
    },
    {
      icon: Globe,
      title: "SD-WAN & SASE",
      description: "Modern software-defined networking solutions that optimize performance, reduce costs, and enhance security for distributed organizations.",
      features: ["SD-WAN Deployment", "SASE Architecture", "Cloud Connectivity", "Traffic Optimization"]
    },
    {
      icon: Activity,
      title: "Network Monitoring & Management",
      description: "24/7 network monitoring with proactive maintenance, performance optimization, and rapid incident response.",
      features: ["Real-time Monitoring", "Performance Analytics", "Incident Response", "Capacity Management"]
    }
  ]

  const technologies = [
    { name: "Cisco", type: "Switching & Routing" },
    { name: "Aruba/HPE", type: "Wireless & Switching" },
    { name: "Fortinet", type: "Security" },
    { name: "Palo Alto", type: "Firewall" },
    { name: "Meraki", type: "Cloud Networking" },
    { name: "Juniper", type: "Networking" },
    { name: "VMware NSX", type: "SDN" },
    { name: "Veeam", type: "Backup" }
  ]

  const capabilities = [
    {
      title: "Enterprise Campus Networks",
      description: "Design and deploy high-performance campus networks supporting thousands of users with seamless mobility and redundancy."
    },
    {
      title: "Data Center Networking",
      description: "Build robust data center network fabrics with high bandwidth, low latency, and automated provisioning capabilities."
    },
    {
      title: "Multi-Site Connectivity",
      description: "Connect branch offices, data centers, and cloud resources with secure, optimized WAN solutions."
    },
    {
      title: "Network Modernization",
      description: "Upgrade legacy infrastructure to modern, software-defined solutions that improve agility and reduce costs."
    }
  ]

  const stats = [
    { value: "99.95%", label: "Network Uptime", description: "Across monitored environments" },
    { value: "180+", label: "Networks Delivered", description: "Across client environments" },
    { value: "< 15min", label: "Response Time", description: "For critical issues" },
    { value: "50%", label: "Cost Reduction", description: "Through optimization" }
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
                <Network className="w-4 h-4" />
                Network Infrastructure
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Build Networks That
                <span className="text-primary"> Power Your Business</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Design, deploy, and manage network infrastructure that delivers reliability, 
                performance, and security. From enterprise campuses to global WANs, we build 
                networks that scale with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/quote">Get Network Assessment</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Talk to an Expert</Link>
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
              Network Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive networking solutions for modern enterprises
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
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
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
              Network Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertise across all network environments and use cases
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-8 border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technology Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Certified partnerships with leading networking vendors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/50 transition-colors"
              >
                <div className="text-lg font-medium text-foreground">{tech.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{tech.type}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Upgrade Your Network?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a comprehensive network assessment and discover how we can improve 
            your infrastructure performance, security, and reliability.
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
