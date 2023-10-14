import React from 'react';
import { useLocation } from "react-router-dom"
import moviesData from '../../utils/moviesData' 

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  const location = useLocation();

  return (
    <section className='movies-cardlist__container'>
      
      <div className='movies-cardlist'>
        {moviesData.map(card => 
          <MoviesCard 
            key={card._id}
            card={card}
          />
        )}
      </div>
      
      {location.pathname === "/movies" && <button className='movies-cardlist__more-button'>Ещё</button>}
  
    </section>
  );
}

export default MoviesCardList;

