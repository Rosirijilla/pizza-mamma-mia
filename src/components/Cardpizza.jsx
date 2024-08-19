import React from "react";
import "./componentes-estilos.css";

function Cardpizza({img, name, desc, ingredients, price, count, setCount}) {

  function agregar() {
    setCount(count + price);
  }

  function quitar() {
    if (count > 0) {
      setCount(count - price);
    }
  }

  function ingredientesX(ingredients) {
    return (
      <ul>
        {ingredients.map((producto, index) => (
          <li className="listado" key={index}>{producto}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <div className="card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text ingredientes">INGREDIENTES 🍕: {ingredientesX(ingredients)}</p>
          <p className="card-text precio">
            {new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(price)}
          </p>
          <div className="botones">
            <a href="#" className="btn btn-light btn-outline-dark" onClick={(e) => e.preventDefault()}>
              Ver Más 👀
            </a>
            <a href="#" className="btn btn-dark" onClick={(e) => { e.preventDefault(); agregar(); }}>
              🛒Añadir
            </a>
            <a href="#" className="btn btn-danger" onClick={(e) => { e.preventDefault(); quitar(); }}>
              🛒Quitar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardpizza;
