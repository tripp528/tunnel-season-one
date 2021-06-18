import React, { useState, useEffect } from "react"
import { Row, Col } from 'antd'

import SubmitForm from './SubmitForm'
import SubmissionLog from './SubmissionLog'
import background_land from "./Assets/landing/1_Background.jpg"

const LandingPage = ({ socket, set_page }) => {

  return (
    <div style={{
      backgroundImage: `url(${background_land})`,
      padding: 0,
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      overflow: 'hidden'
    }}>
      <Row
        align="middle"
        justify="center"
        style={{paddingTop: 100}}
        // gutter={[0,0]}
      >
        <Col span={18}>
          <div style={{position: 'relative',
            width: '100%',
            height: '0px',
            paddingBottom: 'min(56.25%, 50vh)',
            // marginLeft: '10%',
            // marginRight: '10%',
          }}>
            <iframe style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
            }}
              title="vimeo-player"
              src="https://player.vimeo.com/video/552162107"
              width="100%"
              height="auto"
              frameborder="0"
              allowFullScreen>
            </iframe>
          </div>
        </Col >
      </Row>
      <Row align="middle" justify="center" gutter={[0,0]} >
        <SubmitForm  socket={socket} on_submit_post={() => set_page('tunnel_choice')} />
      </Row>
    </div>
  )
}

export default LandingPage
