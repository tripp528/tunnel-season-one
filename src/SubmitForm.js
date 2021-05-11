import React, { useState, useEffect } from "react"

import background_land from "./Assets/1_Landing Page/1_Background.jpg"

const SubmitForm = ({ socket, set_page }) => {
  const [message, setMessage] = useState("")

  // On Change
  const onChange = e => {
    setMessage(e.target.value)
  }

  // On Click
  const onClick = () => {
    if (message !== "") {
      socket.emit("message", message)
      setMessage("")
      set_page('tunnel_choice')
    } else {
      alert("Please Add A Message")
    }
  }

  return (
    <div>
      <div> Submit Something </div>
      <input value={message} name="message" onChange={e => onChange(e)} />
      <button onClick={() => onClick()}>Send Message</button>
    </div>
  )
}

export default SubmitForm
