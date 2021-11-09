import React, { useEffect, useState } from 'react'
import styles from '../../styles/MessageBoard.module.css'
import { getMessageBoard } from '../common/apolloClient'
import { arrayToArray } from '../common/utils'

const MessageBoard = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessageBoard()
      .then((data) => setMessages(arrayToArray(data, 'message')))
      .catch(console.error)
  }, [])

  return (
    <div>
      <div className={styles.board}>
        {messages.map((message, index) => (
          <div className={styles.message} key={`message-key-${index}`}>
            {message}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MessageBoard
