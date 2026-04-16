import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

// ── Navbar público: solo login y registro ─────────────────────────────────
function NavPublico() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
          {/* Botón hamburguesa (móvil) */}
          <button
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            <i className="fa fa-bars"></i>
          </button>

          {/* Logo */}
          <NavLink to="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
            <i className="fa fa-home w3-margin-right"></i>Logo
          </NavLink>

          {/* Links escritorio */}
          <NavLink to="/login" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">
            <i className="fa fa-sign-in"></i> Iniciar sesión
          </NavLink>
          <NavLink to="/registro" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">
            <i className="fa fa-user-plus"></i> Registrarse
          </NavLink>
        </div>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="w3-bar-block w3-theme-d2 w3-large" style={{ marginTop: '46px' }}>
          <NavLink to="/"         className="w3-bar-item w3-button w3-padding-large" onClick={() => setMenuAbierto(false)}>Inicio</NavLink>
          <NavLink to="/login"    className="w3-bar-item w3-button w3-padding-large" onClick={() => setMenuAbierto(false)}>Iniciar sesión</NavLink>
          <NavLink to="/registro" className="w3-bar-item w3-button w3-padding-large" onClick={() => setMenuAbierto(false)}>Registrarse</NavLink>
        </div>
      )}
    </>
  )
}

// ── Navbar privado: usuario autenticado ───────────────────────────────────
function NavPrivado() {
  const [menuAbierto, setMenuAbierto]         = useState(false)
  const [notifAbierto, setNotifAbierto]       = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
          {/* Botón hamburguesa */}
          <button
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            <i className="fa fa-bars"></i>
          </button>

          {/* Logo */}
          <NavLink to="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
            <i className="fa fa-home w3-margin-right"></i>Logo
          </NavLink>

          {/* Links escritorio */}
          <NavLink
            to="/perfil"
            title="Perfil"
            className={({ isActive }) =>
              `w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white${isActive ? ' w3-theme-d4' : ''}`
            }
          >
            <i className="fa fa-user"></i>
          </NavLink>

          <NavLink
            to="/chat"
            title="Mensajes"
            className={({ isActive }) =>
              `w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white${isActive ? ' w3-theme-d4' : ''}`
            }
          >
            <i className="fa fa-envelope"></i>
          </NavLink>

          <NavLink
            to="/grupos"
            title="Grupos"
            className={({ isActive }) =>
              `w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white${isActive ? ' w3-theme-d4' : ''}`
            }
          >
            <i className="fa fa-users"></i>
          </NavLink>

          {/* Notificaciones con dropdown */}
          <div className="w3-dropdown-hover w3-hide-small">
            <button
              className="w3-button w3-padding-large"
              title="Notificaciones"
              onClick={() => setNotifAbierto(!notifAbierto)}
            >
              <i className="fa fa-bell"></i>
              <span className="w3-badge w3-right w3-small w3-green">3</span>
            </button>
            <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: '300px' }}>
              <a href="#" className="w3-bar-item w3-button">Una nueva solicitud de amistad</a>
              <a href="#" className="w3-bar-item w3-button">John Doe publicó en tu muro</a>
              <a href="#" className="w3-bar-item w3-button">Jane le gusta tu publicación</a>
            </div>
          </div>

          {/* Configuración (derecha) */}
          <NavLink
            to="/configuracion"
            title="Configuración"
            className={({ isActive }) =>
              `w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white${isActive ? ' w3-theme-d4' : ''}`
            }
          >
            <i className="fa fa-cog"></i>
          </NavLink>

          {/* Avatar (derecha) */}
          <NavLink to="/perfil" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="Mi cuenta">
            <img src="https://www.w3schools.com/w3images/avatar2.png" className="w3-circle" style={{ height: '23px', width: '23px' }} alt="Avatar" />
          </NavLink>
        </div>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="w3-bar-block w3-theme-d2 w3-large" style={{ marginTop: '46px' }}>
          <NavLink to="/"             className="w3-bar-item w3-button w3-padding-large" onClick={() => setMenuAbierto(false)}>Inicio</NavLink>
          <NavLink to="/perfil"       className="w3-bar-item w3-button w3-padding-large" onClick={() => setMenuAbierto(false)}>Perfil</NavLink>
          <NavLink to="/chat"         className="w3-bar-item w3-button w3-padding-large" onClick={() => setMenuAbierto(false)}>Mensajes</NavLink>
          <NavLink to="/grupos"       className="w3-bar-item w3-button w3-padding-large" onClick={() => setMenuAbierto(false)}>Grupos</NavLink>
          <NavLink to="/configuracion" className="w3-bar-item w3-button w3-padding-large" onClick={() => setMenuAbierto(false)}>Configuración</NavLink>
        </div>
      )}
    </>
  )
}

// ── Componente exportado: elige variante según prop ───────────────────────
export default function Navbar({ tipo = 'privado' }) {
  return tipo === 'publico' ? <NavPublico /> : <NavPrivado />
}
