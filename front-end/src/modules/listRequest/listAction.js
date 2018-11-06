import axios from 'axios'
import { REQ_LIST_SUCESS, REQ_LIST_ERROR } from './listReducer'
const dependencies = {
  axios
}

export const getList = (injection) => dispatch => {
  const { axios } = Object.assign({}, dependencies, injection)
  return axios.get(`http://localhost:3001/api/list`).then(res => {
    return dispatch({
      type: REQ_LIST_SUCESS,
      payload: {
        data: res.data
      }
    })
  }).catch(error => {
    dispatch({
      type: REQ_LIST_ERROR,
      payload: {
        data: error.name
      }
    })
  })
}
