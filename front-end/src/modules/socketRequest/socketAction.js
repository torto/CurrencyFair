import axios from 'axios'
const dependencies = {
  axios
}

export const loadSocket = (injection) => dispatch => {
  const { axios } = Object.assign({}, dependencies, injection)
  return axios.get(`http://localhost:3001/api/loadSocket`).then(res => {
    return
  })
}
