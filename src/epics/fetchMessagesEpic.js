import { Observable } from 'rxjs/Rx'
import { ajax } from 'rxjs/observable/dom/ajax'
import { push } from 'react-router-redux'

import { fetchMessagesFulfilled, SET_CURRENT_CHANNEL } from 'actions'
import { getCurrentChannel } from 'selectors'
import config from 'config'

const { serverHost: host, serverPort: port } = config

export default (action$, { getState }) =>
  action$
    .ofType(SET_CURRENT_CHANNEL)
    .mergeMap(() =>
      ajax.getJSON(
        `http://${host}:${port}/api/channels/${getCurrentChannel(
          getState()
        )}/messages`,
        { Authorization: localStorage.getItem('jwt') }
      )
    )
    .map(response => fetchMessagesFulfilled(response))
    .catch(
      ({ status }) =>
        status === 401 ? Observable.of(push('/login')) : Observable.of('/error')
    )
