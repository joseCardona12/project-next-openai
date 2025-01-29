import { openAi_api_key } from "@/app/core/application/config/loadEnv";
import OpenAI from "openai";

class OpenAiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: openAi_api_key,
    });
  }

  public async createPrompt(prompt: string): Promise<{ message: string; reply: string }> {
    if (!this.openai) return { message: "openAi", reply: "" };
    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "Eres un experto en ejercicios y Smart ui. Solo responde preguntas relacionadas con estos temas.",
          },
          { role: "user", content: prompt },
        ],
      });

      const reply = response.choices[0]?.message?.content || "Sin respuesta";

      // Call endpoint for prompt and answer
      return {
        message: "Successfully",
        reply,
      };
    } catch (error: unknown) {
      // Log the error or handle it more meaningfully
      console.error("Error to get chats:", error);
      return {
        message: "chats",
        reply: "500",
      };
    }
  }
}

// Assign the instance to a variable before exporting
const openAiService = new OpenAiService();
export default openAiService;
