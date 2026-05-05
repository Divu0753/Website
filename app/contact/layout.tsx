import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Elevenxdesk for sales, support, and partnership inquiries. Reach our Dubai and Ahmedabad teams for enterprise IT guidance.",
  openGraph: {
    title: "Contact Elevenxdesk",
    description:
      "Talk to our experts about cloud, cybersecurity, and managed IT solutions for your business.",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
