import React, { useState, useEffect } from "react"
import io from "socket.io-client"

import ConditionalRouter from './ConditionalRouter'

// let endPoint = "http://localhost:5000"
// let endPoint = "/"
// let endPoint = "https://tunnel-season-one.herokuapp.com/"
let endPoint = process.env.REACT_APP_API_URL
console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL)

let socket = io.connect(`${endPoint}`) // {transports: ['websocket']} to get working on heroku ??

const App = () => {
  return (
    <div>
      <ConditionalRouter socket={socket}/>
    </div>
  )
}

export default App
