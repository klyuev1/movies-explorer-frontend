import React from 'react';
import PromoLogo from '../../../images/promo-logo.svg'

function Promo() {

  
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>  
      </div>
      {/* <img src={PromoLogo} className='promo__image' /> */}
    </section>
  );
}

export default Promo;