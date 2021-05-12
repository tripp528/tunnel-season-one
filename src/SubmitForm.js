import React, { useState, useEffect } from "react"

import submit_button_img from "./Assets/landing/1_Submit_Button.png"

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
    <div style={{
      color: 'white',
      textAlign: 'center',
      font: 'small-caps bold 24px/1 sans-serif'
    }}
    >
      <div> SAY SOMETHING TO CONTINUE </div>
      <div> (SUBMISSIONS WILL BE RECORDED) </div>
      <input
        value={message}
        name="message"
        onChange={e => onChange(e)}
        style={{
          '-webkit-border-radius': '20px',
          '-moz-border-radius': '20px',
          'border-radius': '20px',
          'border': '1px solid #2d9fd9',
          'color': '#a0d18c',
          'width': '250px',
          'height': '50px',
          'padding': '20px',
        }}
      />
      <div>
      <button onClick={() => onClick()} style={{
        // "mix-blend-mode": "multiply",
        borderRadius: 100,
        border: 0,
        padding: 0,
        backgroundColor: 'white'
      }} >
        <img src={submit_button_img} alt="Submit" />
      </button>
      </div>
    </div>
  )
}

export default SubmitForm
