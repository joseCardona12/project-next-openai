import Redirect from "./redirect";

class UtilApplication{
    private path: string = window.location.pathname;

    public guardApp(){
        
        const dataUser = localStorage.getItem("user-storage");
        if(dataUser && path){

        }
    }
}

export default new UtilApplication();