import React from 'react';
import logo from '../../images/logo.svg'
import {Link} from 'react-router-dom';
import Validation from '../../utils/Validation';

function Login({onLogin}) {
  const [formValue, setFormValue] = React.useState({
    email: '',
    password: ''
  });

  const { formErrors, isValidForm, handleChange, resetForm } = Validation(formValue, setFormValue);

  React.useEffect(() =>{
    resetForm({
      name: '',
      email: '',
      password: ''
    }, {}, false);
  }, [resetForm])

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
              className={`register__input ${formErrors.email ? "register__input_error" : ""}`}
              type='email' placeholder='Ваш Email'
              id='email' name='email' required
              value={formValue.email} onChange={handleChange}
            />
            <span className="register__input-span register__input-span_error">{formErrors.email}</span>
          </label>
          
          <label className='register__label'>Пароль
            <input 
              className={`register__input ${formErrors.password ? "register__input_error" : ""}`}
              type='password' placeholder='Ваш пароль'
              id='password' name='password' required
              value={formValue.password} onChange={handleChange}
            />
            <span className="register__input-span register__input-span_error">{formErrors.password}</span>
          </label>
        </div>

        <button 
          className={`register__submit ${!isValidForm ? "register__submit_disabled" : ""}`} type='submit'
          disabled={!isValidForm}
        >Войти</button>
      </form>
      
      <p className='register__postscript'>
        Ещё не зарегистрированы? <Link className='register__link' to='/signup'>Регистрация</Link>
      </p>
      
      
    </section>
  );
}

export default Login;