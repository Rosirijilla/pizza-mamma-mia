import React from "react";
import "./componentes-estilos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice, faLock, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";


const Navbar = ({count}) => {
  const total = count;
  const token = false;
  return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pizzería Mamma Mia!
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                 <FontAwesomeIcon className="icon" icon={faPizzaSlice}/>
                 Home
                </a>
              </li>
              {token ? (
                <>
                <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon className="icon" icon={faUser}/>
                  Profile
                </a>
                 </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon className="icon" icon={faLock}/>
                  Logout
                </a>
                </li>
                </>
              ):(
                <>
                <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon className="icon" icon={faLock}/>
                  Login
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon className="icon" icon={faLock}/>
                  Register
                </a>
                </li>
                </>
              )}
            </ul>
            <span className="navbar-text text-info">
            <FontAwesomeIcon className="icon icon-compra" icon={faCartShopping} /> Total: {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(total)}
            </span>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
