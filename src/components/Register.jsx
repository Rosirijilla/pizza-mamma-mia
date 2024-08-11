import { useState } from 'react'
import Formulario from './Formulario'
import Navbar from './Navbar'
import Footer from './footer'

function Register() {
  return (
    <div>
        <Navbar/>
        <h1>Registra tu Cuenta</h1>
        <Formulario/>
        <Footer/>
    </div>
  )
}

export default Register
