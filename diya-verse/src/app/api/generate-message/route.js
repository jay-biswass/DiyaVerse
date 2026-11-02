import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { getRandomPresetWish } from "@/data/presetWishes";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      sender = "Aarav",
      recipient = "Priya",
      relationship = "Friend",
      language = "English",
      tone = "Traditional",
      context = "",
    } = body;

    // Sanitize and validate lengths
    const safeSender = String(sender).slice(0, 50).trim() || "A Well-Wisher";
    const safeRecipient = String(recipient).slice(0, 50).trim() || "Cherished Friend";
    const safeRelationship = String(relationship).slice(0, 30).trim();
    const safeLanguage = ["English", "Hindi", "Bengali"].includes(language)
      ? language
      : "English";
    const safeTone = ["Traditional", "Emotional", "Funny", "Professional", "Inspirational"].includes(tone)
      ? tone
      : "Traditional";
    const safeContext = String(context).slice(0, 200).trim();

    const apiKey = process.env.GEMINI_API_KEY;

    // If Gemini API Key is configured, use the official @google/genai SDK
    if (apiKey && apiKey !== "your_api_key_here") {
      try {
        const ai = new GoogleGenAI({ apiKey });

        const prompt = `You are a warm, poetic, and culturally knowledgeable Indian festival greeting writer for the Diwali celebration platform DiyaVerse.
Write a personalized, beautiful, original Diwali greeting message from ${safeSender} to ${safeRecipient}.

Details:
- Recipient Relationship: ${safeRelationship}
- Language: ${safeLanguage} (Write in the actual language script: Devanagari for Hindi, Bengali script for Bengali, Latin script for English)
- Tone: ${safeTone}
${safeContext ? `- Special Context or Personal Note: "${safeContext}"` : ""}

Rules:
1. Make it authentic, heartfelt, and festive.
2. Infuse rich Diwali symbolism (diyas, lights, victory of goodness, goddess Lakshmi, sweet moments).
3. Do not include markdown asterisks, quotes around the whole text, or placeholder brackets.
4. Keep the greeting between 2 to 4 sentences (approx 40-70 words).
5. Output ONLY the message text.`;

        // Model: gemini-2.5-flash or gemini-1.5-flash
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt,
        });

        const generatedText = response.text ? response.text.trim() : null;

        if (generatedText) {
          return NextResponse.json({
            success: true,
            message: generatedText,
            source: "gemini-2.5-flash",
          });
        }
      } catch (geminiError) {
        console.warn("Gemini API call notice, falling back gracefully:", geminiError?.message);
      }
    }

    // Graceful Intelligent Fallback if API key is not yet set or during offline review
    const customFallback = getRandomPresetWish({
      tone: safeTone,
      language: safeLanguage,
      recipient: safeRecipient,
      sender: safeSender,
    });

    return NextResponse.json({
      success: true,
      message: customFallback,
      source: "diyaverse-festive-engine",
    });
  } catch (error) {
    console.error("API generate-message route error:", error);
    return NextResponse.json(
      { error: "Failed to generate festive greeting" },
      { status: 500 }
    );
  }
}
