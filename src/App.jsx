import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
//import Cart from "./components/Cart";
//import Register from "./components/Register";
//import Login from "./components/Login";
//import pizzas from "./components/pizzas.json"

const App = () => {
  const [pizzas, setPizzas] = useState([]); //Mostrar Api
  const [total, setTotal] = useState(0); //Sumar Navbar

  const obtenerInformacion = async () => {
    const respuesta = await fetch("http://localhost:5000/api/pizzas");
    const data = await respuesta.json();
    setPizzas(data);
  };
  useEffect(() => {
    obtenerInformacion();
  }, []);

  return (
    <>
      <div>
        <Navbar count={total} />
        {/* <Cart pizzas={pizzas}/> */}
        <Home pizzas={pizzas} total={total} setTotal={setTotal} />
        {/* <Register/> */}
        {/* <Login/> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
