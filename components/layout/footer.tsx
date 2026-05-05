"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"

const services = [
  { name: "Cloud Solutions", href: "/services/cloud-solutions" },
  { name: "Cybersecurity", href: "/services/cybersecurity" },
  { name: "Managed IT Services", href: "/services/managed-it" },
  { name: "Software Development", href: "/services/software-development" },
  { name: "IT Consulting", href: "/services/it-consulting" },
  { name: "Data Analytics", href: "/services/data-analytics" },
  { name: "Network Infrastructure", href: "/services/network-infrastructure" },
]

const industries = [
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Finance", href: "/industries/finance" },
  { name: "Retail", href: "/industries/retail" },
  { name: "Manufacturing", href: "/industries/manufacturing" },
  { name: "Education", href: "/industries/education" },
  { name: "Legal", href: "/industries/legal" },
]

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/about#team" },
  { name: "Careers", href: "/about#careers" },
  { name: "Contact", href: "/contact" },
]

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/privacy#cookies" },
  { name: "Accessibility", href: "/privacy#accessibility" },
]

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/elevenxdesk", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/elevenxdesk", icon: Twitter },
  { name: "Facebook", href: "https://facebook.com/elevenxdesk", icon: Facebook },
  { name: "YouTube", href: "https://youtube.com/@elevenxdesk", icon: Youtube },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNewsletterStatus("submitting")
    await new Promise((resolve) => setTimeout(resolve, 700))
    setNewsletterStatus("success")
  }

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container-padding mx-auto py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-xl">
              <h3 className="text-2xl font-bold mb-2">Stay Updated with IT Insights</h3>
              <p className="text-background/70">
                Get the latest technology trends, security updates, and industry best practices delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 min-w-[280px]"
                required
              />
              <Button type="submit" variant="secondary" className="whitespace-nowrap" disabled={newsletterStatus === "submitting"}>
                {newsletterStatus === "submitting" ? "Subscribing..." : newsletterStatus === "success" ? "Subscribed" : "Subscribe Now"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-padding mx-auto py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo & Contact */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <p className="text-background/70 mb-6 max-w-sm">
              Empowering businesses with innovative IT solutions. From desk to cloud, we transform how you work, secure your data, and accelerate your growth.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contact@elevenxdesk.com"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@elevenxdesk.com
              </a>
              <a
                href="tel:+97145728900"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                +971 4 572 8900
              </a>
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  Dubai Internet City, Building 5, Office 402<br />
                  Dubai, United Arab Emirates
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2.5">
              {industries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-padding mx-auto py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60 text-center md:text-left">
              © {currentYear} Elevenxdesk. All rights reserved. Desk to Cloud Solutions.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/60 hover:text-background transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
