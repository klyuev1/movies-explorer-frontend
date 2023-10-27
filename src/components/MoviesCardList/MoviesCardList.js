import React from 'react';
import { useLocation } from "react-router-dom"
// import moviesData from '../../utils/moviesData'

import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList({moviesFound, handleLikeMovie, handleDeleteMovie, moviesToWidth, setMoviesToWidth}) {
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
            key={card._id}
            card={card}
            image = {location.pathname === "/movies" ? (`https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`) : (card.image)}
            handleLikeMovie={handleLikeMovie}
            handleDeleteMovie={handleDeleteMovie}
          />}
        )}
      </div>
      
      {location.pathname === "/movies" && <button className='movies-cardlist__more-button' onClick={ChangeNumberCards}>Ещё</button>}
  
    </section>
  );
}

export default MoviesCardList;
