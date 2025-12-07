# Liranify Front Page - Current Layout & Styling Documentation

**Last Updated:** December 5, 2025
**Purpose:** Document the existing landing page design before redesigning with a creative & playful approach

---

## Overview

The Liranify landing page is a clean, minimal blog homepage built with Next.js and Tailwind CSS. It displays a featured post followed by a grid of additional posts, using a mobile-first responsive design.

---

## Component Structure

### Visual Layout Hierarchy

```
┌─────────────────────────────────────────────┐
│           Layout (Page Wrapper)             │
│  ┌───────────────────────────────────────┐  │
│  │         Meta Tags & SEO               │  │
│  └───────────────────────────────────────┘  │
│  ┌───────────────────────────────────────┐  │
│  │    Container (mx-auto, px-5)          │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │   Intro Section                 │  │  │
│  │  │   "Liranify"                    │  │  │
│  │  │   "Personal insights"           │  │  │
│  │  └─────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │   Hero Post (Featured)          │  │  │
│  │  │   ┌───────────┬───────────┐     │  │  │
│  │  │   │   Cover   │   Title   │     │  │  │
│  │  │   │   Image   │   Date    │     │  │  │
│  │  │   │  800x400  │   Excerpt │     │  │  │
│  │  │   │           │   Author  │     │  │  │
│  │  │   └───────────┴───────────┘     │  │  │
│  │  └─────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │   More Stories                  │  │  │
│  │  │   ┌──────┐  ┌──────┐           │  │  │
│  │  │   │Post 1│  │Post 2│           │  │  │
│  │  │   └──────┘  └──────┘           │  │  │
│  │  │   ┌──────┐  ┌──────┐           │  │  │
│  │  │   │Post 3│  │Post 4│           │  │  │
│  │  │   └──────┘  └──────┘           │  │  │
│  │  └─────────────────────────────────┘  │  │
│  └───────────────────────────────────────┘  │
│  ┌───────────────────────────────────────┐  │
│  │         Footer (Disabled)             │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

### Component File Map

| Component | File Path | Purpose |
|-----------|-----------|---------|
| **Main Page** | `pages/index.tsx` | Landing page entry point, fetches blog posts |
| **Layout** | `components/layout.tsx` | Page wrapper with Meta, Alert, Footer |
| **Container** | `components/container.tsx` | Responsive content container |
| **Intro** | `components/intro.tsx` | Hero section with site title |
| **HeroPost** | `components/hero-post.tsx` | Featured blog post display |
| **MoreStories** | `components/more-stories.tsx` | Grid of additional posts |
| **PostPreview** | `components/post-preview.tsx` | Individual post card |
| **CoverImage** | `components/cover-image.tsx` | Post cover image component |
| **DateFormatter** | `components/date-formatter.tsx` | Formats post dates |
| **Avatar** | `components/avatar.tsx` | Author avatar display |

---

## Styling System

### Framework & Configuration

- **CSS Framework:** Tailwind CSS v3.4.17
- **Config File:** `tailwind.config.js`
- **Global Styles:** `styles/index.css`
- **PostCSS:** `postcss.config.js` (with autoprefixer)

### Tailwind Custom Configuration

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'accent-1': '#FAFAFA',
      'accent-2': '#EAEAEA',
      'accent-7': '#333',
      'success': '#0070f3',
      'cyan': '#79FFE1',
    },
    spacing: {
      28: '7rem',
    },
    letterSpacing: {
      tighter: '-.04em',
    },
    fontSize: {
      '5xl': '2.5rem',
      '6xl': '2.75rem',
      '7xl': '4.5rem',
      '8xl': '6.25rem',
    },
    boxShadow: {
      sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
      md: '0 8px 30px rgba(0, 0, 0, 0.12)',
    },
  }
}
```

---

## Visual Design Elements

### Color Palette

| Usage | Hex Code | Tailwind Class | Where Used |
|-------|----------|----------------|------------|
| **Primary Text** | `#333333` | `accent-7` | Body text, headings |
| **Light Background** | `#FAFAFA` | `accent-1` | Page backgrounds |
| **Secondary Background** | `#EAEAEA` | `accent-2` | Borders, dividers |
| **Link Color** | Blue (default) | - | Clickable links |
| **Action/Success** | `#0070f3` | `success` | CTAs, buttons |
| **Accent Cyan** | `#79FFE1` | `cyan` | Highlights, accents |
| **Theme/Favicon** | `#000000` | Black | Meta theme color |
| **Blockquote Bg** | `#87cefa` | Sky blue | Quote decorations |

**Current Vibe:** Minimal, professional, neutral

### Typography Scale

| Element | Mobile Size | Desktop Size | Weight | Letter Spacing |
|---------|-------------|--------------|--------|----------------|
| **Hero Title** | `text-5xl` (2.5rem) | `text-8xl` (6.25rem) | `font-bold` | `tracking-tighter` |
| **Section Headers** | `text-6xl` (2.75rem) | `text-7xl` (4.5rem) | `font-bold` | `tracking-tighter` |
| **Post Title** | `text-4xl` | `text-5xl` (2.5rem) | `font-bold` | `tracking-tighter` |
| **Post Preview Title** | `text-3xl` | `text-3xl` | `font-bold` | `tracking-tight` |
| **Body Text** | `text-lg` | `text-lg` | Normal | Normal |
| **Date/Meta** | `text-lg` | `text-lg` | Normal | Normal |

**Font Stack:** System fonts (default Tailwind)

### Spacing & Layout

#### Vertical Spacing (Margins)
```css
/* Intro Section */
margin-top: 4rem (mt-16)
margin-bottom: 4rem (mb-16) → 3rem on md+ (md:mb-12)

/* Hero Post */
Cover Image: margin-bottom: 2rem (mb-8) → 4rem on md+ (md:mb-16)
Content: margin-bottom: 5rem (mb-20) → 7rem on md+ (md:mb-28)

/* More Stories */
Grid gap vertical: gap-y-20 (5rem) → gap-y-32 (8rem) on md+
Grid gap horizontal: md:gap-x-16 (4rem) → lg:gap-x-32 (8rem)

/* Post Preview */
Cover to title: margin-bottom: 1.25rem (mb-5)
Title to date: margin-bottom: 0.75rem (mb-3)
Date to excerpt: margin-bottom: 1rem (mb-4)
```

#### Container & Padding
```css
Container: mx-auto px-5 (centered, 1.25rem horizontal padding)
```

### Responsive Grid System

#### Breakpoints
- **Mobile (default):** < 768px
- **Medium (md:):** ≥ 768px
- **Large (lg:):** ≥ 1024px

#### Grid Layouts

**Hero Post:**
```css
/* Mobile: Single column stack */
flex flex-col

/* Medium+: Two columns side by side */
md:grid md:grid-cols-2
md:gap-x-16 lg:gap-x-8
```

**More Stories:**
```css
/* Mobile: Single column */
grid-cols-1

/* Medium+: Two columns */
md:grid-cols-2

/* Gap spacing */
gap-y-20 md:gap-y-32 mb-32
lg:gap-x-32
```

### Images & Visual Effects

**Cover Images:**
- Dimensions: 800x400px (2:1 ratio)
- Component: Next.js `<Image>` with optimization
- Shadow: `5px 5px 10px rgba(0, 0, 0, 0.3)` (custom CSS)
- Hover: Underline on title (when inside link)

**Avatar:**
- Size: `w-12 h-12` (48x48px)
- Shape: `rounded-full` (circle)

**Blockquotes (in posts):**
- Background: Sky blue (`#87cefa`)
- Font size: 150% (1.5x)
- Decoration: "❝" character in colored box

---

## Current Component Code Structure

### Intro Component (`components/intro.tsx`)
```tsx
<section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
  <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
    Liranify
  </h1>
  <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
    Personal insights
  </h4>
</section>
```

**Layout:**
- Mobile: Stacked vertically, centered
- Desktop: Horizontal row, space between title and subtitle

### Hero Post (`components/hero-post.tsx`)
```tsx
<section>
  <div className="mb-8 md:mb-16">
    <CoverImage title={title} src={coverImage} slug={slug} />
  </div>
  <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
    <div>
      <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
        <Link href={`/posts/${slug}`}>{title}</Link>
      </h3>
      <div className="mb-4 md:mb-0 text-lg">
        <DateFormatter dateString={date} />
      </div>
    </div>
    <div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  </div>
</section>
```

**Layout:**
- Cover image full width above
- Two-column grid on medium+: Title/date left, excerpt/author right

### More Stories (`components/more-stories.tsx`)
```tsx
<section>
  <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
    More Stories
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
    {posts.map((post) => (
      <PostPreview key={post.slug} {...post} />
    ))}
  </div>
</section>
```

**Layout:**
- Grid switches from 1 column (mobile) to 2 columns (medium+)
- Large vertical gaps between rows

---

## Global CSS Features

### Custom Styles (`styles/index.css`)

**Table of Contents:**
```css
.table-of-contents {
  font-weight: bold;
  color: #000;
}
```

**Blockquotes:**
```css
blockquote {
  font-size: 150%;
  font-weight: bold;
}
blockquote::before {
  content: "❝";
  display: inline-block;
  padding: 10px;
  background-color: #87cefa;
  border-radius: 5px;
  margin-right: 10px;
}
```

**Links:**
```css
a {
  color: blue;
}
a:hover {
  text-decoration: underline;
}
```

**Smooth Scrolling:**
```css
html {
  scroll-behavior: smooth;
}
```

**Code Blocks:**
```css
code {
  white-space: pre-wrap;
}
```

### External Dependencies
- **Syntax Highlighting:** Highlight.js v11.10.0 (loaded via CDN)
- **Highlight Theme:** Atom One Dark

---

## Data Flow & Content

### Blog Post Structure
Posts are fetched from markdown files in `_posts/` directory:

```typescript
// pages/index.tsx - getStaticProps
const allPosts = getAllPosts([
  'title',
  'date',
  'slug',
  'author',
  'coverImage',
  'excerpt',
])

// First post = Hero Post
// Remaining posts = More Stories grid
```

### Post Data Schema
```typescript
{
  title: string
  date: string
  slug: string
  author: {
    name: string
    picture: string
  }
  coverImage: string
  excerpt: string
}
```

---

## Responsive Behavior Summary

### Mobile (< 768px)
- Single column layout throughout
- Hero title: 2.5rem
- Smaller margins and gaps
- Stacked intro section (centered)
- Hero post: cover above, title/excerpt below
- Post grid: 1 column

### Medium (768px - 1023px)
- Two-column layouts activate
- Hero title: 6.25rem
- Hero post: title left, excerpt right
- Post grid: 2 columns
- Increased gap spacing

### Large (≥ 1024px)
- Maximum spacing (lg:gap-x-32)
- Optimized for wide screens

---

## Current Strengths

1. Clean, professional aesthetic
2. Excellent readability
3. Responsive and mobile-first
4. Fast loading with Next.js optimization
5. Accessible with semantic HTML
6. Well-organized component structure

---

## Areas Identified for Redesign

Based on your creative & playful direction, these areas need transformation:

### 1. Hero Section Layout
**Current:** Simple two-element flex (title + subtitle)
**Opportunity:** Add personality, visual interest, animations, unique layout

### 2. Color Scheme
**Current:** Neutral grays, minimal color (black/white/blue)
**Opportunity:** Vibrant, playful colors that express personality

### 3. Featured Post Display
**Current:** Traditional two-column split
**Opportunity:** Creative card design, hover effects, unique shapes

### 4. Post Grid Layout
**Current:** Standard 2-column grid
**Opportunity:** Asymmetric layouts, varied sizing, playful arrangements

### 5. Typography
**Current:** System fonts, standard sizing
**Opportunity:** Fun font choices, varied weights, creative text treatments

### 6. Visual Elements
**Current:** Minimal decoration
**Opportunity:** Illustrations, icons, shapes, gradients, shadows, animations

---

## Next Steps

Now that we've documented the current state, let's brainstorm creative & playful redesign ideas! Consider:

- Fun color palettes (gradients, bright colors, pastels?)
- Playful typography (custom fonts, varied sizes, rotations?)
- Creative layouts (cards, asymmetric grids, overlapping elements?)
- Animations & interactions (hover effects, scroll animations?)
- Visual elements (illustrations, icons, shapes, patterns?)
- Personality touches (emojis, hand-drawn elements, quirky details?)

**Ready to ideate together!**
