import Navbar from '../Components/layout/Navbar'
import Footer from '../Components/layout/Footer'

export default function PerfilPage() {
  return (
    <>
      <Navbar tipo="privado" />

      <div className="w3-container w3-content" style={{ maxWidth: '1400px', marginTop: '80px' }}>
        <div className="w3-row">

          {/* ── Columna izquierda ────────────────────────────────────────── */}
          <div className="w3-col m3">
            <div className="w3-card w3-round w3-white">
              <div className="w3-container">
                <h4 className="w3-center">Mi perfil</h4>
                <p className="w3-center">
                  <img src="https://www.w3schools.com/w3images/avatar3.png" className="w3-circle"
                       style={{ height: '106px', width: '106px' }} alt="Avatar" />
                </p>
                <hr />
                <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Diseñador UI</p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> Londres, Reino Unido</p>
                <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> 1 de abril, 1988</p>
                <p><i className="fa fa-users fa-fw w3-margin-right w3-text-theme"></i> 1.2k seguidores · 345 siguiendo</p>
                <button className="w3-button w3-block w3-theme-d2 w3-margin-bottom">
                  <i className="fa fa-pencil"></i> Editar perfil
                </button>
              </div>
            </div>
            <br />

            {/* Fotos */}
            <div className="w3-card w3-round w3-white">
              <div className="w3-container">
                <p><i className="fa fa-camera"></i> Fotos</p>
                <div className="w3-row-padding">
                  {['lights.jpg', 'nature.jpg', 'mountains.jpg'].map((img, i) => (
                    <div key={i} className="w3-third">
                      <img src={`https://www.w3schools.com/w3images/${img}`} style={{ width: '100%' }} className="w3-margin-bottom" alt={img} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Columna central ──────────────────────────────────────────── */}
          <div className="w3-col m7">
            {/* Portada */}
            <div className="w3-card w3-round w3-white w3-margin-bottom">
              <img src="https://www.w3schools.com/w3images/forest.jpg" alt="Portada"
                   style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
              <div className="w3-container w3-padding">
                <h3>Juan Pérez <span className="w3-opacity w3-medium">@juanperez</span></h3>
                <p>Diseñador UI/UX. Amante del café y la fotografía. #w3css</p>
              </div>
            </div>

            {/* Publicar estado */}
            <div className="w3-card w3-round w3-white w3-margin-bottom">
              <div className="w3-container w3-padding">
                <h6 className="w3-opacity">¿Qué estás pensando?</h6>
                <textarea className="w3-input w3-border w3-round" rows="2"
                          placeholder="Comparte algo..." readOnly />
                <button type="button" className="w3-button w3-theme w3-margin-top">
                  <i className="fa fa-pencil"></i> Publicar
                </button>
              </div>
            </div>

            {/* Publicación 1 */}
            <div className="w3-container w3-card w3-white w3-round w3-margin">
              <br />
              <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar"
                   className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
              <span className="w3-right w3-opacity">Hace 2 horas</span>
              <h4>Juan Pérez</h4>
              <br />
              <hr className="w3-clear" />
              <p>¡Nuevo diseño de interfaz terminado! 🎨 ¿Qué opinan?</p>
              <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Post" />
              <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
                <i className="fa fa-thumbs-up"></i> Me gusta
              </button>
              <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
                <i className="fa fa-comment"></i> Comentar
              </button>
            </div>

            {/* Publicación 2 */}
            <div className="w3-container w3-card w3-white w3-round w3-margin">
              <br />
              <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar"
                   className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
              <span className="w3-right w3-opacity">Ayer</span>
              <h4>Juan Pérez</h4>
              <br />
              <hr className="w3-clear" />
              <p>Feliz de anunciar que me uniré al equipo de diseño de W3Schools como colaborador. 🚀</p>
              <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
                <i className="fa fa-thumbs-up"></i> Me gusta
              </button>
              <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
                <i className="fa fa-comment"></i> Comentar
              </button>
            </div>
          </div>

          {/* ── Columna derecha ──────────────────────────────────────────── */}
          <div className="w3-col m2">
            <div className="w3-card w3-round w3-white w3-center w3-padding-16">
              <p><i className="fa fa-calendar"></i> Próximos eventos</p>
              <p><strong>Reunión de diseño</strong><br />Viernes 15:00</p>
              <button className="w3-button w3-block w3-theme-l4">Info</button>
            </div>
            <br />
            <div className="w3-card w3-round w3-white w3-padding-16 w3-center">
              <p>ADS</p>
            </div>
          </div>

        </div>
      </div>
      <br />
      <Footer />
    </>
  )
}
