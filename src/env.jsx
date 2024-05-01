const env = process.env;

export const getApiURL = () => {
  if (env.NODE_ENV === 'production') {
    return 'https://api.vattusangquyen.vn'
  } else {
    return 'http://localhost:4000'
  }
}