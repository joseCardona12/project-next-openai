import { ILoginRequest } from "@/app/core/application/dto/loginRequest.dto";
import { ILoginResponseError, ILoginResponseSuccess, IRegisterRequest, IRegisterResponseError, IRegisterResponseErrorMessage, IRegisterResponseSuccess } from "../dto";

export interface AuthPort{
    login(data: ILoginRequest):Promise<ILoginResponseError | ILoginResponseSuccess>;
    register(data: IRegisterRequest): Promise<IRegisterResponseError | IRegisterResponseErrorMessage | IRegisterResponseSuccess>;
}