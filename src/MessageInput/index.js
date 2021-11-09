import React from 'react'
import styles from '../../styles/MessageInput.module.css'

const MessageBoard = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} />
      <button className={styles.button}>Add</button>
    </div>
  )
}

export default MessageBoard
