import React, { useState, useEffect } from "react"
import { Row, Col, Input } from 'antd'

const SubmissionLog = ({ socket }) => {

  const [messages, setMessages] = useState([])
  const [message, set_message] = useState("")

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
      setMessages([...messages, msg])
    })
  }

  return (
    <div
      style={{
        height: '90vh',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column-reverse',
        colorScheme: 'dark'
      }}
    >
      <div>
        <div> Submission Log </div>

        {messages.length > 0 &&
          messages.map(msg => (
            <div
              key={msg.id}
              style={{
                border: '1px solid #2A2C2F',
                borderRadius: '10px',
                margin: 10
              }}
            >
              {msg.content}
            </div>
          ))}

          <Input
            style={{margin: '10%', width: '80%'}}
            value={message}
            onChange={e => set_message(e.target.value)}
            onPressEnter={e => {
              if (message !== "") {
                socket.emit("new_message", message)
                set_message("")
              } else {
                alert("Please Add A Message")
              }
            }}
            placeholder="Enter"
          />
      </div>
    </div>
  )
}

export default SubmissionLog
