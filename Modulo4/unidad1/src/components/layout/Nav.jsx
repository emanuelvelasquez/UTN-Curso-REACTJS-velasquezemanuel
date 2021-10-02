import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#2b2b2b" }}
    >
      <Link className="navbar-brand titleheader" to="/">
        Gaming-PC
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link className="nav-link active" to="/">
            Pagina Principal
          </Link>
          <a class="nav-link disabled" href="juegos.html">
            Juegos
          </a>
          <a class="nav-link disabled" href="galeria.html">
            Galeria
          </a>

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
