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
      message_history.reverse()
      setMessages([...message_history.map(m => m.content)])
    })
  }

  const getMessages = () => {
    socket.on("message", msg => {
      setMessages([msg, ...messages])
    })
  }

  return (
    <div>
      <div> Submission Log </div>
      {messages.length > 0 &&
        messages.sort( (a, b) => b.id - a.id ).map(msg => (
          <div>
            <div>{msg}</div>
          </div>
        ))}
    </div>
  )
}

export default SubmissionLog
