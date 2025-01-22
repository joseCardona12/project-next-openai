import { ILoginRequest } from "@/app/core/application/dto/loginRequest.dto";
import { ILoginResponseError, ILoginResponseErrorCatch, ILoginResponseSuccess, IRegisterRequest, IRegisterResponseError, IRegisterResponseErrorCatch, IRegisterResponseSuccess } from "../dto";

export interface AuthPort{
    login(data: ILoginRequest):Promise<ILoginResponseError | ILoginResponseErrorCatch | ILoginResponseSuccess>;
    register(data: IRegisterRequest): Promise<IRegisterResponseError | IRegisterResponseErrorCatch | IRegisterResponseSuccess>;
}