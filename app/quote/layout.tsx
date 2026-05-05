import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a tailored IT services quote from Elevenxdesk based on your business needs, goals, and compliance requirements.",
  openGraph: {
    title: "Get an IT Services Quote | Elevenxdesk",
    description:
      "Share your requirements and receive a custom proposal for enterprise IT solutions.",
  },
}

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children
}
