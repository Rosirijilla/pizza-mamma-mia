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
import CartProvider from "./context/CartContext";

const App = () => {
  const [pizzas, setPizzas] = useState([]); //Mostrar Api
  const [total, setTotal] = useState(0); //Sumar Navbar
  const [loading, setLoading] = useState(true); //Estado carga
  const [error, setError] = useState(null); //Estado error

  const obtenerInformacion = async () => {
    try {
      const respuesta = await fetch("http://localhost:5000/api/pizzas");
      if (!respuesta.ok) {
        throw new Error("Ups, hubo un error en la carga de los datos.");
      }
      const data = await respuesta.json();
      setPizzas(data);
    } catch (error) {
      setError(error.mensaje);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    obtenerInformacion();
  }, []);

  return (
    <>
      <CartProvider>
        <div className="d-flex flex-column">
          <Navbar/>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  pizzas={pizzas}
                  /* total={total} */
                  setTotal={setTotal}
                  loading={loading}
                  error={error}
                />
              }
            ></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/cart" element={<Cart pizzas={pizzas} />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </>
  );
};

export default App;
