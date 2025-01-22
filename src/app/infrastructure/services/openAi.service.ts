import { openAi_api_key } from "@/app/core/application/config/loadEnv"; 
import {OpenAI} from "openai";

class OpenAiService{
    private baseUrl:string = "https://api.openai.com/v1/completions";
    private openAi:OpenAI;

    constructor(baseUrlClient?:string){
        this.baseUrl = baseUrlClient || this.baseUrl;
        this.openAi = new OpenAI({
            apiKey: openAi_api_key
        });
    };

    private getHeaders = (): {message:string} | Record<string,string> =>{
        if(openAi_api_key) return ({
            message: "Error. The environment variable not exists!"
        });
        return {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${openAi_api_key}`
        };
    };

    public async createPrompt(prompt:string){
        try{
            const response = await this.openAi.chat.completions.create({
                model: "gpt-4",
                messages: [
                    {role: "system", content: ""},
                    {role: "user", content: prompt}
                ]
            });
            console.log("openAi response", response.choices[0].message.content);

        }catch(error:unknown){
            console.error({
                message:`Error to call api openAi. ERROR: ${error}`
            });
        };
    };
};

export default new OpenAiService();