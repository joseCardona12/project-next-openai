import { openAi_api_key } from "@/app/core/application/config/loadEnv";
import OpenAI from "openai";

class OpenAiService {
    private openai: OpenAI;
    
    constructor(){
        this.openai = new OpenAI({
            apiKey: openAi_api_key
        });
    };

    public async createPrompt(prompt:string):Promise<{message:string}>{
        if(!this.openai){
            return ({
                message: "Error with environment variable"
            });
        };
        const response = await this.openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {role: "system", content: "Eres un experto en ejercicios y Smart Fit. Solo responde preguntas relacionadas con estos temas."},
                {role: "user", content: prompt}
            ]
        });
    };
}