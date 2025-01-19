import { ClientHttpUtil } from "@/app/infrastructure/utils/clientHttp.util";

class AuthService {
    private clientHttpUtil:ClientHttpUtil;

    constructor(){
        this.clientHttpUtil = new ClientHttpUtil();
    };

};

export default new AuthService();