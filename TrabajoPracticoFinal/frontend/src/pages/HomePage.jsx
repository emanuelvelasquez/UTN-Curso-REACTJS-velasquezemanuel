import React from "react";
import imgHome from "../images/home.png";
import "../styles/homePage.css";

const HomePage = (props) => {
  return (
    <>
      <div className="jumbotron shadow-lg" id="jumbotronPrincipal">
        <div className="row justify-content-center">
          <div className="col-md-10 col-sm-12">
            <div className="d-flex justify-content-center justify-content-md-start">
              <h2 className="display-5">Descripcion</h2>
            </div>
            <p>
              Proin non elit eget enim ullamcorper rutrum ut at nunc. Duis sit
              amet auctor eros. Sed at vestibulum est, accumsan posuere purus.
              Duis facilisis imperdiet lorem vel venenatis. Donec commodo orci
              in justo dictum tristique. Pellentesque in enim elementum,
              dignissim augue eget, lobortis orci. Pellentesque at urna quam.
              Fusce commodo mi non velit tempus, at rutrum ante vehicula.
              Aliquam posuere ligula non pharetra porttitor. Vivamus viverra nec
              elit at consectetur.
            </p>
          </div>
          <div className="col-md-2 col-sm-12 d-flex justify-content-center">
            <img src={imgHome} className="img-fluid" alt="" id="imgHome" />
          </div>
        </div>
      </div>
      <hr className="mt-1 mb-4" />
      <div className="row d-flex justify-content-around" id="cardSecu">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-header d-flex justify-content-center">
              <h2>Titulo</h2>
            </div>
            <div className="card-body">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-header d-flex justify-content-center">
              <h2>Titulo</h2>
            </div>
            <div className="card-body">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-header d-flex justify-content-center">
              <h2>Titulo</h2>
            </div>
            <div className="card-body">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-header d-flex justify-content-center">
              <h2>Titulo</h2>
            </div>
            <div className="card-body">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-header d-flex justify-content-center">
              <h2>Titulo</h2>
            </div>
            <div className="card-body">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-header d-flex justify-content-center">
              <h2>Titulo</h2>
            </div>
            <div className="card-body">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
