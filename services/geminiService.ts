import { GoogleGenAI } from "@google/genai";
import { Message } from "../types.ts";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askJavaTutor(history: Message[], question: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: [
        {
            role: 'user',
            parts: [{ text: "You are a World-Class Java Mentor. Help the user with their question about Java. Use Java 17+ conventions when possible. Be concise but deep." }]
        },
        ...history.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }]
        })),
        {
          role: 'user',
          parts: [{ text: question }]
        }
      ],
      config: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      }
    });

    return response.text || "I'm sorry, I couldn't process that Java question.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error: Could not reach the Java Mentor. Check console for details.";
  }
}