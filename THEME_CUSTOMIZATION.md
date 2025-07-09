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
  --background: 0 0% 100%;           /* White background */
  --foreground: 240 10% 3.9%;        /* Dark text */
  --primary: 240 9% 9%;              /* Primary button color */
  --secondary: 240 4.8% 95.9%;       /* Secondary elements */
  /* ... other color variables */
}
```

### 2. Dark Theme
Edit `src/app/themes/dark.css` to customize dark theme colors:

```css
/* Dark Theme Colors */
.dark {
  --background: 240 10% 3.9%;        /* Dark background */
  --foreground: 0 0% 98%;            /* Light text */
  --primary: 0 0% 98%;               /* Primary button color */
  --secondary: 240 3.7% 15.9%;       /* Secondary elements */
  /* ... other color variables */
}
```

## Color Format

Colors use HSL (Hue, Saturation, Lightness) format without the `hsl()` wrapper:
- Format: `hue saturation% lightness%`
- Example: `--primary: 221 83% 53%` = `hsl(221, 83%, 53%)`

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
  --primary: 221 83% 53%;      /* Blue */
  --secondary: 221 25% 95%;    /* Light blue */
  --accent: 221 45% 85%;       /* Blue accent */
}

/* Dark theme */
.dark {
  --primary: 221 83% 65%;      /* Brighter blue for dark mode */
  --secondary: 221 25% 15%;    /* Dark blue */
  --accent: 221 45% 25%;       /* Dark blue accent */
}
```

### Green Theme
```css
/* Light theme */
:root {
  --primary: 142 76% 36%;      /* Green */
  --secondary: 142 30% 95%;    /* Light green */
  --accent: 142 50% 85%;       /* Green accent */
}

/* Dark theme */
.dark {
  --primary: 142 76% 50%;      /* Brighter green for dark mode */
  --secondary: 142 30% 15%;    /* Dark green */
  --accent: 142 50% 25%;       /* Dark green accent */
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