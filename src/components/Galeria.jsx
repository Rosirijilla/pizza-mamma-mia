import React from "react";
import Cardpizza from "./Cardpizza";
import data from "./pizzas.json";

function Galeria({count, setCount}) {
  return (
    <div className="container mt-5 mb-5 contenedor-cartas">
      <div className="row">
        {data.map((pizza) => (
          <div key={pizza.id} className="col-sm-12 col-md-6 col-lg-4 mt-5 mb-sm-3">
            <Cardpizza
              img={pizza.img}
              id={pizza.id}
              desc={pizza.desc}
              name={pizza.name} 
              ingredients={pizza.ingredients}
              price={pizza.price} 
              count={count}
              setCount={setCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;
