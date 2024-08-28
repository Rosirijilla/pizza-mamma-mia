import { useState } from "react";

const Formulario = () => {
  // Estados del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Estado para los errores y éxito
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);
  //Función antes de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault();
    //Validación;
    if (!email.trim() || !password.trim()) {
      setError(true);
      setExito(false)
      return;
    }
    setError(false);
    setExito(true);

    setTimeout(()=>{
      setExito("");
      setEmail("");
      setPassword("");
    },5000
    );
  };
  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        {error ? <p style={{ color: "red" }}>Todos los campos son obligatorios</p> : null}
        {exito && <p style={{ color: "green" }}>Ya Ingresaste!</p>}

        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Correo"
            
          />
        </div>
        <div className="form-group mt-2">
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Contraseña"
            
          />
        </div>
        <button type="submit" className="btn btn-dark mt-3">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Formulario;
