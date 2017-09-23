import { connect } from 'react-redux'

import ChannelsList from './ChannelsList'
import { getChannels } from 'selectors'

const mapStateToProps = (state) => ({
    channels: getChannels(state),
})

export default connect(mapStateToProps)(ChannelsList)