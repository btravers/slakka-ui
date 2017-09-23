import { ajax } from "rxjs/observable/dom/ajax"

import { fetchChannelsFulfilled, FETCH_CHANNELS } from "actions"

export default action$ =>
  action$
    .ofType(FETCH_CHANNELS)
    .mergeMap(() =>
      ajax.getJSON(
        `http://${process.env.REACT_APP_SERVER_HOST}:${process.env
          .REACT_APP_SERVER_PORT}/channels`
      )
    )
    .map(response => fetchChannelsFulfilled(response))
