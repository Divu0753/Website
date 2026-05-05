import Link from "next/link"
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Main CTA Card */}
          <div className="rounded-3xl border border-primary/20 bg-linear-to-br from-primary/10 via-card to-card p-8 text-center shadow-2xl md:p-16">
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-balance">Ready to Transform Your IT Infrastructure?</span>
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Partner with a practical, senior-led IT team that focuses on measurable improvements.
              We can help you plan, modernize, and support your environment with clear delivery milestones.
            </p>

            {/* CTA Buttons */}
            <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild className="group">
                <Link href="/quote">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Schedule a Call
                </Link>
              </Button>
            </div>

            {/* Contact Options */}
            <div className="grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Call Us</span>
                <a href="tel:+97145728900" className="font-semibold text-foreground hover:text-primary">
                  +971 4 572 8900
                </a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Email Us</span>
                <a href="mailto:hello@elevenxdesk.com" className="font-semibold text-foreground hover:text-primary">
                  hello@elevenxdesk.com
                </a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Book a Meeting</span>
                <Link href="/contact" className="font-semibold text-foreground hover:text-primary">
                  Schedule Now
                </Link>
              </div>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-sm text-muted-foreground">Working with modern cloud and security ecosystems</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {["AWS", "Microsoft Azure", "Google Cloud", "Cisco", "VMware"].map((badge) => (
                <span key={badge} className="text-sm font-medium text-muted-foreground">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
