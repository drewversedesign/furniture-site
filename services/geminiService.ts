import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

export const getInteriorDesignAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key not found in environment variables.");
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: "You are an expert interior designer for a luxury furniture brand called Nestery. Your tone is sophisticated, warm, and helpful. Provide concise, actionable advice on furniture selection, color matching, and room layout. If asked about specific products, invent plausible luxury furniture items that fit the Nestery brand aesthetic (natural materials, wood, craftsmanship). Keep responses under 150 words.",
      },
    });

    return response.text || "I apologize, I couldn't generate a design suggestion at this moment.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
};