import { GraphClientInit } from "./GraphClient";
import { generateFluentClient } from "./GraphFluentAPI";
import { Drive, MessageCollectionResponse, SendMailBody, User } from "./Model";

const accessToken = "";
const client = GraphClientInit(accessToken);
async function testMessages() {
    const res: MessageCollectionResponse = await client.api("/me/messages").get();
    console.log(res.value[0]);
    console.log(res.value[0].subject);
}

//testMessages().then(() => "done").catch();


async function testMe() {
    const res:User = await client.api("/me").get();
    console.log(res);
    console.log(res.surname);
}

//testMe().then(() => "done").catch();

async function testDrive() {
    const res:Drive = await client.api("/me/drive").get();
    console.log(res);
    console.log(res.quota);
}

//testDrive().then(() => "done").catch();

async function sendMail() {
    const body:SendMailBody ={
        message:{
            subject: "9/9/2018: concert",
    body: {
      "contentType": "HTML",
      "content": "The group represents Nevada."
    },
    toRecipients: [
      {
        "emailAddress": {
          "address": "AlexW@contoso.OnMicrosoft.com"
        }
      }
    ]
        }
    } 
    const res = await client.api("/me/sendMail").post(body, {"Content-type":"application/json"});
    console.log(res);   
}

//sendMail().then(() => "done").catch();

const fluentClient = generateFluentClient(client);

async function testFluentAPI() {
  const me: User = await fluentClient.me.get();
  console.log(me.userPrincipalName);

  const messages: MessageCollectionResponse = await fluentClient.me.messages.get();
  console.log(messages.value[0].subject);

  const drive: Drive = await fluentClient.me.drive.get();
  console.log(drive);
}

testFluentAPI().then(() => "done").catch();