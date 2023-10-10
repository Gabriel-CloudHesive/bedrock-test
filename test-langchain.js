/* 
    Using LangChain
    https://js.langchain.com/docs/modules/model_io/models/llms/integrations/bedrock
*/

var { Bedrock } = require("langchain/llms/bedrock")
// If no credentials are provided, the default credentials from
// @aws-sdk/credential-provider-node will be used.
const model = new Bedrock({
    model: "ai21.j2-mid-v1",
    region: "us-east-1",
    // endpointUrl: "custom.amazonaws.com",
    // credentials: {
    //   accessKeyId: process.env.BEDROCK_AWS_ACCESS_KEY_ID!,
    //   secretAccessKey: process.env.BEDROCK_AWS_SECRET_ACCESS_KEY!,
    // },
    // modelKwargs: {},
});

model.invoke("a customer writes an email \“i would like a refund\” please help me write a response to sent in email")
    .then((value) => { console.log('Response: ', value); })
    .catch((reason) => { console.log('Error: ', reason); });