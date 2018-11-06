export const SOCKET_TODAY_LOAD = 'socket/TODAY_LOAD'
export const SOCKET_TODAY = 'socket/TODAY'

const initialState = {
  count: 0,
  average: {
    amountBuy: 0,
    amountSell: 0
  },
  countrys: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SOCKET_TODAY:
      return {
        ...state,
        ...action.today
      }
    default:
      return state
  }
}

export function loadToday(injection) {
  return dispatch => {
    const handle = {
      handleSocket: data => {
        dispatch({
          type: SOCKET_TODAY,
          today: data,
        })
      }
    }

    const { handleSocket } = Object.assign(handle, injection)
    dispatch({
      type: SOCKET_TODAY_LOAD,
      event: 'today',
      handle: handleSocket
    })
  }
}
