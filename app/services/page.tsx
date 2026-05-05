import { Metadata } from "next"
import Link from "next/link"
import { 
  Cloud, 
  Shield, 
  Monitor, 
  Code, 
  LineChart, 
  Network,
  ArrowRight,
  CheckCircle,
  Headphones,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "IT Services | Elevenxdesk - Enterprise Technology Solutions",
  description: "Explore our comprehensive IT services including cloud solutions, cybersecurity, managed IT, software development, consulting, and network infrastructure.",
  openGraph: {
    title: "IT Services | Elevenxdesk",
    description: "Enterprise-grade IT solutions from desk to cloud.",
  },
}

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Transform your business with cloud technology. We provide end-to-end cloud services including migration, optimization, and management across AWS, Azure, and Google Cloud Platform.",
    href: "/services/cloud-solutions",
    features: [
      "Cloud Migration & Assessment",
      "Multi-Cloud Architecture",
      "Cloud Security & Compliance",
      "Cost Optimization",
      "Disaster Recovery",
      "24/7 Cloud Management",
    ],
    stats: { value: "99.95%", label: "Managed Uptime" },
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business with enterprise-grade security solutions. Our comprehensive security services safeguard your data, systems, and reputation from evolving cyber threats.",
    href: "/services/cybersecurity",
    features: [
      "Security Operations Center (SOC)",
      "Threat Detection & Response",
      "Vulnerability Management",
      "Compliance & Governance",
      "Security Awareness Training",
      "Penetration Testing",
    ],
    stats: { value: "24/7", label: "Threat Monitoring" },
  },
  {
    icon: Monitor,
    title: "Managed IT Services",
    description: "Focus on your core business while we handle your IT. Our managed services provide proactive monitoring, maintenance, and support to keep your systems running smoothly.",
    href: "/services/managed-it",
    features: [
      "24/7 Help Desk Support",
      "Remote Monitoring & Management",
      "Patch Management",
      "Backup & Recovery",
      "IT Asset Management",
      "Vendor Management",
    ],
    stats: { value: "15min", label: "Avg Response" },
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Turn your vision into reality with custom software solutions. Our development team creates scalable, secure applications tailored to your unique business requirements.",
    href: "/services/software-development",
    features: [
      "Custom Application Development",
      "Web & Mobile Apps",
      "API Development & Integration",
      "Legacy Modernization",
      "DevOps & CI/CD",
      "Quality Assurance",
    ],
    stats: { value: "180+", label: "Delivery Engagements" },
  },
  {
    icon: LineChart,
    title: "IT Consulting",
    description: "Make strategic technology decisions with confidence. Our consultants provide expert guidance on digital transformation, technology roadmaps, and IT governance.",
    href: "/services/it-consulting",
    features: [
      "Digital Transformation Strategy",
      "Technology Assessment",
      "IT Roadmap Planning",
      "Vendor Selection",
      "Process Optimization",
      "Change Management",
    ],
    stats: { value: "40%", label: "Avg Cost Savings" },
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "Build a robust foundation for your business operations. Our network solutions ensure reliable, secure, and high-performance connectivity across your organization.",
    href: "/services/network-infrastructure",
    features: [
      "Network Design & Architecture",
      "SD-WAN Implementation",
      "Wireless Solutions",
      "Network Security",
      "Performance Monitoring",
      "Infrastructure Management",
    ],
    stats: { value: "10Gbps+", label: "Throughput" },
  },
]

const process = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "We begin by understanding your business goals, current infrastructure, and challenges through comprehensive assessments and stakeholder interviews.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Our experts develop a tailored strategy and roadmap aligned with your objectives, timeline, and budget constraints.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "We execute the plan with precision, following industry best practices and maintaining clear communication throughout the process.",
  },
  {
    step: "04",
    title: "Support & Optimization",
    description: "Post-implementation, we provide ongoing support, monitoring, and continuous optimization to ensure sustained success.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pb-20 pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <Headphones className="h-4 w-4" />
              <span>Comprehensive IT Services</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">Enterprise IT Solutions</span>{" "}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                That Drive Results
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              From cloud infrastructure to cybersecurity, we deliver the complete spectrum of IT services 
              your business needs to innovate, compete, and grow. Our solutions are designed to scale 
              with your ambitions and adapt to your evolving needs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/quote">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid items-center gap-8 rounded-2xl border border-border bg-card p-8 lg:grid-cols-2 lg:p-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mb-8 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild>
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Stats Card */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="rounded-xl border border-border bg-muted/50 p-8 text-center">
                    <div className="mb-4 text-5xl font-bold text-primary">
                      {service.stats.value}
                    </div>
                    <div className="mb-6 text-lg font-medium text-foreground">
                      {service.stats.label}
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <Zap className="h-4 w-4" />
              <span>Our Approach</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              How We Deliver Excellence
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our proven methodology ensures successful outcomes for every engagement, 
              from initial assessment to ongoing optimization.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 text-4xl font-bold text-primary/20">
                  {item.step}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
                <CheckCircle className="h-4 w-4" />
                <span>The Elevenxdesk Difference</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                Why Businesses Choose Elevenxdesk
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                We combine deep technical expertise with business acumen to deliver IT solutions 
                that drive measurable results. Our client-first approach ensures that every 
                solution is tailored to your specific needs and objectives.
              </p>
              <div className="space-y-4">
                {[
                  "10+ years of industry experience",
                  "200+ certified IT professionals",
                  "99.95% managed uptime across monitored workloads",
                  "24/7/365 support coverage",
                  "Proven ROI with 40% average cost savings",
                  "Industry-specific compliance expertise",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { value: "120+", label: "Active Clients" },
                { value: "92%", label: "Annual Renewals" },
                { value: "80+", label: "Technical Specialists" },
                { value: "3", label: "Primary Delivery Regions" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-6 text-center"
                >
                  <div className="text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-2 text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
