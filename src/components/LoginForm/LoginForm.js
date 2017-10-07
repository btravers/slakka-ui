import React, { PureComponent } from 'react'
import { Button, Form, Header } from 'semantic-ui-react'

class LoginForm extends PureComponent {
  state = {}

  handleSubmit = event => {
    const { login } = this.props
    const { username, password } = this.state
    login(username, password)
    event.preventDefault()
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <Header as="h2" color="teal" textAlign="center">
          Login
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name="username"
            onChange={this.handleInputChange}
            icon="user"
            iconPosition="left"
            placeholder="Email"
            fluid
          />
          <Form.Input
            name="password"
            onChange={this.handleInputChange}
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            fluid
          />
          <Button type="submit" color="teal" fluid size="large">
            Login
          </Button>
        </Form>
      </div>
    )
  }
}

export default LoginForm
