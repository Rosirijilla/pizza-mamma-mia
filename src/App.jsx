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
  const [count, setCount] = useState(0);

  const obtenerInformacion = async () => {
    const respuesta = await fetch("http://localhost:5000/api/pizzas");
    const data = await respuesta.json();
    setCount(data);
    console.log(data)
  };
  useEffect(() => {
    obtenerInformacion();
  }, []);

  return (
    <>
      <div>
        <Navbar count={count} />
        {/* <Cart pizzas={pizzas}/> */}
        <Home count={count} setCount={setCount} />
        {/* <Register/> */}
        {/* <Login/> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
