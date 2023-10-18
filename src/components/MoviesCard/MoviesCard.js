import React from 'react';
import { Link, useLocation} from 'react-router-dom';

function MoviesCard(props) {
  const location = useLocation();
  const [isSaveButton, setIsSaveButton] = React.useState(false);

  function durationConvert(min){
    let hours = Math.trunc(min/60);
    let minutes = min % 60;
    return hours + 'ч ' + minutes + 'м';
  }
  const time = durationConvert(props.card.duration)

  function saveMovie () {
    setIsSaveButton((state) => !state);
  }

  function deleteMovie () {
    console.log('hi');
  }

  return (
    <div className="card">
      
      {location.pathname === "/movies" && <button className={`card__save-button ${isSaveButton ? 'card__save-button-saved' : ''}`} onClick={saveMovie}>Сохранить</button>}
      {location.pathname === "/saved-movies" && <button className='card__delete-button' onClick={deleteMovie} />}

      <img className='card__image' src={props.image} />
      
      <div className='card__info'>
        <h3 className='card__name'>{props.card.nameRU}</h3>
        <p className='card__time'>{time}</p>
      </div>
    </div>
  );
}

export default MoviesCard;