export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground">Not Found</h2>
        <p className="text-muted-foreground">Could not find requested resource</p>
      </div>
    </div>
  )
}