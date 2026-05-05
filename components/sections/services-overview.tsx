import Link from "next/link"
import { 
  Cloud, 
  Shield, 
  Monitor, 
  Code, 
  LineChart, 
  Network, 
  Headphones,
  ArrowRight 
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamlessly migrate to the cloud with our expert guidance. We specialize in AWS, Azure, and Google Cloud Platform deployments, ensuring your infrastructure is scalable, secure, and optimized for performance.",
    href: "/services/cloud-solutions",
    features: ["Cloud Migration", "Multi-Cloud Strategy", "Cloud Optimization"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business with security services built for real operating environments. We cover threat visibility, vulnerability management, compliance support, and continuous monitoring.",
    href: "/services/cybersecurity",
    features: ["Threat Detection", "Compliance", "Security Audits"],
  },
  {
    icon: Monitor,
    title: "Managed IT Services",
    description: "Focus on your core business while we handle your IT infrastructure. Our managed services include proactive monitoring, helpdesk support, patch management, and strategic IT planning.",
    href: "/services/managed-it",
    features: ["24/7 Monitoring", "Helpdesk Support", "IT Strategy"],
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Build software that supports your actual workflows. We create custom applications, web platforms, and internal systems tailored to your operations.",
    href: "/services/software-development",
    features: ["Custom Applications", "Web Development", "Mobile Apps"],
  },
  {
    icon: LineChart,
    title: "IT Consulting",
    description: "Make informed technology decisions with our expert consultants. We provide strategic guidance on digital transformation, technology roadmaps, vendor selection, and IT governance.",
    href: "/services/it-consulting",
    features: ["Digital Strategy", "Tech Roadmaps", "Vendor Selection"],
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "Build a robust foundation for your business operations. Our network solutions include design, implementation, optimization, and management of your entire network infrastructure.",
    href: "/services/network-infrastructure",
    features: ["Network Design", "SD-WAN", "Infrastructure Management"],
  },
]

export function ServicesOverview() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
            <Headphones className="h-4 w-4" />
            <span>Comprehensive IT Services</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">End-to-End Technology Support for UAE & India Businesses</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            From cloud infrastructure to cybersecurity, we provide practical IT services
            for growing teams in the UAE and India. Our delivery model is designed for
            faster execution, clear ownership, and predictable outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center text-sm font-medium text-primary">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
