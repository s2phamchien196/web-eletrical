const ipAddress = window.location.host;
const hostName = ipAddress.replace(':3000', ':4000')
export const host = "http://" + hostName;

export const severGET = async (url, params, callBack) => {
  const queryParams = new URLSearchParams();
  for (let key in params) {
    queryParams.append(key, params[key]);
  }


  await fetch(host + url + "?" + queryParams, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
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
      'Content-Type': 'application/json'
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
      Accept: 'application/json'
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
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
    .then((data) => {
      callBack(data.body);
    })
}