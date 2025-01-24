export interface IRoutesProps{
    path:string
}
export interface IRoutes{
    private: IRoutesProps[],
    public: IRoutesProps[],
}

export const routes: IRoutes = {
    private:[
        {path:"/home"},
        {path:"/dashboard"},
        {path:"/context"},
        {path:"/collection"},
    ],
    public: [
        {path:"/login"},
        {path:"/register"},
    ]
}