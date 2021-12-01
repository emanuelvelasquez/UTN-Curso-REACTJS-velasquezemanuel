import React, { useState, useEffect } from "react";
import CancionCard from "../components/CancionCard";
import axios from "axios";
import { useParams } from "react-router";
import { Button, Modal, ButtonGroup } from "react-bootstrap";
import { send } from "emailjs-com";

const CancionesPage = () => {
  //inicializo el state con el listado de canciones y loading
  const [loading, setLoading] = useState(false);
  const [canciones, setCanciones] = useState([]);
  const [cancionesEnviar, setCancionesEnviar] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  const form = {
    toMail: "",
    fromName: "",
    to_name: "",
  };
  //funcion para Eliminar canciones del listado
  const clickhandler = (id) => {
    return () => {
      setCancionesEnviar(
        cancionesEnviar.filter((cancion) => cancion === id).length > 0
          ? cancionesEnviar.filter((cancion) => cancion !== id)
          : [...cancionesEnviar, id]
      );
    };
  };

  const { filtro, id } = useParams();

  useEffect(() => {
    const getCanciones = async () => {
      setLoading(true);
      var url = filtro ? `/${filtro}/${id}` : "";
      var response = await axios.get(
        `http://localhost:3001/api/canciones${url}`
      );
      setCanciones(response.data);
      setLoading(false);
    };

    getCanciones();
  }, []);

  function concatenaCancion(cancion) {
    return `Cancion: ${cancion.nombreCancion}, Artista: ${cancion.nombreArtista}`;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    var message = cancionesEnviar
      .map(
        (id) =>
          `Cancion:${
            canciones.find((cancion) => cancion.id_cancion === id).nombreCancion
          }, Artista: ${
            canciones.find((cancion) => cancion.id_cancion === id).nombreArtista
          }`
      )
      .join(" - ");
    console.log(message);
    console.log({
      ...form,
      message: message,
      totalCanciones: cancionesEnviar.length,
    });

    send(
      "service_at45jod",
      "template_1wzu61o",
      { ...form, message: message, totalCanciones: cancionesEnviar.length },
      "user_5854nBZNk1O7h06EwVvzO"
    )
      .then((response) => {
        alert("Correo enviado con Exito!!");
        document.getElementById("formMail").reset();
        setCancionesEnviar([]);
        setModalShow(false);
      })
      .catch((err) => {
        alert(
          "Fallo el envio de Correo!! Verifique que completo todo los campos requeridos"
        );
      });
  };

  const handleChange = (e) => {
    form[e.target.name] = e.target.value;
  };

  function EnvioCorreosModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Mi Recomendaiones
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="form-group">
          <h4>Listado de Canciones a Enviar</h4>
          <div style={{ height: "15em", overflow: "auto" }}>
            {cancionesEnviar.map((item) => (
              <h5>
                {concatenaCancion(
                  canciones.find((cancion) => cancion.id_cancion === item)
                )}
              </h5>
            ))}
          </div>
          <h5 className="mt-1">
            Canctidad de Canciones: <b>{cancionesEnviar.length}</b>
          </h5>
          <hr></hr>
          <form onSubmit={onSubmit} id="formMail">
            <div className="form-group container">
              <h5 for="exampleInputEmail1">Nombre Remitente</h5>
              <input
                name="fromName"
                type="text"
                className="form-control form-control-sm"
                aria-describedby="emailHelp"
                placeholder="Correo del destinatario"
                onChange={handleChange}
                require
              />
            </div>

            <div className="form-group container">
              <h5 for="exampleInputEmail1">Email Destinatario</h5>
              <input
                name="toMail"
                type="email"
                className="form-control form-control-sm"
                aria-describedby="emailHelp"
                placeholder="Correo del destinatario"
                onChange={handleChange}
                require
              />
            </div>
            <div className="form-group container">
              <h5 for="exampleInputPassword1">Nombre Destinatario</h5>
              <input
                name="to_name"
                type="text"
                className="form-control form-control-sm"
                placeholder="Nombre del destinatario"
                onChange={handleChange}
                require
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-lg">
                Enviar
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button className="col-3" onClick={props.onHide}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <div className="p-4 p-md-5">
        <div
          className="sticky-top bg-white"
          style={{
            zIndex: "1050",
          }}
        >
          <div className="d-flex justify-content-center">
            <h2>
              <u>
                Canciones
                {filtro && canciones.length > 0
                  ? `- ${
                      window.location.pathname.indexOf("artista") > 0
                        ? canciones[0].nombreArtista
                        : canciones[0].nombreGenero
                    }`
                  : ""}
              </u>
            </h2>
          </div>
          <div className="row d-flex justify-content-center  ">
            <div className="col-sm-12 col-md-6 text-center">
              <h4>
                Total: <b>{canciones.length}</b>
              </h4>
              {filtro && (
                <a className="btn btn-dark" href="/canciones">
                  Todas las Canciones
                </a>
              )}
            </div>
            <div className="col-sm-12 col-md-6 text-center">
              <h4 className="col-sm-12 col-md-6 d-inline">
                Listado para Enviar: <b>{cancionesEnviar.length} | </b>
                <ButtonGroup className="mb-2">
                  <Button
                    disabled={cancionesEnviar.length > 0 ? false : true}
                    variant="dark"
                    onClick={() => setModalShow(true)}
                  >
                    Enviar por Correo
                  </Button>
                  <Button
                    disabled={cancionesEnviar.length > 0 ? false : true}
                    variant="danger"
                    onClick={() => setCancionesEnviar([])}
                  >
                    Eliminar Listado
                  </Button>
                </ButtonGroup>
              </h4>
            </div>
          </div>
          <br />
        </div>
        <br />
        <div className="d-flex row justify-content-around">
          {loading ? (
            <p>Cargando....</p>
          ) : canciones.length > 0 ? (
            canciones.map((item) => (
              <CancionCard
                key={item.id_cancion}
                cancion={{
                  ...item,
                  listado:
                    cancionesEnviar.filter(
                      (cancion) => cancion === item.id_cancion
                    ).length > 0,
                }}
                eventClick={clickhandler}
              />
            ))
          ) : (
            <h1>Sin Canciones</h1>
          )}
        </div>
      </div>

      <EnvioCorreosModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default CancionesPage;
