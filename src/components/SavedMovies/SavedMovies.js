import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({savedMovies, setSavedMovies, handleDeleteMovie, formValueFound, handleLikeMovie}) {
  
  const [isShortMoviesSaved, setIsShortMoviesSaved] = React.useState(false);
  // const [moviesSavedFound, setMoviesSavedFound] = React.useState(savedMovies);
  const [wordFind, setWordFind] = React.useState('');
  
  React.useEffect(() => {
    
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[savedMovies]);

  function foundMovies() {
    setSavedMovies(
      savedMovies?.filter((movie) => 
      (isShortMoviesSaved ? movie.duration < 40 : movie) 
      &&
        (movie.nameRU.toLowerCase().indexOf(wordFind.toLowerCase()) !== -1 
      ||
        movie.nameEN.toLowerCase().indexOf(wordFind.toLowerCase()) !== -1)
      )
    )
  }

  function handleSearch(wordFind){
    foundMovies();
  }

  return (
    <main className='saved-movies'>
      <SearchForm 
        handleSearch={handleSearch}
        formValueFound={formValueFound}
        wordFind={wordFind}
        setWordFind={setWordFind}
        // localStorageName='shortMovies'
      />
      <MoviesCardList 
        moviesFound={savedMovies}
        handleLikeMovie={handleLikeMovie}
        handleDeleteMovie={handleDeleteMovie}
      />
    </main>
  );
}

export default SavedMovies;