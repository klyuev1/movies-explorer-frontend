import React from 'react';

function FilterCheckbox({shortMovies, setShortMovies}) {

  function filterShortMovies () {
    if (shortMovies === true){
      setShortMovies(false)
      localStorage.setItem('shortMovies', JSON.stringify(false));
    } else {
      setShortMovies(true)
      localStorage.setItem('shortMovies', JSON.stringify(true));
    }
  }

  return (
    <div className='filter-checkbox__container'>
      <button className={`filter-checkbox__button ${shortMovies ? 'filter-checkbox__button_disabled' : ''}`} type='button' onClick={filterShortMovies}>
        <div className='filter-checkbox__circle' />
      </button>

      <p className='filter-checkbox__title'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;