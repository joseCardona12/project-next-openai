import { ILoginRequest, ILoginResponseError, ILoginResponseErrorCatch, ILoginResponseSuccess, IRegisterRequest, IRegisterResponse } from "@/app/core/application/dto";
import { AuthPort } from "@/app/core/application/ports";
import { ClientHttpUtil } from "@/app/infrastructure/utils/clientHttp.util";

class AuthService {
    private clientHttpUtil:ClientHttpUtil;

    constructor(){
        this.clientHttpUtil = new ClientHttpUtil();
    };
    public async login(data: ILoginRequest): Promise<ILoginResponseError | ILoginResponseErrorCatch | ILoginResponseSuccess> {
        if(!data){
            return {error:"email and password are required", status:400};
        }
        return await this.clientHttpUtil.post<ILoginResponseError | ILoginResponseErrorCatch | ILoginResponseSuccess,ILoginRequest >("auth/login", data);
    };

    // public async register(data: IRegisterRequest): Promise<ILoginResponseError | ILoginResponseErrorCatch | IRegisterResponse> {
        
    // };

};

export default new AuthService();