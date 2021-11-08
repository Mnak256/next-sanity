import React from 'react'
import { Board, Message } from './styles'

const MessageBoard = () => {
  return (
    <div>
      <Board>
        <Message>My first message</Message>
        <Message>My secont message</Message>
        <Message>All hail sanity cms</Message>
        <Message>My first message</Message>
        <Message>My secont message</Message>
      </Board>
    </div>
  )
}

export default MessageBoard
