import { GraphClient } from "./GraphClient";
import { User, MessageCollectionResponse, Drive, Message, SendMailBody } from "./Model";

interface Routes{
    (api:"/me"):GetMe,
    (api:"/me/messages"):GetMessages,
    (api:"/me/sendMail"):SendMail,
    (api:"/me/drive"):GetDrive
}

interface GetMe{
    get():User,
}

interface GetDrive{
    get():Drive,
}

interface GetMessages {
    get(): MessageCollectionResponse,
}

interface SendMail{
    post(body:SendMailBody, headers:Record<string,string>):number;

}

export type GraphSDKClient = GraphClient & {
    api:Routes
}



