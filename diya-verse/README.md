# 🪔 DiyaVerse — The Digital Diwali Celebration Platform

> **"One Light. A Thousand Wishes. Infinite Celebrations."**  
> *Developed for the Web Development Contest organized by **GDG on Campus JIS University** & **AWS Student Builder Group**.*

---

## ✨ Overview

**DiyaVerse** is a premium interactive digital celebration platform that brings the sacred essence of Deepavali to the modern web. Combining traditional Indian aesthetic heritage with cutting-edge web technologies, DiyaVerse empowers users worldwide to experience an illuminated festive sanctuary:

- 🪔 **Interactive Diya Sanctum:** Light handcrafted virtual clay diyas with authentic animated flame physics and resonant temple bell chimes.
- 🎨 **Personalized Greeting Card Studio:** Design regal Diwali greeting cards across 6 authentic themes, customize messages in English, Hindi, and Bengali, and export high-resolution PNGs.
- 🤖 **Google Gemini AI Wish Generator:** Harness the official `@google/genai` SDK to generate original, culturally resonant Diwali greetings tailored by relationship and sentiment.
- 🎆 **Interactive Sky Fireworks:** Touch or click the midnight celebration sky to trigger multi-hued particle bursts and launch Grand Finale fireworks.
- 🌸 **Vedic Mandala Rangoli Studio:** Explore traditional geometric rangolis, customize herbal color palettes, and observe meditative sacred rotations.
- 💌 **Global Blessing Wall:** Read and post community prayers, greetings, and festival wishes alongside visitors across the globe.
- 🎵 **Synthesized Web Audio Engine:** Built-in generative Indian Tanpura harmonic drone, temple bells, and celebration sounds with zero external copyright dependencies.

---

## 🛠️ Technology Stack

| Domain | Technology |
|---|---|
| **Framework** | [Next.js](https://nextjs.org/) (App Router, Turbopack, Server Actions) |
| **UI & Styling** | React 19, [Tailwind CSS v4](https://tailwindcss.com/) |
| **Generative AI** | Official Google Gemini SDK (`@google/genai`) |
| **Icons & Visuals** | [Lucide React](https://lucide.dev/), Handcrafted SVG Diya & Rangoli Art |
| **Celebration Effects** | `canvas-confetti`, Canvas 2D Particle Fireworks Engine |
| **Export Engine** | `html-to-image` for high-resolution PNG card generation |
| **Audio Engine** | Web Audio API Harmonic Synthesis (Zero external asset dependencies) |
| **Typography** | Google Fonts (*Playfair Display*, *Cinzel*, *Poppins*, *Noto Serif Devanagari*) |

---

## 🎨 Design System & Visual Identity

DiyaVerse adheres to an authentic traditional Indian color palette:
- **Deep Maroon:** `#54151F`
- **Dark Wine:** `#351014`
- **Vermilion Red:** `#8F2028`
- **Antique Gold:** `#D4A64A`
- **Light Gold:** `#F5D79D`
- **Ivory:** `#F5E6C8`
- **Saffron:** `#E68A32`
- **Dark Brown:** `#27100D`
- **Emerald Green:** `#253D36`

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/diya-verse.git
cd diya-verse
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Edit `.env.local` to provide your Google Gemini API key:
```env
# Google Gemini AI API Key (Get yours at https://aistudio.google.com/)
GEMINI_API_KEY=your_gemini_api_key_here
```
> *Note: If `GEMINI_API_KEY` is not provided, DiyaVerse gracefully falls back to its built-in multilingual festive generation engine, ensuring 100% uptime for contest judges!*

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 📂 Project Architecture

```
diya-verse/
├── public/                     # Static assets & favicon
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── generate-message/
│   │   │       └── route.js    # Secure server-side Gemini AI route
│   │   ├── greeting/
│   │   │   ├── page.js         # Greeting Card Creator Studio
│   │   │   ├── view/page.js    # Decoded shareable greeting viewer
│   │   │   └── [id]/page.js    # Dynamic greeting route
│   │   ├── celebrate/
│   │   │   └── page.js         # Diya Altar, Rangoli Studio & Fireworks
│   │   ├── ai-wishes/
│   │   │   └── page.js         # Dedicated Google Gemini AI Wish Studio
│   │   ├── community/
│   │   │   └── page.js         # Global Blessing & Greeting Wall
│   │   ├── about/
│   │   │   └── page.js         # Sacred Heritage & 5 Days of Diwali
│   │   ├── globals.css         # Tailwind v4, keyframes & gold shimmer
│   │   ├── layout.js           # Google Fonts, SEO metadata, Navbar & Footer
│   │   └── page.js             # Hero, Diya Counter, Showcase & Quotes
│   │
│   ├── components/
│   │   ├── celebration/        # Canvas 2D fireworks particle system
│   │   ├── greeting/           # GreetingCard component (6 royal themes)
│   │   ├── home/               # HeroSection, DiyaCounter, FeatureShowcase
│   │   ├── layout/             # Responsive Navbar & festive Footer
│   │   └── ui/                 # Handcrafted DiyaSvg, RangoliSvg, Borders
│   │
│   ├── data/
│   │   └── greetings.js        # Multi-language sample wishes & templates
│   └── lib/
│       └── sound.js            # Synthesized Web Audio festival sound engine
│
├── .env.example                # Environment variables template
├── .env.local                  # Local secrets (git-ignored)
└── package.json
```

---

## 🏆 Hackathon Alignment

- **Creativity & Festive Feel (30 pts):** Handcrafted SVG Diya with CSS animated flame, 9-diya Ashtalakshmi altar, 6 royal card themes, interactive rangoli patterns, and Web Audio tanpura drone.
- **Design & UI/UX (25 pts):** Regal dark wine/maroon palette with warm golden foil accents, glassmorphic cards, Devanagari typography, and fluid micro-animations.
- **Features & Interactivity (20 pts):** High-resolution PNG download, WhatsApp share, Web Share API, click-to-explode fireworks, and live community board.
- **Code Quality & Responsiveness (15 pts):** Clean component boundaries, Next.js App Router, zero console errors, full mobile/tablet/desktop responsiveness.
- **Google / AWS Technology (10 pts):** Official Google Gemini JavaScript SDK (`@google/genai`) integrated securely via server-side API routes.

---

## 📜 License
MIT License • Created with ❤️ for Diwali • शुभ दीपावली 🪔
