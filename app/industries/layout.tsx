import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Industries We Serve",
    template: "%s | Industries",
  },
  description:
    "Discover industry-focused IT solutions from Elevenxdesk for healthcare, finance, retail, legal, education, and manufacturing organizations.",
  openGraph: {
    title: "Industries | Elevenxdesk",
    description:
      "Specialized technology solutions tailored for regulated and high-growth industries.",
  },
}

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children
}
