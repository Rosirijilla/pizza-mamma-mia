import React from "react";

function Cardpizza({img, nombre, ingredientes, precio, count, setCount}) {

  function agregar(e) {
    setCount(count+precio);
  }

  function quitar(e) {
    setCount(count-precio);
  }

  function ingredientesX(ingredientes){
    let ingredientes2=ingredientes;
    console.log(typeof(ingredientes2));
    ingredientes2 = ingredientes.split(",");
    console.log(ingredientes2[1]);

    return(
      <ul>
        {ingredientes2.map((producto, index)=>(
          <li key={index}>{producto}</li>
        ))}
      </ul>
    )
  }

  

  return (
    <div>
      <div className="card">
        <img src={img} className="card-img-top" alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text ingredientes">INGREDIENTES:<br></br><br></br>🍕 {ingredientesX(ingredientes)}</p>
          <p className="card-text precio">{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(precio)}</p>
          <div className="botones">
            <a href="#" className="btn btn-light btn-outline-dark">
              Ver Más 👀
            </a>
            <a href="#" className="btn btn-dark" onClick={e=>agregar(e)}>
            🛒Añadir
            </a>
            <a href="#" className="btn btn-danger" onClick={e=>quitar(e)}>
            🛒Quitar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardpizza;
