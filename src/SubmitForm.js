import React, { useState, useEffect } from "react"

import submit_button_img from "./Assets/landing/1_Submit_Button.png"
import say_something from "./Assets/landing/1_Say_Something.png"

const SubmitForm = ({ socket, on_submit_post }) => {
  const [message, setMessage] = useState("")

  // On Change
  const onChange = e => {
    setMessage(e.target.value)
  }

  // On Click
  const onClick = () => {
    if (message !== "") {
      socket.emit("new_message", message)
      setMessage("")
      on_submit_post()
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
      <div>
        <img
          src={say_something}
          height="100vh"
          style={{
            padding: 20,
            maxWidth: "100vw",
          }}
        />
      </div>
      {/*<div> SAY SOMETHING TO CONTINUE </div>
      <div> (SUBMISSIONS WILL BE RECORDED) </div>*/}
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
        backgroundColor: 'white',
        cursor: 'pointer',
        marginTop: 20
      }} >
        <img src={submit_button_img} alt="Submit"  />
      </button>
      </div>
    </div>
  )
}

export default SubmitForm
