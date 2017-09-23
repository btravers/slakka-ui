import { webSocket } from 'rxjs/observable/dom/webSocket'

import { addMessage, START_LISTENING_NEW_MESSAGES } from 'actions'

export default action$ =>
  action$
    .ofType(START_LISTENING_NEW_MESSAGES)
    .mergeMap(action =>
      webSocket(
        `ws://${process.env.REACT_APP_SERVER_HOST}:${process.env
          .REACT_APP_SERVER_PORT}/messages`
      )
    )
    .retry()
    .map(msg => addMessage(JSON.perse(msg)))
