import React from 'react'

import styles from './styles'

const Message = ({ date, author, content }) => {
  return (
    <div style={styles.container}>
      <div style={styles.timestamp}>{date}</div>
      <div style={styles.content}>
        <div style={styles.author}>{author}</div>
        <div style={styles.body}>{content}</div>
      </div>
    </div>
  )
}

export default Message
