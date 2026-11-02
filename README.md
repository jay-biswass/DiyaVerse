# 🪔 DiyaVerse — Celebrate the Festival of Lights

<p align="center">
  <img
    src="./public/images/diya-verse-banner.png"
    alt="DiyaVerse Banner"
    width="100%"
  />
</p>

<h3 align="center">✨ A Little Light, A Lot of Happiness ✨</h3>

<p align="center">
  An interactive digital Diwali celebration platform to create personalized greetings, light virtual diyas, spread blessings, and celebrate the festival of lights with loved ones.
</p>

<p align="center">
  <a href="https://diwali-greeting-delta.vercel.app/">🌐 Live Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-getting-started">Installation</a> •
  <a href="#-screenshots">Screenshots</a>
</p>

---

## 🌟 About DiyaVerse

**DiyaVerse** is an interactive digital platform that brings the warmth and traditions of Diwali into a beautiful online experience.

Instead of sending ordinary festival messages, DiyaVerse allows users to create personalized digital greeting cards, generate AI-powered wishes, light virtual diyas, explore festive designs, and share happiness with friends and family.

Built with modern web technologies and inspired by traditional Indian festive aesthetics, DiyaVerse combines culture, creativity, and technology into one digital celebration.

## ✨ Features

### 🎨 1. Personalized Diwali Greeting Creator
- Create beautiful personalized Diwali greeting cards.
- Choose from multiple festive card templates.
- Customize recipient name and sender name.
- Select relationship, language, and greeting tone.
- Explore different festive typography styles.
- Write your own personalized message or use preset wishes.
- Live card preview with instant updates.
- Download high-resolution greeting cards as PNG.
- Share personalized greetings with friends and family through WhatsApp.

### 🤖 2. AI-Powered Greeting Generator
- Generate personalized Diwali wishes using Google's Gemini AI.
- Choose different greeting tones:
  - Traditional
  - Emotional
  - Funny
  - Professional
  - Inspirational
- Generate greetings in multiple languages.
- Create unique messages based on recipient details and relationships.

### 🪔 3. Virtual Diya Altar
- Light virtual diyas with interactive animations.
- Experience a beautiful digital diya-lighting celebration.
- Add more diyas to the virtual altar.
- Enjoy glowing lights and festive visual effects.

### 🎆 4. Fireworks Celebration
- Experience animated festive fireworks.
- Enjoy interactive celebration effects.
- Celebrate Diwali with an immersive visual experience.

### 🌸 5. Rangoli Studio
- Explore traditional Indian rangoli-inspired designs.
- Experience colourful festive patterns and decorations.

### 💌 6. Community Blessing Wall
- Share your Diwali wishes with the community.
- Explore greetings shared by other visitors.
- Spread happiness and festive positivity.

### ⏳ 7. Diwali Countdown
- Live countdown to Diwali.
- Displays days, hours, minutes, and seconds.
- Festive animations and glowing visual elements.

### 🎵 8. Festive Music Experience
- Enjoy festive background music.
- Control music playback and volume.
- Create a more immersive Diwali atmosphere.

### 📱 9. Responsive Design
- Optimized for desktop, laptop, tablet, and mobile devices.
- Traditional Indian-inspired colour palette.
- Smooth animations and interactive UI.
- Elegant maroon, gold, and saffron visual theme.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework and application architecture |
| React.js | Component-based user interface |
| JavaScript | Application logic |
| Tailwind CSS | Styling and responsive design |
| Framer Motion | Animations and transitions |
| Lucide React | Icons |
| Google Gemini API | AI-powered greeting generation |
| Firebase / Firestore | Backend and greeting data storage |
| Canvas Confetti | Celebration effects |
| Vercel | Current live deployment |

---

## 🎨 Design Philosophy

DiyaVerse follows a traditional Indian festive design language with a modern digital experience.

**Primary colour palette**

| Colour | Hex Code | Usage |
|---|---|---|
| Deep Maroon | `#54151F` | Primary background |
| Dark Wine | `#351014` | Secondary background |
| Vermilion | `#8F2028` | Accent |
| Antique Gold | `#D4A64A` | Borders and highlights |
| Light Gold | `#F5D79D` | Typography |
| Ivory | `#F5E6C8` | Text and surfaces |
| Saffron | `#E68A32` | Festive accents |

The visual experience combines traditional Indian motifs, glowing diyas, rangoli-inspired decorations, golden particles, and elegant typography.

---

## 📸 Screenshots

Add screenshots of your actual application here.

| Homepage | Greeting Creator |
|---|---|
| ![Homepage](screenshots/homepage.png) | ![Greeting Creator](screenshots/greeting-creator.png) |

| Diya Altar | Fireworks Celebration |
|---|---|
| ![Diya Altar](screenshots/diya-altar.png) | ![Fireworks](screenshots/fireworks.png) |

---

## 🚀 Getting Started

Follow these steps to run DiyaVerse locally.

### Prerequisites

Make sure you have installed:

- Node.js (22 LTS recommended)
- npm
- Git
- A Google AI Studio API key for Gemini-powered features
- Firebase project credentials if using Firebase-backed functionality

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/diya-verse.git
```

### 2. Navigate to the project directory

```bash
cd diya-verse
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the root directory.

Add the environment variables required by your application:

```env
# Gemini API
GEMINI_API_KEY=your_gemini_api_key

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
```

**Important:** Match these variable names with the ones used in your actual source code. Never expose your Gemini API key or other server-side secrets through `NEXT_PUBLIC_` variables or commit `.env.local` to GitHub.

### 5. Start the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 📁 Project Structure

The project follows a modular Next.js application structure.

```text
diya-verse/
│
├── public/
│   ├── images/
│   ├── sounds/
│   └── assets/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── generate-message/
│   │   ├── greeting/
│   │   ├── celebrate/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── background/
│   │   ├── greeting/
│   │   ├── celebration/
│   │   ├── home/
│   │   ├── layout/
│   │   └── ui/
│   │
│   ├── data/
│   │   └── presetWishes.js
│   │
│   └── lib/
│       ├── firebase.js
│       └── gemini.js
│
├── .env.local
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

*Note: This is a representative structure. Update it to reflect the actual folders and files in your repository.*

---

## 🔐 Environment & Security

- Keep API keys in environment variables.
- Never commit `.env.local`.
- Keep Gemini API calls on the server side.
- Configure appropriate Firebase Firestore security rules.
- Validate user input before
