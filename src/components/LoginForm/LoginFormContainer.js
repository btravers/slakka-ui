import { connect } from 'react-redux'

import LoginForm from './LoginForm'
import { login } from 'actions'

export default connect(null, { login })(LoginForm)
