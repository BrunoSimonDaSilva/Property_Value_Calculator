from pydantic import BaseModel

class calculatorModel(BaseModel):
    LotArea: int
    OverallQual: int
    OverallCond: int
    YearBuilt: int
    GrLivArea: int
