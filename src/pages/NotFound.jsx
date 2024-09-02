import React from 'react'
import "../componentes-estilos.css";

function NotFound() {
  return (
    <div className="fondo-404">
      <h1 className='titulo-404'>Oh no, algo salió mal :(</h1>
      <span className='explicacion-404'>Parece que el dueño de la página ya se durmió, tendrás que esperar a que se despierte.</span>
    </div>
  )
}

export default NotFound