/* 
CHat with context
https://js.langchain.com/docs/modules/memory/
*/

import { Bedrock } from "langchain/llms/bedrock";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

const model = new Bedrock({
  model: "ai21.j2-jumbo-instruct",
  region: "us-east-1",
  temperature: 0.7,
  //   maxTokens: 100,
  stopSequences: [],
});
const memory = new BufferMemory();
const chain = new ConversationChain({
  llm: model,
  memory: memory,
});

const res1 = await chain.predict({
  input: "Give me a few tips on how to start a new garden.",
});
console.log({ res1 });

const res2 = await chain.predict({
  input: "Cool. Will that work with tomatoes?",
});
console.log({ res2 });

const res3 = await chain.predict({
  input: "That's all, thank you",
});
console.log({ res3 });
