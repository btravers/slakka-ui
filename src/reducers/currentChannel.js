import { SET_CURRENT_CHANNEL } from 'actions'

export default (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_CHANNEL:
      return action.channel
    default:
      return state
  }
}
