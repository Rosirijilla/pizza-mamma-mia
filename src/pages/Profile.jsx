import React from "react";
import "../componentes-estilos.css";

const Profile = () => {
  return (
    <div>
      <h1>Tu Perfil</h1>
      <div className="datos-perfil">
        <img
          className="imag-random"
          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
          alt="Persona Random"
        />
        <span>
          <b>Correo:</b>juanito_xd@gmail.com
        </span>
        <span><b>Creación cuenta</b>00/00/00</span>
      </div>
      <button>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;
