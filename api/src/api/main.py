from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Submission(BaseModel):
    code: str

@app.post("/submit-solution")
def submit_solution(submission: Submission):
    print(submission.code)

    return {
        "message": "Solution received",
        "code": submission.code
    }