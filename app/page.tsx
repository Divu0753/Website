import { Hero } from "@/components/sections/hero"
import { ServicesOverview } from "@/components/sections/services-overview"
import { Industries } from "@/components/sections/industries"
import { Features } from "@/components/sections/features"
import { Testimonials } from "@/components/sections/testimonials"
import { Newsletter } from "@/components/sections/newsletter"
import { CTA } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Features />
      <Industries />
      <Testimonials />
      <Newsletter />
      <CTA />
    </>
  )
}
