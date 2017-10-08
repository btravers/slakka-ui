import { connect } from 'react-redux'

import Main from './Main'
import { initialize } from 'actions'

export default connect(null, { initialize })(Main)
