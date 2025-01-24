// Barril file
import type { ILoginRequest } from "./loginRequest.dto";
import type { ILoginResponseError } from "./loginResponseError.dto";
import type { ILoginResponseSuccess } from "./loginResponseSuccess.dto";
import type { IRegisterRequest } from "./registerRequest.dto";
import type { IRegisterResponseError, IRegisterResponseErrorMessage } from "./registerResponseError.dto";
import type { IPostedUser, IRegisterResponseSuccess} from "./registerResponseSuccess.dto";
import type { IUserResponse } from "./userResponse.dto";
import type { IUserResponseError } from "./userResponseError.dto";
import type { IOpenAiResponseReply, IOpenAiResponseStatus } from "./openAiResponse.dto";
import type { IOpenAiRequest } from "./openAIRequest.dto";

export {
    ILoginRequest, 
    ILoginResponseError,
    ILoginResponseSuccess,
    IRegisterRequest,
    IRegisterResponseError,
    IRegisterResponseErrorMessage,
    IPostedUser,
    IRegisterResponseSuccess,
    IUserResponse,
    IUserResponseError,
    IOpenAiResponseReply,
    IOpenAiResponseStatus,
    IOpenAiRequest,
}