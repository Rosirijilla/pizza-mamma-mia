import React from "react";
import "../componentes-estilos.css";
import { useCart } from "../context/CartContext";

function Cardpizza({ id, img, name, ingredients, price }) {
  const { agregarPizza, eliminarPizza } = useCart();

  function ingredientesX(ingredients) {
    return (
      <ul>
        {ingredients.map((producto, index) => (
          <li className="listado" key={index}>
            {producto}
          </li>
        ))}
      </ul>
    );
  }

  const pizza = { id, img, name, price };

  return (
    <div>
      <div className="card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text ingredientes">
            INGREDIENTES 🍕: {ingredientesX(ingredients)}
          </p>
          <p className="card-text precio">
            {new Intl.NumberFormat("es-CL", {
              currency: "CLP",
              style: "currency",
            }).format(price)}
          </p>
          <div className="botones">
            <a
              href="#"
              className="btn btn-light btn-outline-dark"
              onClick={(e) => e.preventDefault()}
            >
              Ver Más 👀
            </a>
            <a
              href="#"
              className="btn btn-dark"
              onClick={(e) => {
                e.preventDefault();
                agregarPizza(pizza);
              }}
            >
              🛒Añadir
            </a>
            <a
              href="#"
              className="btn btn-danger"
              onClick={(e) => {
                e.preventDefault();
                eliminarPizza(id);
              }}
            >
              🛒Quitar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardpizza;
