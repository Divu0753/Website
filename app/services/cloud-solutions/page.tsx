import { Metadata } from "next"
import Link from "next/link"
import { 
  Cloud, 
  Server, 
  Database, 
  Lock, 
  TrendingUp, 
  Zap,
  ArrowRight,
  CheckCircle,
  Shield,
  Globe,
  BarChart3,
  RefreshCw
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Cloud Solutions | Elevenxdesk - AWS, Azure & GCP Services",
  description: "Expert cloud migration, management, and optimization services. Transform your infrastructure with AWS, Azure, and Google Cloud Platform solutions.",
  keywords: "cloud migration, AWS services, Azure services, Google Cloud Platform, cloud infrastructure, cloud security, multi-cloud strategy",
  openGraph: {
    title: "Cloud Solutions | Elevenxdesk",
    description: "Transform your business with enterprise cloud solutions.",
  },
}

const cloudServices = [
  {
    icon: RefreshCw,
    title: "Cloud Migration",
    description: "Seamlessly migrate your workloads to the cloud with minimal disruption. Our proven methodology ensures a smooth transition while maintaining business continuity.",
    features: [
      "Assessment & planning",
      "Data migration",
      "Application modernization",
      "Testing & validation",
      "Cutover management",
      "Post-migration support",
    ],
  },
  {
    icon: Globe,
    title: "Multi-Cloud Strategy",
    description: "Leverage the best of multiple cloud platforms. We design and implement multi-cloud architectures that optimize performance, cost, and resilience.",
    features: [
      "Platform selection",
      "Workload distribution",
      "Unified management",
      "Cost optimization",
      "Vendor lock-in prevention",
      "Cross-cloud networking",
    ],
  },
  {
    icon: Shield,
    title: "Cloud Security",
    description: "Protect your cloud environment with comprehensive security solutions. From identity management to threat detection, we ensure your data stays safe.",
    features: [
      "Identity & access management",
      "Network security",
      "Data encryption",
      "Compliance management",
      "Threat detection",
      "Security monitoring",
    ],
  },
  {
    icon: BarChart3,
    title: "Cloud Optimization",
    description: "Maximize your cloud ROI with continuous optimization. We analyze usage patterns and implement strategies to reduce costs while improving performance.",
    features: [
      "Cost analysis",
      "Resource rightsizing",
      "Reserved instance planning",
      "Performance tuning",
      "Waste elimination",
      "FinOps implementation",
    ],
  },
  {
    icon: Database,
    title: "Cloud-Native Development",
    description: "Build modern applications designed for the cloud. Our team leverages containers, serverless, and microservices to create scalable, resilient solutions.",
    features: [
      "Container orchestration",
      "Serverless architecture",
      "Microservices design",
      "CI/CD pipelines",
      "Infrastructure as code",
      "DevOps practices",
    ],
  },
  {
    icon: Server,
    title: "Disaster Recovery",
    description: "Ensure business continuity with robust disaster recovery solutions. We design and implement DR strategies that minimize downtime and data loss.",
    features: [
      "DR strategy design",
      "Backup automation",
      "Replication setup",
      "Failover testing",
      "RTO/RPO planning",
      "Recovery automation",
    ],
  },
]

const platforms = [
  {
    name: "Amazon Web Services",
    description: "As an AWS Advanced Consulting Partner, we help businesses leverage the full power of AWS services including EC2, S3, RDS, Lambda, and more.",
    certifications: ["AWS Solutions Architect", "AWS DevOps Engineer", "AWS Security Specialty"],
  },
  {
    name: "Microsoft Azure",
    description: "Our Microsoft Gold Partnership enables us to deliver comprehensive Azure solutions including Azure VMs, Azure AD, Azure SQL, and Microsoft 365 integration.",
    certifications: ["Azure Solutions Architect", "Azure Administrator", "Azure Security Engineer"],
  },
  {
    name: "Google Cloud Platform",
    description: "We help organizations harness GCP&apos;s innovative services including Compute Engine, BigQuery, Kubernetes Engine, and AI/ML capabilities.",
    certifications: ["GCP Cloud Architect", "GCP Data Engineer", "GCP DevOps Engineer"],
  },
]

const caseStudies = [
  {
    company: "Global Healthcare Provider",
    challenge: "Legacy on-premises infrastructure unable to scale for telehealth demand.",
    solution: "Migrated to AWS with auto-scaling architecture and HIPAA compliance.",
    results: ["99.95% uptime", "30% infrastructure cost optimization", "3x scalability headroom"],
  },
  {
    company: "Financial Services Firm",
    challenge: "Complex multi-vendor environment with security and compliance concerns.",
    solution: "Implemented multi-cloud strategy with unified security and governance.",
    results: ["60% faster deployment", "Zero security incidents", "PCI compliance achieved"],
  },
]

export default function CloudSolutionsPage() {
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
              <Cloud className="h-4 w-4" />
              <span>Cloud Solutions</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">Transform Your Business with</span>{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Enterprise Cloud Solutions
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Accelerate your digital transformation with expert cloud services. From migration to 
              optimization, we help you harness the full potential of AWS, Azure, and Google Cloud 
              Platform to drive innovation and reduce costs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/quote">
                  Get Cloud Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Speak to an Expert
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
            {[
              { value: "180+", label: "Cloud Migrations", description: "Completed across SMB and mid-market teams" },
              { value: "99.95%", label: "Managed Uptime", description: "Across monitored production workloads" },
              { value: "40%", label: "Cost Savings", description: "Average reduction" },
              { value: "$500M+", label: "Infrastructure Managed", description: "Annual cloud spend" },
            ].map((stat) => (
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
              <span>Comprehensive Cloud Services</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              End-to-End Cloud Capabilities
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From initial assessment to ongoing optimization, we provide the full spectrum of 
              cloud services to support your journey to the cloud and beyond.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cloudServices.map((service) => (
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

      {/* Platforms Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <Globe className="h-4 w-4" />
              <span>Platform Expertise</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              Certified Partners Across All Major Platforms
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our team holds advanced certifications across AWS, Azure, and Google Cloud, 
              enabling us to recommend and implement the best solutions for your needs.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="mb-4 text-xl font-semibold text-foreground">{platform.name}</h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">{platform.description}</p>
                <div className="space-y-2">
                  {platform.certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <TrendingUp className="h-4 w-4" />
              <span>Success Stories</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              Cloud Transformation in Action
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              See how we&apos;ve helped organizations across industries achieve their cloud objectives.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <div
                key={study.company}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="mb-4 text-xl font-semibold text-foreground">{study.company}</h3>
                <div className="mb-6 space-y-4">
                  <div>
                    <span className="text-sm font-medium text-primary">Challenge:</span>
                    <p className="mt-1 text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary">Solution:</span>
                    <p className="mt-1 text-muted-foreground">{study.solution}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.results.map((result) => (
                    <span
                      key={result}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
                <Lock className="h-4 w-4" />
                <span>Why Elevenxdesk Cloud</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                Your Trusted Cloud Partner
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                We bring together deep technical expertise, proven methodologies, and a 
                client-first approach to deliver cloud solutions that drive real business value.
              </p>
              <div className="space-y-4">
                {[
                  "Certified experts across AWS, Azure, and GCP",
                  "Proven migration methodology with phased cutover planning",
                  "24/7 cloud operations and support",
                  "Cost optimization with FinOps best practices",
                  "Security-first approach with compliance expertise",
                  "Vendor-agnostic recommendations",
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
                Ready to Start Your Cloud Journey?
              </h3>
              <p className="mb-6 text-muted-foreground">
                Get a free cloud readiness assessment and discover how we can help you 
                optimize your infrastructure, reduce costs, and accelerate innovation.
              </p>
              <Button asChild className="w-full">
                <Link href="/quote">
                  Request Free Assessment
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
