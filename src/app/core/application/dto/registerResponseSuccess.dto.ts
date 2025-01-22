
export interface IRegisterResponseSuccess{
    response:IRegisterResponse,
    status:number,
}

export interface IRegisterResponse{
    message:string,
    user:IPostedUser
}

export interface IPostedUser{
    name:string,
    email:string,
    gender_id:number
}