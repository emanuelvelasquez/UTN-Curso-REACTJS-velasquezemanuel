import React from "react";

const Contacto = () => {
  return (
    <div className="row">
      <div className="col-md-5 offset-md-1 col-sm-12 mb-5">
        <form className="">
          <h2>Contacto</h2>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="xxxxxx@xxxxxx.xxx"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Apellido</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Apellido Completo"
            />
          </div>
          <div className="form-group">
            <label for="inputAddress2">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Nombre completo"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">Celular</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Sin 0 ni 15"
              />
            </div>
            <div className="form-group col-md-2">
              <label for="inputZip">CP</label>
              <input
                type="text"
                className="form-control"
                id="inputZip"
                placeholder="99999"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-lg">
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-5 offset-md-1 col-sm-12">
        <h2>Informacion de Contacto</h2>
        <ul>
          <li>
            <b>Mail:</b> xxxxxxxx@xxxxxx.com
          </li>
          <li>
            <b>Telefono:</b> (9999)-999999999
          </li>
          <li>
            <b>Dirección:</b> xxxxxxxxxxx, xxxxxxxxxxxx
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacto;
