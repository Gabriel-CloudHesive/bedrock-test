var AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

var bedrockruntime = new AWS.BedrockRuntime();

let params = {
    "modelId": "amazon.titan-embed-text-v1",
    "contentType": "application/json",
    "accept": "*/*",
    "body": `{
      "inputText": "Knock-knock jokes are hilarious."
     }`
};
bedrockruntime.invokeModel(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(JSON.parse(data.body));           // successful response
});