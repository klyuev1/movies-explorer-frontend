import React from 'react';
import logo from '../../images/logo.svg'
import {Link} from 'react-router-dom';

function Register() {

  
  return (
    <section className='register'>
      <img className='register__logo' src={logo} />
      <h2 className='register__title'>Добро пожаловать!</h2>
      
      <form className='register__form'>

        <div className='register__inputbox'>
          <label className='register__label'>Имя
            <input type='name' className='register__input' placeholder='Ваше имя' />
          </label>
          
          <label className='register__label'>E-mail
            <input type='email' className='register__input' placeholder='Ваш Email' />
          </label>
          
          <label className='register__label'>Пароль
            <input type='password' className='register__input' placeholder='Ваш пароль' />
          </label>
        </div>

        <button className='register__submit' type='submit'>Зарегистрироваться</button>
      
      </form>
      
      <p className='register__postscript'>
        Уже зарегистрированы? <Link className='register__link' to='/signin'>Войти</Link>
      </p>
      
      
    </section>
  );
}

export default Register;