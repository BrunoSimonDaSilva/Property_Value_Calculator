import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [lotArea, setLotArea] = useState(30);
  const [overallQual, setOverallQual] = useState(10);
  const [overallCond, setOverallCond] = useState(10);
  const [yearBuilt, setYearBuilt] = useState(2021);
  const [grLivArea, setGrLivArea] = useState(25);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function calculateImovel(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/calculateImovel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          LotArea: Number(lotArea),
          OverallQual: Number(overallQual),
          OverallCond: Number(overallCond),
          YearBuilt: Number(yearBuilt),
          GrLivArea: Number(grLivArea)
        })
      });

      if (!response.ok) {
        throw new Error("Error when calculating property");
      }

      const data = await response.json();
      console.log(data);
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Error when calculating property");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1>Real estate calculator</h1>

      <div className="card p-3">
        <form className="text-start" onSubmit={calculateImovel}>
          
          <div className="mb-3">
            <label className="form-label">Lot area (m²)</label>
            <input type="number" className="form-control" value={lotArea} onChange={(e) => setLotArea(e.target.value)} required/>
          </div>

          <div className="mb-3">
            <label className="form-label">Overall quality</label>
            <select
              className="form-select" value={overallQual} onChange={(e) => setOverallQual(e.target.value)} required>
              <option value="">Select</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">General condition</label>
            <select className="form-select" value={overallCond} onChange={(e) => setOverallCond(e.target.value)} required>
              <option value="">Select</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Year of construction</label>
            <input type="number" className="form-control" value={yearBuilt} onChange={(e) => setYearBuilt(e.target.value)} required/>
          </div>

          <div className="mb-3">
            <label className="form-label">Living area</label>
            <input type="number" className="form-control" value={grLivArea} onChange={(e) => setGrLivArea(e.target.value)} required/>
          </div>

          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Calculating..." : "Calculate Property"}
          </button>
        </form>

        {result && (
          <div className="alert alert-success mt-3">
            <strong>
              Estimated Price: US${" "}
              {result.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </strong>

          </div>
        )}
      </div>
    </>
  );
}

export default App;
