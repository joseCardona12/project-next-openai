
export interface ClientHttpPort{
    /**
     * 
     * @param path this property is a only resource for access
     * @param headers this headers for send to fetch 
     * @param method simple method as GET, POST, PUT, DELETE
     * @param bodyClient Body the request
     */
    fetchApi<B>(path:string,headers:Record<string,string>, method:string,bodyClient?:B):Promise<Response>,

    /**
     * 
     * @param path this property is a only resource for access
     */
    get<T>(path:string):Promise<T>,
    
    /**
     * 
     * @param path this property is a only resource for access
     * @param body Body the request
     */
    post<T,B>(path:string,body:B):Promise<T>

    /**
     * 
     * @param path this property is a only resource for access
     * @param body Body the request
     */
    put<T,B>(path:string,body:B):Promise<T>,

    /**
     * 
     * @param path this property is a only resource for access
     */
    delete<T>(path:string):Promise<T>
}