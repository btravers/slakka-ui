import React from "react"

import Header from "./Header"
import Messages from "./Messages"
import Footer from "./Footer"
import styles from "./styles"

const Main = () => {
  return (
    <div style={styles.container}>
      <Header />
      <Messages />
      <Footer />
    </div>
  )
}

export default Main
