import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { 
  ArrowRight, 
  Award, 
  Users, 
  Target, 
  Heart,
  Globe,
  CheckCircle,
  Building2,
  Zap,
  Briefcase,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "About Us | Elevenxdesk - Your Trusted IT Partner",
  description: "Learn about Elevenxdesk's mission, values, and leadership team. We help organizations modernize infrastructure, improve security posture, and run reliable IT operations.",
  openGraph: {
    title: "About Elevenxdesk | Desk to Cloud IT Solutions",
    description: "Discover our journey and the principles behind our managed IT and cloud services.",
  },
}

const timeline = [
  {
    year: "2014",
    title: "Foundation",
    description: "Elevenxdesk was founded in Dubai, UAE, to deliver practical managed IT and cloud services for growing businesses.",
  },
  {
    year: "2014",
    title: "Cloud Pioneer",
    description: "Became one of the first MSPs to achieve AWS Advanced Partner status, leading the cloud revolution.",
  },
  {
    year: "2017",
    title: "Security Focus",
    description: "Launched our dedicated Security Operations Center (SOC) providing 24/7 threat monitoring.",
  },
  {
    year: "2020",
    title: "Regional Delivery Growth",
    description: "Expanded delivery capabilities across the GCC and built structured remote support workflows for regional clients.",
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Pioneered AIOps implementation, integrating AI and ML into our managed services platform.",
  },
  {
    year: "2025",
    title: "Ahmedabad Office Launch",
    description: "Opened a second office in Ahmedabad, India to strengthen engineering depth and client delivery capacity.",
  },
]

const values = [
  {
    icon: Target,
    title: "Client-First Approach",
    description: "Every decision we make starts with one question: How does this benefit our clients? We measure our success by the success of the businesses we serve.",
  },
  {
    icon: Zap,
    title: "Innovation Driven",
    description: "We stay ahead of the technology curve, continuously evaluating and adopting emerging technologies that can give our clients a competitive advantage.",
  },
  {
    icon: Heart,
    title: "Integrity & Trust",
    description: "We build lasting relationships through transparency, honesty, and delivering on our promises. Your trust is our most valued asset.",
  },
  {
    icon: Users,
    title: "Collaborative Excellence",
    description: "We work as an extension of your team, not just a vendor. Our collaborative approach ensures solutions that truly fit your unique needs.",
  },
]

const leadership = [
  {
    name: "Khalid Al Mansoori",
    title: "Chief Executive Officer",
    bio: "Dubai-based services executive focused on client partnerships, delivery quality, and long-term operational growth.",
  },
  {
    name: "Neha Patel",
    title: "Chief Technology Officer",
    bio: "Ahmedabad-based technology leader driving cloud modernization, platform reliability, and engineering standards.",
  },
  {
    name: "Omar Rahman",
    title: "Chief Security Officer",
    bio: "Security operations specialist leading risk management, governance controls, and incident preparedness across client environments.",
  },
  {
    name: "Rohan Mehta",
    title: "Chief Operations Officer",
    bio: "Operations leader responsible for UAE-India delivery coordination, service quality metrics, and customer success outcomes.",
  },
]

const certifications = [
  "AWS Partner Network",
  "Microsoft Solutions Partner",
  "Google Cloud Partner Program",
  "Cisco Partner Ecosystem",
  "VMware Technology Partner",
  "Security Best-Practice Aligned Operations",
  "Compliance-Ready Delivery Frameworks",
  "HIPAA Program Support",
  "PCI DSS Program Support",
  "GDPR-Aware Data Practices",
]

const openRoles = [
  {
    title: "Senior Cloud Solutions Architect",
    location: "Dubai, UAE / Hybrid",
    type: "Full-time",
    description:
      "Lead multi-cloud architecture initiatives, design resilient infrastructure patterns, and guide enterprise migration programs.",
  },
  {
    title: "Cybersecurity Operations Lead",
    location: "Dubai, UAE / On-site",
    type: "Full-time",
    description:
      "Drive SOC operations, incident response strategy, and continuous security improvement across client environments.",
  },
  {
    title: "Principal DevOps Engineer",
    location: "Ahmedabad, India / Hybrid",
    type: "Full-time",
    description:
      "Build scalable CI/CD platforms, automate cloud operations, and improve delivery performance for cross-functional engineering teams.",
  },
  {
    title: "Client Success Manager",
    location: "Ahmedabad, India / Hybrid",
    type: "Full-time",
    description:
      "Partner with enterprise clients to align technology initiatives with business outcomes and measurable value delivery.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pb-20 pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <Building2 className="h-4 w-4" />
              <span>About Elevenxdesk</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">From Desk to Cloud,</span>{" "}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                We Transform Businesses
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Founded in 2014 in Dubai, Elevenxdesk has grown from a regional consultancy into a
              multi-disciplinary IT services team with delivery capabilities across UAE and India.
              We partner with organizations to modernize infrastructure, strengthen security, and improve day-to-day IT operations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">
                  Our Services
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
              { value: "10+", label: "Years of Excellence", description: "Serving businesses since 2014" },
              { value: "120+", label: "Active Clients", description: "Across healthcare, finance, retail, and education" },
              { value: "80+", label: "IT Professionals", description: "Cloud, security, and operations specialists" },
              { value: "99.95%", label: "Managed Uptime", description: "Across monitored production environments" },
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

      {/* Mission Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
                <Target className="h-4 w-4" />
                <span>Our Mission</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                Empowering Businesses Through Technology Excellence
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Our mission is to bridge the gap between complex technology and business success. 
                We believe that every organization, regardless of size, deserves access to 
                enterprise-grade IT solutions that drive growth, enhance security, and enable innovation.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                We achieve this by combining deep technical expertise with a genuine understanding 
                of business challenges. Our team doesn&apos;t just implement technology &mdash; we architect 
                solutions that align with your strategic objectives and deliver measurable outcomes.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Strategic Technology Planning",
                  "Proactive Problem Prevention",
                  "Continuous Innovation",
                  "Measurable Business Outcomes",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-1.5">
                    <Image 
                      src="/images/logo.png" 
                      alt="Elevenxdesk" 
                      width={40} 
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Elevenxdesk</h3>
                    <p className="text-sm text-muted-foreground">Desk to Cloud</p>
                  </div>
                </div>
                <blockquote className="mb-6 text-lg italic text-muted-foreground">
                  &quot;Technology should be an enabler of business success, not a barrier. 
                  Our job is to make the complex simple, the risky secure, and the impossible possible.&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                    KM
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Khalid Al Mansoori</div>
                    <div className="text-sm text-muted-foreground">CEO, Elevenxdesk</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <Heart className="h-4 w-4" />
              <span>Our Core Values</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              The Principles That Guide Everything We Do
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our values aren&apos;t just words on a wall &mdash; they&apos;re the foundation of every 
              decision we make and every interaction we have with our clients and team members.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <Globe className="h-4 w-4" />
              <span>Our Journey</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              Since 2014: Growth with Purpose
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From a small consultancy to a full-service IT partner, our journey has been defined
              by practical execution and long-term client relationships.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="rounded-xl border border-border bg-card p-6">
                      <div className="mb-2 text-sm font-bold text-primary">{item.year}</div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-8 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary md:left-1/2" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="team" className="scroll-mt-24 bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <Users className="h-4 w-4" />
              <span>Leadership Team</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              Meet the Experts Behind Elevenxdesk
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our leadership team combines technical depth and service delivery experience
              across cloud, cybersecurity, and enterprise operations.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                  {leader.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">{leader.name}</h3>
                <p className="mb-4 text-sm font-medium text-primary">{leader.title}</p>
                <p className="text-sm text-muted-foreground">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="scroll-mt-24 bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <Briefcase className="h-4 w-4" />
              <span>Careers at Elevenxdesk</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              Build the Future of Enterprise IT With Us
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We are a UAE and India team of engineers, strategists, and problem-solvers passionate about
              helping businesses modernize securely and confidently. If you care about impact,
              learning, and technical excellence, you will feel at home here.
            </p>
          </div>

          <div className="mb-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "High-Impact Work",
                description:
                  "Work on mission-critical systems for organizations across healthcare, finance, legal, and manufacturing.",
              },
              {
                title: "Growth & Learning",
                description:
                  "Access certifications, mentorship, and structured growth plans to accelerate your technical and leadership journey.",
              },
              {
                title: "Global Collaboration",
                description:
                  "Join a distributed team that values ownership, communication, and inclusive collaboration across time zones.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-muted/30 p-8 lg:p-10">
            <h3 className="mb-6 text-2xl font-semibold text-foreground">Open Positions</h3>
            <div className="grid gap-5">
              {openRoles.map((role) => (
                <div
                  key={role.title}
                  className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40"
                >
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                    <h4 className="text-xl font-semibold text-foreground">{role.title}</h4>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                        {role.type}
                      </span>
                      <span className="rounded-full bg-muted px-3 py-1 font-medium text-muted-foreground">
                        {role.location}
                      </span>
                    </div>
                  </div>
                  <p className="mb-4 text-muted-foreground">{role.description}</p>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Apply / Inquire</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <Award className="h-4 w-4" />
              <span>Certifications & Partnerships</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              Recognized Excellence & Industry Trust
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our certifications and partnerships demonstrate our commitment to maintaining 
              the highest standards of technical excellence and security compliance.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
