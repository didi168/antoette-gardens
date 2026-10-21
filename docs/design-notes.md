# Design Notes & Reference Analysis

## 1. Reference Image Breakdown

- **Reference Subject:** "Drizzle" Culinary & Restaurant Landing Page Mockup
- **Reference Desktop Width:** 1440 px
- **Visual Style:** Warm, high-end editorial dining experience. Sophisticated, welcoming, and rooted in culinary passion.
- **Canvas / Layout Model:** Asymmetrical editorial layout with clear horizontal rhythm, elegant serif headlines, pill-shaped micro-labels, warm photography with rounded corners, and a signature rotated/tilted polaroid gallery carousel.

---

## 2. Sampled Color Palette

| Name | Hex Value | Role in Reference | Contrast on Cream (`#FAF7F2`) | Contrast on Dark (`#1A110D`) |
| :--- | :--- | :--- | :--- | :--- |
| **Warm Cream Canvas** | `#FAF7F2` | Page background, light card background | Background | N/A |
| **Card Cream Tint** | `#F3EFE6` | Secondary cards, subtle borders, input backgrounds | 1.1:1 (Structural) | N/A |
| **Deep Espresso** | `#1A110D` | Primary text, footer background, dark feature card | 16.4:1 (Passes AAA) | Background |
| **Espresso Soft / Body** | `#3A2E28` | Secondary body text, subheadings, meta descriptions | 10.8:1 (Passes AAA) | N/A |
| **Terracotta Accent** | `#9E382B` | Primary CTAs, highlight badges, active states | 4.8:1 (Passes AA for large text & UI) | 3.5:1 (Passes AA large) |
| **Terracotta Dark (Text)**| `#872B1F` | High-contrast text accent on light cream | 5.8:1 (Passes AA body) | N/A |
| **Muted Sand / Border** | `#E4DDD3` | Section dividers, pill badge borders, card outlines | 1.3:1 (Structural) | N/A |
| **Muted Tan** | `#918479` | Inactive pagination, subtle date & helper notes | 3.1:1 (Passes AA UI) | 4.2:1 (Passes AA UI) |
| **Pure White** | `#FFFFFF` | Image borders, polaroid card frames, contrast highlights| 1.1:1 (Surface) | 17.8:1 (Passes AAA) |

---

## 3. Typography Hierarchy

### Font Families
1. **Headings & Display:** `Fraunces`, serif (Google Fonts, variable font weight 400–700, optical size 144). Features distinct high-contrast editorial character matching the "Drizzle / Experience the Language of Taste" serif headline.
2. **Body, Navigation & UI:** `Plus Jakarta Sans`, sans-serif (Google Fonts, weight 400, 500, 600, 700). Clean, geometric, legible at small mobile screen sizes with generous x-height.

### Type Scale (1440px Reference Desktop vs Mobile Responsive)
- **Display H1 (Hero):** `clamp(2.75rem, 6.5vw, 5.5rem)` / line-height: 1.05 / letter-spacing: `-0.025em`
- **Section Heading H2:** `clamp(2rem, 4.2vw, 3.5rem)` / line-height: 1.12 / letter-spacing: `-0.02em`
- **Sub-heading H3:** `clamp(1.35rem, 2.2vw, 1.85rem)` / line-height: 1.25 / letter-spacing: `-0.01em`
- **Category / Card Title H4:** `1.15rem` - `1.35rem` / line-height: 1.3
- **Body Regular:** `1rem` (16px) - `1.0625rem` (17px) / line-height: 1.6
- **Body Small / Captions:** `0.875rem` (14px) / line-height: 1.5
- **Pill Badges & Overlines:** `0.75rem` - `0.8125rem` (12px–13px) / uppercase / letter-spacing: `0.06em` / font-weight: 600

---

## 4. Layout Tree & Section Rhythm

1. **Header & Navigation (`<header>`)**
   - Top bar: segmented grid / pill structure.
   - Left: `Home`, `Menu`, `About Us`.
   - Center: Refined brand logo mark `ANTOINETTE GARDENS` in bespoke Fraunces serif.
   - Right: `Gallery`, `Lodging & Events`, `Contact`, `Reserve` button.
   - Mobile: Sticky frosted navigation bar with brand logo and mobile hamburger trigger opening an accessible sliding navigation drawer.

2. **Hero Section (`<section class="hero">`)**
   - Micro-badge: Pill outline `"Made with Love, Served with Joy"` or `"Port Harcourt's Premier Garden Sanctuary"`.
   - Grand Headline: `"Experience the Harmony of Garden & Taste"`.
   - Overlapping Circular CTA: Terracotta circle (`border-radius: 50%`) with arrow down & `"RESERVE A TABLE"`, positioned floating at the bottom center/left edge of the hero typography overlapping the top of the hero image.
   - Hero Image Container: Large rounded card (`border-radius: 28px`), featuring the lush garden canopy lounge illuminated with warm ambient lights.

3. **About & Heritage Section (`<section class="about">`)**
   - Two-column asymmetrical layout:
     - Left: Pill badge `"Know About Us"`, kicker `"Experience the perfect harmony of heritage"`, large headline `"Blending authentic local culinary tradition with serene garden relaxation"`, body text, terracotta button `"READ OUR STORY"`, and avatar stack with rating `"4.0★ from 700+ Google Reviews"`.
     - Right: Warm photography card (`border-radius: 24px`) showing dining guests in natural light.

4. **Menu Showcase Section (`<section class="menu">`)**
   - Header with decorative plate/doodle icon + `"Your next favorite meal awaits"` + pill CTA `"View Full Menu"`.
   - 4-Card Category Grid:
     - Card 1: **Grilled Specials & Native Pots** (*Isi Ewu, Nkwobi, Barbecue Catfish, Grilled Croaker*)
     - Card 2: **Traditional Soups & Swallows** (*Edikaikong, Ofe Owerri, Native Soup with pounded yam/garri*)
     - Card 3 (Terracotta Accent Card): **Garden Platters & Jollof** (*Smoky Party Jollof, Fried Rice, Asun, Peppered Wings & Yam Chips*)
     - Card 4: **Chilled Bar & Cocktails** (*Signature Cocktails, Cold Draught Beer, Fine Wines, Spirit Selection*)

5. **Lodging & Private Event Halls (`<section class="lodge-events">`)**
   - Adapting the reference's *"Reserve your spot! / ultimate joy of dining done right"* section.
   - Left side: Badge `"Guest Rooms & Event Halls"`, headline `"Rest in comfort, host with distinction"`, body copy explaining executive short-let rooms and 3 fully equipped meeting/event rooms, terracotta booking button, and navigation arrows.
   - Right side: Multi-image collage with rounded corners showing the luxury guest bedroom, outdoor garden private gathering, and the indoor banquet meeting hall.

6. **Tilted Polaroid Gallery (`<section class="gallery">`)**
   - Header: Pill badge `"A Feast for the Eyes"`, headline `"Taste the vibes through our gallery"`.
   - The Signature Gallery Strip: 6 cards fanned with dynamic alternating rotations:
     - Card 1: `-5deg` rotation (Spicy Isi Ewu clay pot)
     - Card 2: `-2deg` rotation (Barbecue Catfish & Plantain)
     - Card 3: `1deg` rotation (Evening Garden Canopy with String Lights)
     - Card 4: `4deg` rotation (Cocktails & Cold Beer at the Garden Bar)
     - Card 5: `-3deg` rotation (Executive Guest Suite)
     - Card 6: `3deg` rotation (Live Band Garden Performance)
   - Mobile Responsive Mode: Smooth swipeable horizontal track with gentle card tilts that never bleed or cause horizontal page scroll.

7. **Vibrant Feature Banner (`<section class="garden-vibes">`)**
   - Reimagining the reference's typographic banner (*"We're always looking for..."*) with playful rotated stamp badges:
     - Headline: *"Every weekend comes alive at Antoinette Gardens with `[LIVE BAND]` `[SPICY ISI EWU]` `[COLD BEER]` and unforgettable garden evenings under the Trans Amadi sky. `[JOIN US]` `[FREE PARKING]`"*
     - CTA Button: Terracotta pill `"EXPERIENCE IT THIS WEEKEND"`.

8. **Customer Reviews Section (`<section class="reviews">`)**
   - Pill badge `"Customer Reviews"`, headline `"Where every visit becomes a great Memory"`.
   - 3 Curated Cards matching the reference layout:
     - Card 1 (Cream Card): Highlight on spicy Isi Ewu, generous portions, and chilled drinks.
     - Card 2 (Deep Espresso Card with White Text): Highlight on the tranquil garden ambiance, attentive hospitality, and after-work unwinding.
     - Card 3 (Cream Card): Highlight on hosting a family celebration / corporate event in the hall.

9. **Interactive Reservation & Booking Form (`<section class="reservations">`)**
   - Clean, accessible booking form card with tab selector: `Table in the Garden`, `Guest Room Booking`, or `Event Hall Rental`.
   - Fields: Full Name, Phone / WhatsApp, Date & Time, Guest Count, Special Requests.
   - Instant WhatsApp dispatch button or static submission with instant friendly confirmation modal.

10. **Location, Directions & Map (`<section class="location">`)**
    - Address, Trans Amadi landmarks (opposite IPNX office, between Sasun & V-Hotel), operating hours, direct click-to-call and Google Maps directions link.

11. **Deep Espresso Footer (`<footer class="footer">`)**
    - Background: `#1A110D` with warm cream typography.
    - Giant typographic brand wordmark: **`ANTOINETTE GARDENS`** across the footer base.
    - Quick links, business registration BN-PH077282, operating hours, newsletter / WhatsApp VIP club signup, and copyright.

---

## 5. Spacing, Radii, Shadows & Micro-interactions

- **Radii System:**
  - Pill buttons & badges: `border-radius: 9999px`
  - Large hero image & feature cards: `border-radius: 28px` (desktop) / `20px` (mobile)
  - Content cards & images: `border-radius: 20px`
  - Inputs & form fields: `border-radius: 12px`
- **Shadows:**
  - Card subtle: `0 4px 20px -2px rgba(28, 18, 12, 0.05)`
  - Card hover / elevated: `0 16px 36px -4px rgba(28, 18, 12, 0.12)`
  - Polaroid gallery cards: `0 12px 28px rgba(0, 0, 0, 0.1)`
- **Iconography:** Lucide Icons (stroke width: 1.75px, size: 20px/24px) styled in terracotta or espresso.
- **Motion System (GSAP + ScrollTrigger + Lenis):**
  - Smooth inertia scrolling via Lenis.
  - Staggered entrance for hero elements (`opacity: 0, y: 30`, duration: 0.8s, ease: "power2.out").
  - Gentle parallax on gallery cards on scroll.
  - Interactive hover state for cards: `transform: translateY(-6px)`.
  - Full respect for `prefers-reduced-motion: reduce`: animation engine immediately disabled.

---

## 6. Mobile Responsiveness Breakpoint Plan

- **360px – 390px (Compact Mobile):** Single column, 16px horizontal page gutters, full width hero, circular CTA converts to an accessible full-width or floating pill button, touch-scrollable gallery cards, large 44px+ tap targets.
- **391px – 767px (Large Mobile):** Fluid typography scaling, clean vertical rhythm, stacked cards.
- **768px – 1023px (Tablet):** 2-column grids for menu and review cards, expanded navigation.
- **1024px – 1279px (Laptop):** Full horizontal navigation, 3-column review row, 4-column menu categories.
- **1280px – 1440px+ (Desktop):** Pixel-perfect match to reference design with fanned tilt angles, maximum container width of 1360px with generous margins.
