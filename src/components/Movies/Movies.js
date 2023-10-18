import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import {getMovies} from '../../utils/MoviesApi';

function Movies() {
  const [cards, setCards] = React.useState([]);
  
  function handleSubmitMovies(e) {
    e.preventDefault();
    getMovies()
    .then((res)=> {
      setCards(res);
    })
    .catch((err) => console.log(err));
  }


  return (
    <main className='movies'>
      <SearchForm 
        onSubmitMovies={handleSubmitMovies}
      />
      <MoviesCardList 
        cards={cards}
      />
    </main>
  );
}

export default Movies;