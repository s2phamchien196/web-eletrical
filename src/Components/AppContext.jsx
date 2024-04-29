import Cookies from 'js-cookie'
import { getApiURL } from "../env";
export const host = getApiURL();
export let user = {};
export let info = {};

export const getInfo = () => {
  return info;
}

export const setInfo = (infoDb) => {
  info = infoDb;
}

export const getUser = () => {
  if (!user['_id']) {
    let userCookie = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : { cartData: {} };
    return userCookie;
  }
  return user;
}

export const setUser = (userDb) => {
  if (userDb['errors']) {
    user = { cartData: {} };
  } else {
    user = userDb;
  }
}

const token = localStorage.getItem("auth-token");
const authToken = JSON.parse(token);

export const severGET = async (url, params, callBack) => {
  const queryParams = new URLSearchParams();
  for (let key in params) {
    queryParams.append(key, params[key]);
  }


  await fetch(host + url + "?" + queryParams, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'auth-token': authToken,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      callBack(data);
    })
}

export const severPOST = async (url, body, callBack) => {
  await fetch(host + url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'auth-token': authToken,
    },
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
    .then((data) => {
      callBack(data.body);
    })
};


export const severAuthentication = async (url, body, callBack) => {
  await fetch(host + url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
    .then((data) => {
      callBack(data.body);
    })
};


export const severImagePOST = async (url, body, callBack) => {
  await fetch(host + url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'auth-token': authToken,
    },
    body: body
  })
    .then((res) => res.json())
    .then((data) => {
      callBack(data);
    })
}

export const severPUT = async (url, body, callBack) => {
  await fetch(host + url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'auth-token': authToken,
    },
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
    .then((data) => {
      callBack(data.body);
    })
}