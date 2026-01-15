from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def hello_server():
  return {"Greeting": "Hello Consumer"}