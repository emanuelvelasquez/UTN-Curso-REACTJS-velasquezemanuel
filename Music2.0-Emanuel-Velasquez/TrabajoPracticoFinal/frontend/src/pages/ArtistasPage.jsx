import React, { useState, useEffect } from "react";
import ArtistaCard from "../components/ArtistaCard";
import axios from "axios";
const ArtistasPage = () => {
  //inicializo el state con el listado de canciones y loading
  const [loading, setLoading] = useState(false);
  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    const getArtistas = async () => {
      setLoading(true);
      var response = await axios.get("http://localhost:3001/api/artistas");
      setArtistas(response.data);
      setLoading(false);
    };

    getArtistas();
  }, []);

  return (
    <div className="p-4 p-md-5">
      <div className="d-flex justify-content-center">
        <h2>
          <u>Artistas</u>
        </h2>
      </div>

      <div className="d-flex justify-content-center">
        <h4>
          Total: <b>{artistas.length}</b>
        </h4>
      </div>
      <br />
      <div className="d-flex row justify-content-around">
        {loading ? (
          <p>Cargando....</p>
        ) : artistas.length > 0 ? (
          artistas.map((item) => (
            <ArtistaCard key={item.id_artista} artista={item} />
          ))
        ) : (
          <h1>Sin Artistas</h1>
        )}
      </div>
    </div>
  );
};

export default ArtistasPage;
