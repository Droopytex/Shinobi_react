import { useState } from "react";
import "./App.css";

import Mi_Api from "./componentes/mi_api/Mi_Api";
import Buscador from "./componentes/buscador/Buscador";

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
      <Buscador setBuscar={setBuscar} />
    </>
  );
}

export default App;
