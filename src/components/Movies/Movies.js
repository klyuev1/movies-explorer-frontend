import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {getAllMovies} from '../../utils/MoviesApi';

function Movies({moviesFound, setMoviesFound, formValueFound, setFormValueFound, handleLikeMovie, handleDeleteMovie, moviesToWidth, setMoviesToWidth, moviesToDrow, shortMovies, setShortMovies, savedMovies}) {
  
  const [wordFind, setWordFind] = React.useState('');

  async function handleSearch(wordFind) {

    localStorage.setItem('moviesPlaceholder', wordFind);
    setFormValueFound(localStorage.getItem('moviesPlaceholder'))
    let storageAllMovies = JSON.parse(localStorage.getItem('allMovies'));
    if (storageAllMovies === null) {
      await getAllMovies()
      .then((res) => {
        localStorage.setItem('allMovies', JSON.stringify(res));
        storageAllMovies = JSON.parse(localStorage.getItem('allMovies'));
      })
      .catch(err => {
        console.log(err);
        storageAllMovies=[];
      })
    }
  
    let findedMovies = storageAllMovies.filter(function(movie) {
      return (movie.nameRU.toLowerCase().indexOf(wordFind) !== -1) || (movie.nameEN.toLowerCase().indexOf(wordFind) !== -1);
    });
    localStorage.setItem('moviesFound', JSON.stringify(findedMovies));
    setMoviesFound(findedMovies);
    
  }

  return (
    <main className='movies'>
      <SearchForm 
        handleSearch={handleSearch}
        formValueFound={formValueFound}
        wordFind={wordFind}
        setWordFind={setWordFind}

        shortMovies = {shortMovies}
        setShortMovies = {setShortMovies}
      />
      <MoviesCardList 
        moviesFound={moviesToDrow} // здесь должен быть moviesToDrow
        handleLikeMovie={handleLikeMovie}
        handleDeleteMovie={handleDeleteMovie}
        moviesToWidth={moviesToWidth}
        setMoviesToWidth={setMoviesToWidth}
        savedMovies={savedMovies}
      />
    </main>
  );
}

export default Movies;