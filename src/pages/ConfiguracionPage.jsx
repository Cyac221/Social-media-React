import { useState } from 'react'
import Navbar from '../Components/layout/Navbar'
import Footer from '../Components/layout/Footer'

// ── Tab: General ───────────────────────────────────────────────────────────
function TabGeneral() {
  const [form, setForm] = useState({
    nombre: 'Juan Pérez',
    email: 'juan@email.com',
    bio: 'Diseñador UI/UX. Amante del café.'
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="w3-container w3-padding-24">
      <h4>Información personal</h4>
      <div className="w3-section">
        <label>Nombre</label>
        <input className="w3-input w3-border w3-round" type="text"
               name="nombre" value={form.nombre} onChange={handleChange} />
      </div>
      <div className="w3-section">
        <label>Correo electrónico</label>
        <input className="w3-input w3-border w3-round" type="email"
               name="email" value={form.email} onChange={handleChange} />
      </div>
      <div className="w3-section">
        <label>Biografía</label>
        <textarea className="w3-input w3-border w3-round" rows="3"
                  name="bio" value={form.bio} onChange={handleChange} />
      </div>
      <button className="w3-button w3-theme-d2 w3-round">
        <i className="fa fa-save"></i> Guardar cambios
      </button>
    </div>
  )
}

// ── Tab: Privacidad ────────────────────────────────────────────────────────
function TabPrivacidad() {
  const [verPerfil, setVerPerfil]         = useState('Solo amigos')
  const [solicitudes, setSolicitudes]     = useState('Amigos de amigos')
  const [newPassword, setNewPassword]     = useState('')

  return (
    <div className="w3-container w3-padding-24">
      <h4>Privacidad y seguridad</h4>
      <div className="w3-section">
        <label>¿Quién puede ver tu perfil?</label>
        <select className="w3-select w3-border w3-round"
                value={verPerfil} onChange={e => setVerPerfil(e.target.value)}>
          <option>Todos</option>
          <option>Solo amigos</option>
          <option>Solo yo</option>
        </select>
      </div>
      <div className="w3-section">
        <label>¿Quién puede enviarte solicitudes de amistad?</label>
        <select className="w3-select w3-border w3-round"
                value={solicitudes} onChange={e => setSolicitudes(e.target.value)}>
          <option>Todos</option>
          <option>Amigos de amigos</option>
        </select>
      </div>
      <div className="w3-section">
        <label>Cambiar contraseña</label>
        <input className="w3-input w3-border w3-round" type="password"
               placeholder="Nueva contraseña" value={newPassword}
               onChange={e => setNewPassword(e.target.value)} />
      </div>
      <button className="w3-button w3-theme-d2 w3-round">
        <i className="fa fa-lock"></i> Actualizar privacidad
      </button>
    </div>
  )
}

// ── Tab: Notificaciones ────────────────────────────────────────────────────
function TabNotificaciones() {
  const [notifs, setNotifs] = useState({
    correo:    true,
    mensajes:  true,
    cumple:    false,
    grupos:    true
  })

  function toggle(key) {
    setNotifs(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="w3-container w3-padding-24">
      <h4>Preferencias de notificaciones</h4>
      {[
        { key: 'correo',   label: 'Recibir notificaciones por correo' },
        { key: 'mensajes', label: 'Notificaciones de nuevos mensajes' },
        { key: 'cumple',   label: 'Notificaciones de cumpleaños' },
        { key: 'grupos',   label: 'Notificaciones de grupos' },
      ].map(({ key, label }) => (
        <div key={key} className="w3-section">
          <input className="w3-check" type="checkbox"
                 checked={notifs[key]} onChange={() => toggle(key)} />
          {' '}<label>{label}</label>
        </div>
      ))}
      <button className="w3-button w3-theme-d2 w3-round">
        <i className="fa fa-bell"></i> Guardar preferencias
      </button>
    </div>
  )
}

// ── Página principal ───────────────────────────────────────────────────────
const TABS = ['General', 'Privacidad', 'Notificaciones']

export default function ConfiguracionPage() {
  const [tabActiva, setTabActiva] = useState('General')

  return (
    <>
      <Navbar tipo="privado" />

      <div className="w3-container w3-content" style={{ maxWidth: '1000px', marginTop: '80px' }}>
        <div className="w3-card w3-round w3-white">

          {/* Header */}
          <div className="w3-container w3-padding-16 w3-theme-d2">
            <h2><i className="fa fa-cogs"></i> Configuración de la cuenta</h2>
          </div>

          {/* Pestañas */}
          <div className="w3-bar w3-theme-l4">
            {TABS.map(tab => (
              <button
                key={tab}
                className={`w3-bar-item w3-button ${tabActiva === tab ? 'w3-theme-d1' : ''}`}
                onClick={() => setTabActiva(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Contenido de la tab activa */}
          {tabActiva === 'General'        && <TabGeneral />}
          {tabActiva === 'Privacidad'     && <TabPrivacidad />}
          {tabActiva === 'Notificaciones' && <TabNotificaciones />}

        </div>
      </div>
      <br />
      <Footer />
    </>
  )
}
