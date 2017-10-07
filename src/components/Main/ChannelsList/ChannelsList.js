import React from 'react'
import map from 'lodash/map'

import Channel from './Channel'
import styles from './styles'

const ChannelsList = ({ channels }) => {
  return (
    <div style={styles.container}>
      <div style={styles.title}>Slakka</div>
      <div style={styles.channels}>
        <div style={styles.channelsTitle}>Channels</div>
        {map(channels, (channel, index) => (
          <Channel key={index} {...channel} />
        ))}
      </div>
    </div>
  )
}

export default ChannelsList
