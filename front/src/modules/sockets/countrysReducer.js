export const SOCKET_COUNTRY_LOAD = 'socket/COUNTRY_LOAD'
export const SOCKET_COUNTRY = 'socket/COUNTRY'

const initialState = {
  countrys: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SOCKET_COUNTRY:
      return {
        ...state,
        countrys: action.countrys
      }
    default:
      return state
  }
}

export function loadCountrys(injection) {
  return dispatch => {
    const handle = {
      handleSocket: data => {
        dispatch({
          type: SOCKET_COUNTRY,
          countrys: data,
        })
      }
    }

    const { handleSocket } = Object.assign(handle, injection)
    dispatch({
      type: SOCKET_COUNTRY_LOAD,
      event: 'originating-country',
      handle: handleSocket
    })
  }
}
