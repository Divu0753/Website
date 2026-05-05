"use client"

import { useState } from "react"
import { Mail, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setStatus("success")
    setEmail("")
  }

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-transparent p-8 md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Content */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
                <Mail className="h-4 w-4" />
                <span>Stay Informed</span>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                Get IT Insights Delivered to Your Inbox
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Subscribe to our newsletter for the latest technology trends, security alerts, 
                best practices, and exclusive insights from our team of IT experts. 
                No spam, unsubscribe anytime.
              </p>

              {/* Benefits */}
              <div className="mt-6 flex flex-wrap gap-4">
                {["Weekly insights", "Security alerts", "Industry reports", "Exclusive content"].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:pl-8">
              {status === "success" ? (
                <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-6 text-center">
                  <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Successfully Subscribed!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Thank you for subscribing. Check your inbox for a confirmation email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1"
                    />
                    <Button type="submit" disabled={status === "loading"} className="shrink-0">
                      {status === "loading" ? (
                        "Subscribing..."
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates from Elevenxdesk.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
