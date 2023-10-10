/* 
    Text Generation.
    Using only AWS SDK.
    zero-shot prompt.
*/

import { BedrockClient, ListFoundationModelsCommand } from "@aws-sdk/client-bedrock";
import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

/* **************************List Foundation Models************************************** */
/* const bedrockClient = new BedrockClient({ region: "us-east-1" });
const bedrockInput = { // ListFoundationModelsRequest
    // byProvider: "STRING_VALUE",
    // byCustomizationType: "FINE_TUNING",
    // byOutputModality: "TEXT" || "IMAGE" || "EMBEDDING",
    // byInferenceType: "ON_DEMAND" || "PROVISIONED",
};

const bedrockCommand = new ListFoundationModelsCommand(bedrockInput);
bedrockClient.send(bedrockCommand)
    .then((value) => {
        console.log(value);
    }); */

/* **************************Invoke Model Command************************************** */
const client = new BedrockRuntimeClient({ region: "us-east-1" });
const input = {
    body: `{ "prompt": "a customer writes an email \“i would like a refund\” please help me write a response to sent in email.", "maxTokens": 200, "temperature": 0 }`, // required
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