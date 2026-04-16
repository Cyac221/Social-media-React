import { useState } from 'react'
import Navbar from '../Components/layout/Navbar'
import Footer from '../Components/layout/Footer'

// Datos iniciales de conversaciones
const CONVERSACIONES = [
  {
    id: 'jane',
    nombre: 'Jane Doe',
    avatar: 'https://www.w3schools.com/w3images/avatar5.png',
    ultimoMensaje: 'Hola, ¿cómo estás?',
    hora: '10:30',
    activa: true,
    mensajes: [
      { id: 1, autor: 'Jane Doe',  texto: '¡Hola! ¿Cómo va el diseño?',                hora: '10:28', mio: false },
      { id: 2, autor: 'Tú',        texto: 'Muy bien, casi terminado. ¿Te gustó la última versión?', hora: '10:30', mio: true },
      { id: 3, autor: 'Jane Doe',  texto: 'Sí, está genial. Solo unos ajustes en los colores.',     hora: '10:32', mio: false },
    ]
  },
  {
    id: 'angie',
    nombre: 'Angie Jane',
    avatar: 'https://www.w3schools.com/w3images/avatar6.png',
    ultimoMensaje: '¿Viste el nuevo proyecto?',
    hora: 'Ayer',
    activa: false,
    mensajes: [
      { id: 1, autor: 'Angie Jane', texto: '¿Viste el nuevo proyecto?', hora: 'Ayer', mio: false },
    ]
  },
  {
    id: 'john',
    nombre: 'John Doe',
    avatar: 'https://www.w3schools.com/w3images/avatar2.png',
    ultimoMensaje: '¡Claro! Quedó genial.',
    hora: 'Ayer',
    activa: false,
    mensajes: [
      { id: 1, autor: 'John Doe', texto: '¡Claro! Quedó genial.', hora: 'Ayer', mio: false },
    ]
  }
]

export default function ChatPage() {
  const [conversaciones, setConversaciones] = useState(CONVERSACIONES)
  const [activaId, setActivaId]             = useState('jane')
  const [mensaje, setMensaje]               = useState('')
  const [busqueda, setBusqueda]             = useState('')

  const conversacionActiva = conversaciones.find(c => c.id === activaId)

  function enviarMensaje() {
    if (!mensaje.trim()) return
    const nuevoMensaje = {
      id: Date.now(),
      autor: 'Tú',
      texto: mensaje.trim(),
      hora: new Date().toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' }),
      mio: true
    }
    setConversaciones(prev =>
      prev.map(c =>
        c.id === activaId
          ? { ...c, mensajes: [...c.mensajes, nuevoMensaje], ultimoMensaje: nuevoMensaje.texto }
          : c
      )
    )
    setMensaje('')
  }

  const conversacionesFiltradas = conversaciones.filter(c =>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <>
      <Navbar tipo="privado" />

      <div className="w3-container w3-content" style={{ maxWidth: '1200px', marginTop: '80px' }}>
        <div className="w3-row">

          {/* ── Lista de conversaciones ───────────────────────────────── */}
          <div className="w3-col m4">
            <div className="w3-card w3-round w3-white">
              <div className="w3-container w3-padding-16 w3-theme-d2">
                <h4><i className="fa fa-comments"></i> Conversaciones</h4>
                <div className="w3-section">
                  <input
                    className="w3-input w3-border w3-round"
                    type="text"
                    placeholder="Buscar mensajes..."
                    value={busqueda}
                    onChange={e => setBusqueda(e.target.value)}
                  />
                </div>
              </div>

              <ul className="w3-ul w3-hoverable">
                {conversacionesFiltradas.map(conv => (
                  <li
                    key={conv.id}
                    className={`w3-padding-16 ${activaId === conv.id ? 'w3-theme-l4' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setActivaId(conv.id)}
                  >
                    <img src={conv.avatar} className="w3-left w3-circle w3-margin-right" style={{ width: '50px' }} alt={conv.nombre} />
                    <span className="w3-large">{conv.nombre}</span><br />
                    <span className="w3-opacity">{conv.ultimoMensaje}</span>
                    <span className="w3-right w3-small w3-text-theme">{conv.hora}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Ventana de chat activa ────────────────────────────────── */}
          <div className="w3-col m8">
            <div className="w3-card w3-round w3-white">
              {/* Header del chat */}
              <div className="w3-container w3-padding-16 w3-theme-d2">
                <h4>
                  <img src={conversacionActiva.avatar} className="w3-circle"
                       style={{ width: '40px', verticalAlign: 'middle' }} alt={conversacionActiva.nombre} />
                  {' '}{conversacionActiva.nombre}
                  {conversacionActiva.activa && (
                    <span className="w3-opacity w3-medium"> · Activa ahora</span>
                  )}
                </h4>
              </div>

              {/* Mensajes */}
              <div className="w3-container w3-padding-16" style={{ height: '400px', overflowY: 'scroll' }}>
                {conversacionActiva.mensajes.map(msg => (
                  <div
                    key={msg.id}
                    className={`w3-panel w3-round-large ${
                      msg.mio
                        ? 'w3-rightbar w3-border-green w3-theme-l4 w3-right'
                        : 'w3-leftbar w3-border-blue w3-theme-l5'
                    }`}
                    style={{ maxWidth: '80%' }}
                  >
                    <p><strong>{msg.autor}</strong> <span className="w3-opacity">{msg.hora}</span></p>
                    <p>{msg.texto}</p>
                  </div>
                ))}
              </div>

              {/* Input para nuevo mensaje */}
              <div className="w3-container w3-padding-16 w3-border-top">
                <div className="w3-row">
                  <div className="w3-col s9">
                    <input
                      className="w3-input w3-border w3-round"
                      type="text"
                      placeholder="Escribe un mensaje..."
                      value={mensaje}
                      onChange={e => setMensaje(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && enviarMensaje()}
                    />
                  </div>
                  <div className="w3-col s3">
                    <button
                      className="w3-button w3-theme-d2 w3-round w3-block"
                      onClick={enviarMensaje}
                      disabled={!mensaje.trim()}
                    >
                      <i className="fa fa-paper-plane"></i> Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <br />
      <Footer />
    </>
  )
}
