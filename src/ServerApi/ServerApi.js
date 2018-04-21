import axios from 'axios';
export default class ServerApi {
    constructor(url){
        this.url = url;
    }

    getData(){
        return axios({
            method: 'get',
            url: `${this.url}/getdata`,
        })
    }
}