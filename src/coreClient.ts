import { GraphClient } from "./GraphClient";
import "cross-fetch/polyfill"

const baseUrl = "https://graph.microsoft.com/v1.0"

function buildUrl(pathstring:string){

    return baseUrl+pathstring;
}

export function init(accessToken:string){


const  coreclient = {
    api: (path: string) => {
        const url = buildUrl(path);
        return {
            get: () => { 
                return callAPI(url, accessToken);
            },
            post: (body, headers) => { 
                return callPost(url,body, headers, accessToken)
            }
        }
    }
}
return coreclient
}

async function callAPI(url, accessToken){
    const response = await fetch(url, { 
        method: 'get', 
        headers: new Headers({
            'Authorization': 'Bearer '+ accessToken
        })
    });

    return response.json();
}

async function callPost(url,body, headers:Record<string,string>, accessToken){
    headers["Authorization"] = 'Bearer '+ accessToken;
    const response = await fetch(url, { 
        method: 'post', 
        headers,
        body
    });

    return response.json();
}