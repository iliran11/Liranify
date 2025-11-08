# Design System Candidate 1: Modern Minimalist

## Overview
A clean, spacious design system focused on readability and breathing room. Inspired by modern design trends with generous white space, subtle shadows, and a sophisticated monochromatic base with purposeful accent colors.

## Philosophy
- **Less is More**: Every element serves a purpose
- **Content First**: Design supports content, never overwhelms it
- **Breathing Room**: Generous spacing for comfortable reading
- **Subtle Elegance**: Refined details without flashiness

---

## Color Palette

### Primary Colors
```css
--color-white: #FFFFFF
--color-black: #0A0A0A
--color-gray-50: #FAFAFA
--color-gray-100: #F5F5F5
--color-gray-200: #E5E5E5
--color-gray-300: #D4D4D4
--color-gray-600: #525252
--color-gray-700: #404040
--color-gray-900: #171717
```

### Accent Colors
```css
--color-primary: #2563EB      /* Blue - Links, CTAs */
--color-primary-hover: #1D4ED8
--color-accent: #8B5CF6       /* Purple - Highlights */
--color-success: #10B981      /* Green - Success states */
--color-warning: #F59E0B      /* Amber - Warnings */
```

### Usage
- **Backgrounds**: Gray-50 (body), White (cards)
- **Text**: Gray-900 (primary), Gray-700 (secondary)
- **Interactive**: Primary blue for all clickable elements
- **Code**: Gray-100 background with Gray-900 text

---

## Typography

### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
--font-display: 'Inter', sans-serif
--font-mono: 'JetBrains Mono', 'Fira Code', monospace
```

### Type Scale
```css
--text-xs: 0.75rem      /* 12px */
--text-sm: 0.875rem     /* 14px */
--text-base: 1rem       /* 16px */
--text-lg: 1.125rem     /* 18px */
--text-xl: 1.25rem      /* 20px */
--text-2xl: 1.5rem      /* 24px */
--text-3xl: 1.875rem    /* 30px */
--text-4xl: 2.25rem     /* 36px */
--text-5xl: 3rem        /* 48px */
--text-6xl: 3.75rem     /* 60px */
--text-7xl: 4.5rem      /* 72px */
```

### Heading Styles
```css
h1 {
  font-size: 3.75rem;        /* 60px */
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: 2.25rem;        /* 36px */
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin-top: 3rem;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.875rem;       /* 30px */
  font-weight: 600;
  line-height: 1.3;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}
```

### Body Text
```css
p {
  font-size: 1.125rem;       /* 18px */
  line-height: 1.75;         /* 28px */
  color: var(--color-gray-700);
  margin-bottom: 1.5rem;
}

.lead {
  font-size: 1.25rem;        /* 20px */
  line-height: 1.6;
  color: var(--color-gray-600);
}
```

---

## Spacing System

### Scale (8px base)
```css
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-3: 0.75rem   /* 12px */
--space-4: 1rem      /* 16px */
--space-5: 1.5rem    /* 24px */
--space-6: 2rem      /* 32px */
--space-8: 3rem      /* 48px */
--space-10: 4rem     /* 64px */
--space-12: 6rem     /* 96px */
--space-16: 8rem     /* 128px */
```

### Container
```css
.container {
  max-width: 768px;          /* Narrow for better readability */
  margin: 0 auto;
  padding: 0 1.5rem;
}

.container-wide {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 2rem;
}
```

---

## Components

### Cards
```css
.card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06),
              0 1px 2px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08),
              0 4px 10px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}
```

### Buttons
```css
.btn-primary {
  background: var(--color-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--color-primary-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}
```

### Code Blocks
```css
pre {
  background: var(--color-gray-100);
  border-radius: 8px;
  padding: 1.5rem;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.6;
  border: 1px solid var(--color-gray-200);
}

code {
  font-family: var(--font-mono);
  background: var(--color-gray-100);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.875em;
}
```

### Links
```css
a {
  color: var(--color-primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

a:hover {
  border-bottom-color: var(--color-primary);
}
```

### Images
```css
img {
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin: 2rem 0;
}
```

### Blockquotes
```css
blockquote {
  border-left: 4px solid var(--color-primary);
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-size: 1.25rem;
  font-style: italic;
  color: var(--color-gray-700);
}
```

---

## Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
        },
        accent: '#8B5CF6',
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          600: '#525252',
          700: '#404040',
          900: '#171717',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        '7xl': '4.5rem',
        '8xl': '6rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)',
        'medium': '0 10px 25px rgba(0, 0, 0, 0.08), 0 4px 10px rgba(0, 0, 0, 0.05)',
      }
    }
  }
}
```

---

## Implementation Example

### Hero Post Component
```tsx
<article className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
  <div className="relative h-80 overflow-hidden rounded-t-xl">
    <Image
      src={coverImage}
      alt={title}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-8">
    <h3 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
      {title}
    </h3>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      {excerpt}
    </p>
    <div className="flex items-center justify-between">
      <Avatar name={author.name} picture={author.picture} />
      <time className="text-sm text-gray-600">{date}</time>
    </div>
  </div>
</article>
```

---

## Advantages
- **Timeless**: Won't feel dated quickly
- **Accessible**: High contrast ratios, clear hierarchy
- **Flexible**: Works for various content types
- **Professional**: Suitable for technical and personal content
- **Performance**: Minimal visual complexity = fast rendering

## Best For
- Technical blogs
- Professional portfolios
- Long-form content
- Code-heavy posts
- Readers who prefer clean, distraction-free experiences
