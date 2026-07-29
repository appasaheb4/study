from pydantic import BaseModel, Field

class User(BaseModel):
    age: int = Field(..., gt=0, description:'Age must be a positive integer')