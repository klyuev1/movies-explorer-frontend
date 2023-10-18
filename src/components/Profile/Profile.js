import React from 'react';

function Profile() {

  
  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, Виталий!</h1>
      <form className='profile__form'>
        
        <label className='profile__label'>
          Имя
          <input className='profile__input' placeholder='Ваше имя'/>
        </label>
        
        <label className='profile__label'>
          E-mail
          <input className='profile__input' placeholder='Ваш Email'/>
        </label>

      </form>

      <button className='profile__edit-button' type='submit'>Редактировать</button>
      <button className='profile__exit-button' type='button'>Выйти из аккаунта</button>

    </section>
  );
}

export default Profile;