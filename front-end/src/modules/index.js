import { combineReducers } from 'redux'
import count from './sockets/counterReducer'
import average from './sockets/averageReducer'
import lastMessage from './sockets/lastMessageReducer'
import countrys from './sockets/countrysReducer'
import today from './sockets/todayReducer'
import list from './listRequest/listReducer'

export default combineReducers({
  count,
  average,
  lastMessage,
  countrys,
  today,
  list
})
