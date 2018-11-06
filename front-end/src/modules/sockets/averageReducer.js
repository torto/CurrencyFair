export const SOCKET_AVERAGE_LOAD = 'socket/AVERAGE_LOAD'
export const SOCKET_AVERAGE = 'socket/AVERAGE'

const initialState = {
  amountBuy: 0,
  amountSell: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SOCKET_AVERAGE:
      return {
        ...state,
        ...action.average
      }
    default:
      return state
  }
}

export function loadAverage(injection) {
  return dispatch => {
    const handle = {
        handleSocket: (data) => {
          dispatch({
            type: SOCKET_AVERAGE,
            average: data,
          })
        }
    }

    const { handleSocket } = Object.assign(handle, injection)

    dispatch({
      type: SOCKET_AVERAGE_LOAD,
      event: 'average',
      handle: handleSocket
    })
  }
}
