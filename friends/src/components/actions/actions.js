import axios from 'axios'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START })
  return axios.post('/api/login', creds)
  .then(res => {
    localStorage.setItem('token', res.data.payload)
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
    getData();
  })
}

export const getData = () => {
  axios.get('/api/friends', {
  headers: { Authorization: localStorage.getItem('token') }
  })
  .then(res => {
  console.log(res.data)
  })
  .catch(err => {
  console.log(err)
  })
}
