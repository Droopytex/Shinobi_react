import { useState, useEffect } from "react";

function Buscador() {
  const [buscar, setBuscar] = useState("");

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
        {<p>{buscar}</p>}
      </div>
    </>
  );
}

export default Buscador;
