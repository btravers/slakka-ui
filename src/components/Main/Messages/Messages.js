import React from 'react'
import map from 'lodash/map'

import Message from './Message'
import styles from './styles'

const Messages = ({ messages }) => {
  return (
    <div style={styles.container}>
      {map(messages, (message, index) => <Message key={index} {...message} />)}
    </div>
  )
}

export default Messages
