import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MusicProvider } from "@/context/MusicContext";

export const metadata = {
  title: "DiyaVerse — One Light. A Thousand Wishes. Infinite Celebrations.",
  description:
    "Experience DiyaVerse: an interactive digital Diwali celebration platform. Light virtual diyas, create personalized greetings, generate Gemini AI wishes, and celebrate with rangoli and fireworks.",
  keywords: [
    "Diwali",
    "DiyaVerse",
    "Deepavali",
    "Virtual Diya",
    "Diwali Greeting Card",
    "Gemini AI Diwali Wishes",
    "Digital Diwali Celebration",
    "Rangoli",
    "Fireworks",
  ],
  authors: [{ name: "DiyaVerse Team" }],
  openGraph: {
    title: "DiyaVerse — The Digital Diwali Celebration Sanctuary",
    description: "Light virtual diyas, craft personalized greeting cards, generate AI wishes, and share the joy of Deepavali.",
    siteName: "DiyaVerse",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "64x64" },
      { url: "/diya-icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Great+Vibes&family=Hind+Siliguri:wght@400;600;700&family=Kalam:wght@400;700&family=Marcellus&family=Noto+Serif+Bengali:wght@400;600;700&family=Noto+Serif+Devanagari:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&family=Rozha+One&family=Yatra+One&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col font-poppins selection:bg-[#8F2028] selection:text-[#F5D79D]">
        <MusicProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </MusicProvider>
      </body>
    </html>
  );
}
