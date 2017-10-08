import React, { PureComponent } from 'react'

import ChannelsList from './ChannelsList'
import Header from './Header'
import Messages from './Messages'
import Footer from './Footer'
import styles from './styles'

class Main extends PureComponent {
  componentDidMount() {
    const { initialize } = this.props
    initialize()
  }

  render() {
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
}

export default Main
