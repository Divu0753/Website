"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, ChevronDown, Cloud, Shield, Monitor, Code, LineChart, Network, Building2, Briefcase, Heart, GraduationCap, ShoppingCart, Scale, Factory } from "lucide-react"

const services = [
  {
    title: "Cloud Solutions",
    href: "/services/cloud-solutions",
    description: "AWS, Azure, GCP migration and management",
    icon: Cloud,
  },
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Comprehensive security assessments and protection",
    icon: Shield,
  },
  {
    title: "Managed IT Services",
    href: "/services/managed-it",
    description: "24/7 monitoring, helpdesk, and IT support",
    icon: Monitor,
  },
  {
    title: "Software Development",
    href: "/services/software-development",
    description: "Custom applications and SaaS solutions",
    icon: Code,
  },
  {
    title: "IT Consulting",
    href: "/services/it-consulting",
    description: "Strategic technology advisory and planning",
    icon: Briefcase,
  },
  {
    title: "Data Analytics",
    href: "/services/data-analytics",
    description: "Business intelligence and data solutions",
    icon: LineChart,
  },
  {
    title: "Network Infrastructure",
    href: "/services/network-infrastructure",
    description: "Design, implementation, and optimization",
    icon: Network,
  },
]

const industries = [
  { title: "Healthcare", href: "/industries/healthcare", icon: Heart },
  { title: "Finance", href: "/industries/finance", icon: Building2 },
  { title: "Retail", href: "/industries/retail", icon: ShoppingCart },
  { title: "Manufacturing", href: "/industries/manufacturing", icon: Factory },
  { title: "Education", href: "/industries/education", icon: GraduationCap },
  { title: "Legal", href: "/industries/legal", icon: Scale },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [expandedMobile, setExpandedMobile] = React.useState<string | null>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    if (!mobileOpen) {
      setExpandedMobile(null)
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white"
      )}
    >
      <div className="mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-20 w-[190px]">
              <Image
                src="/images/logo.png"
                alt="Elevenxdesk Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu viewport={false} className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-4">
                    <div className="mb-3 pb-3 border-b border-border">
                      <Link
                        href="/services"
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        View All Services →
                      </Link>
                    </div>
                    <ul className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="flex items-start gap-3 rounded-lg p-3 hover:bg-muted transition-colors"
                            >
                              <service.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                              <div>
                                <div className="text-sm font-medium">{service.title}</div>
                                <p className="text-xs text-muted-foreground line-clamp-1">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <div className="mb-3 pb-3 border-b border-border">
                      <Link
                        href="/industries"
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        View All Industries →
                      </Link>
                    </div>
                    <ul className="grid grid-cols-2 gap-2">
                      {industries.map((industry) => (
                        <li key={industry.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={industry.href}
                              className="flex items-center gap-2 rounded-lg p-2.5 hover:bg-muted transition-colors"
                            >
                              <industry.icon className="h-4 w-4 text-primary shrink-0" />
                              <span className="text-sm font-medium">{industry.title}</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
            <Button asChild>
              <Link href="/quote">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="rounded-xl border-border/70 bg-background/90 backdrop-blur">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-[360px] overflow-y-auto p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex min-h-full flex-col">
                <div className="border-b border-border p-5">
                  <Link href="/" onClick={() => setMobileOpen(false)} className="inline-flex items-center gap-2">
                    <div className="relative h-20 w-[190px]">
                      <Image
                        src="/images/logo.png"
                        alt="Elevenxdesk Logo"
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                  </Link>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-5">
                {/* Mobile Services */}
                <div className="rounded-xl border border-border bg-muted/30 px-4 py-3">
                  <button
                    onClick={() => setExpandedMobile(expandedMobile === "services" ? null : "services")}
                    aria-expanded={expandedMobile === "services"}
                    aria-controls="mobile-services-menu"
                    className="flex w-full items-center justify-between text-base font-semibold"
                  >
                    Services
                    <ChevronDown className={cn("h-5 w-5 transition-transform", expandedMobile === "services" && "rotate-180")} />
                  </button>
                  {expandedMobile === "services" && (
                    <div id="mobile-services-menu" className="mt-3 ml-1 flex flex-col gap-1 border-l border-border pl-3">
                      <Link
                        href="/services"
                        onClick={() => setMobileOpen(false)}
                        className="rounded-md px-2 py-1.5 text-sm font-medium text-primary hover:bg-primary/10"
                      >
                        All Services
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-background hover:text-foreground"
                        >
                          <service.icon className="h-4 w-4" />
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Industries */}
                <div className="rounded-xl border border-border bg-muted/30 px-4 py-3">
                  <button
                    onClick={() => setExpandedMobile(expandedMobile === "industries" ? null : "industries")}
                    aria-expanded={expandedMobile === "industries"}
                    aria-controls="mobile-industries-menu"
                    className="flex w-full items-center justify-between text-base font-semibold"
                  >
                    Industries
                    <ChevronDown className={cn("h-5 w-5 transition-transform", expandedMobile === "industries" && "rotate-180")} />
                  </button>
                  {expandedMobile === "industries" && (
                    <div id="mobile-industries-menu" className="mt-3 ml-1 flex flex-col gap-1 border-l border-border pl-3">
                      <Link
                        href="/industries"
                        onClick={() => setMobileOpen(false)}
                        className="rounded-md px-2 py-1.5 text-sm font-medium text-primary hover:bg-primary/10"
                      >
                        All Industries
                      </Link>
                      {industries.map((industry) => (
                        <Link
                          key={industry.href}
                          href={industry.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-background hover:text-foreground"
                        >
                          <industry.icon className="h-4 w-4" />
                          {industry.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-base font-semibold"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-base font-semibold"
                >
                  Contact
                </Link>
                </div>

                <div className="mt-auto flex flex-col gap-3 border-t border-border p-5">
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                      Contact Sales
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/quote" onClick={() => setMobileOpen(false)}>
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
