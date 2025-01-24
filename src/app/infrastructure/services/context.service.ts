import { ClientHttpUtil } from "../utils";

class ContextService{
    private clientHttpUtil:ClientHttpUtil;  
    
    constructor(){
        this.clientHttpUtil = new ClientHttpUtil();
    };

    public async getContexts(){
        
    }

    public async createContext(){

    }
};

export default new ContextService();