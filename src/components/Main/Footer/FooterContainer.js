import { connect } from 'react-redux'

import { postMessage } from 'actions'
import Footer from './Footer'

export default connect(null, { postMessage })(Footer)