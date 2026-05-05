import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-10 text-center">
          <p className="mb-2 text-sm font-medium text-primary">404</p>
          <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Page Not Found</h1>
          <p className="mb-8 text-muted-foreground">
            The page you are looking for does not exist or may have been moved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <Link href="/">Go to Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
