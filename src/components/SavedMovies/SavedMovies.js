import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import NothingToShow from '../NothingToShow/NothingToShow';

function SavedMovies({savedMovies, handleDeleteMovie, handleLikeMovie}) {
  
  const [isShortMoviesSaved, setIsShortMoviesSaved] = React.useState(false);
  const [moviesSavedFound, setMoviesSavedFound] = React.useState(savedMovies);

  const [wordFind, setWordFind] = React.useState('');

  React.useEffect(() => {
    foundMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShortMoviesSaved, savedMovies]);
  
  function foundMovies() {
    setMoviesSavedFound(
      savedMovies?.filter((movie) => (isShortMoviesSaved ? movie.duration < 40 : movie) &&
        (movie.nameRU.toLowerCase().indexOf(wordFind.toLowerCase()) !== -1 ||
        movie.nameEN.toLowerCase().indexOf(wordFind.toLowerCase()) !== -1)
      )
    )
  }

  return (
    <main className='saved-movies'>
      <SearchForm 
        handleSearch={foundMovies}
        wordFind={wordFind}
        setWordFind={setWordFind}
        shortMovies = {isShortMoviesSaved}
        setShortMovies = {setIsShortMoviesSaved}
      />

      {(savedMovies.length === 0)
      ? (<NothingToShow text = 'Сохраненных фильмов нет'/>) 
      : ((moviesSavedFound.length === 0) 
      ? (<NothingToShow text = 'Ничего не найдено'/>) 
      : (
        <MoviesCardList 
          moviesFound={moviesSavedFound}
          handleLikeMovie={handleLikeMovie}
          handleDeleteMovie={handleDeleteMovie}
        />
      ))}
      
    </main>
  );
}

export default SavedMovies;