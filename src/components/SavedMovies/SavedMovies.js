import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({savedMovies, handleDeleteMovie, formValueFound, handleLikeMovie}) {
  
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
        formValueFound={formValueFound}
        wordFind={wordFind}
        setWordFind={setWordFind}
        shortMovies = {isShortMoviesSaved}
        setShortMovies = {setIsShortMoviesSaved}
      />
      <MoviesCardList 
        moviesFound={moviesSavedFound}
        handleLikeMovie={handleLikeMovie}
        handleDeleteMovie={handleDeleteMovie}
        // savedMovies={moviesSavedFound}
      />
    </main>
  );
}

export default SavedMovies;