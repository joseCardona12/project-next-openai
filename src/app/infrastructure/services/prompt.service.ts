import { IPromptResponseError, IPromptResponseSuccess } from "@/app/core/application/dto";
import { ClientHttpUtil } from "../utils";

class PromptService{
    private clientHttpUtil: ClientHttpUtil;

    constructor(){
        this.clientHttpUtil = new ClientHttpUtil();
    };

    public async postPrompt(prompt:string, token:string): Promise<IPromptResponseError | IPromptResponseSuccess>{
        return await this.clientHttpUtil.post<IPromptResponseError | IPromptResponseSuccess, {description:string}>("prompt", {
            description: prompt
        }, {
            Authorization: `Bearer ${token}`
        });
    };
}

export default new PromptService();