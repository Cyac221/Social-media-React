import { useState } from 'react'

export default function LeftSidebar() {
  const [openPanel, setOpenPanel] = useState(null)
  const [alertVisible, setAlertVisible] = useState(true)

  const togglePanel = (panel) => {
    setOpenPanel(openPanel === panel ? null : panel)
  }

  return (
    <div className="w3-col m3">

      {/* Profile Card */}
      <div className="w3-card w3-round w3-white">
        <div className="w3-container">
          <h4 className="w3-center">My Profile</h4>
          <p className="w3-center">
            <img src="https://www.w3schools.com/w3images/avatar3.png" className="w3-circle" style={{ height: "106px", width: "106px" }} alt="Avatar" />
          </p>
          <hr />
          <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Designer, UI</p>
          <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> London, UK</p>
          <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> April 1, 1988</p>
        </div>
      </div>
      <br />

      {/* Accordion */}
      <div className="w3-card w3-round">
        <div className="w3-white">

          <button onClick={() => togglePanel('Demo1')} className="w3-button w3-block w3-theme-l1 w3-left-align">
            <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups
          </button>
          {openPanel === 'Demo1' && (
            <div className="w3-container">
              <p>Some text..</p>
            </div>
          )}

          <button onClick={() => togglePanel('Demo2')} className="w3-button w3-block w3-theme-l1 w3-left-align">
            <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events
          </button>
          {openPanel === 'Demo2' && (
            <div className="w3-container">
              <p>Some other text..</p>
            </div>
          )}

          <button onClick={() => togglePanel('Demo3')} className="w3-button w3-block w3-theme-l1 w3-left-align">
            <i className="fa fa-users fa-fw w3-margin-right"></i> My Photos
          </button>
          {openPanel === 'Demo3' && (
            <div className="w3-container">
              <div className="w3-row-padding">
                <br />
                {[
                  "lights.jpg", "nature.jpg", "mountains.jpg",
                  "forest.jpg", "nature.jpg", "snow.jpg"
                ].map((img, i) => (
                  <div key={i} className="w3-half">
                    <img src={`https://www.w3schools.com/w3images/${img}`} style={{ width: "100%" }} className="w3-margin-bottom" alt={img} />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
      <br />

      {/* Interests */}
      <div className="w3-card w3-round w3-white w3-hide-small">
        <div className="w3-container">
          <p>Interests</p>
          <p>
            {["News","W3Schools","Labels","Games","Friends","Games","Friends","Food","Design","Art","Photos"].map((tag, i) => (
              <span key={i} className={`w3-tag w3-small w3-theme-d${5 - (i % 6)}`}>{tag}</span>
            ))}
          </p>
        </div>
      </div>
      <br />

      {/* Alert Banner */}
      {alertVisible && (
        <div className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
          <span onClick={() => setAlertVisible(false)} className="w3-button w3-theme-l3 w3-display-topright">
            <i className="fa fa-remove"></i>
          </span>
          <p><strong>Hey!</strong></p>
          <p>People are looking at your profile. Find out who.</p>
        </div>
      )}

    </div>
  )
}