import React from 'react'

import styles from './styles'

const Header = ({ title }) => {
    return (
        <div style={styles.container}>
            {title}
        </div>
    )
}

export default Header