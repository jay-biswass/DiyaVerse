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
| **Framework** | [Next.js](https://nextjs.org/) (App Router, Turbopack) |
| **UI & Styling** | React 19, [Tailwind CSS v4](https://tailwindcss.com/) |
| **Generative AI** | Official Google Gemini SDK (`@google/genai`) |
| **Icons & Visuals** | [Lucide React](https://lucide.dev/), Handcrafted SVG Diya & Rangoli Art |
| **Celebration Effects** | `canvas-confetti`, Canvas 2D Particle Fireworks Engine |
| **Export Engine** | `html-to-image` for high-resolution PNG card generation |
| **Audio Engine** | Web Audio API Harmonic Synthesis (Zero external asset dependencies) |
| **Typography** | Google Fonts (*Playfair Display*, *Cinzel*, *Poppins*, *Noto Serif Devanagari*) |

---

## 🚀 Quick Start

Run directly from the root workspace or inside `diya-verse/`:

```bash
# Start development server
npm run dev

# Or inside diya-verse
cd diya-verse
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

Create `.env.local` inside `diya-verse/`:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```
*(If omitted, DiyaVerse automatically uses its intelligent multilingual festive fallback engine).*

---

## 📜 License
MIT License • Created with ❤️ for Diwali • शुभ दीपावली 🪔
