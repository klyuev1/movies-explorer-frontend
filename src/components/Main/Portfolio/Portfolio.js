import React from 'react';
import logo from '../../../images/portfolio-logo.svg';

function Portfolio() {

  
  return (
    <section className='portfolio'>
      <h3 className='portfolio__heading'>Портфолио</h3>
      
      <a className='portfolio__page' href='https://klyuev1.github.io/how-to-learn/' target='_blank'>
        Статичный сайт
        <img className='portfolio__logo' src={logo} alt='перейти'/>
      </a>

      <a className='portfolio__page' href='https://klyuev1.github.io/russian-travel/' target='_blank'>
        Адаптивный сайт
        <img className='portfolio__logo' src={logo} alt='перейти'/>
      </a>

      <a className='portfolio__page' href='https://klyuev-mesto.nomoreparties.co/' target='_blank'>
        Одностраничное приложение
        <img className='portfolio__logo' src={logo} alt='перейти'/>
      </a>
    </section>
  );
}

export default Portfolio;