import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import Navbar from '../Components/layout/Navbar'
import Footer from '../Components/layout/Footer'
import { api } from '../api/client'           // ← AGREGAR
import { useAuth } from '../context/AuthContext' // ← AGREGAR

export default function LoginPage() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')    // ← AGREGAR
  const [loading, setLoading]   = useState(false) // ← AGREGAR
  const { login } = useAuth()                     // ← AGREGAR
  const navigate = useNavigate()

  async function handleLogin() {   // ← async
    setError('')
    setLoading(true)
    try {
      const data = await api.login({ email, contrasena: password })
      login(data.usuario)   // guarda { id, nombre, email } en el contexto
      navigate('/')
    } catch (err) {
      setError(err.message) // muestra "Credenciales inválidas" si falla
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar tipo="publico" />

      <div className="w3-container w3-content" style={{ maxWidth: '500px', marginTop: '100px' }}>
        <div className="w3-card-4 w3-round-xlarge w3-white">

          {/* Header */}
          <div className="w3-container w3-theme-d2 w3-round-xlarge w3-padding-16">
            <h2 className="w3-center">Iniciar sesión</h2>
          </div>

          {/* Formulario */}
          <div className="w3-container w3-padding-24">

            <div className="w3-section">
              <label><i className="fa fa-envelope"></i> Correo electrónico</label>
              <input
                className="w3-input w3-border w3-round"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="w3-section">
              <label><i className="fa fa-lock"></i> Contraseña</label>
              <input
                className="w3-input w3-border w3-round"
                type="password"
                placeholder="********"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
              />
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
                onClick={handleLogin}
                disabled={!email.trim() || !password.trim() || loading}
              >
                {/* ← AGREGAR: texto cambia mientras carga */}
                {loading
                  ? <><i className="fa fa-spinner fa-spin"></i> Entrando...</>
                  : <><i className="fa fa-sign-in"></i> Acceder</>
                }
              </button>
            </div>

            <p className="w3-center"><a href="#">¿Olvidaste tu contraseña?</a></p>
            <p className="w3-center">
              ¿No tienes cuenta? <NavLink to="/registro">Regístrate aquí</NavLink>.
            </p>

          </div>
        </div>
      </div>

      <br />
      <Footer />
    </>
  )
}