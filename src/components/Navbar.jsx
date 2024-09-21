import React from "react";
import "../componentes-estilos.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faLock,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
  const { totalPagar } = useCart();
  const {token, logout} = useUserContext();
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                aria-current="page"
              >
                <FontAwesomeIcon className="icon" icon={faPizzaSlice} />
                Home
              </NavLink>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                  >
                    <FontAwesomeIcon className="icon" icon={faUser} />
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button onClick={logout} className="btn btn-secondary">
                    <FontAwesomeIcon className="icon" icon={faLock} />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                  >
                    <FontAwesomeIcon className="icon" icon={faLock} />
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                  >
                    <FontAwesomeIcon className="icon" icon={faLock} />
                    Register
                  </NavLink>
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
