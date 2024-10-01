import React, { useEffect } from "react";
import Formulario from "./Formulario";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

function Register() {
  const { token, register } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleRegister = async (userData) => {
    await register(userData);
  };

  return (
    <div className="container vh-100 mt-5">
      <div className="row">
        <div className="col-12 col-md-6 col-sm-3">
          <h1>Registra tu Cuenta</h1>
          <Formulario onsubmit={handleRegister} />
        </div>
      </div>
    </div>
  );
}

export default Register;
