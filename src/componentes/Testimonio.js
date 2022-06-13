import React from "react";
//import imagenes from "../imagenes/imagenes";
import "../style-sheets/Testimonio.css";

// importamos el archivo completo de json.
//import imagenes from "../imagenes/imagenes"

// importar imagenes una por una
import imagen1 from "../imagenes/digital-yen.png";

import imagen2 from "../imagenes/captura-libro.png";

import imagen3 from "../imagenes/drawing.png";

//  ESTE ES EL COMPONENTE

const images = require.context("../imagenes/", true); 

function Testimonio(props) {

  

  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        //src={images(`./${images}.png`)}
        src={`../imagenes/${props.imagen}.png`}
        alt="imagen-local-no-se-ve"
      />
      3
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          {" "}
          {props.nombre} de {props.pais}
        </p>
        <p className="cargo-testimonio">
          {" "}
          {props.cargo} en {props.empresa}
        </p>
        <p className="texto-testimonio"> "{props.testimonio}"</p>
      </div>
    </div>
  );
}

// aqui exportamos el componente:

export default Testimonio;
