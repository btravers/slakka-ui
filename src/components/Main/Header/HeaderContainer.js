import { connect } from 'react-redux'

import Header from './Header'
import { getCurrentChannelName } from 'selectors'

const mapStateToProps = (state) => {
    return {
        title: getCurrentChannelName(state)
    }
}

export default connect(mapStateToProps)(Header)