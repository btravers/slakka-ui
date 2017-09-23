import React from "react"

import ChannelsList from "./ChannelsList"
import Main from "./Main"
import styles from "./styles"

const App = () => {
  return (
    <div style={styles.container}>
      <ChannelsList />
      <Main />
    </div>
  )
}

export default App
