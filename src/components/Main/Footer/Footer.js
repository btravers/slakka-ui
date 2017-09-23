import React, { PureComponent } from 'react'
import { Input } from 'semantic-ui-react'

import styles from './styles'

class Footer extends PureComponent {
  state = {
    value: '',
  }

  handleChange = (event, { value }) => {
    this.setState({
      value,
    })
  }

  handleKeyDown = ({ nativeEvent: { key } }) => {
    const { value } = this.state
    if (value && key === 'Enter') {
      const { postMessage } = this.props
      postMessage(value)
      this.setState({ value: '' })
    }
  }

  render() {
    const { value } = this.state
    return (
      <div style={styles.container}>
        <Input
          placeholder="Message"
          icon="send"
          fluid
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
          value={value}
        />
      </div>
    )
  }
}

export default Footer
