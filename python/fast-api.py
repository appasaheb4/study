from fastapi import FastAPI

# Create FastAPI instance
app = FastAPI()

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}

# Path parameter example
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "query": q}

# POST example
@app.post("/create/")
def create_item(name: str, price: float):
    return {"name": name, "price": price, "status": "created"}

# uvicorn fast-api:app --reload