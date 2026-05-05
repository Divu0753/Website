"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle,
  Cloud,
  Shield,
  Monitor,
  Code,
  LineChart,
  Network,
  Building2,
  Users,
  DollarSign,
  Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const services = [
  { id: "cloud", label: "Cloud Solutions", icon: Cloud },
  { id: "security", label: "Cybersecurity", icon: Shield },
  { id: "managed-it", label: "Managed IT Services", icon: Monitor },
  { id: "software", label: "Software Development", icon: Code },
  { id: "consulting", label: "IT Consulting", icon: LineChart },
  { id: "network", label: "Network Infrastructure", icon: Network },
]

const companySize = [
  { id: "1-10", label: "1-10 employees" },
  { id: "11-50", label: "11-50 employees" },
  { id: "51-200", label: "51-200 employees" },
  { id: "201-500", label: "201-500 employees" },
  { id: "501-1000", label: "501-1000 employees" },
  { id: "1000+", label: "1000+ employees" },
]

const budgetRanges = [
  { id: "5k-10k", label: "$5,000 - $10,000" },
  { id: "10k-25k", label: "$10,000 - $25,000" },
  { id: "25k-50k", label: "$25,000 - $50,000" },
  { id: "50k-100k", label: "$50,000 - $100,000" },
  { id: "100k-250k", label: "$100,000 - $250,000" },
  { id: "250k+", label: "$250,000+" },
]

const timelines = [
  { id: "immediate", label: "Immediate (ASAP)" },
  { id: "1-month", label: "Within 1 month" },
  { id: "1-3-months", label: "1-3 months" },
  { id: "3-6-months", label: "3-6 months" },
  { id: "6-12-months", label: "6-12 months" },
  { id: "planning", label: "Just planning/researching" },
]

export default function QuotePage() {
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")
  const [formData, setFormData] = useState({
    // Step 1: Services
    selectedServices: [] as string[],
    
    // Step 2: Company Info
    companyName: "",
    industry: "",
    companySize: "",
    
    // Step 3: Project Details
    projectDescription: "",
    budget: "",
    timeline: "",
    
    // Step 4: Contact Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    preferredContact: "email",
  })

  const totalSteps = 4

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId]
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleOptionSelect = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setStatus("success")
  }

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.selectedServices.length > 0
      case 2:
        return formData.companyName && formData.companySize
      case 3:
        return formData.projectDescription && formData.timeline
      case 4:
        return formData.firstName && formData.lastName && formData.email
      default:
        return false
    }
  }

  if (status === "success") {
    return (
      <section className="flex min-h-[80vh] items-center justify-center bg-background px-4 py-32">
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-8 flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-500/10">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-foreground">
            Quote Request Submitted!
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Thank you for your interest in Elevenxdesk. Our solutions team will review your 
            requirements and prepare a customized proposal. Expect to hear from us within 
            24 business hours.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link href="/">Return to Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pb-8 pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
              <DollarSign className="h-4 w-4" />
              <span>Free Consultation</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
              <span className="text-balance">Get a Customized IT Solution Quote</span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Tell us about your project and requirements. Our solutions team will prepare 
              a detailed proposal tailored to your business needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Step {step} of {totalSteps}</span>
              <span className="font-medium text-primary">{Math.round((step / totalSteps) * 100)}% Complete</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div 
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
            <div className="mt-4 flex justify-between">
              {["Services", "Company", "Project", "Contact"].map((label, index) => (
                <div 
                  key={label}
                  className={`text-xs font-medium ${
                    index + 1 <= step ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-background pb-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Select Services */}
              {step === 1 && (
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h2 className="mb-2 text-2xl font-bold text-foreground">
                    What services are you interested in?
                  </h2>
                  <p className="mb-8 text-muted-foreground">
                    Select all that apply. You can choose multiple services.
                  </p>
                  
                  <div className="grid gap-4 sm:grid-cols-2">
                    {services.map((service) => {
                      const isSelected = formData.selectedServices.includes(service.id)
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => handleServiceToggle(service.id)}
                          className={`flex items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                            isSelected
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
                            isSelected ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}>
                            <service.icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <span className="font-medium text-foreground">{service.label}</span>
                          </div>
                          {isSelected && (
                            <CheckCircle className="h-5 w-5 text-primary" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Company Information */}
              {step === 2 && (
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h2 className="mb-2 text-2xl font-bold text-foreground">
                    Tell us about your company
                  </h2>
                  <p className="mb-8 text-muted-foreground">
                    This helps us tailor our proposal to your organization&apos;s needs.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Your Company Inc."
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select your industry</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Financial Services</option>
                        <option value="retail">Retail & E-commerce</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="education">Education</option>
                        <option value="legal">Legal Services</option>
                        <option value="technology">Technology</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <Label>Company Size *</Label>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {companySize.map((size) => (
                          <button
                            key={size.id}
                            type="button"
                            onClick={() => handleOptionSelect("companySize", size.id)}
                            className={`flex items-center gap-3 rounded-lg border p-4 text-left transition-all ${
                              formData.companySize === size.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <Users className={`h-5 w-5 ${
                              formData.companySize === size.id ? "text-primary" : "text-muted-foreground"
                            }`} />
                            <span className="text-sm font-medium text-foreground">{size.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Project Details */}
              {step === 3 && (
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h2 className="mb-2 text-2xl font-bold text-foreground">
                    Project Details
                  </h2>
                  <p className="mb-8 text-muted-foreground">
                    Share more about your project requirements and timeline.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectDescription">Project Description *</Label>
                      <Textarea
                        id="projectDescription"
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
                        rows={5}
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Budget Range</Label>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {budgetRanges.map((budget) => (
                          <button
                            key={budget.id}
                            type="button"
                            onClick={() => handleOptionSelect("budget", budget.id)}
                            className={`flex items-center gap-3 rounded-lg border p-4 text-left transition-all ${
                              formData.budget === budget.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <DollarSign className={`h-5 w-5 ${
                              formData.budget === budget.id ? "text-primary" : "text-muted-foreground"
                            }`} />
                            <span className="text-sm font-medium text-foreground">{budget.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Project Timeline *</Label>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {timelines.map((timeline) => (
                          <button
                            key={timeline.id}
                            type="button"
                            onClick={() => handleOptionSelect("timeline", timeline.id)}
                            className={`flex items-center gap-3 rounded-lg border p-4 text-left transition-all ${
                              formData.timeline === timeline.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <Calendar className={`h-5 w-5 ${
                              formData.timeline === timeline.id ? "text-primary" : "text-muted-foreground"
                            }`} />
                            <span className="text-sm font-medium text-foreground">{timeline.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Information */}
              {step === 4 && (
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h2 className="mb-2 text-2xl font-bold text-foreground">
                    Your Contact Information
                  </h2>
                  <p className="mb-8 text-muted-foreground">
                    How can we reach you to discuss your project?
                  </p>
                  
                  <div className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        placeholder="IT Director"
                      />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Preferred Contact Method</Label>
                      <div className="flex gap-4">
                        {["email", "phone"].map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => handleOptionSelect("preferredContact", method)}
                            className={`flex-1 rounded-lg border p-4 text-center capitalize transition-all ${
                              formData.preferredContact === method
                                ? "border-primary bg-primary/5 font-medium text-primary"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex items-center justify-between">
                {step > 1 ? (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                ) : (
                  <div />
                )}

                {step < totalSteps ? (
                  <Button type="button" onClick={nextStep} disabled={!isStepValid()}>
                    Next Step
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="submit" disabled={!isStepValid() || status === "loading"}>
                    {status === "loading" ? "Submitting..." : "Submit Request"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>

              <p className="mt-6 text-center text-xs text-muted-foreground">
                By submitting this form, you agree to our{" "}
                <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                {" "}and consent to be contacted about our services.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Why Request a Quote from Elevenxdesk?
            </h3>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { icon: CheckCircle, title: "No Obligation", desc: "Free consultation with no strings attached" },
                { icon: Calendar, title: "Fast Response", desc: "Proposal within 24 business hours" },
                { icon: Building2, title: "Tailored Solutions", desc: "Custom-fit to your specific needs" },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center">
                  <item.icon className="mb-3 h-8 w-8 text-primary" />
                  <h4 className="mb-1 font-medium text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
