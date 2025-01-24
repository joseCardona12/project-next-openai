import { IAnswerRequest, IPromptResponseError, IPromptResponseSuccess } from "@/app/core/application/dto";
import { ClientHttpUtil } from "../utils";

class AnswerService {
    private clientHttpUtil: ClientHttpUtil
    constructor(){
        this.clientHttpUtil = new ClientHttpUtil();
    };

    public async createAnswer(answer:string, token:string, prompt_id:number): Promise<IPromptResponseError | IPromptResponseSuccess>{
        return await this.clientHttpUtil.post<IPromptResponseError | IPromptResponseSuccess, IAnswerRequest>("answer", {description: answer, prompt_id}, {Authorization: `Bearer ${token}`})
    };
}

export default new AnswerService();