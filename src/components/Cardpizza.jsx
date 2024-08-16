import React from "react";

function Cardpizza({img, nombre, ingredientes, precio, count, setCount}) {

  function onPizza(e) {
    setCount(count+precio);
  }

  return (
    <div>
      <div className="card">
        <img src={img} className="card-img-top" alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text ingredientes">INGREDIENTES:<br></br><br></br>🍕 {ingredientes}</p>
          <p className="card-text precio">{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(precio)}</p>
          <div className="botones">
            <a href="#" className="btn btn-light btn-outline-dark">
              Ver Más 👀
            </a>
            <a href="#" className="btn btn-dark" onClick={e=>onPizza(e)}>
            🛒Añadir
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardpizza;
