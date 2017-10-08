import { Observable } from 'rxjs/Rx'
import { ajax } from 'rxjs/observable/dom/ajax'
import { push } from 'react-router-redux'

import { LOGIN, initialize } from 'actions'
import config from 'config'

const { serverHost: host, serverPort: port } = config

export default action$ =>
  action$
    .ofType(LOGIN)
    .mergeMap(({ payload }) =>
      ajax.post(`http://${host}:${port}/api/login`, payload, {
        'Content-Type': 'application/json',
      })
    )
    .map(function(response) {
      localStorage.setItem(
        'jwt',
        response.xhr.getResponseHeader('access-token')
      )
      return Observable.of(push('/'), initialize())
    })
    .mergeAll()
