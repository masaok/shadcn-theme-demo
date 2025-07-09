# Typography System

This project uses a centralized typography system with CSS variables for consistent font sizing across the application.

## File Structure

```
src/app/themes/
├── typography.css       # Typography variables and utility classes
├── light.css           # Light theme colors
└── dark.css            # Dark theme colors
```

## Typography Variables

### Font Sizes

All font sizes are defined in `src/app/themes/typography.css`:

```css
:root {
  --font-size-xs: 0.75rem;      /* 12px */
  --font-size-sm: 0.875rem;     /* 14px */
  --font-size-base: 1rem;       /* 16px */
  --font-size-lg: 1.125rem;     /* 18px */
  --font-size-xl: 1.25rem;      /* 20px */
  --font-size-2xl: 1.5rem;      /* 24px */
  --font-size-3xl: 1.875rem;    /* 30px */
  --font-size-4xl: 2.25rem;     /* 36px */
  --font-size-5xl: 3rem;        /* 48px */
  --font-size-6xl: 3.75rem;     /* 60px */
  --font-size-7xl: 4.5rem;      /* 72px */
  --font-size-8xl: 6rem;        /* 96px */
  --font-size-9xl: 8rem;        /* 128px */
}
```

### Semantic Font Sizes

For better maintainability, semantic font sizes are also defined:

```css
:root {
  --font-size-caption: var(--font-size-xs);
  --font-size-body-small: var(--font-size-sm);
  --font-size-body: var(--font-size-base);
  --font-size-body-large: var(--font-size-lg);
  --font-size-heading-small: var(--font-size-xl);
  --font-size-heading-medium: var(--font-size-2xl);
  --font-size-heading-large: var(--font-size-3xl);
  --font-size-heading-xlarge: var(--font-size-4xl);
  --font-size-display-small: var(--font-size-5xl);
  --font-size-display-medium: var(--font-size-6xl);
  --font-size-display-large: var(--font-size-7xl);
  --font-size-display-xlarge: var(--font-size-8xl);
}
```

## Usage Methods

### 1. Tailwind CSS Classes

Use standard Tailwind classes (enhanced with our variables):

```jsx
<h1 className="text-4xl font-bold">Large Heading</h1>
<h2 className="text-2xl font-semibold">Medium Heading</h2>
<p className="text-base">Body text</p>
<small className="text-sm text-muted-foreground">Small text</small>
```

### 2. Semantic Tailwind Classes

Use semantic classes for better maintainability:

```jsx
<h1 className="text-heading-large font-bold">Main Title</h1>
<h2 className="text-heading-medium font-semibold">Section Title</h2>
<p className="text-body">Regular paragraph text</p>
<span className="text-caption text-muted-foreground">Caption text</span>
```

### 3. CSS Variables Directly

Use variables directly in custom CSS:

```css
.custom-heading {
  font-size: var(--font-size-heading-large);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}

.custom-body {
  font-size: var(--font-size-body);
  line-height: var(--line-height-normal);
}
```

### 4. Inline Styles (Not Recommended)

```jsx
<h1 style={{ fontSize: 'var(--font-size-heading-large)' }}>Title</h1>
```

## Responsive Typography

The system includes responsive scaling for mobile devices:

```css
@media (max-width: 768px) {
  :root {
    --font-size-3xl: 1.5rem;      /* 24px instead of 30px */
    --font-size-4xl: 1.875rem;    /* 30px instead of 36px */
    --font-size-5xl: 2.25rem;     /* 36px instead of 48px */
    /* ... other responsive sizes */
  }
}
```

## Font Size Scale

| Variable | Desktop | Mobile | Use Case |
|----------|---------|---------|----------|
| `xs` | 12px | 12px | Captions, labels |
| `sm` | 14px | 14px | Small text, metadata |
| `base` | 16px | 16px | Body text |
| `lg` | 18px | 18px | Large body text |
| `xl` | 20px | 20px | Small headings |
| `2xl` | 24px | 20px | Medium headings |
| `3xl` | 30px | 24px | Large headings |
| `4xl` | 36px | 30px | Extra large headings |
| `5xl` | 48px | 36px | Display text |
| `6xl` | 60px | 48px | Large display |
| `7xl` | 72px | 60px | Extra large display |
| `8xl` | 96px | 72px | Hero text |
| `9xl` | 128px | 96px | Maximum display |

## Best Practices

### 1. Use Semantic Names
```jsx
// Good
<h1 className="text-heading-large">Title</h1>

// Avoid
<h1 className="text-3xl">Title</h1>
```

### 2. Consistent Spacing
```jsx
<div className="space-y-4">
  <h1 className="text-heading-large font-bold">Title</h1>
  <p className="text-body text-muted-foreground">Subtitle</p>
</div>
```

### 3. Combine with Line Height
```jsx
<h1 className="text-heading-large leading-tight font-bold">
  Tight heading
</h1>
<p className="text-body leading-relaxed">
  Relaxed paragraph text for better readability
</p>
```

## Customization

### Changing Font Sizes

Edit `src/app/themes/typography.css` to modify font sizes:

```css
:root {
  --font-size-base: 1.125rem;  /* Change base from 16px to 18px */
  --font-size-lg: 1.25rem;     /* Adjust large accordingly */
}
```

### Adding New Font Sizes

Add new variables and update the Tailwind config:

```css
/* In typography.css */
:root {
  --font-size-micro: 0.625rem;  /* 10px */
}
```

```typescript
// In tailwind.config.ts
fontSize: {
  'micro': 'var(--font-size-micro)',
  // ... other sizes
}
```

## Typography Component Examples

### Headings
```jsx
<h1 className="text-display-large font-bold leading-tight">
  Display Heading
</h1>
<h2 className="text-heading-large font-semibold leading-tight">
  Page Heading
</h2>
<h3 className="text-heading-medium font-medium leading-snug">
  Section Heading
</h3>
```

### Body Text
```jsx
<p className="text-body leading-normal">
  Regular paragraph text with normal line height.
</p>
<p className="text-body-large leading-relaxed">
  Larger body text with relaxed line height for better readability.
</p>
```

### Captions and Labels
```jsx
<span className="text-caption text-muted-foreground">
  Image caption or metadata
</span>
<label className="text-body-small font-medium">
  Form label
</label>
```

## Tools and Resources

- [Tailwind CSS Typography Documentation](https://tailwindcss.com/docs/font-size)
- [CSS Variables MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Type Scale Tool](https://typescale.com/)
- [Modular Scale Calculator](https://www.modularscale.com/)