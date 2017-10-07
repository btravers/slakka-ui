import React from 'react'

import ChannelsList from './ChannelsList'
import Header from './Header'
import Messages from './Messages'
import Footer from './Footer'
import styles from './styles'

const Main = () => {
  return (
    <div style={styles.container}>
      <ChannelsList />
      <div style={styles.inner}>
        <Header />
        <Messages />
        <Footer />
      </div>
    </div>
  )
}

export default Main
