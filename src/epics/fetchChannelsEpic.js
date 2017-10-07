import { ajax } from 'rxjs/observable/dom/ajax'

import { fetchChannelsFulfilled, FETCH_CHANNELS } from 'actions'
import config from 'config'

const { serverHost: host, serverPort: port } = config

export default action$ =>
  action$
    .ofType(FETCH_CHANNELS)
    .mergeMap(() =>
      ajax.getJSON(`http://${host}:${port}/api/channels`, {
        Authorization: localStorage.getItem('jwt'),
      })
    )
    .map(response => fetchChannelsFulfilled(response))
