import React from 'react'
import SubmissionLog from './SubmissionLog'

const TunnelPage = ({
  socket,
  number
}) => {
  return (
    <div>

      Tunnel # {number}

      <SubmissionLog socket={socket} />
    </div>
  )
}

export default TunnelPage
