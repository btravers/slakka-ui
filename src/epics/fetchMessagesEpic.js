import { ajax } from 'rxjs/observable/dom/ajax'

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
        )}/messages`
      )
    )
    .map(response => fetchMessagesFulfilled(response))
