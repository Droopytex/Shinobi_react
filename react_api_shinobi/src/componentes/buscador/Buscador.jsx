import { useState, useEffect } from "react";

function Buscador() {
  const [buscar, setBuscar] = useState("");

  let mostrarPersonaje = [];
  if (buscar === "") {
    mostrarPersonaje = { info };
  } else {
    mostrarPersonaje = info.filter((personaje) =>
      personaje.name.toLowerCase().includes(buscar.toLowerCase())
    );
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={buscar}
          onChange={(e) => {
            setBuscar(e.target.value);
          }}
        />
        {/* {<p>{buscar}</p>} */}
      </div>
      {mostrarPersonaje.length == 0 ? <p>No se encontraron resultados</p> : ""}
    </>
  );
}

export default Buscador;
