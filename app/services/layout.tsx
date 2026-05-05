import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "IT Services",
    template: "%s | IT Services",
  },
  description:
    "Explore Elevenxdesk IT services including cloud solutions, cybersecurity, managed IT, software development, consulting, and infrastructure modernization.",
  openGraph: {
    title: "IT Services | Elevenxdesk",
    description:
      "Comprehensive enterprise IT services designed to improve security, performance, and growth.",
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
