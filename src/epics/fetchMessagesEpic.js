import { ajax } from "rxjs/observable/dom/ajax"

import { fetchMessagesFulfilled, FETCH_MESSAGES } from "actions"

export default action$ =>
  action$
    .ofType(FETCH_MESSAGES)
    .mergeMap(({ channel }) =>
      ajax.getJSON(
        `http://${process.env.REACT_APP_SERVER_HOST}:${process.env
          .REACT_APP_SERVER_PORT}/channels/${channel}/messages`
      )
    )
    .map(response => fetchMessagesFulfilled(response))
