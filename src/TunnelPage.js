import React from 'react'
import { Row, Col } from 'antd'

import SubmissionLog from './SubmissionLog'
import SubmitForm from './SubmitForm'

const TunnelPage = ({
  socket,
  number
}) => {
  return (
    <div>

      Tunnel # {number}

      <Row
        align="middle"
        // justify="center"
      >
        <Col span={6}>
          <SubmissionLog socket={socket} />
          <SubmitForm socket={socket} on_submit_post={() => {}} />
        </Col>
      </Row>
    </div>
  )
}

export default TunnelPage
