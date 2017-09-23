import { combineReducers } from 'redux'

import channels from './channels'
import currentChannel from './currentChannel'
import messages from './messages'

export default combineReducers({
  channels,
  currentChannel,
  messages,
})
