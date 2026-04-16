import { useState } from 'react'
import Navbar from '../Components/layout/Navbar'
import Footer from '../Components/layout/Footer'

const MIS_GRUPOS = [
  { id: 1, nombre: 'Diseñadores UI/UX',   avatar: 'https://www.w3schools.com/w3images/avatar2.png', miembros: '1.2k', nuevos: 15 },
  { id: 2, nombre: 'Desarrollo Web',      avatar: 'https://www.w3schools.com/w3images/avatar5.png', miembros: '3.4k', nuevos: 8  },
  { id: 3, nombre: 'Fotografía Creativa', avatar: 'https://www.w3schools.com/w3images/avatar6.png', miembros: '856',  nuevos: 3  },
]

const GRUPOS_SUGERIDOS = [
  { id: 4, nombre: 'Viajeros del mundo',   imagen: 'https://www.w3schools.com/w3images/forest.jpg',  miembros: '5.1k' },
  { id: 5, nombre: 'Tecnología y gadgets', imagen: 'https://www.w3schools.com/w3images/lights.jpg',  miembros: '8.2k' },
  { id: 6, nombre: 'Cocina fácil',         imagen: 'https://www.w3schools.com/w3images/nature.jpg',  miembros: '2.7k' },
]

export default function GruposPage() {
  const [busqueda, setBusqueda]         = useState('')
  const [unidos, setUnidos]             = useState([])

  function unirse(id) {
    setUnidos(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  const sugeridosFiltrados = GRUPOS_SUGERIDOS.filter(g =>
    g.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <>
      <Navbar tipo="privado" />

      <div className="w3-container w3-content" style={{ maxWidth: '1200px', marginTop: '80px' }}>
        <div className="w3-row-padding">

          {/* ── Mis grupos ──────────────────────────────────────────────── */}
          <div className="w3-col m6">
            <div className="w3-card w3-round w3-white">
              <div className="w3-container w3-padding-16 w3-theme-d2">
                <h3><i className="fa fa-group"></i> Mis grupos</h3>
              </div>

              <ul className="w3-ul">
                {MIS_GRUPOS.map(grupo => (
                  <li key={grupo.id} className="w3-padding-16">
                    <img src={grupo.avatar} className="w3-left w3-circle w3-margin-right"
                         style={{ width: '50px' }} alt={grupo.nombre} />
                    <span className="w3-large">{grupo.nombre}</span><br />
                    <span className="w3-opacity">
                      {grupo.miembros} miembros · {grupo.nuevos} publicaciones nuevas
                    </span>
                    <button className="w3-button w3-small w3-theme-d2 w3-right w3-round">
                      Ver grupo
                    </button>
                  </li>
                ))}
              </ul>

              <div className="w3-container w3-padding-16">
                <button className="w3-button w3-block w3-theme-l1">
                  <i className="fa fa-plus"></i> Crear nuevo grupo
                </button>
              </div>
            </div>
          </div>

          {/* ── Grupos sugeridos ────────────────────────────────────────── */}
          <div className="w3-col m6">
            <div className="w3-card w3-round w3-white">
              <div className="w3-container w3-padding-16 w3-theme-d1">
                <h3><i className="fa fa-star"></i> Grupos sugeridos</h3>
              </div>

              <ul className="w3-ul">
                {GRUPOS_SUGERIDOS.map(grupo => (
                  <li key={grupo.id} className="w3-padding-16">
                    <img src={grupo.imagen} className="w3-left w3-circle w3-margin-right"
                         style={{ width: '50px', height: '50px', objectFit: 'cover' }} alt={grupo.nombre} />
                    <span className="w3-large">{grupo.nombre}</span><br />
                    <span className="w3-opacity">{grupo.miembros} miembros</span>
                    <button
                      className={`w3-button w3-small w3-right w3-round ${unidos.includes(grupo.id) ? 'w3-grey' : 'w3-green'}`}
                      onClick={() => unirse(grupo.id)}
                    >
                      <i className={`fa fa-${unidos.includes(grupo.id) ? 'check' : 'plus'}`}></i>
                      {' '}{unidos.includes(grupo.id) ? 'Unido' : 'Unirse'}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <br />

            {/* Buscador */}
            <div className="w3-card w3-round w3-white">
              <div className="w3-container w3-padding-16">
                <h4>Buscar grupos</h4>
                <input
                  className="w3-input w3-border w3-round"
                  type="text"
                  placeholder="Nombre del grupo..."
                  value={busqueda}
                  onChange={e => setBusqueda(e.target.value)}
                />
                {busqueda && (
                  <ul className="w3-ul w3-margin-top">
                    {sugeridosFiltrados.length > 0
                      ? sugeridosFiltrados.map(g => (
                          <li key={g.id} className="w3-padding">
                            <strong>{g.nombre}</strong>
                            <span className="w3-opacity"> · {g.miembros} miembros</span>
                          </li>
                        ))
                      : <li className="w3-padding w3-opacity">Sin resultados</li>
                    }
                  </ul>
                )}
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
