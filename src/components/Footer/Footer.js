import React from 'react';

function Footer() {

  return (
    <footer className='footer'>
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__bottom'>
        <p className='footer__year'>© 2023</p>
        <div className='footer__links'>
          <a className='footer__link' href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
          <a className='footer__link' href='https://github.com/' target='_blank' rel='noreferrer'>Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;