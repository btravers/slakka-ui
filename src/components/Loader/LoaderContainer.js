import { connect } from 'react-redux'

import Loader from './Loader'
import { isBusy } from 'selectors'

const mapStateToProps = state => {
  return {
    isBusy: isBusy(state),
  }
}

export default connect(mapStateToProps)(Loader)
