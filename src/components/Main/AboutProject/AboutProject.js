import React from 'react';

function AboutProject() {

  
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      
      <div className='about-project__info'>
        <div className='about-project__info-column'>
          <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__info-column'>
          <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>

      <div className='about-project__time'>
        <p className='about-project__weeks one-week'>1 неделя</p>
        <p className='about-project__weeks four-week'>4 недели</p>
        <p className='about-project__part back-end'>Back-end</p>
        <p className='about-project__part front-end'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
