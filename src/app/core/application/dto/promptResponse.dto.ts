
export interface IPromptResponseSuccess{
    message: string,
    prompt: IPrompt

}

export interface IPrompt{
    id:number,
    description:string,
    user_id:number
}