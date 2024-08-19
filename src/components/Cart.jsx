import React, { useState } from "react";
import "./componentes-estilos.css";

const Cart = ({ pizzas }) => {
  const [carrito, setCarrito] = useState(
    pizzas.map((pizza) => ({
      ...pizza,
      count: 1,
    }))
  );

  let total = carrito.reduce(
    (acumulador, pizza) => acumulador + pizza.count,
    0
  );

  let totalPagar = carrito.reduce(
    (acumulador, pizza) => acumulador + pizza.price * pizza.count,
    0
  );

  const obtenerCantidad = (pizza) => {
    const itemEnCarrito = carrito.find((item) => item.id === pizza.id);
    return itemEnCarrito ? itemEnCarrito.count : 0;
  };

  const incrementar = (pizza) => {
    setCarrito((prevCarrito) => {
      const coincidencia = prevCarrito.find((item) => item.id === pizza.id);

      if (coincidencia) {
        return prevCarrito.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCarrito, { ...pizza, count: 1 }];
      }
    });
  };

  const decrementar = (pizza) => {
    setCarrito((prevCarrito) => {
      const coincidencia = prevCarrito.find((item) => item.id === pizza.id);

      if (coincidencia) {
        if (coincidencia.count > 1) {
          return prevCarrito.map((item) =>
            item.id === pizza.id ? { ...item, count: item.count - 1 } : item
          );
        } else {
          return prevCarrito.filter((item) => item.id !== pizza.id);
        }
      }
      return prevCarrito;
    });
  };

  return (
    <div className="container contenedor-carro mt-4">
      <div className="row">
        <div className="col-12">
          <span className="fw-bold">Detalles del pedido:</span>
        </div>
      </div>
      <div className="row contenedor-contadores mt-3">
        <div className="col-12">
          <div className="contadores d-flex flex-column flex-md-row justify-content-between gap-1">
            <span className="contador fw-bold shadow-sm">
              Cantidad de pizzas: {total}
            </span>
            <span className="contador fw-bold shadow-sm">
              Total a pagar:{" "}
              {new Intl.NumberFormat("es-CL", {
                currency: "CLP",
                style: "currency",
              }).format(totalPagar)}
            </span>
          </div>
        </div>
      </div>
      <div className="row pizzas-carro mt-4">
        {carrito.map((pizza) => {
          const cantidad = obtenerCantidad(pizza);
          return cantidad > 0 ? (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-3" key={pizza.id}>
              <div className="d-flex align-items-center h-100 border p-3">
                <div className="contenido-pizza flex-grow-1">
                  <img
                    src={pizza.img}
                    className="img-fluid img-tamaño mb-2"
                    alt={pizza.name}
                  />
                  <div className="d-flex justify-content-around align-items-center">
                    <p className="mb-1 fw-semibold">{pizza.name}</p>
                    <p className="mb-1 fw-semibold">Cantidad: {cantidad}</p>
                    <div className="d-flex align-items-center justify-content-center gap-1">
                      <button
                        className="btn btn-success"
                        onClick={() => incrementar(pizza)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => decrementar(pizza)}
                      >-
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
      <div className="row mt-4">
        <div className="col-12 text-center">
          <button className="btn btn-primary btn-lg mb-5 pagar">Pagar 💳</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
