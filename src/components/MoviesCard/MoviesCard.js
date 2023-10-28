import React from 'react';
import { useLocation} from 'react-router-dom';

function MoviesCard({card, image, handleLikeMovie, handleDeleteMovie, savedMovies}) {
  const location = useLocation();

  function durationConvert(min){
    let hours = Math.trunc(min/60);
    let minutes = min % 60;
    return hours + 'ч ' + minutes + 'м';
  }
  const time = durationConvert(card.duration)

  let isLiked = false;
  const isSaved = card._id;
  let movieWithId;

  if (isSaved===undefined) {
    movieWithId = savedMovies.find(element => element.movieId === card.id)
    if (movieWithId !== undefined){
      isLiked = true;
    } else {
      isLiked = false;
    }
  }

  function handleLike() {
    handleLikeMovie(card);
    isLiked = true;
  }

  function handleDelete() {
    handleDeleteMovie(card);
    isLiked = false;
  }

  return (
    <div className="card">
      
      {location.pathname === "/movies" && <button className={`card__save-button ${isLiked ? 'card__save-button-saved' : ''}`} onClick={handleLike} disabled={isLiked}>Сохранить</button>}
      {location.pathname === "/saved-movies" && <button className='card__delete-button' onClick={handleDelete} />}

      <a className='card__link' href={card.trailerLink} target='_blank' rel="noreferrer">
        <img className='card__image' src={image} alt=''/>
      </a>
      
      <div className='card__info'>
        <h3 className='card__name'>{card.nameRU}</h3>
        <p className='card__time'>{time}</p>
      </div>
    </div>
  );
}

export default MoviesCard;