import React from "react";
import { Link } from "react-router-dom";
import "../componentes-estilos.css";
import { useCart } from "../context/CartContext";
import { usePizzaContext } from "../context/PizzaContext";

function Cardpizza({ id }) {
  const { agregarPizza, eliminarPizza } = useCart();
  const { pizzas } = usePizzaContext();

  const pizza = pizzas.find((pizza) => pizza.id === id);

  if (!pizza) {
    return <p>Pizza no encontrada</p>;
  }

  const { img, name, ingredients, price } = pizza;

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

  return (
    <div>
      <div className="card">
        <img src={img} className="card-img-top" alt={`Imagen de ${name}`} />
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
            <Link
              to={`/pizza/${id}`}
              className="btn btn-light btn-outline-dark"
              /* onClick={(e) => e.preventDefault()} */
            >
              Ver Más 👀
            </Link>
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
