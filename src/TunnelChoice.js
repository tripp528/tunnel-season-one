import React from 'react'
import { Row, Col } from 'antd'

import background from "./Assets/tunnel_choice/2_Background.jpg"
import choice1_img from "./Assets/tunnel_choice/2_Tunnel_1.png"
import choice2_img from "./Assets/tunnel_choice/2_Tunnel_2.png"
import choice3_img from "./Assets/tunnel_choice/2_Tunnel_3.png"

const TunnelChoice = ({ set_page }) => {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      padding: 0,
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%'
    }}>
      <Row align="middle" justify="space-around"
        style={{minHeight: '100vh'}}
      >
        <Col xs={6} lg={4}>
          <img
            onClick={() => set_page('tunnel_1')}
            src={choice1_img}
            width="100%"
            style={{
              borderRadius: 100,
              cursor: 'pointer',
            }}
          />
        </Col>
        <Col xs={6} lg={4}>
          <img
            onClick={() => set_page('tunnel_2')}
            src={choice2_img}
            width="100%"
            style={{
              borderRadius: 100,
              cursor: 'pointer',
            }}
          />
        </Col>
        <Col xs={6} lg={4}>
          <img
            onClick={() => set_page('tunnel_3')}
            src={choice3_img}
            width="100%"
            style={{
              borderRadius: 100,
              cursor: 'pointer',
            }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default TunnelChoice
