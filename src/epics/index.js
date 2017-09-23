import { combineEpics } from 'redux-observable'

import fetchChannelsEpic from './fetchChannelsEpic'
import postMessageEpic from './postMessageEpic'

export default combineEpics(fetchChannelsEpic, postMessageEpic)
