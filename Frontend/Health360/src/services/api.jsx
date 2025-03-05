import axios from "axios";

export class Api{

    urlBase="";
    token="";

    constructor(){
        this.urlBase="http://localhost:5000/";
        this.token=JSON.parse(localStorage.getItem("user_logged"));
        if(this.token){
            axios.defaults.headers.common["x-auth-token"] = this.token.token;
        }
    }

    post = (url, data) => {
        return axios.post(this.urlBase + url, data);
    }

    get = (url) => {
        return axios.get(this.urlBase + url);
    }

    put = (url, data) => {
        return axios.put(this.urlBase + url, data);
    }

    delete = (url) => {
        return axios.delete(this.urlBase + url);
    }

    getUserLogged = () => {
        return axios.get(this.urlBase+ "user/profile");
    }


}