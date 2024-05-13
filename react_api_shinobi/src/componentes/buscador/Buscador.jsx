// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Buscador = ({ setBuscar }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Ingresar"
        onChange={(e) => {
          setBuscar(e.target.value);
        }}
      />
    </div>
  );
};

export default Buscador;
