import { 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp, 
  Headphones,
  Award,
  Globe
} from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "24/7/365 Support",
    description: "Round-the-clock technical support from our engineering team. We continuously monitor critical systems and provide priority response for urgent incidents.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Multi-layered security approach including next-gen firewalls, endpoint protection, SIEM integration, and regular penetration testing to keep your data safe.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Structured delivery plans help projects move from planning to launch with fewer surprises, clearer milestones, and predictable handoffs.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Get a dedicated team of specialists who understand your business. Your team includes a Technical Account Manager, engineers, and support specialists.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Our solutions grow with your business. From startup to enterprise, our infrastructure scales seamlessly to meet your evolving demands.",
  },
  {
    icon: Headphones,
    title: "Proactive Monitoring",
    description: "Continuous monitoring helps spot risks early, reduce downtime, and improve service stability before issues affect end users.",
  },
  {
    icon: Award,
    title: "Certified Experts",
    description: "Our team includes cloud, infrastructure, and security specialists with recognized certifications across major technology platforms.",
  },
  {
    icon: Globe,
    title: "Global Presence",
    description: "We support organizations across North America, Europe, and APAC through a blend of remote operations and regional delivery partners.",
  },
]

export function Features() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
            <Award className="h-4 w-4" />
            <span>Why Choose Elevenxdesk</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">The Elevenxdesk Advantage</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We combine technical excellence with business acumen to deliver IT solutions 
            that drive real results. Here&apos;s what sets us apart from the competition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              {/* Number Badge */}
              <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-20 rounded-2xl border border-border bg-muted/50 p-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "10+", label: "Years of Experience", description: "Serving businesses since 2014" },
              { value: "80+", label: "Technical Specialists", description: "Cloud, security, and support teams" },
              { value: "120+", label: "Active Client Environments", description: "Across multiple industries" },
              { value: "99.95%", label: "Managed Uptime", description: "Based on monitored workloads" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 font-medium text-foreground">{stat.label}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
