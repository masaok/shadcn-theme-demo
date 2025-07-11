import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-heading-large font-bold text-foreground mb-2">
              ShadCN Theme Demo
            </h1>
            <p className="text-body text-muted-foreground">
              Demonstrating light and dark themes with centralized typography
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
              
              {/* Custom color overrides */}
              <Button className="w-full btn-success">
                Success Button
              </Button>
              <Button className="w-full bg-[#f59e0b] text-white hover:bg-[#d97706]">
                Warning Button (Tailwind)
              </Button>
              <Button 
                className="w-full"
                style={{
                  backgroundColor: '#8b5cf6',
                  color: '#ffffff'
                }}
              >
                Purple Button (Inline)
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

        <div className="mt-8 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Typography System</CardTitle>
              <CardDescription>
                Centralized font sizes using CSS variables and semantic naming
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-display-small font-bold">Display Large</p>
                <p className="text-heading-large font-bold">Heading Large</p>
                <p className="text-heading-medium font-semibold">Heading Medium</p>
                <p className="text-heading-small font-medium">Heading Small</p>
                <p className="text-body-large">Body Large Text</p>
                <p className="text-body">Regular Body Text</p>
                <p className="text-body-small">Small Body Text</p>
                <p className="text-caption text-muted-foreground">Caption Text</p>
              </div>
              <div className="mt-4 p-4 bg-secondary rounded-lg">
                <code className="text-sm">
                  Edit typography in: src/app/themes/typography.css
                </code>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Component-Level Color Overrides</CardTitle>
              <CardDescription>
                Different methods to override colors at component level
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Method 1: CSS Classes */}
              <div>
                <h4 className="text-heading-small font-medium mb-3">1. Custom CSS Classes</h4>
                <div className="space-y-2">
                  <div className="card-success p-4 rounded-lg border">
                    <p className="font-medium">Success Card</p>
                    <p className="text-sm">Using .card-success class</p>
                  </div>
                  <div className="card-warning p-4 rounded-lg border">
                    <p className="font-medium">Warning Card</p>
                    <p className="text-sm">Using .card-warning class</p>
                  </div>
                </div>
              </div>

              {/* Method 2: CSS Variables Override */}
              <div>
                <h4 className="text-heading-small font-medium mb-3">2. CSS Variables Override</h4>
                <div 
                  className="p-4 rounded-lg border"
                  style={{
                    '--primary': '#10b981',
                    '--primary-foreground': '#ffffff',
                    '--secondary': '#f0fdf4',
                    '--secondary-foreground': '#166534'
                  } as React.CSSProperties}
                >
                  <p className="font-medium mb-2">Theme Override Container</p>
                  <div className="space-y-2">
                    <Button size="sm" className="mr-2">Green Primary</Button>
                    <Button size="sm" variant="secondary">Green Secondary</Button>
                  </div>
                </div>
              </div>

              {/* Method 3: Tailwind Arbitrary Values */}
              <div>
                <h4 className="text-heading-small font-medium mb-3">3. Tailwind Arbitrary Values</h4>
                <div className="space-y-2">
                  <div className="bg-[#3b82f6] text-white p-3 rounded-lg">
                    <p className="font-medium">Blue background: bg-[#3b82f6]</p>
                  </div>
                  <div className="bg-[#f59e0b] text-white p-3 rounded-lg">
                    <p className="font-medium">Orange background: bg-[#f59e0b]</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Google Font Example: M PLUS Rounded 1c</CardTitle>
              <CardDescription>
                Demonstrating custom Google font usage with variable font weights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <p className="font-[family-name:var(--font-m-plus-rounded)] font-light text-2xl">
                  Light (300): The quick brown fox jumps over the lazy dog
                </p>
                <p className="font-[family-name:var(--font-m-plus-rounded)] font-normal text-2xl">
                  Regular (400): The quick brown fox jumps over the lazy dog
                </p>
                <p className="font-[family-name:var(--font-m-plus-rounded)] font-medium text-2xl">
                  Medium (500): The quick brown fox jumps over the lazy dog
                </p>
                <p className="font-[family-name:var(--font-m-plus-rounded)] font-bold text-2xl">
                  Bold (700): The quick brown fox jumps over the lazy dog
                </p>
                <p className="font-[family-name:var(--font-m-plus-rounded)] font-extrabold text-2xl">
                  Extra Bold (800): The quick brown fox jumps over the lazy dog
                </p>
                <p className="font-[family-name:var(--font-m-plus-rounded)] font-black text-2xl">
                  Black (900): The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div className="mt-6 p-4 bg-secondary rounded-lg">
                <p className="text-sm mb-2 font-medium">Usage:</p>
                <code className="text-sm block">
                  className={"font-[family-name:var(--font-m-plus-rounded)] font-bold"}
                </code>
              </div>
              <div className="mt-4">
                <Button className="font-[family-name:var(--font-m-plus-rounded)] font-bold">
                  Button with M PLUS Rounded
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Google Font Example: Nunito</CardTitle>
              <CardDescription>
                Another custom Google font with extensive weight range (200-900)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <p className="font-[family-name:var(--font-nunito)] font-extralight text-xl">
                  Extra Light (200): The quick brown fox jumps over the lazy dog
                </p>
                <p className="font-[family-name:var(--font-nunito)] font-light text-xl">
                  Light (300): The quick brown fox jumps over the lazy dog
                </p>
                <p className="font-[family-name:var(--font-nunito)] font-normal text-xl">
                  Regular (400): The quick brown fox jumps over the lazy dog
                </p>
                <p className="font-[family-name:var(--font-nunito)] font-medium text-xl">
                  Medium (500): The quick brown fox jumps over the lazy dog
                </p>
                <p className="font-[family-name:var(--font-nunito)] font-semibold text-xl">
                  Semi Bold (600): The quick brown fox jumps over the lazy dog
                </p>
                <p className="font-[family-name:var(--font-nunito)] font-bold text-xl">
                  Bold (700): The quick brown fox jumps over the lazy dog
                </p>
                <p className="font-[family-name:var(--font-nunito)] font-extrabold text-xl">
                  Extra Bold (800): The quick brown fox jumps over the lazy dog
                </p>
                <p className="font-[family-name:var(--font-nunito)] font-black text-xl">
                  Black (900): The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div className="mt-6 p-4 bg-secondary rounded-lg">
                <p className="text-sm mb-2 font-medium">Usage:</p>
                <code className="text-sm block">
                  {"className=\"font-[family-name:var(--font-nunito)] font-semibold\""}
                </code>
              </div>
              <div className="mt-4 space-x-2">
                <Button className="font-[family-name:var(--font-nunito)] font-semibold">
                  Nunito Button
                </Button>
                <Button variant="outline" className="font-[family-name:var(--font-nunito)] font-bold">
                  Nunito Outline
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center text-muted-foreground">
          <p className="text-body">
            Toggle the theme using the button in the top-right corner.
            Your preference will be remembered across page reloads.
          </p>
        </div>
      </div>
    </main>
  )
}