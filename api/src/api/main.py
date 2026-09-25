from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Submission(BaseModel):
    code: str

@app.post("/submit-solution")
def submit_solution(submission: Submission):
    print(submission.code)

    return {
        "message": "Solution received",
        "code": submission.code
    }