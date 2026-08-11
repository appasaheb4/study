// npm install @aws-sdk/client-bedrock-runtime
const {
  BedrockRuntimeClient,
  InvokeModelCommand,
} = require('@aws-sdk/client-bedrock-runtime');

const client = new BedrockRuntimeClient({region: 'us-east-1'});

async function runModel() {
  const input = {
    modelId: 'xxx',
    contentType: 'application/json',
    accept: 'application/json',
    body: JSON.stringify({message: 'Hello!!'}),
  };
  try {
    const command = new InvokeModelCommand(input);
    const response = await client.send(command);
    const result = JSON.parse(response.body.toString());
    console.log({result});
  } catch (error) {
    console.log({error});
  }
}

runModel();
