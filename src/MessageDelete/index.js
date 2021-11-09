import React, { useContext, useEffect, useState } from 'react'
import styles from '../../styles/MessageInput.module.css'
import context from '../common/context'

const MessageDelete = () => {
  const { setMessages } = useContext(context)

  const deleteOnClick = () => {
    fetch('/api/deleteMessage', { method: 'DELETE' })
      .then(() => {
        setMessages([])
      })
      .catch(console.error)
  }

  return (
    <div>
      <button
        className={styles.button}
        style={{ backgroundColor: 'red' }}
        onClick={deleteOnClick}
      >
        Delete
      </button>
    </div>
  )
}

export default MessageDelete
