import React from "react"
import { render } from "react-dom"
import { createStore, compose, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { createEpicMiddleware } from "redux-observable"
import "semantic-ui-css/semantic.min.css"
import "rxjs"

import App from "components/App"
import reducers from "reducers"
import epics from "epics"
import "./index.css"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const epicMiddleware = createEpicMiddleware(epics)

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(epicMiddleware))
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
