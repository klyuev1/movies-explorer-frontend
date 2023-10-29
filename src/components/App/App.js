import React from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
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
// Новый спринт
import CurrentUserContext from '../../contexts/CurrentUserContext';
import {signup, signin, getContent, signOut, updateProfile, getMovies, postMovie, deleteMovie} from '../../utils/MainApi';
import truth from '../../images/thurh.svg';
import fail from '../../images/fail.svg';
import {DATA_URL, MOVIES_S, MOVIES_M, MOVIES_L, WIDTH_M, WIDTH_L, MOVIES_MORE_M, MOVIES_MORE_L, DURATION} from '../../utils/utils';
import {useResize} from '../../utils/useResize';


function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  // Новый спринт
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [titleInfo, setTitleInfo] = React.useState("");
  const [iconInfo, setIconInfo] = React.useState("");

  const {width} = useResize();
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [formValueFound, setFormValueFound] = React.useState((localStorage.getItem('moviesPlaceholder')) || '');
  const [moviesFound, setMoviesFound] = React.useState(JSON.parse(localStorage.getItem('moviesFound')) || []);
  const [shortMovies, setShortMovies] = React.useState(JSON.parse(localStorage.getItem('shortMovies')) || false);
  const [moviesToDrow, setMoviesToDrow] = React.useState([]);
  const [moviesToWidth, setMoviesToWidth] = React.useState({all: Number, more: Number});
  const [isLoading, setIsLoading] = React.useState(false)
  
  React.useEffect(() => {
    if (isLoggedIn){
    Promise.all([getContent(), getMovies()])
    .then(([userData, moviesData]) => {
      setCurrentUser(userData);
      setSavedMovies(moviesData);
    })
    .catch((err) => console.log(err));
  }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[isLoggedIn]);

  // Функции проверки авторизации
  function checkToken() {
    getContent()
    .then(() => {
      setIsLoggedIn(true);
    })
    .catch((err) => {
      setIsLoggedIn(false);
      console.log(err)
    });
  }

  React.useEffect(() => {
    checkToken();
  }, [isLoggedIn])
  
  // Функции авторизации
  function handleRegister(name, email, password) {
    signup(name, email, password)
      .then(() => {
        signin(email, password)
          .then(() => {
            setIsLoggedIn(true);
            setTitleInfo("Вы успешно зарегистрировались!");
            setIconInfo(truth);
            navigate('/', {replace: true});

            getMovies()
              .then((data)=> {
                setSavedMovies(data);
              })
          })
          .catch(() => {
            setTitleInfo("Что-то пошло не так! Попробуйте ещё раз");
            setIconInfo(fail);
          })
          .finally(() =>{
            handleInfoTooltipClick();
          })
      })
      .catch((error) => {
        if (error === 409){
            setTitleInfo("Пользователь с таким Email уже зарегистрирован");
            setIconInfo(fail);
        } else {
            setTitleInfo("Что-то не так с введенными данными");
            setIconInfo(fail);
        }
      })
      .finally(() =>{
        handleInfoTooltipClick();
      })
    
  }

  function handleLogin(email, password) {
    signin(email, password)
    .then(() => {
      setIsLoggedIn(true);
      setTitleInfo("Вы успешно авторизировались!");
      setIconInfo(truth);
      navigate('/movies', {replace: true});

      getMovies()
        .then((data)=> {
          setSavedMovies(data);
        })
    })
    .catch(() => {
      setTitleInfo("Что-то пошло не так! Попробуйте ещё раз.");
      setIconInfo(fail);
    })
    .finally(() =>{
      handleInfoTooltipClick();
    })
  }

  function HandleSignOut() {
    signOut()
    .then(() => {
      setIsLoggedIn(false);
      setSavedMovies([]);
      setFormValueFound('');
      setShortMovies(false);
      setMoviesFound([]);
      navigate('/')

    })
    .catch((err) => console.log(err))
    .finally(() =>{
      localStorage.clear();
    })
  }

  function handleUpdateUser(name, email) {
    updateProfile(name, email)
      .then((res) => {
        setTitleInfo("Данные о профиле изменены");
        setIconInfo(truth);
        setCurrentUser(res.user);
      })
      .catch(() => {
        setTitleInfo("Что-то пошло не так! Попробуйте ещё раз.");
        setIconInfo(fail);
      })
      .finally(() =>{
        handleInfoTooltipClick();
      })
  }
  

  function handleLikeMovie(card) {
    postMovie({
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: `${DATA_URL}${card.image.url}`,
      trailerLink: card.trailerLink,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
      thumbnail: `${DATA_URL}${card.image.formats.thumbnail.url}`,
      movieId: card.id
    })
    .then(() =>{
      getMovies()
      .then((data) =>{
        setSavedMovies(data)
      })
      .catch((err) => console.log(err));
    })
    .catch((err) => console.log('err'));
  }

  function handleDeleteMovie(card) {
    deleteMovie(card._id)
    .then(() =>{
      setSavedMovies((state) => state.filter((c) => c._id !== card._id));
      getMovies()
      .then((data) =>{
        setSavedMovies(data);

      })
      .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
  }

  function handleChangeNumberCards(width) {
    if (width > WIDTH_L) 
      {setMoviesToWidth({all: MOVIES_L, more: MOVIES_MORE_L})}
    if ((width > WIDTH_M) && (width < WIDTH_L)) 
      {setMoviesToWidth({all: MOVIES_M, more: MOVIES_MORE_M})}
    if (width <= WIDTH_M)
      {setMoviesToWidth({all: MOVIES_S, more: MOVIES_MORE_M})}
    return
  }

  React.useEffect(() => {
    handleChangeNumberCards(width);

  }, [width, moviesFound]);

  React.useEffect(() => {
    if (shortMovies === true) {
      let moviesShort = moviesFound.filter(function(movie) {
        return (movie.duration < DURATION);
      });
      setMoviesToDrow(moviesShort.slice(0, moviesToWidth.all))
    } else {
    setMoviesToDrow(moviesFound.slice(0, moviesToWidth.all))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[moviesToWidth.all, moviesFound, shortMovies]);

  // Попапы
  function openPopup(){
    setIsPopupOpen(true);
  }

  function handleInfoTooltipClick() {
    setIsInfoTooltipOpen(true);
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
              isLoggedIn={isLoggedIn}
              onRegister={handleRegister}
            />
          }/>

          <Route path='/signin' element={
            <Login
              isLoggedIn={isLoggedIn}
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
                openPopup={openPopup}
              />
              <ProtectedRoute
                element={Movies}
                isLoggedIn={isLoggedIn}
                moviesFound={moviesFound}
                setMoviesFound={setMoviesFound}
                savedMovies={savedMovies}
                formValueFound={formValueFound}
                setFormValueFound={setFormValueFound}
                handleLikeMovie={handleLikeMovie}
                handleDeleteMovie={handleDeleteMovie}

                shortMovies = {shortMovies}
                setShortMovies = {setShortMovies}
                
                moviesToWidth={moviesToWidth}
                setMoviesToWidth={setMoviesToWidth}
                moviesToDrow={moviesToDrow}

                isLoading = {isLoading}
                setIsLoading = {setIsLoading}
                
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

                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                handleDeleteMovie={handleDeleteMovie}
                handleLikeMovie={handleLikeMovie}
                shortMovies = {shortMovies}
                setShortMovies = {setShortMovies}
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
                onUpdateUser={handleUpdateUser}
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