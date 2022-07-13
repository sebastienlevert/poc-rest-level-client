import "cross-fetch/polyfill"
import { Client } from "@microsoft/microsoft-graph-client";

export function init(accessToken:string) {

    return Client.init({
        authProvider: (done) => {
            done("init error", accessToken);
        }
    });

}