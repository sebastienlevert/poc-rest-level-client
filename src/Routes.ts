import { GraphClient } from "./GraphClient";
import { User, MessageCollectionResponse, Drive, Message, SendMailBody } from "./Model";

export interface Routes {
    (api: "/me"): GetMe,
    (api: "/me/messages"): GetMessages,
    (api: "/me/sendMail"): SendMail,
    (api: "/me/drive"): GetDrive
}

export interface Routes {
    (api: "/me2"): GetMe,
}

export interface GetMe {
    get(): User,
}

export interface GetDrive {
    get(): Drive,
}

export interface GetMessages {
    get(): MessageCollectionResponse,
    post(): MessageCollectionResponse
}

export interface SendMail {
    post(body: SendMailBody, headers: Record<string, string>): number;
}

export type GraphSDKClient = GraphClient & {
    api: Routes
}