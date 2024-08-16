import React from "react";
import Cardpizza from "./Cardpizza";
import data from "./info.json";

function Galeria({count, setCount}) {
  return (
    <div className="container mt-5 mb-5 contenedor-cartas">
      <div className="row">
        {data.map((data, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 mt-5 mb-sm-3">
            <Cardpizza
              img={data.img}
              nombre={data.nombre}
              ingredientes={data.ingredientes}
              precio={data.precio}
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
