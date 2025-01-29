import { ILoginRequest, ILoginResponseError, ILoginResponseSuccess, IRegisterRequest, IRegisterResponseError, IRegisterResponseErrorMessage, IRegisterResponseSuccess} from "@/app/core/application/dto";
import { IUser } from "@/app/core/application/interfaces/user.interface";
import { AuthPort } from "@/app/core/application/ports";
import { ClientHttpUtil } from "@/app/infrastructure/utils/clientHttp.util";

class AuthService implements AuthPort {
    private clientHttpUtil: ClientHttpUtil;

    constructor() {
        this.clientHttpUtil = new ClientHttpUtil();
    }

    public async login(data: ILoginRequest): Promise<ILoginResponseError | ILoginResponseSuccess> {
        const response = await this.clientHttpUtil.post<ILoginResponseError | ILoginResponseSuccess, ILoginRequest>("auth/login", data);
        return response;    
    }

    public async register(data: IRegisterRequest): Promise<IRegisterResponseError | IRegisterResponseErrorMessage | IRegisterResponseSuccess> {
        const response = await this.clientHttpUtil.get<IUser>(`users/${data.email}`);
        console.log("response", response);
        if (response.email) {
            return {
                message: "Error. User already exists",
                status: 400
            };
        }
        return await this.clientHttpUtil.post<IRegisterResponseError | IRegisterResponseErrorMessage | IRegisterResponseSuccess, IRegisterRequest>("auth/register", data);
    }
}

export default new AuthService();