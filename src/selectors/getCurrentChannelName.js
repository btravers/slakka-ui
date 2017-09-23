import { createSelector } from 'reselect'

import { getChannels, getCurrentChannel } from 'selectors'

export const getCurrentChannelName = createSelector(
    getChannels, getCurrentChannel,
    (channels, currentChannel) => 
        channels.find(({ id }) => id === currentChannel)
)