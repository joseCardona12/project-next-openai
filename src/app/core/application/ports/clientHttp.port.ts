
export interface ClientHttpPort{
    /**
     * 
     * @param path this property is a only resource for access
     * @param headers this headers for send to fetch 
     * @param method simple method as GET, POST, PUT, DELETE
     * @param bodyClient Body the request
     * This method return the completed response or throw new Error
     */
    fetchApi<B>(path:string,headers:Record<string,string>, method:string,bodyClient?:B):Promise<Response | {message:string}>,

    /**
     * 
     * @param path this property is a only resource for access
     * This method get all items, for example: users, 
     */
    get<T>(path:string):Promise<T>,
    
    /**
     * 
     * @param path this property is a only resource for access
     * @param body Body the request
     * This method create an item
     */
    post<T,B>(path:string,body:B):Promise<T>

    /**
     * 
     * @param path this property is a only resource for access
     * @param body Body the request
     * This method update an item
     */
    put<T,B>(path:string,body:B):Promise<T>,

    /**
     * 
     * @param path this property is a only resource for access
     * This method delete an item
     */
    delete<T>(path:string):Promise<T>
}