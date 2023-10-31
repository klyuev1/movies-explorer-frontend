import React from 'react';
import photo from '../../../images/photo.jpg';

function AboutMe() {

  
  return (
    <section className='about-me' id='about-me'>
      <h3 className='about-me__heading'>Студент</h3>
      <div className='about-me__resume'>
        <div className='about-me__info'>
          <h2 className='about-me__name'>Клюев Артём</h2>
          <p className='about-me__prof'>Фронтенд-разработчик, 23 года</p>
          <p className='about-me__text'>Я родился в Казахстане. Учился и живу в Екатеринбруге. Окончил строительный институт по направлению ОВиК. На данный момент работаю в крупном девелопере на позиции руководителя группы операционного проектирования ОВиК. Люблю музыку, путешествовать, сноубординг и своих друзей.</p>
          <a className='about-me__link' href='https://github.com/klyuev1' target='_blank'>Github</a>
        </div>
        <img className='about-me__photo' src={photo} alt='мой аватар' />
      </div>
    </section>
  );
}

export default AboutMe;