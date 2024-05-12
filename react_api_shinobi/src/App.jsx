import { useState } from "react";
import "./App.css";

import Mi_Api from "./componentes/mi_api/Mi_Api";

function App() {
  const [buscar, setBuscar] = useState("");
  return (
    <>
      <div></div>
      <h1>Hola todos, aquí vamos de nuevo</h1>
      <div>
        <Mi_Api buscar={buscar} />
      </div>
      <h4>busca a tu mono</h4>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresar"
          value={buscar}
          onChange={(e) => {
            setBuscar(e.target.value);
          }}
        />
      </div>
    </>
  );
}

export default App;
