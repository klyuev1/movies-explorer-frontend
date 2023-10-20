import React from 'react';
import { Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Popup from '../Popup/Popup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

// Доделан функционал регистрации. Дальше проброс параметров авторизации
// в защищенные роуты, валидация регистрации и логина


// Новый спринт
// Импорты
import CurrentUserContext from '../../contexts/CurrentUserContext';
import {signup, signin, getContent, signOut} from '../../utils/MainApi';
import truth from '../../images/thurh.svg';
import fail from '../../images/fail.svg';
// ----------------------------------------------



function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  // Новый спринт
  // Стейты
  const [currentUser, setCurrentUser] = React.useState({});
  const navigate = useNavigate();
  // Стейты изменения данных InfoTooltip
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [titleInfo, setTitleInfo] = React.useState("");
  const [iconInfo, setIconInfo] = React.useState("");
  


  React.useEffect(() => {
    Promise.all([getContent()])
    .then((res) => {
      const [userData] = res;
      setCurrentUser(userData);
      console.log(userData);
      setIsLoggedIn(true);
    })
    .catch((err) => console.log(err));
    // checkToken();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  

  // Функции авторизации
  function handleRegister(name, email, password) {
    signup(name, email, password)
      .then(() => {
        setIsLoggedIn(true);
        setTitleInfo("Вы успешно зарегистрировались!");
        setIconInfo(truth);
        navigate('/movies', {replace: true});
      })
      .catch(() => {
        setTitleInfo("Что-то пошло не так! Попробуйте ещё раз.");
        setIconInfo(fail);
      })
      .finally(() =>{
        handleInfoTooltipClick();
      })
  }

  function handleLogin(email, password) {
    signin(email, password)
    .then((res) => {
      setIsLoggedIn(true);
      setTitleInfo("Вы успешно зарегистрировались!");
      setIconInfo(truth);
      navigate('/movies', {replace: true});
    })
    .catch(() => {
      setTitleInfo("Что-то пошло не так! Попробуйте ещё раз.");
      setIconInfo(fail);
    })
    .finally(() =>{
      handleInfoTooltipClick();
    })
  }

  // function checkToken() {
  //   getContent()
  //   .then((data) => {
  //     if (data){
  //       setIsLoggedIn(true);
  //       console.log('checkToken');
  //     }
  //   })
  //   .catch((err) => console.log(err));
  // }

  function HandleSignOut() {
    signOut()
    .then(() => console.log("see you again oooooo"))
    .catch((err) => console.log(err));
  }

  // React.useEffect(() => {
  //   checkToken();
  // }, [isLoggedIn])

  // инфотултипклик
  function handleInfoTooltipClick() {
    setIsInfoTooltipOpen(true);
  }
  // ----------------Новый спринт--------------------

  function openPopup(){
    setIsPopupOpen(true);
  }

  function closePopup(){
    setIsPopupOpen(false);
    setIsInfoTooltipOpen(false);
  }

  
  return (
    <CurrentUserContext.Provider value={currentUser} >
      <div className="app">
        <Routes>

          {/* Незащищенные роуты */}
          <Route path='/signup' element={
            <Register 
              onRegister={handleRegister}
            />
          }/>

          <Route path='/signin' element={
            <Login 
              onLogin={handleLogin}
            />
          }/>

          {/* Защенные роуты */}
          <Route path='/' element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
                pinkThemeHeader= 'header__pink'
                pinkThemeLogo= "header__user-logo-pink"
                openPopup= {openPopup}
              />
              <Main/>
              <Footer/>
            </>
          }/>

          <Route path='/movies' element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
                openPopup= {openPopup}
              />
              <ProtectedRoute
                element={Movies}
                isLoggedIn={isLoggedIn}
              />
              <Footer/>
            </>
          }/>
          
          <Route path='/saved-movies' element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
                openPopup= {openPopup}
              />
              <ProtectedRoute
                element={SavedMovies}
                isLoggedIn={isLoggedIn}
              />
              <Footer/>
            </>
          }/>
          
          <Route path='/profile' element={
            <>
              <Header 
                isLoggedIn={isLoggedIn}
                openPopup= {openPopup}
              />
              <ProtectedRoute
                element={Profile}
                isLoggedIn={isLoggedIn}
                onSignOut={HandleSignOut}
              />
            </>
          }/>
          
          <Route path='*' element={
            <NotFound />
          }/>

        </Routes>

        <Popup 
          isOpen={isPopupOpen}
          closePopup = {closePopup}
        />

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closePopup}
          title={titleInfo}
          icon={iconInfo}
        />

      </div>
      
    </CurrentUserContext.Provider>
  );
}

export default App;