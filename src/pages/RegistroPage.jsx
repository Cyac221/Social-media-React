import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import Navbar from '../Components/layout/Navbar'
import Footer from '../Components/layout/Footer'

export default function RegistroPage() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    password: '',
    fechaNacimiento: '1990-01-01',
    genero: ''
  })
  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleRegistro() {
    // Aquí iría la lógica real de registro
    navigate('/')
  }

  const formValido = form.nombre && form.email && form.password && form.genero

  return (
    <>
      <Navbar tipo="publico" />

      <div className="w3-container w3-content" style={{ maxWidth: '600px', marginTop: '100px' }}>
        <div className="w3-card-4 w3-round-xlarge w3-white">

          {/* Header */}
          <div className="w3-container w3-theme-d2 w3-round-xlarge w3-padding-16">
            <h2 className="w3-center">Crear cuenta</h2>
          </div>

          {/* Formulario */}
          <div className="w3-container w3-padding-24">

            <div className="w3-section">
              <label><i className="fa fa-user"></i> Nombre completo</label>
              <input
                className="w3-input w3-border w3-round"
                type="text"
                name="nombre"
                placeholder="Juan Pérez"
                value={form.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="w3-section">
              <label><i className="fa fa-envelope"></i> Correo electrónico</label>
              <input
                className="w3-input w3-border w3-round"
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="w3-section">
              <label><i className="fa fa-lock"></i> Contraseña</label>
              <input
                className="w3-input w3-border w3-round"
                type="password"
                name="password"
                placeholder="********"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <div className="w3-section">
              <label><i className="fa fa-calendar"></i> Fecha de nacimiento</label>
              <input
                className="w3-input w3-border w3-round"
                type="date"
                name="fechaNacimiento"
                value={form.fechaNacimiento}
                onChange={handleChange}
              />
            </div>

            <div className="w3-section">
              <label><i className="fa fa-venus-mars"></i> Género</label>
              <select
                className="w3-select w3-border w3-round"
                name="genero"
                value={form.genero}
                onChange={handleChange}
              >
                <option value="" disabled>Selecciona</option>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="w3-section">
              <button
                className="w3-button w3-theme-d2 w3-round w3-block w3-section"
                onClick={handleRegistro}
                disabled={!formValido}
              >
                <i className="fa fa-user-plus"></i> Registrarse
              </button>
            </div>

            <p className="w3-center">
              ¿Ya tienes cuenta? <NavLink to="/login">Inicia sesión</NavLink>.
            </p>

          </div>
        </div>
      </div>

      <br />
      <Footer />
    </>
  )
}
