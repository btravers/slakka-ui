import { ajax } from "rxjs/observable/dom/ajax"

import { POST_MESSAGE } from "actions"
import { getCurrentChannel } from "selectors"

export default (action$, { getState }) =>
  action$
    .ofType(POST_MESSAGE)
    .mergeMap(({ payload }) => {
      const url = `http://${process.env.REACT_APP_SERVER_HOST}:${process.env
        .REACT_APP_SERVER_PORT}/channels/${getCurrentChannel(
        getState()
      )}/messages`
      return ajax.post(url, payload, { "Content-Type": "application/json" })
    })
    .ignoreElements()
