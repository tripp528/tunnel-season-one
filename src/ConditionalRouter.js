import React, { useState } from 'react'

import LandingPage from './LandingPage'
import TunnelChoice from './TunnelChoice'
import TunnelPage from './TunnelPage'

const ConditionalRouter = ({ socket }) => {

  // const [ page, set_page ] = useState('tunnel_choice')
  // const [ page, set_page ] = useState('tunnel_3')
  const [ page, set_page ] = useState('landing')

  return (
    <div>
      {page === 'landing' ?
        <LandingPage socket={socket} set_page={set_page} />
      : null}

      {page === 'tunnel_choice' ?
        <TunnelChoice set_page={set_page}/>
      : null}

      {page === 'tunnel_1' ?
        <TunnelPage socket={socket} number={1}/>
      : null}

      {page === 'tunnel_2' ?
        <TunnelPage socket={socket} number={2}/>
      : null}

      {page === 'tunnel_3' ?
        <TunnelPage socket={socket} number={3}/>
      : null}

    </div>
  )
}


export default ConditionalRouter
