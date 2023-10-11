/* 
    Text Generation.
    Using only AWS SDK.
    zero-shot prompt.
*/
import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";

/* **************************Invoke Model Command************************************** */
const client = new BedrockRuntimeClient({ region: "us-east-1" });
const input = {
  modelId: "ai21.j2-mid-v1",
  contentType: "application/json",
  accept: "*/*",
  body: '{"prompt":"Give me a list of three answer suggestions for a question for a customer. The question is: I need help with my bank account.","maxTokens":200,"temperature":0.7,"topP":1,"stopSequences":[],"countPenalty":{"scale":0},"presencePenalty":{"scale":0},"frequencyPenalty":{"scale":0}}',
};

const command = new InvokeModelCommand(input);
let response = await client.send(command);

var responseString = new TextDecoder().decode(response.body);
const responseJson = JSON.parse(responseString);
console.log(responseJson["completions"][0]["data"]["text"]);
