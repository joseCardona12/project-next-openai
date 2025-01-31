import {
  IOpenAiRequest,
  IOpenAiResponseReply,
  IOpenAiResponseStatus,
} from "@/app/core/application/dto";
import { ClientHttpUtil } from "../utils";

class OpenAiService {
  private clientHttpUtil: ClientHttpUtil;

  constructor() {
    this.clientHttpUtil = new ClientHttpUtil();
  }

  public async createPromptAPi(
    prompt: string,
    token: string
  ): Promise<IOpenAiResponseStatus | IOpenAiResponseReply> {
    return await this.clientHttpUtil.post<
      IOpenAiResponseStatus | IOpenAiResponseReply,
      IOpenAiRequest
    >(
      "openAi",
      { prompt },
      {
        Authorization: `Bearer ${token}`,
      }
    );
  }
}

export default new OpenAiService();
