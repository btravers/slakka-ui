import { SET_BUSY } from 'actions'

export default (state = 0, action) => {
  switch (action.type) {
    case SET_BUSY:
      return action.value ? state + 1 : state - 1
    default:
      return state
  }
}
