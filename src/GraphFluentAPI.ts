import { Drive, MessageCollectionResponse, User } from "./Model";

export interface IGraphFluentAPI {
    me: {
        get(): User,
        messages: {
            get(): MessageCollectionResponse;
        },
        drive: {
            get(): Drive;
        }
    }
}

export function generateFluentClient(graphClient, url: string = "") : IGraphFluentAPI {
    // a hack, so we can use field either as property or a method
    const callable = () => {}
    callable.url = url

    return new Proxy<any>(callable, { 
        get(o, propKey) {
            if(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].includes((propKey as string).toUpperCase())) {
                return (data) => graphClient.api(url)[(propKey as string)]()
            } else {
                return generateFluentClient(graphClient, `${url}/${(propKey as string)}`);
            }                
        }, 
        apply(o, thisArg, [arg] = []) {
            return generateFluentClient(graphClient, arg ? `${url}/${arg}` : url) 
        }
    })
}