import { useState } from "react";
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
import { PizzaProvider } from "./context/PizzaContext";

const App = () => {

  return (
    <>
      <PizzaProvider>
        <CartProvider>
          <div className="d-flex flex-column">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/logout" element={<Logout />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </PizzaProvider>
    </>
  );
};

export default App;
