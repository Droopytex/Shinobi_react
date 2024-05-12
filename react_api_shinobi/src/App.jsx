import Mi_Api from "./componentes/mi_api/Mi_Api";
import "./App.css";
import Buscador from "./componentes/buscador/Buscador";

function App() {
  return (
    <>
      <h1>Hola todos, aquí vamos de nuevo</h1>
      <div>
        <Mi_Api />
      </div>
      <h4>busca a tu mono</h4>
      <div>
        <Buscador />
      </div>
    </>
  );
}

export default App;
