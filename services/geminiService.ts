
import { GoogleGenAI } from "@google/genai";

export const geminiService = {
  async getEventAdvice(userRequest: string): Promise<string> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userRequest,
        config: {
          systemInstruction: `Tu es l'assistant virtuel expert de Blyss, une application pour prothésistes ongulaires.
          Ton rôle est de donner des conseils business ou créatifs aux prothésistes.
          Tu peux répondre sur :
          1. La gestion de salon (prix, clients, planning).
          2. Les tendances Nail Art (couleurs, techniques).
          3. L'utilisation de l'app Blyss.
          
          Ton ton est professionnel, encourageant, féminin et moderne.
          Utilise des emojis (💅, ✨, 🌸).
          Fais des réponses courtes et percutantes.`,
          temperature: 0.7,
        },
      });
      return response.text || "";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Désolé, je suis en train de polir mes connaissances. Réessaie dans une minute ! 💅";
    }
  },

  async generateCTAImage(): Promise<string> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: "Haute couture nail art photography, elegant hand with intricate pastel marble design nails, holding a delicate flower, soft studio lighting, bokeh background, 8k resolution, pinterest aesthetic, luxury beauty style." }],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1"
          }
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
      throw new Error("No image data in response");
    } catch (error) {
      console.error("Image Generation Error:", error);
      throw error;
    }
  }
};
