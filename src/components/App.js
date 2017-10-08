import React from 'react'
import { Route } from 'react-router-dom'

import LoginForm from './LoginForm'
import Main from './Main'
import Loader from './Loader'
import Error from './Error'
import styles from './styles'

const App = () => {
  return (
    <div style={styles.container}>
      <Loader />
      <Route exact path="/" component={Main} />
      <Route path="/login" component={LoginForm} />
      <Route path="/error" component={Error} />
    </div>
  )
}

export default App
