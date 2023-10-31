import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({isLoggedIn, pinkThemeHeader, pinkThemeLogo, openPopup}) {
  
  return (
    <>
        <header className= {`header ${pinkThemeHeader}`} >
          <Link className='header__logo-link' to='/'><div className="header__logo" /></Link>

          <div className="header__box">

              {isLoggedIn === true && <Link className="header__info" to='/movies'>Фильмы</Link>}
              {isLoggedIn === true && <Link className="header__info" to='/saved-movies'>Сохраненные фильмы</Link>}
              {isLoggedIn === true && <Link className="header__user" to='/profile'>Аккаунт<div className={`header__user-logo ${pinkThemeLogo}`}/></Link>}
              
              
              {isLoggedIn === true && <button className='header__burger' type='button' onClick={openPopup}> </button>}
              

              {isLoggedIn === false && <Link className="header__info header__signin" to='/signup'>Регистрация</Link>}
              {isLoggedIn === false && <Link className="header__signin-button" to='/signin'>Войти</Link>}
            
                                
          </div>
        </header>
    </>
    
    
  );
}

export default Header;