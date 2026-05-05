import { Metadata } from "next"
import Link from "next/link"
import {
  ShieldCheck,
  Lock,
  Database,
  Eye,
  Cookie,
  Globe,
  Users,
  Mail,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Privacy Policy | Elevenxdesk",
  description:
    "Read Elevenxdesk's Privacy Policy to understand how we collect, use, store, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Elevenxdesk",
    description:
      "Learn how Elevenxdesk protects your information and respects your privacy rights.",
  },
}

const principles = [
  {
    icon: ShieldCheck,
    title: "Privacy by Design",
    description:
      "We embed data protection controls into our processes, products, and services from day one.",
  },
  {
    icon: Lock,
    title: "Security First",
    description:
      "Administrative, technical, and physical safeguards protect personal data against unauthorized access.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We explain what data we collect, why we collect it, and how long we keep it in clear terms.",
  },
  {
    icon: Users,
    title: "User Control",
    description:
      "You can request access, correction, deletion, and portability for eligible personal data.",
  },
]

const dataCollected = [
  "Contact details such as name, business email, phone number, job title, and company name",
  "Account and authentication details for customer portals and support platforms",
  "Service usage and diagnostic data, including device identifiers, IP address, and browser metadata",
  "Contractual, billing, and transaction records needed to provide and maintain services",
  "Support communications, ticket history, and service quality feedback",
  "Marketing preferences and consent records, where applicable",
]

const usagePurposes = [
  "To deliver, maintain, and improve our IT services and managed support",
  "To respond to inquiries, provide customer support, and fulfill contractual obligations",
  "To protect systems, detect threats, and prevent fraudulent or abusive activity",
  "To comply with legal, regulatory, audit, and reporting requirements",
  "To provide relevant updates, resources, or offers consistent with your communication preferences",
  "To perform internal analytics and service quality improvements",
]

const rights = [
  "Right to access your personal information and receive a copy",
  "Right to request correction of incomplete or inaccurate data",
  "Right to request deletion where legal or contractual retention does not apply",
  "Right to object to or restrict processing in specific circumstances",
  "Right to withdraw consent where processing is based on consent",
  "Right to data portability where applicable by law",
]

const safeguards = [
  "Encryption in transit and at rest for sensitive systems",
  "Role-based access controls and least-privilege permissions",
  "Continuous security monitoring, vulnerability scanning, and incident response processes",
  "Documented retention schedules and secure disposal standards",
  "Vendor due diligence and contractual data protection commitments",
  "Periodic policy review, staff training, and governance oversight",
]

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-background pb-20 pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <ShieldCheck className="h-4 w-4" />
              <span>Privacy Policy</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Your Data,{" "}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Protected by Design
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              This Privacy Policy describes how Elevenxdesk collects, uses, stores, and protects
              personal information when you use our website, services, and support channels.
              We are committed to processing data responsibly and lawfully.
            </p>
            <p className="text-sm text-muted-foreground">
              Effective Date: May 5, 2026 · Last Updated: May 5, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Our Privacy Commitments
            </h2>
            <p className="text-lg text-muted-foreground">
              We apply clear governance standards to ensure confidentiality, integrity, and
              accountable processing at every stage of the data lifecycle.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle.title} className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <principle.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{principle.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary">
                <Database className="h-4 w-4" />
                Information We Collect
              </div>
              <ul className="space-y-3">
                {dataCollected.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary">
                <Globe className="h-4 w-4" />
                How We Use Information
              </div>
              <ul className="space-y-3">
                {usagePurposes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary">
                <Users className="h-4 w-4" />
                Your Privacy Rights
              </div>
              <p className="mb-6 text-muted-foreground">
                Depending on your jurisdiction, you may exercise one or more of the following rights:
              </p>
              <ul className="space-y-3">
                {rights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary">
                <Lock className="h-4 w-4" />
                Security & Retention
              </div>
              <p className="mb-6 text-muted-foreground">
                We implement layered controls and retention governance aligned with contractual and
                legal requirements.
              </p>
              <ul className="space-y-3">
                {safeguards.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <div id="cookies" className="scroll-mt-24 rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary">
                <Cookie className="h-4 w-4" />
                Cookies
              </div>
              <p className="text-muted-foreground">
                We use cookies and similar technologies for analytics, session management, and user
                experience improvements. You can manage cookie preferences in your browser settings.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary">
                <Globe className="h-4 w-4" />
                International Transfers
              </div>
              <p className="text-muted-foreground">
                Where data transfers occur across borders, we use appropriate safeguards and contractual
                mechanisms to maintain equivalent protection standards.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary">
                <Clock className="h-4 w-4" />
                Policy Updates
              </div>
              <p className="text-muted-foreground">
                We may update this policy periodically to reflect legal, technical, or operational
                changes. Material updates will be posted on this page with a revised effective date.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Questions About Privacy?</h3>
                <p className="text-muted-foreground">
                  Contact our privacy team for data requests or compliance inquiries.
                </p>
              </div>
              <Button asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              privacy@elevenxdesk.com
            </div>
          </div>
        </div>
      </section>

      <section id="accessibility" className="scroll-mt-24 bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Accessibility Commitment</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Elevenxdesk is committed to providing an inclusive digital experience. We continuously
              improve accessibility across our website and customer touchpoints by following recognized
              standards and improving compatibility with assistive technologies.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              If you experience accessibility barriers, contact us at{" "}
              <a href="mailto:accessibility@elevenxdesk.com" className="text-primary hover:underline">
                accessibility@elevenxdesk.com
              </a>{" "}
              and we will work to provide an accessible alternative.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
