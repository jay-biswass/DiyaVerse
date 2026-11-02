import { Playfair_Display, Poppins, Cinzel, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MusicProvider } from "@/context/MusicContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const notoDevanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
});

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
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cinzel.variable} ${poppins.variable} ${notoDevanagari.variable} h-full scroll-smooth`}
    >
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
