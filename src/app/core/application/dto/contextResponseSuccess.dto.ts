import { IContextRequest } from "./contextRequest.dto";

export interface IContextResponseSuccess{
    message:string,
    context: IContextRequest
}