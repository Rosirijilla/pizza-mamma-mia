import React from "react";
import "../componentes-estilos.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faLock,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { totalPagar } = useCart();
  const token = false;
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Pizzería Mamma Mia!
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                <FontAwesomeIcon className="icon" icon={faPizzaSlice} />
                Home
              </Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    <FontAwesomeIcon className="icon" icon={faUser} />
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/logout" className="nav-link">
                    <FontAwesomeIcon className="icon" icon={faLock} />
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    <FontAwesomeIcon className="icon" icon={faLock} />
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    <FontAwesomeIcon className="icon" icon={faLock} />
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          <Link to="/cart">
            <span className="navbar-text text-info">
              <FontAwesomeIcon
                className="icon icon-compra"
                icon={faCartShopping}
              />{" "}
              Total:{" "}
              {new Intl.NumberFormat("es-CL", {
                currency: "CLP",
                style: "currency",
              }).format(totalPagar)}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
