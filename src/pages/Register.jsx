import React from "react";
import Formulario from "./Formulario";

function Register() {
  return (
    <div className="container vh-100 mt-5">
      <div className="row">
        <div className="col-12 col-md-6 col-sm-3">
          <h1>Registra tu Cuenta</h1>
          <Formulario />
        </div>
      </div>
    </div>
  );
}

export default Register;
