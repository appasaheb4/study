# pip install fastapi uvicorn boto3
from fastapi import FastAPI
from boto3.session import Session
from boto3.config import Config

app=FastAPI()
aws_session = Session(
    aws_access_key_id="xxx",
    aws_secret_access_key="xxx",
    region_name="us-east-1"
)

bedrock = aws_session.client('bedrock-runtime',config=Config())

@app.post('/invoke-model')
async def invoke_model(payload:dict):
    response = bedrock.invoke_model(
        modelId='xxx',
        contentType='application/json',
        accept='application/json',
        body=json.dumps(payload)
    )
    result = json.loads(response["body"].read().decode('utf-8'))
    return{"model_output":result}