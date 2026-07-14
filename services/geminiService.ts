import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey });

export const getGrowthTips = async (query: string): Promise<{ text: string; sources: string[] }> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: query,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: "Você é um assistente especialista em crescimento humano, nutrição e exercícios para o app 'Grow Max'. Responda em português, de forma motivadora e científica. Use formatação Markdown.",
      },
    });

    const text = response.text || "Desculpe, não consegui processar sua solicitação no momento.";
    
    // Extract sources from grounding chunks if available
    const sources: string[] = [];
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    
    if (groundingChunks) {
      groundingChunks.forEach((chunk: any) => {
        if (chunk.web?.uri) {
          sources.push(chunk.web.uri);
        }
      });
    }

    return { text, sources };
  } catch (error) {
    console.error("Error fetching growth tips:", error);
    return { 
      text: "Houve um erro ao conectar com a IA. Por favor, verifique sua conexão ou tente novamente mais tarde.", 
      sources: [] 
    };
  }
};