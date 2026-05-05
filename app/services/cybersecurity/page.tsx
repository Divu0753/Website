import { Metadata } from "next"
import Link from "next/link"
import { 
  Shield, 
  Eye, 
  Lock, 
  AlertTriangle, 
  FileCheck, 
  Users,
  ArrowRight,
  CheckCircle,
  Zap,
  Clock,
  Target,
  ShieldCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Cybersecurity Services | Elevenxdesk - Enterprise Security Solutions",
  description: "Protect your business with enterprise-grade cybersecurity solutions. 24/7 SOC monitoring, threat detection, compliance management, and incident response.",
  keywords: "cybersecurity services, SOC monitoring, threat detection, vulnerability management, compliance, penetration testing, security operations center",
  openGraph: {
    title: "Cybersecurity Services | Elevenxdesk",
    description: "Enterprise-grade security solutions to protect your business.",
  },
}

const securityServices = [
  {
    icon: Eye,
    title: "Security Operations Center (SOC)",
    description: "Our 24/7/365 Security Operations Center provides continuous monitoring, threat detection, and rapid incident response to protect your organization around the clock.",
    features: [
      "Real-time threat monitoring",
      "SIEM integration & management",
      "Incident detection & response",
      "Security event correlation",
      "Threat intelligence feeds",
      "Executive reporting",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Threat Detection & Response",
    description: "Advanced threat detection using AI and machine learning to identify and respond to sophisticated cyber attacks before they impact your business.",
    features: [
      "Advanced threat analytics",
      "Behavioral analysis",
      "Automated response playbooks",
      "Threat hunting",
      "Malware analysis",
      "Forensic investigation",
    ],
  },
  {
    icon: Target,
    title: "Vulnerability Management",
    description: "Comprehensive vulnerability assessment and management program to identify, prioritize, and remediate security weaknesses across your environment.",
    features: [
      "Continuous scanning",
      "Risk prioritization",
      "Remediation guidance",
      "Patch management",
      "Configuration assessment",
      "Compliance reporting",
    ],
  },
  {
    icon: FileCheck,
    title: "Compliance & Governance",
    description: "Navigate complex regulatory requirements with our compliance expertise. We help you achieve and maintain compliance with industry standards and regulations.",
    features: [
      "Compliance assessments",
      "Gap analysis",
      "Policy development",
      "Audit preparation",
      "Continuous monitoring",
      "Documentation support",
    ],
  },
  {
    icon: Users,
    title: "Security Awareness Training",
    description: "Transform your employees into your first line of defense with comprehensive security awareness training programs and simulated phishing exercises.",
    features: [
      "Interactive training modules",
      "Phishing simulations",
      "Role-based training",
      "Progress tracking",
      "Compliance training",
      "Security culture building",
    ],
  },
  {
    icon: Lock,
    title: "Penetration Testing",
    description: "Identify security vulnerabilities before attackers do with our comprehensive penetration testing services performed by certified ethical hackers.",
    features: [
      "Network penetration testing",
      "Web application testing",
      "Social engineering tests",
      "Red team exercises",
      "Wireless security testing",
      "Detailed remediation plans",
    ],
  },
]

const complianceFrameworks = [
  { name: "SOC 2 Type II", description: "Service organization security controls" },
  { name: "HIPAA", description: "Healthcare data protection" },
  { name: "PCI DSS", description: "Payment card industry security" },
  { name: "GDPR", description: "European data privacy regulation" },
  { name: "ISO 27001", description: "Information security management" },
  { name: "NIST CSF", description: "Cybersecurity framework" },
  { name: "CMMC", description: "Defense contractor compliance" },
  { name: "FedRAMP", description: "Federal cloud security" },
]

const threatStats = [
  { value: "24/7", label: "Threat Monitoring Coverage" },
  { value: "15min", label: "Average Detection Time" },
  { value: "99.9%", label: "Threat Detection Rate" },
  { value: "0", label: "Client Data Breaches" },
]

export default function CybersecurityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pb-20 pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear_gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-[size:4rem_4rem]" />
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
              <Shield className="h-4 w-4" />
              <span>Cybersecurity Services</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">Enterprise-Grade</span>{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cybersecurity Protection
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Protect your business from evolving cyber threats with our comprehensive security 
              solutions. Our 24/7 Security Operations Center and team of certified experts 
              provide the protection your organization needs to operate with confidence.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/quote">
                  Get Security Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Speak to Security Expert
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
            {threatStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-muted-foreground">{stat.label}</div>
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
              <ShieldCheck className="h-4 w-4" />
              <span>Security Services</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              Comprehensive Security Solutions
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From continuous monitoring to incident response, we provide the complete 
              spectrum of cybersecurity services to protect your organization.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {securityServices.map((service) => (
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

      {/* SOC Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
                <Clock className="h-4 w-4" />
                <span>24/7/365 Protection</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                Security Operations Center
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Our state-of-the-art Security Operations Center provides round-the-clock 
                monitoring, threat detection, and incident response. Staffed by certified 
                security analysts and powered by advanced SIEM technology, our SOC ensures 
                your organization is protected at all times.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Real-Time Monitoring", desc: "Continuous surveillance of your environment" },
                  { title: "Rapid Response", desc: "15-minute average response to critical threats" },
                  { title: "Threat Intelligence", desc: "Global threat feeds and analysis" },
                  { title: "Expert Analysis", desc: "CISSP and CISM certified analysts" },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg border border-border bg-card p-4">
                    <h4 className="mb-1 font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-6 text-xl font-semibold text-foreground">SOC Capabilities</h3>
              <div className="space-y-4">
                {[
                  "24/7/365 security monitoring and alerting",
                  "Advanced SIEM with machine learning",
                  "Automated threat detection and response",
                  "Incident investigation and forensics",
                  "Threat hunting and proactive defense",
                  "Executive dashboards and reporting",
                  "Integration with existing security tools",
                  "Dedicated security analyst support",
                ].map((capability) => (
                  <div key={capability} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <FileCheck className="h-4 w-4" />
              <span>Compliance Expertise</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              Industry Compliance & Certifications
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We help organizations achieve and maintain compliance with the most demanding 
              regulatory frameworks and industry standards.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {complianceFrameworks.map((framework) => (
              <div
                key={framework.name}
                className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50"
              >
                <h3 className="mb-2 font-semibold text-foreground">{framework.name}</h3>
                <p className="text-sm text-muted-foreground">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
                <Zap className="h-4 w-4" />
                <span>Why Elevenxdesk Security</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                Your Trusted Security Partner
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "Certified Security Experts",
                  description: "Our team holds industry-leading certifications including CISSP, CISM, CEH, and OSCP, ensuring you get expert-level protection.",
                },
                {
                  title: "Proven Track Record",
                  description: "Zero client data breaches and 99.9% threat detection rate demonstrate our commitment to protecting your organization.",
                },
                {
                  title: "Advanced Technology",
                  description: "We leverage AI, machine learning, and automation to detect and respond to threats faster than traditional methods.",
                },
                {
                  title: "Industry Expertise",
                  description: "Deep experience across healthcare, finance, retail, and other regulated industries ensures compliance-aware security.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/quote">
                  Get Your Security Assessment
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
