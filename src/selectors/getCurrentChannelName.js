import { createSelector } from 'reselect'
import get from 'lodash/get'
import find from 'lodash/find'

import { getChannels, getCurrentChannel } from 'selectors'

export const getCurrentChannelName = createSelector(
  getChannels,
  getCurrentChannel,
  (channels, currentChannel) =>
    get(find(channels, ({ id }) => id === currentChannel), 'name')
)
