import React from "react";
import { Link } from "react-router-dom";

import ImageCard from "../components/ImageCard";

const GeneroCard = ({ genero, eventClick }) => {
  const { id_genero, nombre, descripcion } = genero;

  return (
    <div className="mb-3 col-12 col-sm-4 col-md-4 col-lg-4  p-2 d-md-flex align-items-stretch">
      <div className="card text-center p-0 p-md-3 flex-column ">
        <div className="card-body">
          <h5 className="card-title">
            <b>{nombre}</b>
          </h5>
          <ImageCard id_name="disk_tpviao" />
          <p className="card-text">{descripcion}</p>
          <div className="card-button">
            {/* <button className="btn btn-dark">Ver info</button> */}
            <Link
              className="btn btn-info"
              to={"/canciones/genero/" + id_genero}
            >
              Ver Canciones
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneroCard;
