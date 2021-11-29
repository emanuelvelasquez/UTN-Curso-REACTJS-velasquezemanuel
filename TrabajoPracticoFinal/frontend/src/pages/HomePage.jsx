import React from "react";
import imgHome from "../images/home.png";
import imgMusic from "../images/music.png";
import imgArtist from "../images/artist.png";
import imgGender from "../images/gender.png";
import { Link } from "react-router-dom";
import "../styles/homePage.css";

const HomePage = (props) => {
  return (
    <>
      <br />
      <div className="jumbotron shadow-lg" id="jumbotronPrincipal">
        <div className="row justify-content-center ">
          <div className="col-md-10 col-sm-12">
            <div className="d-flex justify-content-center justify-content-md-start">
              <h2 className="display-5">Descripcion</h2>
            </div>
            <p>
              Esta aplicacion presenta al Usuario un listado de canciones que
              tienen relacionado un Artista y un Genero.
            </p>
            <p>
              Tambien podra enviar un Listado con las canciones seleccionas y
              sugeridas por usted, a traves de correo.
            </p>
          </div>
          <div className="col-md-2 col-sm-12 d-flex justify-content-center">
            <img src={imgHome} className="img-fluid" alt="" id="imgHome" />
          </div>
        </div>
      </div>
      <hr className="mb-4" />
      <div className="row d-flex justify-content-around" id="cardSecu">
        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card mb-4 shadow-sm">
            <div className="card-header d-flex justify-content-center">
              <h3 className="text-white"> Canciones</h3>
            </div>
            <div
              className="card-body d-flex align-items-center"
              style={{ backgroundColor: "#fff" }}
            >
              <img src={imgMusic} alt="" className="img-fluid" />
            </div>
            <Link className="btn btn-dark" to="/canciones">
              Ver Listado
            </Link>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card mb-4 shadow-sm">
            <div className="card-header d-flex justify-content-center">
              <h3 className="text-white">Artistas</h3>
            </div>
            <div
              className="card-body d-flex align-items-center"
              style={{ backgroundColor: "#fff" }}
            >
              <img src={imgArtist} alt="" className="img-fluid" />
            </div>
            <Link className="btn btn-dark" to="/artistas">
              Ver Listado
            </Link>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card mb-4 shadow-sm">
            <div className="card-header d-flex justify-content-center">
              <h3 className="text-white">Generos</h3>
            </div>
            <div
              className="card-body d-flex align-items-center"
              style={{ backgroundColor: "#fff" }}
            >
              <img src={imgGender} alt="" className="img-fluid" />
            </div>
            <Link className="btn btn-dark" to="/generos">
              Ver Listado
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
