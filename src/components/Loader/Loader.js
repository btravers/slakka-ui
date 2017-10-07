import React from 'react'

import { Dimmer, Loader as Progress } from 'semantic-ui-react'

const Loader = ({ isBusy }) => {
  return (
    isBusy && (
      <Dimmer active>
        <Progress size="massive">Loading</Progress>
      </Dimmer>
    )
  )
}

export default Loader
