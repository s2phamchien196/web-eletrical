const env = process.env;

export const getApiURL = () => {
  if (env.NODE_ENV === 'production') {
    return 'https://api.cuahangsangquyen.io.vn'
  } else {
    return 'http://localhost:4000'
  }
}