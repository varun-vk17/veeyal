import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# CORS Configuration
origins = [
    "http://localhost:3000",
    "http://localhost:8000",
    os.getenv("CORS_ORIGINS", "*")
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database Connection
try:
    MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
    # Try connecting (lazy connect, so we might need to pinch it)
    client = AsyncIOMotorClient(MONGO_URL, serverSelectionTimeoutMS=2000)
    db = client[os.getenv("DB_NAME", "mimo_db")]
except:
    print("⚠️ MongoDB not available. Using MockDB.")
    from mock_db import MockDB
    client = MockDB()
    db = client

@app.on_event("startup")
async def startup_db_client():
    try:
        # Check connection
        if isinstance(client, AsyncIOMotorClient):
            await client.server_info()
            print("✅ Connected to MongoDB")
    except Exception as e:
        print(f"⚠️ MongoDB Connection Failed: {e}. Switching to MockDB.")
        from mock_db import MockDB
        app.mongodb_client = MockDB()
        app.mongodb = app.mongodb_client
        return

    app.mongodb_client = client
    app.mongodb = db

@app.on_event("shutdown")
async def shutdown_db_client():
    try:
        app.mongodb_client.close()
    except:
        pass

from routes import payment

app.include_router(payment.router, prefix="/api/payment", tags=["Payment"])

@app.get("/api/status")
async def get_status():
    return {"status": "ok", "message": "Backend is running"}

@app.get("/api/")
async def root():
    return {"message": "Welcome to the MIMO API"}