import React, { useState } from 'react'

import LandingPage from './LandingPage'
import TunnelChoice from './TunnelChoice'

const ConditionalRouter = ({ socket }) => {

  // const [ page, set_page ] = useState('tunnel_choice')
  const [ page, set_page ] = useState('landing')

  return (
    <div>
      {page === 'landing' ?
        <LandingPage socket={socket} set_page={set_page} />
      : null}

      {page === 'tunnel_choice' ?
        <TunnelChoice/>
      : null}

    </div>
  )
}


export default ConditionalRouter
