import { useState } from "react";
import "./CardIMC.scss";

const CardIMC = () => {
  const [imc, setIMC] = useState(null);
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch("http://localhost:5000/calcula-imc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ peso, altura }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIMC(data.imc);
        setStatus(data.status);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="imc-calculator-card">
        <h1 className="main-title">Calculadora IMC</h1>
        <form onSubmit={handleSubmit} className="form-calculator-imc">
          <label htmlFor="altura">Informe sua altura:</label>
          <input
            type="number"
            step={0.01}
            id="input-altura"
            name="altura"
            value={altura}
            required
            onChange={(e) => setAltura(e.target.value)}
          />
          <label htmlFor="peso">Informe seu peso:</label>
          <input
            type="number"
            id="input-peso"
            name="peso"
            value={peso}
            required
            onChange={(e) => setPeso(e.target.value)}
          />
          <button type="submit" className="button-submit">Calcular IMC</button>
        </form>
        {imc && <p>Seu IMC é: {imc}</p>}
        {status && <p>Status: {status}</p>}
      </div>
    </>
  );
};

export default CardIMC;
