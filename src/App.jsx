import "./App.css";
import { useState } from "react";
import { currancyConverter } from "./api/postApi";

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleConvert = async () => {
    setError("");
    setResult(null);
    try {
      const res = await currancyConverter(fromCurrency, toCurrency, amount);
      setResult(res.data.conversion_result);
    } catch (err) {
      console.log(err)
      setError("Conversion failed. Please try again.");
    }
  };

  return (
    <section className="currency-converter">
      <div className="currency-div">
        <h1>Currency Converter</h1>
        <div>
          <label htmlFor="currency_amount">Amout :</label>
          <input
            type="number"
            id="currency_amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <div className="currency-selector">
          <div>
            <label>From</label>
            <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
              <option value="INR">INR</option>
              <option value="USD">USD</option>
            </select>
          </div>
          <div>
            <label>TO</label>
            <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
              <option value="USD">USD</option>
              <option value="INR">INR</option>
            </select>
          </div>
        </div>
        <button onClick={handleConvert}>Convert</button>
        {result !== null && (
          <div style={{ marginTop: "1rem" }}>
            <strong>Result: {result}</strong>
          </div>
        )}
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </section>
  );
}

export default App;
