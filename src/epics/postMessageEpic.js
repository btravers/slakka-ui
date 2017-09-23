import { ajax } from 'rxjs/observable/dom/ajax'

import { POST_MESSAGE } from 'actions'

export default action$ =>
    action$.ofType(POST_MESSAGE)
        .mergeMap(({ channel, payload }) =>
            ajax.post(`http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/channels/${channel}/messages`, payload, { 'Content-Type': 'application/json' })
                .empty()
        )