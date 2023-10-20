import { CheckRes } from "./utils"

// export const BASE_URL = "https://api.klyuev-movies.nomoredomainsrocks.ru"
export const BASE_URL = "http://localhost:3001"


// Регистрация. Авторизация. Аутентификация
export const signup = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({name:name, email: email, password: password})
  })
  .then(CheckRes)
};

export const signin = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({email, password})
  })
  .then(CheckRes)
};

export const signOut = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
}

//Данные о пользователе
export const getContent = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
  .then(CheckRes)
}