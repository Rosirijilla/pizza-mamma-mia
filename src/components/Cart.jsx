import React, { useState } from "react";

const Cart = ({ pizzas }) => {
  const [carrito, setCarrito] = useState(
    pizzas.map((pizza) => ({
      ...pizza,
      count: 1
    }))
  );

  let total = carrito.reduce((acumulador, pizza) => acumulador + pizza.count, 0);

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
    <div>
      <h5>Detalles del pedido:</h5>
      <h2>Cantidad de pizzas: {total}</h2>
      <h2>Total a pagar: {totalPagar}</h2>
      <div className="p3">
        {carrito.map((pizza) => {
          const cantidad = obtenerCantidad(pizza);
          return cantidad > 0 ? (
            <div className="d-flex" key={pizza.id}>
              <div>
                <img src={pizza.img} className="w-25" alt={pizza.name} />
                <p>{pizza.name}</p>
                <p>Cantidad: {cantidad}</p>
              </div>
              <div>
                <button className="btn btn-success" onClick={() => incrementar(pizza)}>
                  +
                </button>
                <button className="btn btn-danger" onClick={() => decrementar(pizza)}>
                  -
                </button>
              </div>
            </div>
          ) : null;
        })}
      </div>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;
