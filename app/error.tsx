"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-10 text-center">
          <p className="mb-2 text-sm font-medium text-primary">Something went wrong</p>
          <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            We hit an unexpected error
          </h1>
          <p className="mb-8 text-muted-foreground">
            Please try again. If the issue continues, contact our team and we will help immediately.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button onClick={reset}>Try Again</Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
