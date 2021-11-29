import React, { useState } from "react";
import CancionCard from "../components/CancionCard";

const CancionesPage = () => {
  const listaCanciones = [
    {
      id: 1,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 2,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 3,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 4,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 5,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 6,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 7,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 8,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 9,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 10,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 11,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 12,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 13,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 14,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 15,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 16,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 17,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 18,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 19,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
    {
      id: 20,
      titulo: "Vivir sin aire",
      artista: "Mana",
      año: 1992,
      genero: "Pop",
    },
  ];

  //inicializo el state con el listado de canciones
  const [canciones, setCanciones] = useState(listaCanciones);

  //funcion para Eliminar canciones del listado
  const clickhandler = (id) => {
    return () => {
      setCanciones(canciones.filter((cancion) => cancion.id !== id));
    };
  };

  return (
    <div className="p-4 p-md-5">
      <div className="d-flex justify-content-center">
        <h1>
          <u>Canciones</u>
        </h1>
      </div>

      <div className="d-flex justify-content-center">
        <h4>
          Total: <b>{canciones.length}</b>
        </h4>
      </div>
      <br />
      <div className="d-flex row justify-content-around">
        {canciones.length > 0 ? (
          canciones.map((item) => (
            <CancionCard
              key={item.id}
              cancion={item}
              eventClick={clickhandler}
            />
          ))
        ) : (
          <h1>Sin Canciones</h1>
        )}
      </div>
    </div>
  );
};

export default CancionesPage;
