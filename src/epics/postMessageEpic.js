import { ajax } from 'rxjs/observable/dom/ajax'

import { POST_MESSAGE } from 'actions'
import { getCurrentChannel } from 'selectors'
import config from 'config'

const { serverHost: host, serverPort: port } = config

export default (action$, { getState }) =>
  action$
    .ofType(POST_MESSAGE)
    .mergeMap(({ payload }) =>
      ajax.post(
        `http://${host}:${port}/api/channels/${getCurrentChannel(
          getState()
        )}/messages`,
        payload,
        { 'Content-Type': 'application/json' }
      )
    )
    .ignoreElements()
