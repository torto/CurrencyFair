export const SOCKET_LAST_MESSAGE_LOAD = 'socket/LAST_MESSAGE_LOAD'
export const SOCKET_LAST_MESSAGE = 'socket/LAST_MESSAGE'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SOCKET_LAST_MESSAGE:
      return {
        ...state,
        ...action.lastMessage
      }
    default:
      return state
  }
}

export function loadLastMessage(injection) {
  return dispatch => {
    const handle = {
      handleSocket: data => {
        dispatch({
          type: SOCKET_LAST_MESSAGE,
          lastMessage: data,
        })
      }
    }

    const { handleSocket } = Object.assign(handle, injection)
    dispatch({
      type: SOCKET_LAST_MESSAGE_LOAD,
      event: 'last-message',
      handle: handleSocket
    })
  }
}
