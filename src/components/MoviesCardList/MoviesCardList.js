import React from 'react';
import { useLocation } from "react-router-dom"
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList({handleSearch, moviesFound, moviesFoundDefault, handleLikeMovie, handleDeleteMovie, moviesToWidth, setMoviesToWidth, savedMovies}) {
  const location = useLocation();

  const [isButtonUsed, setIsButtonUsed] = React.useState(false);

  
  React.useEffect(() => {
    if (moviesFound.length === 0) {
      setIsButtonUsed(true)
    } 
    if (moviesFound.length === (moviesFoundDefault.length)) {
      setIsButtonUsed(true)
    } else {
      setIsButtonUsed(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleSearch, moviesFound]);


  function ChangeNumberCards() {
    const all = moviesToWidth.all;
    const more = moviesToWidth.more;
    setMoviesToWidth({all: (all + more), more: more})
  }

  return (
    <section className='movies-cardlist__container'>
      
      <div className='movies-cardlist'>
        {moviesFound.map((card) => {
          return <MoviesCard 
            card={card}
            key={location.pathname === "/movies" ? (card.id) : (card._id)}
            image = {location.pathname === "/movies" ? (`https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`) : (card.image)}
            handleLikeMovie={handleLikeMovie}
            handleDeleteMovie={handleDeleteMovie}
            savedMovies={savedMovies}
          />}
        )}
      </div>
      
      {location.pathname === "/movies" && <button className={`movies-cardlist__more-button ${isButtonUsed ? 'movies-cardlist__more-button_hidden' : ''}`} onClick={ChangeNumberCards}>Ещё</button>}
      
    </section>
  );
}

export default MoviesCardList;
