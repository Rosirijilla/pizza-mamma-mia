import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
//import pizzas from "./pages/pizzas.json"

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
        <Routes>
          <Route path="/home" element={<Home pizzas={pizzas} total={total} setTotal={setTotal} />}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="/cart" element={<Cart pizzas={pizzas}/>}></Route>
          <Route path="/404" element={<NotFound/>}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
