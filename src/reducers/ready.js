import { READY } from 'actions'

export default (state = false, action) => {
  switch (action.type) {
    case READY:
      return true
    default:
      return state
  }
}
