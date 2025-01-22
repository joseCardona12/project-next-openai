import { ILoginRequest, ILoginResponseError, ILoginResponseErrorCatch, ILoginResponseSuccess, IRegisterRequest, IRegisterResponse } from "@/app/core/application/dto";
import { AuthPort } from "@/app/core/application/ports";
import { ClientHttpUtil } from "@/app/infrastructure/utils/clientHttp.util";

class AuthService implements AuthPort {
    private clientHttpUtil:ClientHttpUtil;

    constructor(){
        this.clientHttpUtil = new ClientHttpUtil();
    };
    public async login(data: ILoginRequest): Promise<ILoginResponseError | ILoginResponseErrorCatch | ILoginResponseSuccess> {
        
    };

    public async register(data: IRegisterRequest): Promise<ILoginResponseError | ILoginResponseErrorCatch | IRegisterResponse> {
        
    };

};

export default new AuthService();