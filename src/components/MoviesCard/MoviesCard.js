import React from 'react';
import { Link, useLocation} from 'react-router-dom';

function MoviesCard({card, image, handleLikeMovie, handleDeleteMovie}) {
  const location = useLocation();
  const [isSaveButton, setIsSaveButton] = React.useState(false);
 
  

  function durationConvert(min){
    let hours = Math.trunc(min/60);
    let minutes = min % 60;
    return hours + 'ч ' + minutes + 'м';
  }
  const time = durationConvert(card.duration)

  function saveMovie() {
    handleLikeMovie(card);
    setIsSaveButton(true);
  }

  function deleteMovie() {
    handleDeleteMovie(card);
    setIsSaveButton(false);
    
  }

  return (
    <div className="card">
      
      {location.pathname === "/movies" && <button className={`card__save-button ${isSaveButton ? 'card__save-button-saved' : ''}`} onClick={saveMovie}>Сохранить</button>}
      {location.pathname === "/saved-movies" && <button className='card__delete-button' onClick={deleteMovie} />}

      <a className='card__link' href={card.trailerLink} target='_blank'>
        <img className='card__image' src={image} />
      </a>
      
      <div className='card__info'>
        <h3 className='card__name'>{card.nameRU}</h3>
        <p className='card__time'>{time}</p>
      </div>
    </div>
  );
}

export default MoviesCard;