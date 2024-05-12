import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Lista = ({ buscar }) => {
  const [info, setInfo] = useState([]);
  const url = "https://narutodb.xyz/api/character?page=1&limit=20";
  const consultarApi = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const personajes = data.characters;
      console.log(personajes);

      setInfo(personajes);
    } catch (error) {
      console.log("No logramos entrar a los datos");
    }
  };
  useEffect(() => {
    consultarApi();
  }, []);

  let mostrarPersonaje = [];
  if (buscar === "") {
    mostrarPersonaje = { info };
  } else {
    mostrarPersonaje = info.filter((personaje) =>
      // eslint-disable-next-line react/prop-types
      personaje.name.toLowerCase().includes(buscar.toLowerCase())
    );
  }

  return (
    <>
      <div>
        {info.map((personajes, id) => (
          <p key={id}>{`${personajes.name}`}</p>
        ))}
        {mostrarPersonaje.length == 0 ? (
          <p>No se encontraron resultados</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Lista;
