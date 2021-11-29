import React from "react";
import diskPng from "../images/disk.png";

const CancionCard = ({ cancion, eventClick }) => {
  const { id, titulo, artista, año, genero } = cancion;

  return (
    <div className="mb-3 col-12 col-sm-4 col-md-2 col-lg-2  p-2">
      <div className="card text-center p-0 p-md-3 flex-row flex-md-column ">
        <div className="d-flex justify-content-center align-self-center col-4 col-md-12 h-100 h-md-75 p-0">
          <img src={diskPng} className="w-75" alt="disk" />
        </div>
        <div className="card-body col-8 col-md-12">
          <h4 className="card-title">
            <b>{titulo}</b>
          </h4>
          <p className="card-text">{`${artista}, ${año} y ${genero}, ${id}`}</p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-dark">Ver info</button>
            <button className="btn btn-danger" onClick={eventClick(id)}>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancionCard;
