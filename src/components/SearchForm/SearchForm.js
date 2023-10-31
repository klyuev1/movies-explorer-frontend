import React from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import lupa from '../../images/lupa.svg';

function SearchForm({handleSearch, formValueFound, wordFind, setWordFind, shortMovies, setShortMovies}) {
  
  const [formValue, setFormValue] = React.useState(formValueFound || '');
  const [isValidForm, setIsValidForm] = React.useState(true);

  const handleChange = (evt) => {
    setIsValidForm(true);
    const {value} = evt.target;
    setFormValue(value);
    setWordFind(value);
  }

  const handleSubmitMovies =(e) => {
    e.preventDefault();
    if (wordFind === '') {
      setIsValidForm(false);
    } else {
      handleSearch(wordFind.toLowerCase());
    }
  }

  return (
    <section className='search-form'>

      <form className='search-form__container' onSubmit={handleSubmitMovies}>
      
        <div className='search-form__string'>
          <img className='search-form__glass' src={lupa} alt='заполнить'/>
          <input 
            className='search-form__input' placeholder='Фильм'
            id="searchMovie" name="searchMovie" type='text'
            value={formValue} onChange={handleChange}
          />
          {! isValidForm && (
            <span className='search-form__span-error'>Введите ключевое слово</span>
          )}
          <button className='search-form__button' type='submit' >Найти</button>
        </div>
        
        <div className='search-form__string'>
          <div className='search-form__br' />
          <FilterCheckbox 
            shortMovies = {shortMovies}
            setShortMovies = {setShortMovies}
          />
        </div>
      </form>

      <hr className='search-form__hr'/>
    </section>
  );
}

export default SearchForm;