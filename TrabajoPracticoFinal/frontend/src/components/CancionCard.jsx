import React from "react";
import ImageCard from "../components/ImageCard";
const CancionCard = ({ cancion, eventClick }) => {
  const {
    id_cancion,
    nombreCancion,
    nombreArtista,
    nombreGenero,
    id_img,
    listado,
  } = cancion;
  return (
    <div className="mb-3 col-12 col-sm-4 col-md-4 col-lg-4  p-2 align-items-stretch">
      <div className="card text-center p-0 p-md-3 flex-column ">
        <div className="card-body">
          <h5 className="card-title">
            <b>{nombreCancion}</b>
          </h5>
          <ImageCard id_name={id_img} />
          <p className="card-text">{`${nombreArtista} - ${nombreGenero}`}</p>
          <div className="card-button">
            {listado ? (
              <button
                className="btn btn-danger"
                onClick={eventClick(id_cancion)}
              >
                Quitar de Lista
              </button>
            ) : (
              <button className="btn btn-info" onClick={eventClick(id_cancion)}>
                Sumar a Lista
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancionCard;
