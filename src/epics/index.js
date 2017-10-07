import { combineEpics } from 'redux-observable'

import fetchChannelsEpic from './fetchChannelsEpic'
import fetchMessagesEpic from './fetchMessagesEpic'
import initializeEpic from './initializeEpic'
import loginEpic from './loginEpic'
import postMessageEpic from './postMessageEpic'

export default combineEpics(
  fetchChannelsEpic,
  fetchMessagesEpic,
  initializeEpic,
  loginEpic,
  postMessageEpic
)
