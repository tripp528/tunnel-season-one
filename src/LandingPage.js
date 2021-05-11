import React, { useState, useEffect } from "react"
import { Row, Col } from 'antd'

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
            paddingBottom: '56.25%',
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
              src="https://player.vimeo.com/video/534636098"
              width="100%"
              height="auto"
              frameborder="0"
              allowFullScreen>
            </iframe>
          </div>
        </Col >
      </Row>
      <Row align="middle" justify="center" gutter={[0,0]}>
        <SubmitForm socket={socket} set_page={set_page} />
      </Row>
    </div>
  )
}

export default LandingPage