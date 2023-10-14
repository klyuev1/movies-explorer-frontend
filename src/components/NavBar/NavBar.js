import React from 'react';
import { Link, useLocation} from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <section className='navbar'>
      <div className='navbar__container'>
      
        <div className='navbar__box'>
        
          {location.pathname === "/" ? (
            <div className='navbar__links-container'>
              <Link className='navbar__links navbar__selected-link' to='/'>Главная</Link>
            </div>
          ):(
            <div className='navbar__links-container'>
              <Link className='navbar__links' to='/'>Главная</Link>
            </div>
          )}

          {location.pathname === "/movies" ? (
            <div className='navbar__links-container'>
              <Link className='navbar__links navbar__selected-link' to='/movies'>Фильмы</Link>
            </div>
          ):(
            <div className='navbar__links-container'>
              <Link className='navbar__links' to='/movies'>Фильмы</Link>
            </div>
          )}

          {location.pathname === "/saved-movies" ? (
            <div className='navbar__links-container'>
              <Link className='navbar__links navbar__selected-link' to='/saved-movies'>Сохраненные фильмы</Link>
            </div>
          ):(
            <div className='navbar__links-container'>
              <Link className='navbar__links' to='/saved-movies'>Сохраненные фильмы</Link>
            </div>
          )}

        </div>
        
        <Link className='navbar__user ' to='/profile'>Аккаунт<div className={'navbar__user-logo'}/></Link>

      </div>
    </section>
  );
}

export default NavBar;