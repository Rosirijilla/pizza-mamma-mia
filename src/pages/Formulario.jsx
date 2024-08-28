import { useState } from "react";

const Formulario = () => {
  // Estados del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  // Estado para los errores y éxito
  const [error, setError] = useState("");
  const [exito, setExito] = useState(false);

  // Función antes de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault();

    // Validación: Todos los campos son obligatorios
    if (!email.trim() || !password.trim() || !confirm.trim()) {
      setError("Todos los campos son obligatorios");
      setExito(false);
      return;
    }

    // Validación: La contraseña debe tener al menos 6 caracteres
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      setExito(false);
      return;
    }

    // Validación: La contraseña y la confirmación deben ser iguales
    if (password !== confirm) {
      setError("El password y la confirmación del password deben ser iguales");
      setExito(false);
      return;
    }

    // Si el formulario se envía correctamente, mostrar mensaje de éxito
    setError("");
    setExito(true);
    setEmail("");
    setPassword("");
    setConfirm("");
  };

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {exito && <p style={{ color: "green" }}>Formulario enviado con éxito</p>}

        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Correo"
            required
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
            required
          />
        </div>
        <div className="form-group mt-2">
          <input
            type="password"
            name="confirm"
            className="form-control"
            onChange={(e) => setConfirm(e.target.value)}
            value={confirm}
            placeholder="Confirmar Contraseña"
            required
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
