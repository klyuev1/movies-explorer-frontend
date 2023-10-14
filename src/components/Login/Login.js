import React from 'react';
import logo from '../../images/logo.svg'
import {Link} from 'react-router-dom';

function Login() {

  
  return (
    <section className='register'>
      <img className='register__logo' src={logo} />
      <h2 className='register__title'>Рады видеть!</h2>
      
      <form className='register__form'>

        <div className='register__inputbox'>
          <label className='register__label'>E-mail
            <input type='email' className='register__input' placeholder='Ваш Email' />
          </label>
          
          <label className='register__label'>Пароль
            <input type='password' className='register__input' placeholder='Ваш пароль' />
          </label>
        </div>

        <button className='register__submit' type='submit'>Войти</button>
      </form>
      
      <p className='register__postscript'>
        Ещё не зарегистрированы? <Link className='register__link' to='/signup'>Регистрация</Link>
      </p>
      
      
    </section>
  );
}

export default Login;