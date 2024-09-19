import React, { useEffect } from "react";
import Formulario2 from "./Formulario2";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const { token } = useUserContext();
  const navigate = useNavigate();

  useEffect(()=>{
    if (token){
      navigate ("/");
    }
  }, [token, navigate]);

  return (
    <div className="container vh-100 mt-5">
      <div className="row">
        <div className="col-12 col-md-6 col-sm-3"></div>
        <h1>Ingresa a tu Cuenta</h1>
        <Formulario2 />
      </div>
    </div>
  );
};

export default Login;
