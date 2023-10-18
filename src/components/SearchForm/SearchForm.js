import React from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import lupa from '../../images/lupa.svg';

function SearchForm({onSubmitMovies}) {

  return (
    <section className='search-form'>

      <form className='search-form__container' onSubmit={onSubmitMovies}>
      
        <div className='search-form__string'>
          <img className='search-form__glass' src={lupa} />
          <input className='search-form__input' placeholder='Фильм'/>
          <button className='search-form__button' type='submit' >Найти</button>
        </div>
        
        <div className='search-form__string'>
          <div className='search-form__br' />
          <FilterCheckbox />
        </div>
      </form>

      <hr className='search-form__hr'/>
    </section>
  );
}

export default SearchForm;