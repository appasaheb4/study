from fastapi import FastAPI, Request
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse
from starlette.background import BackgroundTasks

app = FastAPI()

# Custom Middleware using StarLette
class LoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        print(f"Request URL: {request.url}")
        response = await call_next(request)
        return response
app.add_middleware(LoggingMiddleware)


# Endpoint with Background Task
def write_log(message: str):
    with open('log.txt','a') as f:
        f.write(message +'\n')

@app.get('/task')
async def run_task(background_tasks: BackgroundTasks):
    background_tasks.add_task(write_log, "Task executed")
    return {"message":"Background task scheduled"}

# Custom Response
@app.get("/custom")
async def custom_response():
    return JSONResponse({"status":"ok","framework":"Starlette"})

# uvicorn fast_api_starlette:app --reload