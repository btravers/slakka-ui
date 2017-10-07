import { combineReducers } from 'redux'

import busy from './busy'
import channels from './channels'
import currentChannel from './currentChannel'
import messages from './messages'
import ready from './ready'

export default combineReducers({
  busy,
  channels,
  currentChannel,
  messages,
  ready,
})
