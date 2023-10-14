import React from 'react';
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


import { Routes, Route} from 'react-router-dom';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {
  // Защищенный роут. Стейт изменения статуса
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  function openPopup(){
    setIsPopupOpen(true)
  }

  function closePopup(){
    setIsPopupOpen(false)
  }

  
  return (
    <div className="app">
      <Routes>

        {/* Незащищенные роуты */}
        <Route path='/signup' element={
          <Register />
        }/>

        <Route path='/signin' element={
          <Login />
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
  );
}

export default App;