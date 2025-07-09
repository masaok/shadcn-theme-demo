# ShadCN Design Variables

This document explains the CSS variables used by ShadCN UI components and how they create a cohesive theming system.

## Overview

ShadCN UI uses a standardized set of CSS variables (design tokens) that their components reference. These variables are **not arbitrary** - they follow a specific naming convention and semantic purpose that ensures all components work together harmoniously.

## Core Design Token System

### **System Variables**

| Variable | Purpose | Used By |
|----------|---------|---------|
| `--background` | Main app background | Body, main containers |
| `--foreground` | Main text color | Body text, headings |
| `--primary` | Primary actions/buttons | Primary buttons, links |
| `--primary-foreground` | Text on primary elements | Button text, primary content |
| `--secondary` | Secondary elements | Secondary buttons, panels |
| `--secondary-foreground` | Text on secondary elements | Secondary button text |
| `--muted` | Disabled/muted content | Disabled buttons, placeholders |
| `--muted-foreground` | Text on muted elements | Disabled text, captions |
| `--accent` | Highlight elements | Hover states, highlights |
| `--accent-foreground` | Text on accent elements | Hover text |
| `--destructive` | Error/danger states | Delete buttons, error messages |
| `--destructive-foreground` | Text on destructive elements | Error text |
| `--border` | Border colors | Component borders |
| `--input` | Form input styling | Input fields, form elements |
| `--ring` | Focus ring colors | Focus indicators |

### **Component-Specific Variables**

| Variable | Purpose | Used By |
|----------|---------|---------|
| `--card` | Card backgrounds | Card component |
| `--card-foreground` | Text on cards | Card content |
| `--popover` | Popover backgrounds | Popover, dropdown components |
| `--popover-foreground` | Text on popovers | Popover content |

## How ShadCN Components Use These Variables

### **Button Component Example**

```typescript
// From src/components/ui/button.tsx
const buttonVariants = cva(
  "...", // base styles
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      }
    }
  }
)
```

### **Card Component Example**

```typescript
// From src/components/ui/card.tsx
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      )}
      {...props}
    />
  )
)
```

## Tailwind Config Integration

The variables are mapped to Tailwind classes in `tailwind.config.ts`:

```typescript
colors: {
  primary: "var(--primary)",           // → 'bg-primary', 'text-primary'
  secondary: "var(--secondary)",       // → 'bg-secondary', 'text-secondary'
  destructive: "var(--destructive)",   // → 'bg-destructive', 'text-destructive'
  accent: "var(--accent)",             // → 'bg-accent', 'text-accent'
  card: "var(--card)",                 // → 'bg-card', 'text-card'
  // ... etc
}
```

## Semantic Relationships

ShadCN maintains consistent color relationships:

### **Color Pairs**
- `--primary` + `--primary-foreground` (background + text)
- `--secondary` + `--secondary-foreground`
- `--card` + `--card-foreground`
- `--popover` + `--popover-foreground`
- `--destructive` + `--destructive-foreground`
- `--accent` + `--accent-foreground`
- `--muted` + `--muted-foreground`

### **Why This Matters**
When you change a background color, you must also consider the text color that goes on top:

```css
/* ✅ Good - proper contrast */
:root {
  --primary: #1e293b;        /* Dark background */
  --primary-foreground: #f8fafc;  /* Light text */
}

.dark {
  --primary: #f8fafc;        /* Light background */
  --primary-foreground: #1e293b;  /* Dark text */
}
```

## Automatic Theming Benefits

### **1. Global Changes**
Change one variable, update all components:

```css
/* Change primary color */
:root { --primary: #3b82f6; }  /* Blue */

/* ALL of these automatically become blue: */
/* - Primary buttons */
/* - Primary links */
/* - Primary icons */
/* - Focus states */
```

### **2. Consistent Behavior**
All components follow the same theming rules:

```css
/* Both buttons will have consistent styling */
<Button variant="primary">Save</Button>
<Button variant="primary">Submit</Button>
```

### **3. Theme Switching**
Light/dark mode works automatically:

```css
/* Light theme */
:root { --background: #ffffff; --foreground: #000000; }

/* Dark theme */
.dark { --background: #000000; --foreground: #ffffff; }
```

## Best Practices

### **✅ Do:**
- Keep variable names unchanged
- Change values to customize colors
- Maintain proper contrast ratios
- Test in both light and dark modes

```css
/* ✅ Good */
:root {
  --primary: #10b981;              /* Custom green */
  --primary-foreground: #ffffff;   /* White text */
}
```

### **❌ Don't:**
- Rename core variables
- Remove required variables
- Use arbitrary variable names

```css
/* ❌ Bad */
:root {
  --my-custom-primary: #10b981;    /* ShadCN won't find this */
  /* --primary: missing! */         /* Components will break */
}
```

## Adding Custom Variables

You can add your own variables alongside ShadCN ones:

```css
:root {
  /* ShadCN required variables */
  --primary: #1e293b;
  --secondary: #f1f5f9;
  
  /* Your custom variables */
  --brand-blue: #3b82f6;
  --brand-red: #ef4444;
  --custom-gradient: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
}
```

## Validation

To ensure your theme is working correctly, check that:

1. **All required variables are defined** in both light and dark themes
2. **Contrast ratios are sufficient** between background and foreground colors
3. **Components render correctly** in both themes
4. **No CSS errors** in browser console

## Resources

- [ShadCN Official Theming Documentation](https://ui.shadcn.com/docs/theming)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [WCAG Color Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)