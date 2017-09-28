import { webSocket } from 'rxjs/observable/dom/webSocket'

import { addMessage, START_LISTENING_NEW_MESSAGES } from 'actions'
import config from 'config'

const { serverHost: host, serverPort: port } = config

export default action$ =>
  action$
    .ofType(START_LISTENING_NEW_MESSAGES)
    .mergeMap(action => webSocket(`ws://${host}:${port}/api/messages`))
    .retry()
    .map(msg => addMessage(JSON.perse(msg)))
