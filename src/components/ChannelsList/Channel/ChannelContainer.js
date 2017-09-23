import { connect } from 'react-redux'

import Channel from './Channel'
import { getCurrentChannel } from 'selectors'
import { setCurrentChannel } from 'actions'

const mapStateToProps = (state, { id }) => {
    return {
        isSelected: getCurrentChannel(state).id === id,
    }
}

export default connect(mapStateToProps, { setCurrentChannel })(Channel)