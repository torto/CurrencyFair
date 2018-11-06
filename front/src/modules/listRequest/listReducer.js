export const REQ_LIST_SUCESS = 'request/LIST_SUCESS'
export const REQ_LIST_ERROR = 'request/LIST_ERROR'

const initialState = {
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQ_LIST_SUCESS:
      return {
        ...state,
        data: action.payload.data
      }
    case REQ_LIST_ERROR:
      return {
        ...state,
        error: action.data
      }
    default:
      return state
  }
}
