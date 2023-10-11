/* 
    Text Generation.
    Using LangChain.
    https://js.langchain.com/docs/modules/model_io/models/llms/integrations/bedrock
    contextual generation.
*/

import { Bedrock } from "langchain/llms/bedrock";
import { PromptTemplate } from 'langchain/prompts';

const template = `Human: Create an apology email from the Service Manager {manager} to {customer} in response to the following feedback that was received from the customer: 
<customer_feedback>
{feedback}
</customer_feedback>

Assistant:`;

const promptTemplate = new PromptTemplate({
    template: template,
    inputVariables: ["manager", "customer", "feedback"]
});

const formattedPrompt = await promptTemplate.format({
    manager: "Bob",
    customer: "John Doe",
    feedback: `Hello Bob,
    I am very disappointed with the recent experience I had when I called your customer support.
    I was expecting an immediate call back but it took three days for us to get a call back.
    The first suggestion to fix the problem was incorrect. Ultimately the problem was fixed after three days.
    We are very unhappy with the response provided and may consider taking our business elsewhere.`
});

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

var response = await model.invoke(formattedPrompt);
console.log(response);