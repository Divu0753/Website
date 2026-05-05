import { Metadata } from "next"
import Link from "next/link"
import { 
  Monitor, 
  Headphones, 
  Settings, 
  HardDrive, 
  RefreshCw, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Zap,
  Clock,
  Shield,
  TrendingUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Managed IT Services | Elevenxdesk - 24/7 IT Support & Management",
  description: "Comprehensive managed IT services including 24/7 helpdesk, remote monitoring, patch management, backup solutions, and strategic IT planning.",
  keywords: "managed IT services, IT support, helpdesk, remote monitoring, patch management, IT management, MSP",
  openGraph: {
    title: "Managed IT Services | Elevenxdesk",
    description: "24/7 IT support and management for your business.",
  },
}

const managedServices = [
  {
    icon: Headphones,
    title: "24/7 Help Desk Support",
    description: "Round-the-clock technical support from our team of certified IT professionals. We resolve issues quickly so your team stays productive.",
    features: [
      "24/7/365 availability",
      "Multi-channel support (phone, email, chat)",
      "15-minute average response time",
      "Tier 1-3 support escalation",
      "User satisfaction tracking",
      "Knowledge base access",
    ],
  },
  {
    icon: Monitor,
    title: "Remote Monitoring & Management",
    description: "Proactive monitoring of your entire IT environment to identify and resolve issues before they impact your business operations.",
    features: [
      "Real-time system monitoring",
      "Automated alerting",
      "Performance optimization",
      "Capacity planning",
      "Health dashboards",
      "Predictive analytics",
    ],
  },
  {
    icon: RefreshCw,
    title: "Patch Management",
    description: "Keep your systems secure and up-to-date with automated patch management that minimizes vulnerabilities without disrupting operations.",
    features: [
      "Automated patch deployment",
      "Testing & validation",
      "Rollback capabilities",
      "Compliance reporting",
      "Third-party patching",
      "Maintenance windows",
    ],
  },
  {
    icon: HardDrive,
    title: "Backup & Disaster Recovery",
    description: "Protect your critical data with comprehensive backup solutions and disaster recovery planning that ensures business continuity.",
    features: [
      "Automated backups",
      "Cloud & local options",
      "Point-in-time recovery",
      "DR planning & testing",
      "RTO/RPO optimization",
      "Ransomware protection",
    ],
  },
  {
    icon: Settings,
    title: "IT Asset Management",
    description: "Complete visibility and control over your IT assets throughout their lifecycle, from procurement to retirement.",
    features: [
      "Asset discovery & inventory",
      "License management",
      "Lifecycle planning",
      "Warranty tracking",
      "Cost optimization",
      "Compliance auditing",
    ],
  },
  {
    icon: BarChart3,
    title: "Strategic IT Planning",
    description: "Partner with our vCIO services to develop technology strategies that align with your business goals and drive competitive advantage.",
    features: [
      "Technology roadmapping",
      "Budget planning",
      "Vendor management",
      "Risk assessment",
      "Quarterly business reviews",
      "Strategic recommendations",
    ],
  },
]

const serviceTiers = [
  {
    name: "Essential",
    description: "Core IT support for small businesses",
    features: [
      "Business hours helpdesk",
      "Remote monitoring",
      "Patch management",
      "Basic backup",
      "Monthly reporting",
    ],
    ideal: "Small businesses with basic IT needs",
  },
  {
    name: "Professional",
    description: "Comprehensive IT management",
    features: [
      "24/7 helpdesk support",
      "Advanced monitoring",
      "Full patch management",
      "Cloud backup & DR",
      "Asset management",
      "Quarterly reviews",
    ],
    ideal: "Growing businesses requiring proactive IT",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Full-service IT partnership",
    features: [
      "24/7 priority support",
      "Dedicated account team",
      "Complete IT management",
      "Advanced security",
      "vCIO services",
      "Custom SLAs",
    ],
    ideal: "Organizations needing strategic IT partnership",
  },
]

const benefits = [
  { value: "40%", label: "Average Cost Reduction", description: "vs. in-house IT team" },
  { value: "99.9%", label: "System Uptime", description: "Guaranteed availability" },
  { value: "15min", label: "Response Time", description: "For critical issues" },
  { value: "95%", label: "First-Call Resolution", description: "Industry-leading rate" },
]

export default function ManagedITPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pb-20 pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Link 
              href="/services"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Services
            </Link>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <Monitor className="h-4 w-4" />
              <span>Managed IT Services</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">Focus on Your Business,</span>{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                We&apos;ll Handle Your IT
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Stop worrying about IT issues and start focusing on what matters most &mdash; growing 
              your business. Our managed IT services provide comprehensive support, proactive 
              monitoring, and strategic guidance to keep your technology running smoothly.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/quote">
                  Get IT Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Talk to an Expert
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 font-semibold text-foreground">{stat.label}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <Zap className="h-4 w-4" />
              <span>Our Services</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              Complete IT Management Solutions
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From day-to-day support to strategic planning, we provide everything you need 
              to keep your IT environment running at peak performance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {managedServices.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <TrendingUp className="h-4 w-4" />
              <span>Service Packages</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              Flexible Service Tiers
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Choose the level of support that matches your business needs and budget. 
              All tiers include our core monitoring and support capabilities.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {serviceTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border bg-card p-8 ${
                  tier.popular ? "border-primary shadow-xl" : "border-border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="mb-2 text-2xl font-bold text-foreground">{tier.name}</h3>
                <p className="mb-6 text-muted-foreground">{tier.description}</p>
                <div className="mb-6 space-y-3">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mb-6 rounded-lg bg-muted/50 p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Ideal for:</strong> {tier.ideal}
                  </p>
                </div>
                <Button asChild className="w-full" variant={tier.popular ? "default" : "outline"}>
                  <Link href="/quote">Get Pricing</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <Clock className="h-4 w-4" />
              <span>Getting Started</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              How Our Partnership Works
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Assessment", desc: "We evaluate your current IT environment and identify opportunities for improvement." },
              { step: "02", title: "Onboarding", desc: "Our team seamlessly integrates with your systems and documents your environment." },
              { step: "03", title: "Optimization", desc: "We implement best practices and optimize your infrastructure for performance." },
              { step: "04", title: "Ongoing Support", desc: "24/7 monitoring, support, and continuous improvement of your IT environment." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
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
                <Shield className="h-4 w-4" />
                <span>Why Elevenxdesk</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                Your Trusted IT Partner
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                We&apos;re more than just an IT service provider &mdash; we&apos;re an extension of your team. 
                Our managed services are designed to reduce costs, improve efficiency, and 
                give you peace of mind knowing your technology is in expert hands.
              </p>
              <div className="space-y-4">
                {[
                  "Predictable monthly costs with no surprises",
                  "Dedicated account team who knows your business",
                  "Proactive maintenance prevents problems",
                  "Enterprise-grade tools and best practices",
                  "Rapid response to any issues that arise",
                  "Strategic guidance aligned with your goals",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                Ready to Transform Your IT?
              </h3>
              <p className="mb-6 text-muted-foreground">
                Schedule a free IT assessment and discover how managed services can 
                improve your operations while reducing costs.
              </p>
              <Button asChild className="w-full">
                <Link href="/quote">
                  Get Free IT Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
