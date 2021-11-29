import React, { useState, useEffect } from "react";
import GeneroCard from "../components/GeneroCard";
import axios from "axios";
const GenerosPage = () => {
  //inicializo el state con el listado de canciones y loading
  const [loading, setLoading] = useState(false);
  const [generos, setGeneros] = useState([]);

  //funcion para Eliminar canciones del listado
  const clickhandler = (id) => {
    return () => {
      console.log(id);
      setGeneros(generos.filter((genero) => genero.id_genero !== id));
    };
  };

  useEffect(() => {
    const getGeneros = async () => {
      setLoading(true);
      var response = await axios.get("http://localhost:3001/api/generos");
      setGeneros(response.data);
      setLoading(false);
    };

    getGeneros();
  }, []);

  return (
    <div className="p-4 p-md-5">
      <div className="d-flex justify-content-center">
        <h2>
          <u>Generos</u>
        </h2>
      </div>

      <div className="d-flex justify-content-center">
        <h4>
          Total: <b>{generos.length}</b>
        </h4>
      </div>
      <br />
      <div className="d-flex row justify-content-around">
        {loading ? (
          <p>Cargando....</p>
        ) : generos.length > 0 ? (
          generos.map((item) => (
            <GeneroCard
              key={item.id_genero}
              genero={item}
              eventClick={clickhandler}
            />
          ))
        ) : (
          <h1>Sin Generos</h1>
        )}
      </div>
    </div>
  );
};

export default GenerosPage;
