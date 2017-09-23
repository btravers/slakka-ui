import { FETCH_MESSAGES_FULFILLED, ADD_MESSAGE } from 'actions'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MESSAGES_FULFILLED:
      return action.payload
    case ADD_MESSAGE:
      return [...state, action.message]
    default:
      return state
  }
}
