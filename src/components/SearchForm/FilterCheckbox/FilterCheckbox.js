import React from 'react';

function FilterCheckbox() {
  const [isShortMovies, SetIsShortMovies] = React.useState(false);

  function filterShortMovies () {
    SetIsShortMovies((state) => !state);
  }

  return (
    <div className='filter-checkbox__container'>
      <button className={`filter-checkbox__button ${isShortMovies ? 'filter-checkbox__button_disabled' : ''}`} type='button' onClick={filterShortMovies}>
        <div className='filter-checkbox__circle' />
      </button>

      <p className='filter-checkbox__title'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;