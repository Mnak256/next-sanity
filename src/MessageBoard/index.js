import React from 'react'
import styles from '../../styles/MessageBoard.module.css'

const MessageBoard = () => {
  return (
    <div>
      <div className={styles.board}>
        <div className={styles.message}>My first div</div>
        <div className={styles.message}>My secont div</div>
        <div className={styles.message}>All hail sanity cms</div>
        <div className={styles.message}>My first div</div>
        <div className={styles.message}>My secont div</div>
      </div>
    </div>
  )
}

export default MessageBoard
