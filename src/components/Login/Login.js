import React from 'react';
import logo from '../../images/logo.svg'
import {Link} from 'react-router-dom';

function Login({onLogin}) {
  const [formValue, setFormValue] = React.useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formValue.email, formValue.password);
  }

  
  return (
    <section className='register'>
      <img className='register__logo' src={logo} />
      <h2 className='register__title'>Рады видеть!</h2>
      
      <form className='register__form' onSubmit={handleSubmit}>

        <div className='register__inputbox'>
          <label className='register__label'>E-mail
            <input 
              type='email' className='register__input' placeholder='Ваш Email'
              id='email' name='email' required
              value={formValue.email} onChange={handleChange}
            />
          </label>
          
          <label className='register__label'>Пароль
            <input 
              type='password' className='register__input' placeholder='Ваш пароль'
              id='password' name='password' required
              value={formValue.password} onChange={handleChange}
            />
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