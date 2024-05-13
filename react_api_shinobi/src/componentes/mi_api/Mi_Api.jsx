import { useState, useEffect } from "react";
import MyCard from "../mycard/MyCard";
// eslint-disable-next-line react/prop-types
const Mi_Api = ({ buscar }) => {
  const [info, setInfo] = useState([]);
  const url = "https://api.boostr.cl/feriados/en.json";
  const consultarApi = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const fecha = data.date;
      console.log(fecha);

      setInfo(fecha);
    } catch (error) {
      console.log("No logramos entrar a los datos");
    }
  };
  useEffect(() => {
    consultarApi();
  }, []);

  let mostrarFecha = [];
  if (buscar === "") {
    mostrarFecha = { info };
  } else {
    mostrarFecha = info.filter((fecha) =>
      //     // eslint-disable-next-line react/prop-types
      fecha.title.toLowerCase().includes(buscar.toLowerCase())
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {mostrarFecha.map((fecha) => (
            <div key={id} className="col-sm-6 col-md-4 col-lg-3">
              {/* Renderiza una tarjeta para cada personaje utilizando MyCard */}
              <MyCard
                key={id}
                date={`${fecha.date}`}
                title={`${fecha.title}`}
                type={`${fecha.type}`}
                extra={`${fecha.extra}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mi_Api;
