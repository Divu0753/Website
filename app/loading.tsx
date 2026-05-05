export default function RootLoading() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl animate-pulse space-y-6">
          <div className="h-6 w-36 rounded bg-muted" />
          <div className="h-12 w-full rounded bg-muted" />
          <div className="h-6 w-5/6 rounded bg-muted" />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-40 rounded-xl bg-muted" />
            <div className="h-40 rounded-xl bg-muted" />
          </div>
        </div>
      </div>
    </section>
  )
}
