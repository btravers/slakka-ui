import { Observable } from 'rxjs/Rx'
import {
  ready,
  fetchChannels,
  setCurrentChannel,
  INITIALIZE,
  FETCH_CHANNELS_FULFILLED,
  FETCH_MESSAGES_FULFILLED,
} from 'actions'

export default action$ =>
  action$
    .ofType(INITIALIZE)
    .map(() =>
      Observable.merge(
        Observable.of(fetchChannels()),
        action$
          .ofType(FETCH_CHANNELS_FULFILLED)
          .first()
          .pluck('payload')
          .mergeAll()
          .find(channel => channel.name === 'general')
          .pluck('id')
          .map(id => setCurrentChannel(id)),
        action$
          .ofType(FETCH_MESSAGES_FULFILLED)
          .first()
          .map(() => ready())
      )
    )
    .catch(() => ready())
    .mergeAll()
