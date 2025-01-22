import { ILoginRequest, ILoginResponseError, ILoginResponseErrorCatch, ILoginResponseSuccess, IRegisterRequest, IRegisterResponseError, IRegisterResponseErrorCatch, IRegisterResponseSuccess } from "@/app/core/application/dto";
import { AuthPort } from "@/app/core/application/ports";
import { ClientHttpUtil } from "@/app/infrastructure/utils/clientHttp.util";

class AuthService implements AuthPort{
    private clientHttpUtil:ClientHttpUtil;

    constructor(){
        this.clientHttpUtil = new ClientHttpUtil();
    };
    public async login(data: ILoginRequest): Promise<ILoginResponseError | ILoginResponseErrorCatch | ILoginResponseSuccess> {
        return await this.clientHttpUtil.post<ILoginResponseError | ILoginResponseErrorCatch | ILoginResponseSuccess,ILoginRequest >("auth/login", data);
    };

    public async register(data: IRegisterRequest): Promise<IRegisterResponseError | IRegisterResponseErrorCatch | IRegisterResponseSuccess> {
        return await this.clientHttpUtil.post<IRegisterResponseError | IRegisterResponseErrorCatch | IRegisterResponseSuccess, IRegisterRequest>("auth/register", data);
    };
};

export default new AuthService();