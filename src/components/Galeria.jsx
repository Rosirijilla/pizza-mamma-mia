import React from "react";
import Cardpizza from "./Cardpizza";
import napolitana from "../assets/img/napolitana.png";
import espanola from "../assets/img/espanola.png";
import peperoni from "../assets/img/peperoni.png";

function Galeria() {
  return (
    <div className="container mt-5 mb-5 contenedor-cartas">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 mt-5 mb-sm-3">
          <Cardpizza
            img={napolitana}
            nombre="Pizza Napolitana"
            ingredientes="mozzarella, tomates, jamón, orégano"
            precio="$5.950"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 mt-5 mb-sm-3">
          <Cardpizza
            img={espanola}
            nombre="Pizza Española"
            ingredientes="mozzarella, gorgonzola, parmesano, provolone"
            precio="$6.950"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 mt-5 mb-sm-3">
          <Cardpizza
            img={peperoni}
            nombre="Pizza Pepperoni"
            ingredientes="mozzarella, pepperoni, orégano"
            precio="$6.950"
          />
        </div>
      </div>
    </div>
  );
}

export default Galeria;
