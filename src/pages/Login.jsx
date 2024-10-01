import React, { useEffect } from "react";
import Formulario2 from "./Formulario2";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const { token, login } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleLogin = async (credenciales) => {
    await login(credenciales);
  };

  return (
    <div className="vh-100 bg-secondary p-5 d-flex justify-content-center aling-items-center">
      <div className="bg-white p-5 rounded shadow">
        <h1 className="mb-5">Ingresa a tu Cuenta</h1>
        <Formulario2 setToken={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
