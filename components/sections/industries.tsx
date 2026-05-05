import Link from "next/link"
import { 
  Building2, 
  Heart, 
  Landmark, 
  ShoppingCart, 
  Factory, 
  GraduationCap,
  Scale,
  ArrowRight 
} from "lucide-react"
import { Button } from "@/components/ui/button"

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    description: "HIPAA-compliant IT solutions for healthcare providers, including EHR integration, telehealth platforms, and secure patient data management.",
    href: "/industries/healthcare",
    stat: "Healthcare Delivery Experience",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Secure and compliant technology solutions for banks, credit unions, investment firms, and insurance companies with strict regulatory adherence.",
    href: "/industries/finance",
    stat: "Compliance-Aligned Delivery",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Omnichannel retail solutions including POS systems, inventory management, e-commerce platforms, and customer analytics.",
    href: "/industries/retail",
    stat: "Retail and Commerce Expertise",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industry 4.0 solutions including IoT integration, supply chain optimization, ERP systems, and smart factory implementations.",
    href: "/industries/manufacturing",
    stat: "Operational Improvement Focus",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "EdTech solutions for K-12 and higher education institutions, including LMS platforms, virtual classrooms, and campus network infrastructure.",
    href: "/industries/education",
    stat: "Campus Technology Programs",
  },
  {
    icon: Scale,
    title: "Legal Services",
    description: "Secure and compliant IT solutions for law firms, including document management, e-discovery tools, and client portal systems.",
    href: "/industries/legal",
    stat: "Legal Workflow Modernization",
  },
]

export function Industries() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
            <Building2 className="h-4 w-4" />
            <span>Industry Expertise</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Tailored Solutions for Every Industry</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We understand that each industry has different workflows, regulations, and timelines.
            Our teams in Dubai and Ahmedabad deliver solutions tailored to your sector&apos;s
            operating reality, not generic templates.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <industry.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {industry.title}
                    </h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                  </div>
                  <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                    {industry.stat}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/industries">
              Explore All Industries
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
