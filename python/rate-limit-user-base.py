from fastapi import FastAPI, Request, HTTPException
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from starlette.middleware.slowapi import SlowAPIMiddleware


app = FastAPI()



def get_user_key(request: Request):
    user_id = request.headers.get('X-User-ID')
    if not user_id:
        raise HTTPException(status_code=400, detail="User ID not provided")
    return f"user:{user_id}"



limiter = Limiter(key_func= get_user_key)

app.state.limiter = limiter
app.add_middleware(SlowAPIMiddleware)


app.add_exception_handler(429, _rate_limit_exceeded_handler)

@app.get("/")
@limiter.limit("10/minute")
async def root(request: Request):
    return {"message":"Hello!, your are in rate limit."}