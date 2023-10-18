import React from 'react';
import { Routes, Route} from 'react-router-dom';
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

// Новый спринт
// Остановился на логине

import CurrentUserContext from '../../contexts/CurrentUserContext';
import {signup, signin, getContent} from '../../utils/MainApi';

function App() {
  // Новый спринт
  const [currentUser, setCurrentUser] = React.useState({});
  // Защищенный роут. Стейт изменения статуса
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  // Новый спринт
  function handleRegister(name, email, password) {
    signup(name, email, password)
      .then(() => {
        console.log('УРА2')
      })
      .catch(() => {
        console.log("лох")
      })
  }

  function handleLogin(email, password) {
    signin(email, password)
    .then((res) => {
      setIsLoggedIn(true);
      console.log(res)
    })
    .catch(() => {
      console.log("лох")
    })
  }

  function checkToken() {
    getContent()
    .then((data) => {
      if (data){
        setIsLoggedIn(true);
        console.log('checkToken')
      }
    })
    .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    checkToken();
  }, [])


  function openPopup(){
    setIsPopupOpen(true)
  }

  function closePopup(){
    setIsPopupOpen(false)
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
                loggedIn={isLoggedIn}
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
                loggedIn={isLoggedIn}
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
                loggedIn={isLoggedIn}
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
      </div>
      
    </CurrentUserContext.Provider>
  );
}

export default App;