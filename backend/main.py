from fastapi import FastAPI

app = FastAPI(
  title = "Mindly"
)

@app.get("/")
def hello_server():
  return {"Greeting": "Hello Consumer"}