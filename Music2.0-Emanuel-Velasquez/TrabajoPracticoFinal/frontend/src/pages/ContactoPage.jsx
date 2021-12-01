import React, { useState } from "react";
import { send } from "emailjs-com";

const Contacto = () => {
  const [form, setForm] = useState({
    toMail: "",
    fromName: "",
    message: "",
  });

  const [enviado, setEnviado] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_at45jod",
      "template_sesroum",
      form,
      "user_5854nBZNk1O7h06EwVvzO"
    )
      .then((response) => {
        alert("Correo enviado con Exito!!");
        setForm({
          toMail: "",
          fromName: "",
          message: "",
        });
        document.getElementById("formMail").reset();
      })
      .catch((err) => {
        alert(
          "Fallo el envio de Correo!! Verifique que completo todo los campos requeridos"
        );
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="row">
      <div className="col-12 text-center">
        {enviado ? <h2>Correo enviado con exito!!</h2> : ""}
      </div>
      <div className="col-md-5 offset-md-1 col-sm-12 mb-5">
        <form className="" id="formMail" onSubmit={onSubmit}>
          <h2>Contacto</h2>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                name="toMail"
                placeholder="xxxxxx@xxxxxx.xxx"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label for="inputAddress2">Nombre</label>
            <input
              type="text"
              className="form-control"
              name="fromName"
              id="inputAddress2"
              placeholder="Nombre completo"
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <div class="form-group col-12">
              <label for="exampleFormControlTextarea1">Mensaje</label>
              <textarea
                class="form-control"
                name="message"
                id="exampleFormControlTextarea1"
                rows="4"
                onChange={handleChange}
              ></textarea>
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
            <b>Mail:</b> emanuel2318@gmail.com
          </li>
          <li>
            <b>Telefono:</b> (9999)-999999999
          </li>
          <li>
            <b>Dirección:</b> Retiro, 951
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacto;
