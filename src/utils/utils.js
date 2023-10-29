export const CheckRes = (res) => {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Error: ${res.status}`)
}

export const DURATION = 40;
export const WIDTH_M = 800;
export const WIDTH_L = 1100;
// export const WIDTH_XL = 1120;
export const MOVIES_S = 5;
export const MOVIES_M = 8;
export const MOVIES_L = 12;
// export const MOVIES_XL = 12;
export const MOVIES_MORE_M = 2;
export const MOVIES_MORE_L = 3;
// export const MOVIES_MORE_XL = 4;

export const DATA_URL = 'https://api.nomoreparties.co'