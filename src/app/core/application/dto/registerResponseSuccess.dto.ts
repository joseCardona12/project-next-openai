
export interface IRegisterResponseSuccess{
    message:string,
    user:IPostedUser
}

export interface IPostedUser{
    name:string,
    email:string,
    gender_id:number
}