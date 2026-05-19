# 🎨 Design Templates & Aesthetics

> **Purpose**: Guides the Agent in generating Web interfaces and Markdown documents with beautiful, premium aesthetics and optimal user experience. Inspired by `awesome-design-md` and modern design standards.

---

## 1. Core Web App Aesthetics

- **Harmonious Palettes**: Strictly avoid default, harsh colors (e.g., pure red, pure blue). Utilize carefully curated HSL or robust color systems (e.g., Tailwind colors, Radix UI colors).
- **Sleek Dark Mode**: Support dark mode utilizing deep slate/zinc backgrounds (like `#0f172a`, `#18181b`) rather than absolute black `#000000`.
- **Modern Typography**: Implement modern sans-serif fonts from Google Fonts such as `Inter`, `Roboto`, `Outfit`, or `Plus Jakarta Sans`. Do not rely on browser default fonts.
- **Micro-Animations & Interactions**: Every interactive element (buttons, cards, links) must feature smooth `hover`, `focus`, and `active` state transitions (e.g., `duration-200` or `300ms`).
- **Glassmorphism & Shadows**: Employ backdrop-blur effects and soft shadows to create depth and a 3D structural feel to the UI.
- **No Placeholders**: If the UI requires imagery, generate realistic images or utilize aesthetically pleasing gradient blocks as substitutes. Do not leave empty boilerplate text.

## 2. UX Standards

- **Consistent Whitespace**: Use generous padding and margins to let the interface "breathe".
- **Contrast & Accessibility**: Ensure text remains highly legible across all backgrounds. Strictly adhere to WCAG 2.1 AA contrast standards.
- **Responsive Layouts**: Designs must render flawlessly across Mobile, Tablet, and Desktop viewports.

## 3. Markdown Aesthetics

- **Clear Structure**: Utilize logical heading hierarchies. Maintain ample whitespace between sections.
- **Alerts / Callouts**: Use GitHub Alerts (`> [!NOTE]`, `> [!WARNING]`) to highlight critical notes or warnings.
- **Fenced Code Blocks**: Every code block must specify its language for proper syntax highlighting.
- **Tables**: Use tables for data comparison or structured information instead of long, verbose lists.
- **Emojis**: Use emojis sparingly and tastefully at the beginning of headers to improve scannability.

---
> **Note**: A minimal viable product (MVP) interface does not equate to an ugly interface. Strive to make the user WOW at first glance!
