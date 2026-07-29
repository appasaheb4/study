from fastapi import FastAPI, HTTPException
from model import User

app = FastAPI()

@app.post('/user')
def create_user(user:User):
    if user.age > 18:
        return{"message":"Data Added."}
    else:
        raise HTTPException(status_code=400,detail="Age must be greater than 18")


## how to run
# uviron main:app --reload