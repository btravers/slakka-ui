import React, { PureComponent } from 'react'

import styles from './styles'

class Channel extends PureComponent {
  handleClick = () => {
    const { id, setCurrentChannel } = this.props
    setCurrentChannel(id)
  }

  render() {
    const { name, isSelected } = this.props
    const containerStyle = isSelected
      ? { ...styles.container, ...styles.selected }
      : styles.container
    return (
      <div style={containerStyle} onClick={this.handleClick}>
        {name}
      </div>
    )
  }
}

export default Channel
