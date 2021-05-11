import React, { useState } from 'react'

import LandingPage from './LandingPage'

const ConditionalRouter = ({ socket }) => {

  const [ page, set_page ] = useState('landing')

  return (
    <div>
      {page === 'landing' ?
        <LandingPage socket={socket} set_page={set_page} />
      : null}

      {page === 'tunnel_choice' ?
        <div> tunnel_choice </div>
      : null}

    </div>
  )
}


export default ConditionalRouter
