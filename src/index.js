import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
import createHistory from 'history/createBrowserHistory'
import {
  ConnectedRouter,
  routerMiddleware as createRouterMiddleware,
} from 'react-router-redux'
import 'semantic-ui-css/semantic.min.css'
import 'rxjs'

import App from 'components/App'
import reducers from 'reducers'
import epics from 'epics'
import './index.css'

const history = createHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const epicMiddleware = createEpicMiddleware(epics)
const routerMiddleware = createRouterMiddleware(history)

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(routerMiddleware, epicMiddleware))
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
