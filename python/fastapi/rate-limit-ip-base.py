from fastapi import FastAPI, Request
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from starlette.middleware.slowapi import SlowAPIMiddleware

app = FastAPI()

limiter = Limiter(key_func=get_remote_address)

app.state.limiter = limiter
app.add_middleware(SlowAPIMiddleware)

app.add_exception_handle(429, _rate_limit_exceeded_handler)

@app.get('/')
@limiter.limit('5/minute')
async def root(request: Request):
    return {"message":"Hello! You are within the rate limit."}