import React from 'react';

function InfoTooltip({isOpen, onClose, title, icon}) {
  return (
    <div className = {`Info-tooltip ${isOpen ? 'Info-tooltip_opened' : ''} `}>
      <div className="Info-tooltip__container">
        <div className="Info-tooltip__form">
          <img className="Info-tooltip__logo-auth" src={icon} alt={title}/>
          <h2 className="Info-tooltip__text-auth">{title}</h2>
          <button type="button" className="Info-tooltip__button-close" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;