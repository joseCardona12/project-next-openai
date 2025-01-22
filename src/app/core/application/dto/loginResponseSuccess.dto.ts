
export interface ILoginResponseSuccess{
    response: IResponse,
    status:number,
}

export interface IResponse{
    message:string,
    user: IAuthUser,
}

export interface IAuthUser{
    id:number,
    name:string,
    email:string,
    jwt:string,
}