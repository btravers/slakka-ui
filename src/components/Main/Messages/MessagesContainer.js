import { connect } from 'react-redux'

import Messages from './Messages'
import { getMessages } from 'selectors'

const mapStateToProps = state => ({
  messages: getMessages(state),
})

export default connect(mapStateToProps)(Messages)
