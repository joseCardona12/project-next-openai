
export interface ClientHttpPort{
    fetchApi<B>(path:string,headers:Record<string,string>, method:string,bodyClient?:B):Promise<Response>,
    get<T>(path:string):Promise<T>,
    post<T,B>(path:string,body:B):Promise<T>
    put<T,B>(path:string,body:B):Promise<T>,
    delete<T>(path:string):Promise<T>
}