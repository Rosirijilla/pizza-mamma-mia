import React from "react";

function Cardpizza(props) {
  return (
    <div>
      <div className="card">
        <img src={props.img} className="card-img-top" alt={props.nombre} />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text ingredientes">INGREDIENTES:<br></br><br></br>🍕 {props.ingredientes}</p>
          <p className="card-text precio">{props.precio}</p>
          <div className="botones">
            <a href="#" className="btn btn-light btn-outline-dark">
              Ver Más 👀
            </a>
            <a href="#" className="btn btn-dark">
            🛒Añadir
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardpizza;
