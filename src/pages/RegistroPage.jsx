import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import Navbar from '../Components/layout/Navbar'
import Footer from '../Components/layout/Footer'
import { api } from '../api/client'            // ← AGREGAR

export default function RegistroPage() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    password: '',
    fechaNacimiento: '1990-01-01',
    genero: ''
  })
  const [error, setError]     = useState('')    // ← AGREGAR
  const [loading, setLoading] = useState(false) // ← AGREGAR
  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleRegistro() {   // ← async
    setError('')
    setLoading(true)
    try {
      await api.register({
        nombre:           form.nombre,
        email:            form.email,
        contrasena:       form.password,      // el backend espera "contrasena"
        fecha_nacimiento: form.fechaNacimiento,
        genero:           form.genero
      })
      navigate('/login') // registro exitoso → ir a login
    } catch (err) {
      setError(err.message) // ej: "El correo ya está registrado"
    } finally {
      setLoading(false)
    }
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
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            {/* ← AGREGAR: mensaje de error */}
            {error && (
              <p className="w3-text-red w3-center">
                <i className="fa fa-exclamation-circle"></i> {error}
              </p>
            )}

            <div className="w3-section">
              <button
                className="w3-button w3-theme-d2 w3-round w3-block w3-section"
                onClick={handleRegistro}
                disabled={!formValido || loading}
              >
                {/* ← AGREGAR: texto cambia mientras carga */}
                {loading
                  ? <><i className="fa fa-spinner fa-spin"></i> Registrando...</>
                  : <><i className="fa fa-user-plus"></i> Registrarse</>
                }
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