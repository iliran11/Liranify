# Design System Candidate 3: Classic Editorial

## Overview
A sophisticated, newspaper-inspired design system that emphasizes typography, hierarchy, and timeless elegance. Draws inspiration from The New York Times, The Guardian, and classic print design.

## Philosophy
- **Typography is King**: Text should be beautiful and effortless to read
- **Hierarchy & Structure**: Clear visual organization guides the reader
- **Timeless Elegance**: Design that has worked for centuries
- **Content Density**: Efficient use of space without feeling cramped
- **Trust & Authority**: Professional appearance builds credibility

---

## Color Palette

### Monochromatic Base
```css
--color-white: #FFFFFF
--color-ivory: #FFFEF9
--color-cream: #F9F8F3

--color-gray-100: #F5F4F0
--color-gray-200: #E8E6E1
--color-gray-300: #D1CFC8
--color-gray-400: #9B9892
--color-gray-600: #6B6862
--color-gray-700: #4A4842

--color-black: #1A1A1A
--color-ink: #2E2E2E
```

### Accent Colors (Minimal)
```css
--color-editorial-red: #C41E3A      /* For highlights, important elements */
--color-editorial-blue: #004B87     /* For links */
--color-editorial-gold: #B8860B     /* For special callouts */
--color-editorial-green: #2E7D32    /* For success states */
```

### Usage
- **Background**: Cream or Ivory (softer than pure white, easier on eyes)
- **Text**: Ink for body, Black for headings
- **Accents**: Editorial red sparingly for emphasis
- **Links**: Editorial blue with underline
- **Borders**: Gray-200 for subtle divisions

---

## Typography

### Font Families
```css
/* Serif for body - optimal readability */
--font-serif: 'Merriweather', 'Georgia', 'Times New Roman', serif
--font-display: 'Playfair Display', 'Georgia', serif

/* Sans-serif for UI elements */
--font-sans: 'Lato', 'Helvetica Neue', 'Arial', sans-serif

/* Monospace for code */
--font-mono: 'Courier Prime', 'Courier New', monospace
```

### Type Scale (Print-Inspired)
```css
--text-xs: 0.75rem       /* 12px - Captions */
--text-sm: 0.875rem      /* 14px - Metadata */
--text-base: 1.0625rem   /* 17px - Body (optimal for reading) */
--text-lg: 1.1875rem     /* 19px - Lead paragraph */
--text-xl: 1.375rem      /* 22px - Subheadings */
--text-2xl: 1.625rem     /* 26px - Section titles */
--text-3xl: 2rem         /* 32px - Article titles */
--text-4xl: 2.5rem       /* 40px - Featured headlines */
--text-5xl: 3.25rem      /* 52px - Hero headlines */
--text-6xl: 4rem         /* 64px - Display */
```

### Heading Styles
```css
h1 {
  font-family: var(--font-display);
  font-size: 3.25rem;        /* 52px */
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-black);
  margin-bottom: 1rem;
  font-feature-settings: 'liga', 'dlig';
}

h2 {
  font-family: var(--font-display);
  font-size: 2rem;           /* 32px */
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: var(--color-black);
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-gray-200);
}

h3 {
  font-family: var(--font-serif);
  font-size: 1.625rem;       /* 26px */
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-ink);
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

h4 {
  font-family: var(--font-sans);
  font-size: 1.1875rem;      /* 19px */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-gray-700);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
```

### Body Text (Optimized for Reading)
```css
p {
  font-family: var(--font-serif);
  font-size: 1.0625rem;      /* 17px - sweet spot for reading */
  line-height: 1.75;         /* 30px - generous leading */
  color: var(--color-ink);
  margin-bottom: 1.25rem;
  text-align: justify;       /* Optional: creates clean edge */
  hyphens: auto;
  -webkit-hyphens: auto;
}

/* Drop cap for article starts */
p.lead::first-letter {
  float: left;
  font-size: 4.5rem;
  line-height: 0.85;
  margin: 0.1rem 0.1rem 0 0;
  font-family: var(--font-display);
  color: var(--color-editorial-red);
}

.lead {
  font-size: 1.1875rem;      /* 19px */
  line-height: 1.6;
  font-weight: 400;
  color: var(--color-gray-700);
}
```

---

## Spacing System

### Vertical Rhythm (Based on baseline grid)
```css
/* Base: 6px for perfect alignment with 17px text @ 30px line-height */
--space-1: 0.375rem  /* 6px */
--space-2: 0.75rem   /* 12px */
--space-3: 1.125rem  /* 18px */
--space-4: 1.5rem    /* 24px */
--space-5: 1.875rem  /* 30px */
--space-6: 2.25rem   /* 36px */
--space-8: 3rem      /* 48px */
--space-10: 3.75rem  /* 60px */
--space-12: 4.5rem   /* 72px */
```

### Layout
```css
.container {
  max-width: 680px;          /* Optimal reading line length: 60-75 chars */
  margin: 0 auto;
  padding: 0 1.5rem;
}

.container-article {
  max-width: 720px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.container-wide {
  max-width: 1140px;          /* For multi-column layouts */
  margin: 0 auto;
  padding: 0 2rem;
}
```

---

## Components

### Article Layout
```css
article {
  background: var(--color-ivory);
  padding: 3rem 0;
}

.article-meta {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-gray-600);
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-gray-200);
}

.byline {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-black);
}
```

### Pull Quotes
```css
.pullquote {
  font-family: var(--font-display);
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 400;
  font-style: italic;
  color: var(--color-black);
  margin: 2.5rem 0;
  padding: 2rem 0;
  border-top: 4px double var(--color-editorial-red);
  border-bottom: 4px double var(--color-editorial-red);
  text-align: center;
}

.pullquote::before {
  content: '"';
  color: var(--color-editorial-red);
}

.pullquote::after {
  content: '"';
  color: var(--color-editorial-red);
}
```

### Blockquotes
```css
blockquote {
  font-family: var(--font-serif);
  font-size: 1.1875rem;
  line-height: 1.6;
  font-style: italic;
  color: var(--color-gray-700);
  margin: 2rem 0;
  padding-left: 2rem;
  border-left: 3px solid var(--color-editorial-red);
}

blockquote cite {
  display: block;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  margin-top: 0.75rem;
  color: var(--color-gray-600);
}

blockquote cite::before {
  content: '— ';
}
```

### Links
```css
a {
  color: var(--color-editorial-blue);
  text-decoration: underline;
  text-decoration-color: var(--color-gray-300);
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  transition: all 0.2s ease;
}

a:hover {
  color: var(--color-editorial-red);
  text-decoration-color: var(--color-editorial-red);
}

/* Clean links in article titles */
h1 a, h2 a, h3 a {
  color: inherit;
  text-decoration: none;
}

h1 a:hover, h2 a:hover, h3 a:hover {
  color: var(--color-editorial-red);
}
```

### Images & Figures
```css
figure {
  margin: 2.5rem 0;
}

figure img {
  width: 100%;
  height: auto;
  border: 1px solid var(--color-gray-200);
}

figcaption {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--color-gray-600);
  margin-top: 0.75rem;
  padding: 0 1rem;
}
```

### Code Blocks
```css
pre {
  background: var(--color-gray-100);
  border: 1px solid var(--color-gray-200);
  border-left: 3px solid var(--color-editorial-blue);
  padding: 1.5rem;
  overflow-x: auto;
  margin: 2rem 0;
  font-size: 0.9375rem;
  line-height: 1.6;
}

code {
  font-family: var(--font-mono);
  font-size: 0.9em;
}

:not(pre) > code {
  background: var(--color-gray-100);
  padding: 0.2rem 0.4rem;
  border: 1px solid var(--color-gray-200);
  border-radius: 2px;
  font-size: 0.875em;
}
```

### Lists
```css
ul, ol {
  font-family: var(--font-serif);
  font-size: 1.0625rem;
  line-height: 1.75;
  color: var(--color-ink);
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

li {
  margin-bottom: 0.5rem;
}

/* Styled list for featured items */
.styled-list {
  list-style: none;
  padding-left: 0;
}

.styled-list li::before {
  content: '▪';
  color: var(--color-editorial-red);
  font-weight: bold;
  display: inline-block;
  width: 1.5rem;
  margin-left: -1.5rem;
}
```

### Horizontal Rules
```css
hr {
  border: none;
  border-top: 1px solid var(--color-gray-200);
  margin: 3rem 0;
}

/* Decorative separator */
hr.ornamental {
  border: none;
  text-align: center;
  margin: 3rem 0;
}

hr.ornamental::before {
  content: '***';
  letter-spacing: 0.5em;
  color: var(--color-gray-400);
  font-size: 1.5rem;
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
        ivory: '#FFFEF9',
        cream: '#F9F8F3',
        ink: '#2E2E2E',
        editorial: {
          red: '#C41E3A',
          blue: '#004B87',
          gold: '#B8860B',
          green: '#2E7D32',
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'Helvetica Neue', 'sans-serif'],
        mono: ['Courier Prime', 'Courier New', 'monospace'],
      },
      fontSize: {
        'base': '1.0625rem',    // 17px
        'lg': '1.1875rem',      // 19px
      },
      lineHeight: {
        'reading': '1.75',
      },
      maxWidth: {
        'reading': '680px',
        'article': '720px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),  // Highly recommended
  ]
}
```

---

## Implementation Example

### Article Page
```tsx
<article className="bg-ivory py-12">
  <div className="container-article">
    {/* Article header */}
    <header className="mb-10">
      <div className="article-meta">
        <span className="byline">By Liran Cohen</span>
        <span className="mx-2">•</span>
        <time>July 13, 2023</time>
      </div>

      <h1 className="font-display text-5xl font-bold leading-tight mb-4">
        The Art of Typography in Digital Design
      </h1>

      <p className="lead text-gray-700">
        How centuries-old principles of print design continue to guide
        modern web typography and user experience.
      </p>
    </header>

    {/* Article body */}
    <div className="prose prose-lg">
      <p className="lead">
        Typography has been the backbone of communication for centuries,
        and its principles remain as relevant today as they were in the
        age of Gutenberg.
      </p>

      <p>
        The transition from print to digital hasn't diminished the
        importance of thoughtful typography—if anything, it has made
        it more crucial. On the web, where attention spans are short
        and distractions are abundant, well-crafted typography can be
        the difference between a reader staying or leaving.
      </p>

      <h2>The Fundamentals Never Change</h2>

      <p>
        Whether carved in stone, printed on paper, or rendered on a
        screen, the goal remains the same: clear, beautiful communication.
      </p>

      <blockquote>
        Typography is the craft of endowing human language with a
        durable visual form.
        <cite>Robert Bringhurst</cite>
      </blockquote>
    </div>
  </div>
</article>
```

---

## Advantages
- **Proven Readability**: Centuries of typography research applied
- **Professional**: Conveys trust and authority
- **Timeless**: Won't feel dated in 5-10 years
- **Content-Focused**: Design serves the writing
- **Accessible**: High contrast, clear hierarchy
- **Print-Quality**: Can translate beautifully to PDF/print

## Best For
- Long-form writing
- Essays and thought pieces
- Academic or professional content
- Authors who prioritize writing over visual flash
- Readers who appreciate classic design

## Considerations
- May feel traditional or conservative to some
- Less visual excitement than modern designs
- Serif fonts require careful sizing for screens
- Not ideal for very short, snappy content
