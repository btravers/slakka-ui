import { ajax } from 'rxjs/observable/dom/ajax'

import { fetchMessagesFulfilled, FETCH_MESSAGES } from 'actions'
import { getCurrentChannel } from 'selectors'

export default (action$, { getState }) =>
  action$
    .ofType(FETCH_MESSAGES)
    .mergeMap(() =>
      ajax.getJSON(
        `http://${process.env.REACT_APP_SERVER_HOST}:${process.env
          .REACT_APP_SERVER_PORT}/channels/${getCurrentChannel(
          getState()
        )}/messages`
      )
    )
    .map(response => fetchMessagesFulfilled(response))
