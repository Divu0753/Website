import { Metadata } from "next"
import Link from "next/link"
import {
  FileText,
  Scale,
  Shield,
  AlertTriangle,
  Globe,
  Lock,
  Clock,
  Gavel,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Terms of Service | Elevenxdesk",
  description:
    "Review Elevenxdesk Terms of Service governing access to our website, managed services, and technology solutions.",
  openGraph: {
    title: "Terms of Service | Elevenxdesk",
    description:
      "Understand your rights and responsibilities when using Elevenxdesk services.",
  },
}

const sections = [
  {
    title: "Service Scope & Eligibility",
    points: [
      "These Terms apply to website access, consultations, support interactions, and managed service engagements unless superseded by a signed master agreement.",
      "You represent that you have authority to bind your organization when accepting these Terms on its behalf.",
      "Specific service deliverables, timelines, service levels, and pricing are defined in order forms, statements of work, or other written agreements.",
      "You agree to provide accurate onboarding and operational information necessary to configure and deliver services safely.",
    ],
  },
  {
    title: "Acceptable Use",
    points: [
      "You must not use our services to violate laws, regulations, or third-party rights, including intellectual property and privacy rights.",
      "You must not attempt unauthorized access, privilege escalation, malware distribution, service abuse, or security control circumvention.",
      "You are responsible for user account governance within your organization, including strong authentication and role-based access assignments.",
      "We may suspend access where misuse, imminent risk, or legal non-compliance is detected.",
    ],
  },
  {
    title: "Security, Compliance, and Cooperation",
    points: [
      "Elevenxdesk implements commercially reasonable technical and organizational safeguards aligned with industry standards.",
      "You remain responsible for business-side controls such as endpoint hygiene, user policy enforcement, and timely approval of critical remediation actions.",
      "Both parties agree to cooperate in incident response, forensic investigation, and regulatory notification obligations where applicable.",
      "Compliance outcomes depend on shared responsibility, including customer policy implementation and operational discipline.",
    ],
  },
  {
    title: "Fees, Billing, and Payment",
    points: [
      "Recurring and one-time fees are invoiced according to the applicable order form or statement of work.",
      "Unless otherwise agreed, invoices are payable by the due date stated in the invoice terms.",
      "Late payments may incur lawful interest, temporary service restrictions, or suspension where material delinquency persists.",
      "Disputed charges must be raised in writing with reasonable detail within the dispute period defined in your agreement.",
    ],
  },
  {
    title: "Intellectual Property",
    points: [
      "Each party retains ownership of its pre-existing intellectual property, tools, processes, and materials.",
      "Client-owned data, configurations, and content remain client property, subject to licenses required for service delivery.",
      "Deliverables created specifically for you are governed by the ownership and license terms in the applicable signed agreement.",
      "No implied rights are granted beyond those explicitly stated in these Terms or written contracts.",
    ],
  },
  {
    title: "Limitations of Liability",
    points: [
      "To the maximum extent permitted by law, neither party is liable for indirect, incidental, special, consequential, or punitive damages.",
      "Service outcomes may depend on third-party platforms, internet conditions, and customer-controlled systems outside our direct control.",
      "Aggregate liability is limited as stated in your governing agreement; if no signed agreement exists, liability is limited to fees paid for the affected services during the preceding 12 months.",
      "Nothing in these Terms excludes liability where exclusion is prohibited by applicable law.",
    ],
  },
]

const operationalTerms = [
  {
    icon: Clock,
    title: "Service Availability",
    description:
      "Maintenance windows, support response targets, and uptime commitments are governed by your SLA or order-specific terms.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description:
      "Both parties agree to protect confidential information and use it only for authorized business purposes.",
  },
  {
    icon: Globe,
    title: "Jurisdiction",
    description:
      "Governing law, venue, and dispute process are determined by the controlling contract or, if absent, applicable local law.",
  },
]

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-background pb-20 pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <FileText className="h-4 w-4" />
              <span>Terms of Service</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Clear Terms for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Trusted IT Partnerships
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              These Terms govern your use of Elevenxdesk services, platforms, and website.
              They define rights, responsibilities, and expectations to support transparent and
              reliable collaboration.
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
              Core Legal Framework
            </h2>
            <p className="text-lg text-muted-foreground">
              These terms are structured to support enterprise-grade service relationships with
              clarity, accountability, and mutual protection.
            </p>
          </div>

          <div className="grid gap-8">
            {sections.map((section) => (
              <div key={section.title} className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                <h3 className="mb-5 text-2xl font-semibold text-foreground">{section.title}</h3>
                <ul className="space-y-3">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            {operationalTerms.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-sm text-primary">
                  <AlertTriangle className="h-4 w-4" />
                  Important Notice
                </div>
                <p className="text-muted-foreground">
                  These Terms are a general legal framework. Where a signed master services agreement,
                  order form, or statement of work exists, those documents control for service-specific terms.
                </p>
              </div>
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-sm text-primary">
                  <Gavel className="h-4 w-4" />
                  Legal Questions
                </div>
                <p className="text-muted-foreground">
                  For legal, procurement, or contract clarification requests, contact our team and
                  include your company name and active agreement reference if available.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">
                  Contact Legal Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/privacy">
                  View Privacy Policy
                  <Scale className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 lg:p-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary">
              <Shield className="h-4 w-4" />
              Change Management
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-foreground">Updates to These Terms</h3>
            <p className="leading-relaxed text-muted-foreground">
              We may revise these Terms to reflect legal requirements, service enhancements, or risk
              controls. Material updates will be posted on this page with a revised effective date.
              Continued use of services after updates may constitute acceptance where permitted by law.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
