const { BedrockRuntimeClient, InvokeModelCommand } = require("@aws-sdk/client-bedrock-runtime");
const client = new BedrockRuntimeClient({ region: "us-east-1" });
const input = {
    body: `{ "prompt": "a customer writes an email \“i would like a refund\” please help me write a response to sent in email", "maxTokens": 200, "temperature": 0 }`, // required
    contentType: "application/json",
    accept: "*/*",
    modelId: "ai21.j2-mid-v1",
};
const command = new InvokeModelCommand(input);
client.send(command)
    .then((value) => {
        var responseString = new TextDecoder().decode(value.body);
        const responseJson = JSON.parse(responseString);
        console.log(responseJson["completions"]);
    }, (reason) => {
        console.log(reason);
    });


