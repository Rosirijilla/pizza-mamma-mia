import React from "react";
import Cardpizza from "./Cardpizza";
/* import data from "../pages/pizzas.json"; */

function Galeria({ pizzas, total, setTotal, loading, error }) {
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (pizzas.lenght === 0) return <p>No hay pizzas disponibles :(</p>;

  return (
    <div className="container mt-5 mb-5 contenedor-cartas">
      <div className="row">
        {pizzas.map((pizza) => (
          <div
            key={pizza.id}
            className="col-sm-12 col-md-6 col-lg-4 mt-5 mb-sm-3"
          >
            <Cardpizza
              img={pizza.img}
              id={pizza.id}
              desc={pizza.desc}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              total={total}
              setTotal={setTotal}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;
