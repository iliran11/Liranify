# Minimal Brutalist Blog Design System Prompt

## Design Philosophy
Create a bold, unapologetic indie blog design that embraces brutalist principles: raw aesthetics, high contrast, functional hierarchy, and uncompromising directness. The design should feel confident, modern, and intentionally stripped down to essentials.

---

## Color Palette

### Primary Colors
- **Black**: `#000000` - Main backgrounds, headers, text, buttons
- **White**: `#FFFFFF` - Content backgrounds, inverted text, contrast elements
- **Hot Pink Accent**: `#FF3366` - Navigation bar, borders, CTAs, highlights

### Secondary Colors
- **Dark Gray**: `#333333` - Body text on white backgrounds
- **Medium Gray**: `#666666` - Metadata, secondary information
- **Light Gray**: `#F5F5F5` - Sidebar backgrounds, subtle sections

### Usage Rules
- Maintain stark black/white contrast throughout
- Use hot pink sparingly but boldly for emphasis
- Never use gradients or soft transitions
- Avoid mid-tones except for text hierarchy

---

## Typography

### Font Family
**Primary**: Arial, Helvetica, sans-serif (system fonts only)
- No custom fonts - embrace the rawness of system defaults

### Type Scale & Weights

#### Main Headline (H1)
- **Size**: 72px
- **Weight**: 900 (Black)
- **Letter-spacing**: -2px
- **Line-height**: 0.9
- **Transform**: Uppercase
- **Color**: White on black background

#### Article Headlines (H2)
- **Size**: 42px
- **Weight**: 900 (Black)
- **Letter-spacing**: -1px
- **Line-height**: 1.1
- **Color**: Black

#### Section Headers (H3)
- **Size**: 24px
- **Weight**: 900 (Black)
- **Transform**: Uppercase
- **Color**: Black

#### Body Text
- **Size**: 18px
- **Weight**: 400 (Regular)
- **Line-height**: 1.7
- **Color**: #333333

#### Metadata/Labels
- **Size**: 14px
- **Weight**: 700 (Bold)
- **Transform**: Uppercase
- **Letter-spacing**: 0.5px
- **Color**: #666666

#### Navigation
- **Size**: 14px
- **Weight**: 700 (Bold)
- **Transform**: Uppercase
- **Letter-spacing**: 1px
- **Color**: Black on pink background

### Typography Principles
- Extreme weight contrast (900 vs 400) for hierarchy
- No italics - use weight and size for emphasis
- Tight letter-spacing on large headlines
- Uppercase for emphasis and labels only
- Never center-align body text

---

## Layout Structure

### Grid System
**Asymmetric 2-column layout** (Desktop):
- **Main Content**: 2 fractional units (66%)
- **Sidebar**: 1 fractional unit (33%)
- **Gap**: 60px between columns
- **Outer Padding**: 40px on all sides

### Spacing Scale
Use multiples of 20px for consistent rhythm:
- **XXS**: 15px - Tight spacing within elements
- **XS**: 20px - Default spacing between small elements
- **S**: 30px - Medium gaps
- **M**: 40px - Section padding, outer margins
- **L**: 60px - Column gaps, article spacing
- **XL**: 80px - Major section breaks

### Vertical Rhythm
- Header sections: 80px top padding, 40px bottom
- Article spacing: 60px between articles
- Paragraph spacing: 20px between paragraphs
- Element-to-element: Minimum 15px, maximum 80px

---

## Component Specifications

### Header
- **Background**: Solid black (#000000)
- **Padding**: 80px 40px 40px 40px
- **Border-bottom**: 8px solid #FF3366
- **H1 color**: White
- **Tagline**: 18px, weight 400, letter-spacing 0.5px, opacity 0.8

### Navigation Bar
- **Background**: Hot pink (#FF3366)
- **Padding**: 20px 40px
- **Layout**: Horizontal flex, 30px gap
- **Links**: Black text, 14px, uppercase, bold, 1px letter-spacing
- **No hover effects** - static design

### Articles
- **Bottom margin**: 60px between articles
- **Headline margin**: 15px below headline
- **Metadata margin**: 20px below metadata
- **Paragraph margin**: 20px between paragraphs

### Call-to-Action Buttons
- **Background**: Black
- **Color**: White
- **Padding**: 15px 30px
- **Border**: 3px solid black
- **Font**: 14px, weight 700, uppercase, 1px letter-spacing
- **Hover**: Invert colors (white bg, black text)
- **Transition**: All 0.2s

### Sidebar
- **Background**: #F5F5F5
- **Padding**: 30px
- **Position**: Height fit-content (doesn't stretch)
- **List items**: 15px vertical padding, 2px bottom border (#DDDDDD)

### Borders & Lines
- **Weight**: Always 2px minimum, 8px for major dividers
- **Style**: Solid only, no dashed or dotted
- **Color**: Black or hot pink only
- **Never rounded corners** - all 90-degree angles

---

## Design Principles

### Visual Philosophy
1. **Stark Contrast**: Always use pure black and white, never gray backgrounds
2. **Heavy Weight**: Headlines should feel massive and bold
3. **Functional Brutalism**: Every element serves a purpose, zero decoration
4. **Asymmetry**: Avoid centered layouts except for necessary elements
5. **Raw Materials**: Embrace default fonts, straight lines, hard edges

### Interaction Design
- **No subtle hover states** - use stark color inversions
- **No animations** except instant 0.2s transitions
- **No shadows** - flat design only
- **No rounded corners** - sharp 90-degree angles
- **No gradients** - solid colors only

### Content Hierarchy
1. **Ultra-bold headlines** (900 weight) grab immediate attention
2. **Pink accent bar** creates strong visual anchor
3. **Asymmetric grid** guides eye naturally left-to-right
4. **Uppercase labels** clearly mark metadata
5. **Generous spacing** prevents claustrophobia

### Responsive Behavior (Mobile)
- Switch to single column layout
- Reduce headline size to 48px
- Maintain all spacing ratios proportionally
- Keep pink accent border at 8px
- Reduce outer padding to 20px

---

## Don'ts - Avoid These At All Costs

❌ Rounded corners or soft edges  
❌ Gradients or color transitions  
❌ Custom fonts or script typefaces  
❌ Subtle grays or muted colors  
❌ Decorative elements or flourishes  
❌ Complex animations or transitions  
❌ Drop shadows or 3D effects  
❌ Centered body text  
❌ Small, timid typography  
❌ Symmetrical layouts  

---

## Implementation Checklist

### Essential Elements
- [ ] Black header with white ultra-bold headline
- [ ] 8px hot pink border under header
- [ ] Pink navigation bar with black text
- [ ] Asymmetric 2-column content grid (2fr 1fr)
- [ ] 60px gap between columns
- [ ] Article headlines at 42px, weight 900
- [ ] Black CTA buttons with white text
- [ ] Gray sidebar with bordered list items
- [ ] All borders minimum 2px
- [ ] Uppercase metadata and navigation
- [ ] 18px body text, 1.7 line-height
- [ ] No rounded corners anywhere
- [ ] Stark black/white/pink palette only

---

## Example Use Cases

### Perfect For:
- Tech opinion blogs
- Design critique sites
- Personal manifestos
- Strong editorial voices
- Portfolio sites for bold designers
- Indie hacker journals

### Not Suitable For:
- E-commerce (too harsh)
- Lifestyle/wellness blogs (too aggressive)
- Corporate communications (too unconventional)
- Children's content (too stark)

---

## Code Reference

### Key CSS Properties
```css
/* Typography */
font-family: 'Arial', sans-serif;
font-weight: 900; /* Headlines */
font-weight: 400; /* Body */
text-transform: uppercase; /* Labels/Nav */
letter-spacing: -2px; /* Large headlines */

/* Colors */
--black: #000000;
--white: #FFFFFF;
--pink: #FF3366;
--gray-dark: #333333;
--gray-medium: #666666;
--gray-light: #F5F5F5;

/* Layout */
display: grid;
grid-template-columns: 2fr 1fr;
gap: 60px;
padding: 40px;

/* Borders */
border: 2px solid #000;
border-bottom: 8px solid #FF3366;
border-radius: 0; /* Always! */
```

---

## Final Notes

This design system is intentionally **confrontational and direct**. It doesn't apologize for being bold. It doesn't soften edges to be more palatable. Every design decision reinforces the core philosophy: **strong opinions, clearly expressed**.

The minimal brutalist approach works because it strips away everything except what matters most—the content and the hierarchy. When executed well, it creates an unmistakable visual identity that readers will remember.

**Remember**: This isn't minimalism for the sake of elegance. This is brutalism for the sake of honesty and impact.