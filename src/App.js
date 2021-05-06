import React, { useState, useEffect } from "react"
import io from "socket.io-client"

// assets
import background_land from "./Assets/1_Landing Page/1_Background.jpg"

// let endPoint = "http://localhost:5000"
// let endPoint = "/"
// let endPoint = "https://tunnel-season-one.herokuapp.com/"
let endPoint = process.env.REACT_APP_API_URL
console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL)

let socket = io.connect(`${endPoint}`) // {transports: ['websocket']} to get working on heroku ??

const App = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("")

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

  // On Change
  const onChange = e => {
    setMessage(e.target.value)
  }

  // On Click
  const onClick = () => {
    if (message !== "") {
      socket.emit("message", message)
      setMessage("")
    } else {
      alert("Please Add A Message")
    }
  }

  return (
    <div style={{ backgroundImage: `url(${background_land})` }}>
      <p> Hello And Welcome </p>
      <input value={message} name="message" onChange={e => onChange(e)} />
      <button onClick={() => onClick()}>Send Message</button>
      {messages.length > 0 &&
        messages.sort( (a, b) => b.id - a.id ).map(msg => (
          <div>
            <p>{msg}</p>
          </div>
        ))}
    </div>
  )
}

export default App
