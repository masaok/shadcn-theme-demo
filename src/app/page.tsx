import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              ShadCN Theme Demo
            </h1>
            <p className="text-muted-foreground">
              Demonstrating light and dark themes with next-themes
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Theme Features</CardTitle>
              <CardDescription>
                This demo showcases automatic theme detection and switching
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Auto-detects system theme preference</li>
                <li>• Persists user theme choice</li>
                <li>• No flash of wrong theme (FOIT)</li>
                <li>• Smooth transitions between themes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
              <CardDescription>
                Built with modern web technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Next.js 14 with App Router</li>
                <li>• TypeScript for type safety</li>
                <li>• Tailwind CSS for styling</li>
                <li>• ShadCN UI components</li>
                <li>• next-themes for theme management</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Theme Controls</CardTitle>
              <CardDescription>
                Try switching between light and dark themes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" variant="default">
                Primary Button
              </Button>
              <Button className="w-full" variant="secondary">
                Secondary Button
              </Button>
              <Button className="w-full" variant="outline">
                Outline Button
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Color Showcase</CardTitle>
              <CardDescription>
                See how different colors adapt to light and dark themes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-16 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-medium">Primary</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-secondary-foreground text-sm font-medium">Secondary</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground text-sm font-medium">Muted</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground text-sm font-medium">Accent</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center text-muted-foreground">
          <p>
            Toggle the theme using the button in the top-right corner.
            Your preference will be remembered across page reloads.
          </p>
        </div>
      </div>
    </main>
  )
}