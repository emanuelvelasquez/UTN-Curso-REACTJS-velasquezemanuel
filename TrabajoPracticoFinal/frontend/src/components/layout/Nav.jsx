import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.css";

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand titleheader" to="/" id="headerTitle">
        Music 2.0
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" to="/">
            Pagina Principal
          </Link>
          <Link className="nav-link" to="/canciones">
            Canciones
          </Link>
          <Link className="nav-link" to="/artistas">
            Artistas
          </Link>
          <Link className="nav-link" to="/generos">
            Generos
          </Link>

          {/*  <div class="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/">
              Pagina Principal
            </Link>
            <a
              class="nav-link dropdown-toggle"
              href=""
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Variedades
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="">
                Ejemplo
              </a>
              <a class="dropdown-item" href="">
                Ejemplo
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="">
                Ejemplo
              </a>
            </div>
          </div>*/}
          <Link className="nav-link" to="/contacto">
            Contacto
          </Link>
          <Link className="nav-link" to="/acerca">
            Acerca De
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
