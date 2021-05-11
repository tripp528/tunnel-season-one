import React, { useState, useEffect } from "react"

import SubmitForm from './SubmitForm'
import SubmissionLog from './SubmissionLog'
import background_land from "./Assets/1_Landing Page/1_Background.jpg"

const LandingPage = ({ socket, set_page }) => {

  return (
    <div style={{
      backgroundImage: `url(${background_land})`,
      padding: 0,
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%'
    }}>
      <div> Hello And Welcome </div>
      <SubmitForm socket={socket} set_page={set_page} />
      <SubmissionLog socket={socket}/>
    </div>
  )
}

export default LandingPage
