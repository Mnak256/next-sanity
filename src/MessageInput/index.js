import React, { useContext, useState } from 'react'
import styles from '../../styles/MessageInput.module.css'
import context from '../common/context'

const MessageBoard = () => {
  const [messageInput, setMessageInput] = useState('')

  const { messages, setMessages } = useContext(context)

  const messageOnChange = ({ target: { value } }) => {
    setMessageInput(value)
  }

  const addOnClick = () => {
    setMessages([...messages, messageInput])
    fetch('/api/putMessage', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: messageInput })
    })
    setMessageInput('')
  }

  const messageOnKeyPress = ({ code }) => {
    if (code === 'Enter') {
      addOnClick()
    }
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={messageInput}
        onChange={messageOnChange}
        onKeyPress={messageOnKeyPress}
      />
      <button className={styles.button} onClick={addOnClick}>
        Add
      </button>
    </div>
  )
}

export default MessageBoard
