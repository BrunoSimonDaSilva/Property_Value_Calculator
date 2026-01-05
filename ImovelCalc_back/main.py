from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.calculatorModel import calculatorModel
from tensorflow.keras.models import load_model # type: ignore
import numpy as np
import joblib

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

path_models = "models/ml_models/"
model = load_model(
    path_models+"house_price_model.h5",
    compile=False
)

scaler_X = joblib.load(path_models+"scaler_X.pkl")
scaler_y = joblib.load(path_models+"scaler_y.pkl")


@app.get("/")
def home():
    return {"message": "ImovelCalc API running!"}


@app.post("/calculateImovel")
def calculateImovel(data: calculatorModel):
    X = np.array([[
        data.LotArea,
        data.OverallQual,
        data.OverallCond,
        data.YearBuilt,
        data.GrLivArea
    ]])

    X_scaled = scaler_X.transform(X)

    y_scaled = model.predict(X_scaled)

    price = round(float(scaler_y.inverse_transform(y_scaled)[0][0]), 2)
    return price

