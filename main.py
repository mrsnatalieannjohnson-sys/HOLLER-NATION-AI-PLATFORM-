from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

# Initialize the Holler-Nation Engine
app = FastAPI(title="Holler-Nation-AI Engine")

# Define the User Data Structure
class UserData(BaseModel):
    user_id: str
    role: str
    atom_balance: int
    owned_songs: List[str]
    royalty_share: float

# This is our Vault (Database)
vault_db = {
    "holler_001": UserData(
        user_id="holler_001",
        role="Lead Artist / Architect",
        atom_balance=5000,
        owned_songs=["The_First_Spark_Master.wav", "Celestial_Order_Ch1.txt"],
        royalty_share=100.0
    )
}

@app.get("/api/user/{user_id}")
def get_user_dashboard(user_id: str):
    if user_id in vault_db:
        return vault_db[user_id]
    return {"error": "User not found in the Vault."}
