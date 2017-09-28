import { combineReducers } from 'redux'

import channels from './channels'
import currentChannel from './currentChannel'
import messages from './messages'
import ready from './ready'

export default combineReducers({
  channels,
  currentChannel,
  messages,
  ready,
})
