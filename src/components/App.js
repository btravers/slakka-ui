import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Dimmer, Loader } from 'semantic-ui-react'

import { initialize } from 'actions'
import { isReady } from 'selectors'
import ChannelsList from './ChannelsList'
import Main from './Main'
import styles from './styles'

class App extends PureComponent {
  componentDidMount() {
    const { initialize } = this.props
    initialize()
  }

  render() {
    const { isReady } = this.props

    return (
      <div style={styles.container}>
        {isReady || (
          <Dimmer active>
            <Loader size="massive">Loading</Loader>
          </Dimmer>
        )}
        <ChannelsList />
        <Main />
      </div>
    )
  }
}

const mapStateToPros = state => {
  return {
    isReady: isReady(state),
  }
}

export default connect(mapStateToPros, { initialize })(App)
