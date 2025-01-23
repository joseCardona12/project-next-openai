import { ILoginRequest, ILoginResponseError, ILoginResponseSuccess, IRegisterRequest, IRegisterResponseError, IRegisterResponseSuccess } from "@/app/core/application/dto";
import { AuthPort } from "@/app/core/application/ports";
import { ClientHttpUtil } from "@/app/infrastructure/utils/clientHttp.util";

class AuthService implements AuthPort{
    private clientHttpUtil:ClientHttpUtil;

    constructor(){
        this.clientHttpUtil = new ClientHttpUtil();
    };
    public async login(data: ILoginRequest): Promise<ILoginResponseError | ILoginResponseSuccess> {
        const response = await this.clientHttpUtil.post<ILoginResponseError | ILoginResponseSuccess,ILoginRequest >("auth/login", data);
        console.log("response", response);
        return response;    
    };

    public async register(data: IRegisterRequest): Promise<IRegisterResponseError | IRegisterResponseSuccess> {
        return await this.clientHttpUtil.post<IRegisterResponseError | IRegisterResponseSuccess, IRegisterRequest>("auth/register", data);
    };
};

export default new AuthService();