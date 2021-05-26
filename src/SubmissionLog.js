import React, { useState, useEffect } from "react"

const SubmissionLog = ({ socket }) => {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages()
  }, [messages.length])

  useEffect(() => {
    get_message_history()
    socket.emit("logged_in")
  }, [])

  const get_message_history = () => {
    socket.on("message_history", message_history => {
      setMessages(message_history)
    })
  }

  const getMessages = () => {
    socket.on("new_message", msg => {
      console.log(msg)
      setMessages([...messages, msg])
    })
  }

  return (
    <div
      style={{
        height: '70px',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column-reverse',
      }}
    >
      <div>
        <div> Submission Log </div>

        {messages.length > 0 &&
          messages.map(msg => (
            <div key={msg.id}> {msg.content} </div>
          ))}
      </div>
    </div>
  )
}

export default SubmissionLog
