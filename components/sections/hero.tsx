"use client"

import Link from "next/link"
import { ArrowRight, Play, Shield, Cloud, Zap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const stats = [
  { value: "120+", label: "Active Clients" },
  { value: "99.95%", label: "Managed Uptime" },
  { value: "24/7", label: "Expert Support" },
  { value: "10+", label: "Years Experience" },
]

const trustedBy = [
  "Microsoft Partner",
  "AWS Partner",
  "Google Cloud",
  "Cisco Partner",
  "VMware",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-60 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-px w-1/2 bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <Zap className="h-4 w-4" />
              <span>Built in Dubai, delivered with Ahmedabad engineering strength</span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">Practical IT Delivery for</span>{" "}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                UAE & India Growth Teams
              </span>
            </h1>

            {/* Subheading */}
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              From desk to cloud, we deliver practical IT services that improve reliability,
              security, and day-to-day operations. Partner with Elevenxdesk for solutions
              built around your team, budget, and growth plans.
            </p>

            {/* Features List */}
            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {[
                "Cloud Migration & Management",
                "24/7 Managed IT Support",
                "Business Cybersecurity",
                "Custom Software Development",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" asChild className="group">
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="group">
                <Link href="/quote">
                  <Play className="mr-2 h-4 w-4" />
                  Request a Quote
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 border-t border-border pt-8">
              <p className="mb-4 text-sm font-medium text-muted-foreground">Certified Partners</p>
              <div className="flex flex-wrap items-center gap-6">
                {trustedBy.map((partner) => (
                  <div
                    key={partner}
                    className="text-sm font-medium text-muted-foreground/60 transition-colors hover:text-muted-foreground"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Stats & Visual */}
          <div className="relative lg:pl-8">
            {/* Floating Cards */}
            <div className="relative">
              {/* Main Card */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-2xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Cloud className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Cloud Infrastructure</h3>
                    <p className="text-sm text-muted-foreground">Scalable & Secure</p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg border border-border bg-muted/50 p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">System Health</span>
                    <span className="font-medium text-primary">99.95%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[99.95%] rounded-full bg-linear-to-r from-primary to-accent" />
                  </div>
                </div>
              </div>

              {/* Floating Security Badge */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-xl border border-border bg-card p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                    <Shield className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Security-First Operations</p>
                    <p className="text-xs text-muted-foreground">Aligned with common compliance controls</p>
                  </div>
                </div>
              </div>

              {/* Floating Notification */}
              <div className="absolute -right-4 bottom-8 rounded-xl border border-border bg-card p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
                  <p className="text-sm text-muted-foreground">All systems operational</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
