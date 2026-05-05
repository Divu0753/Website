"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Building2,
  MessageSquare,
  Globe,
  Headphones
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const offices = [
  {
    city: "Dubai",
    country: "United Arab Emirates",
    address: "Dubai Internet City, Building 5, Office 402",
    postalCode: "Dubai, UAE",
    phone: "+971 4 572 8900",
    phoneHref: "+97145728900",
    email: "dubai@elevenxdesk.com",
    timezone: "GST (UTC+4)",
    type: "Headquarters",
  },
  {
    city: "Ahmedabad",
    country: "India",
    address: "Shivalik Shilp II, Prahladnagar",
    postalCode: "Ahmedabad, Gujarat 380015",
    phone: "+91 79 4603 2210",
    phoneHref: "+917946032210",
    email: "ahmedabad@elevenxdesk.com",
    timezone: "IST (UTC+5:30)",
    type: "Engineering Office",
  },
]

const departments = [
  {
    name: "Sales & Partnerships",
    email: "sales@elevenxdesk.com",
    description: "New business inquiries and partnership opportunities",
  },
  {
    name: "Technical Support",
    email: "support@elevenxdesk.com",
    description: "Existing client technical assistance",
  },
  {
    name: "Billing & Accounts",
    email: "billing@elevenxdesk.com",
    description: "Invoice and payment inquiries",
  },
  {
    name: "Careers",
    email: "careers@elevenxdesk.com",
    description: "Job opportunities and recruitment",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pb-16 pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <MessageSquare className="h-4 w-4" />
              <span>Get in Touch</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
              <span className="text-balance">Let&apos;s Start a Conversation</span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Whether you have a question about our services, need technical support, 
              or want to explore how we can help transform your IT infrastructure, 
              our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Call Us</p>
                <a href="tel:+97145728900" className="font-semibold text-foreground hover:text-primary">
                  +971 4 572 8900
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email Us</p>
                <a href="mailto:hello@elevenxdesk.com" className="font-semibold text-foreground hover:text-primary">
                  hello@elevenxdesk.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Support</p>
                <span className="font-semibold text-foreground">24/7 Available</span>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Response Time</p>
                <span className="font-semibold text-foreground">Under 2 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">
                Send Us a Message
              </h2>
              <p className="mb-8 text-muted-foreground">
                Fill out the form below and one of our experts will get back to you within 2 business hours.
              </p>

              {status === "success" ? (
                <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-8 text-center">
                  <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    Message Sent Successfully!
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Thank you for reaching out. Our team will review your message and respond within 2 business hours.
                  </p>
                  <Button onClick={() => setStatus("idle")}>
                    Send Another Message
                  </Button>
                </div>
              ) : status === "error" ? (
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-center">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    We Couldn&apos;t Send Your Message
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Please try again in a moment, or contact us directly by email.
                  </p>
                  <Button onClick={() => setStatus("idle")}>
                    Try Again
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                        required
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+971 50 000 0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Your Company Inc."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales & Pricing</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="careers">Career Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                    {status === "loading" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                    {" "}and{" "}
                    <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>.
                  </p>
                </form>
              )}
            </div>

            {/* Department Contacts */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">
                Department Contacts
              </h2>
              <p className="mb-8 text-muted-foreground">
                Reach out directly to the team that can best assist you.
              </p>

              <div className="space-y-4">
                {departments.map((dept) => (
                  <div
                    key={dept.name}
                    className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50"
                  >
                    <h3 className="mb-1 font-semibold text-foreground">{dept.name}</h3>
                    <p className="mb-3 text-sm text-muted-foreground">{dept.description}</p>
                    <a
                      href={`mailto:${dept.email}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      {dept.email}
                    </a>
                  </div>
                ))}
              </div>

              {/* Support Hours */}
              <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Headphones className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground">Technical Support</h3>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Emergency Support:</strong> 24/7/365</p>
                  <p><strong className="text-foreground">Standard Support:</strong> Mon-Fri, 8AM-8PM (All Time Zones)</p>
                  <p><strong className="text-foreground">Response SLA:</strong> Critical - 15 min, High - 1 hour, Normal - 4 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <Globe className="h-4 w-4" />
              <span>Global Presence</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
              Our Global Offices
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We operate from Dubai and Ahmedabad to deliver fast support,
              reliable engineering execution, and timezone-friendly collaboration.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {offices.map((office) => (
              <div
                key={office.city}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {office.type}
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">{office.city}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{office.country}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <div className="text-muted-foreground">
                      <p>{office.address}</p>
                      <p>{office.postalCode}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href={`tel:${office.phoneHref}`} className="text-muted-foreground hover:text-primary">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{office.timezone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
