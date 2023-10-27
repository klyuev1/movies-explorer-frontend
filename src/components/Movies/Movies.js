import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {getAllMovies} from '../../utils/MoviesApi';

function Movies({moviesFound, setMoviesFound, formValueFound, setFormValueFound, handleLikeMovie, handleDeleteMovie, moviesToWidth, setMoviesToWidth, moviesToDrow}) {
  
  const [wordFind, setWordFind] = React.useState('');



  function handleSearch(wordFind) {
    console.log(moviesFound);

    localStorage.setItem('moviesPlaceholder', wordFind);
    setFormValueFound(localStorage.getItem('moviesPlaceholder'))
    let storageAllMovies = JSON.parse(localStorage.getItem('allMovies'));
    if (storageAllMovies === null) {
      getAllMovies()
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
      />
      <MoviesCardList 
        moviesFound={moviesFound} // здесь должен быть moviesToDrow
        handleLikeMovie={handleLikeMovie}
        handleDeleteMovie={handleDeleteMovie}

        moviesToWidth={moviesToWidth}
        setMoviesToWidth={setMoviesToWidth}
      />
    </main>
  );
}

export default Movies;