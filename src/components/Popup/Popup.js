import React from "react";
import NavBar from "../NavBar/NavBar"

function Popup({isOpen, closePopup}) {
    return(
      <div className={`popup ${isOpen ? 'popup-opened' : ''}`}>
        <div className="popup__box">
          <NavBar />
          <button className='popup__close' type="button" onClick={closePopup} />
        
        </div>
      </div>
    )
}

export default Popup;