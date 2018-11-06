export const SOCKET_COUNTER_LOAD = 'socket/COUNTER_LOAD'
export const SOCKET_COUNTER = 'socket/COUNTER'

const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SOCKET_COUNTER:
      return {
        ...state,
        count: action.count
      }
    default:
      return state
  }
}

export function loadCounter(injection) {
  return dispatch => {
    const handle = {
      handleSocket: data => {
        dispatch({
          type: SOCKET_COUNTER,
          count: data,
        })
      }
    }

    const { handleSocket } = Object.assign(handle, injection)
    dispatch({
      type: SOCKET_COUNTER_LOAD,
      event: 'counter',
      handle: handleSocket
    })
  }
}
