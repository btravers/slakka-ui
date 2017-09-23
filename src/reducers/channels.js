import { FETCH_CHANNELS_FULFILLED } from "actions"

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CHANNELS_FULFILLED:
      return action.channels
    default:
      return state
  }
}
