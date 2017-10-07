import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LoginForm from './LoginForm'
import Main from './Main'
import Loader from './Loader'
import styles from './styles'

const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        <Loader />
        <Route exact path="/" component={Main} />
        <Route path="/login" component={LoginForm} />
      </div>
    </Router>
  )
}

export default App
