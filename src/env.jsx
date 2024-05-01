const env = process.env;

export const getApiURL = () => {
  if (env.NODE_ENV === 'production') {
    return 'https://api.vatusangquyen.vn'
  } else {
    return 'http://localhost:4000'
  }
}