# Theme Customization Guide

The theme colors have been organized into separate files for better maintainability.

## File Structure

```
src/app/
├── globals.css          # Main CSS file that imports theme files
├── themes/
│   ├── light.css       # Light theme color definitions
│   └── dark.css        # Dark theme color definitions
```

## How to Customize Themes

### 1. Light Theme
Edit `src/app/themes/light.css` to customize light theme colors:

```css
/* Light Theme Colors */
:root {
  --background: #ffffff;             /* White background */
  --foreground: #0f172a;             /* Dark text */
  --primary: #1e293b;                /* Primary button color */
  --secondary: #f1f5f9;              /* Secondary elements */
  /* ... other color variables */
}
```

### 2. Dark Theme
Edit `src/app/themes/dark.css` to customize dark theme colors:

```css
/* Dark Theme Colors */
.dark {
  --background: #0f172a;             /* Dark background */
  --foreground: #f8fafc;             /* Light text */
  --primary: #f8fafc;                /* Primary button color */
  --secondary: #1e293b;              /* Secondary elements */
  /* ... other color variables */
}
```

## Color Format

Colors use standard hex format:
- Format: `#RRGGBB`
- Example: `--primary: #3b82f6` (blue color)
- Also supports: `#RGB` shorthand (e.g., `#fff` for white)

## Available Color Variables

| Variable | Description |
|----------|-------------|
| `--background` | Main background color |
| `--foreground` | Main text color |
| `--primary` | Primary buttons and accents |
| `--primary-foreground` | Text on primary elements |
| `--secondary` | Secondary elements |
| `--secondary-foreground` | Text on secondary elements |
| `--muted` | Muted/disabled elements |
| `--muted-foreground` | Text on muted elements |
| `--accent` | Accent highlights |
| `--accent-foreground` | Text on accent elements |
| `--destructive` | Error/danger elements |
| `--destructive-foreground` | Text on destructive elements |
| `--border` | Border colors |
| `--input` | Input field colors |
| `--ring` | Focus ring colors |
| `--card` | Card background colors |
| `--card-foreground` | Text on cards |
| `--popover` | Popover background colors |
| `--popover-foreground` | Text on popovers |

## Example Custom Themes

### Blue Theme
```css
/* Light theme */
:root {
  --primary: #3b82f6;          /* Blue */
  --secondary: #f1f5f9;        /* Light blue */
  --accent: #dbeafe;           /* Blue accent */
}

/* Dark theme */
.dark {
  --primary: #60a5fa;          /* Brighter blue for dark mode */
  --secondary: #1e3a8a;        /* Dark blue */
  --accent: #1e40af;           /* Dark blue accent */
}
```

### Green Theme
```css
/* Light theme */
:root {
  --primary: #10b981;          /* Green */
  --secondary: #f0fdf4;        /* Light green */
  --accent: #dcfce7;           /* Green accent */
}

/* Dark theme */
.dark {
  --primary: #34d399;          /* Brighter green for dark mode */
  --secondary: #064e3b;        /* Dark green */
  --accent: #065f46;           /* Dark green accent */
}
```

## Tips

1. **Test both themes**: Always test your color changes in both light and dark modes
2. **Contrast**: Ensure sufficient contrast between text and background colors
3. **Consistency**: Keep the same hue across related elements for visual harmony
4. **Accessibility**: Consider users with color blindness and visual impairments
5. **Hot reload**: Changes to theme files are reflected immediately in development mode

## Tools

- [ShadCN UI Theme Generator](https://ui.shadcn.com/themes)
- [Realtime Colors](https://realtimecolors.com/)
- [HSL Color Picker](https://hslpicker.com/)