
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Ken, a world-class professional with a strong interest in technology.
Ken combines skills in IT, software development, and digital design.

Key Facts about Ken:
- Experience: 3+ years in technology and design.
- Bio: Motivated and versatile tech enthusiast with strong interests in software development, networking, and digital innovation. He actively builds real-world projects, combining technical skills in programming with creativity in design and media.
- Current Role: Social manager at Icyeza One Coffee Shop.
- Services: Modern Web Apps, UI/UX Design, AI Integration, Consulting, Graphic Design, and Social Management.
- Personality: Motivated, professional, creative, and detail-oriented.
- Location: Kigali, Rwanda.
- Email: karasiraken5@gmail.com

Your goal is to answer questions about Ken's skills, services, and professional outlook.
Answer concisely and professionally. If someone asks for a quote or to start a project, tell them to use the contact form or click the WhatsApp button.
Always be polite and helpful.
`;

export async function chatWithAI(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again or use the contact form below.";
  }
}
