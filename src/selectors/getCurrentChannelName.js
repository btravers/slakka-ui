import { createSelector } from 'reselect'
import get from 'lodash/get'

import { getChannels, getCurrentChannel } from 'selectors'

export const getCurrentChannelName = createSelector(
  getChannels,
  getCurrentChannel,
  (channels, currentChannel) =>
    get(channels.find(({ id }) => id === currentChannel), 'name')
)
