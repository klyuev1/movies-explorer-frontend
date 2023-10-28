import React from 'react';
import { useLocation } from "react-router-dom"
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList({moviesFound, handleLikeMovie, handleDeleteMovie, moviesToWidth, setMoviesToWidth, savedMovies}) {
  const location = useLocation();

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
            key={card._id}
            image = {location.pathname === "/movies" ? (`https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`) : (card.image)}
            handleLikeMovie={handleLikeMovie}
            handleDeleteMovie={handleDeleteMovie}
            savedMovies={savedMovies}
          />}
        )}
      </div>
      
      {location.pathname === "/movies" && <button className='movies-cardlist__more-button' onClick={ChangeNumberCards}>Ещё</button>}
  
    </section>
  );
}

export default MoviesCardList;
