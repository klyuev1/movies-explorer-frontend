import { React, useState, useContext, useEffect } from "react";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import UseValidation from '../../utils/UseValidation'; 

function Profile({onSignOut, onUpdateUser}) {
  const currentUser = useContext(CurrentUserContext);

  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
  });

  const [isChanges, setIsChanges] = useState(false);
  const { formErrors, isValidForm, handleChange, resetForm } = UseValidation(formValue, setFormValue);

  useEffect(() => {
    if ((formValue.email !== currentUser.email) || (formValue.name !== currentUser.name)) {
        setIsChanges(true);
    } else {
        setIsChanges(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValue, setIsChanges]);


  useEffect(() => {
    resetForm(currentUser, {}, true);
    setIsChanges(false);
  }, [currentUser, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(formValue.name, formValue.email)
  }
  
  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
      <form className='profile__form' noValidate>
        
        <label className='profile__label'>
          Имя
          <input
            className={`profile__input ${formErrors.name ? "profile__input_error" : ""}`}
            id='name' name='name' type="name" placeholder='Ваше имя' required
            value={formValue.name} onChange={handleChange}
          />
        </label>
        <span className="profile__input-span_error">{formErrors.name}</span>
        
        <label className='profile__label'>
          E-mail
          <input
            className={`profile__input ${formErrors.email ? "profile__input_error" : ""}`}
            id='email' name='email' type="email" placeholder='Ваш Email' required
            value={formValue.email} onChange={handleChange}
          />
        </label>
        <span className="profile__input-span_error">{formErrors.email}</span>

      </form>

      <button
        className='profile__edit-button'type='submit'
        disabled={!isValidForm || !isChanges}
        onClick={handleSubmit}
        >Редактировать</button>
      <button className='profile__exit-button' type='button' onClick={onSignOut}>Выйти из аккаунта</button>

    </section>
  )
}

export default Profile;