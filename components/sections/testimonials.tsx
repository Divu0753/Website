"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "Elevenxdesk helped us move core workloads to a more stable cloud setup without interrupting patient services. The rollout was well planned, and their communication with our clinical and IT teams was excellent.",
    author: "Aisha Rahmani",
    title: "Director of Technology, Al Noor Clinics (Dubai)",
    industry: "Healthcare",
    rating: 5,
    results: "Reduced Infrastructure Costs",
  },
  {
    quote: "As a financial services firm, security and audit readiness are critical for us. Elevenxdesk helped us standardize access controls, logging, and incident workflows so our compliance process became much cleaner.",
    author: "Farhan Qureshi",
    title: "VP Technology, Emirates Capital Advisory",
    industry: "Financial Services",
    rating: 5,
    results: "Faster Audit Readiness",
  },
  {
    quote: "The managed IT service improved consistency across our retail locations. Ticket routing is clearer, and our store teams now get faster support during business hours and weekend peaks.",
    author: "Priya Shah",
    title: "Director of Operations, UrbanCart Retail",
    industry: "Retail",
    rating: 5,
    results: "Improved Support Response",
  },
  {
    quote: "Our ERP modernization project was delivered in phases, which helped us avoid disruptions on the production floor. We now have better reporting and fewer manual handoffs between departments.",
    author: "Arjun Mehta",
    title: "COO, Delta Precision Manufacturing",
    industry: "Manufacturing",
    rating: 5,
    results: "Smoother Production Planning",
  },
  {
    quote: "The campus network upgrade was planned around semester schedules, which was essential for us. Coverage and reliability improved noticeably for both students and faculty.",
    author: "Nidhi Trivedi",
    title: "Head of IT, Ahmedabad Institute of Management",
    industry: "Education",
    rating: 5,
    results: "Stronger Campus Connectivity",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
            <Star className="h-4 w-4" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Trusted by Technology and Operations Teams</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Real feedback from teams that partnered with us on modernization,
            security, and managed IT operations.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-border bg-card p-8 shadow-lg md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Quote className="h-6 w-6" />
            </div>

            {/* Stars */}
            <div className="mb-6 flex gap-1">
              {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mb-8 text-lg leading-relaxed text-foreground md:text-xl">
              &quot;{testimonials[activeIndex].quote}&quot;
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                  {testimonials[activeIndex].author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].title}
                  </div>
                </div>
              </div>

              {/* Result Badge */}
              <div className="rounded-full bg-primary/10 px-4 py-2">
                <span className="text-sm font-semibold text-primary">
                  {testimonials[activeIndex].results}
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between border-t border-border pt-8">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === activeIndex
                        ? "w-6 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: "120+", label: "Active Clients" },
            { value: "92%", label: "Annual Renewal Rate" },
            { value: "4.8/5", label: "Average CSAT Score" },
            { value: "10+", label: "Years in Operation" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
