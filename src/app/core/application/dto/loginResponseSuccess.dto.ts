
export interface ILoginResponseSuccess{
    message:string,
    token:string,
    user:ILoginResponseUser
}

export interface ILoginResponseUser{
    email:string,
    id:number,
    name:string,
}