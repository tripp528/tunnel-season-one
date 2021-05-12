import React from 'react'
import { Row, Col } from 'antd'

import background from "./Assets/tunnel_choice/2_Background.jpg"
import choice1_img from "./Assets/tunnel_choice/2_Tunnel_1.png"
import choice2_img from "./Assets/tunnel_choice/2_Tunnel_2.png"
import choice3_img from "./Assets/tunnel_choice/2_Tunnel_3.png"

const TunnelChoice = ({}) => {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      padding: 0,
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%'
    }}>
      <Row align="middle" justify="center">
        <Col span={3}>
          <a href="/">
            <img src={choice1_img} width="100%" href="/" />
          </a>
        </Col>
        <Col span={3}>
          <a href="/">
            <img src={choice2_img} width="100%"/>
          </a>
        </Col>
        <Col span={3}>
          <a href="/">
            <img src={choice3_img} width="100%"/>
          </a>
        </Col>
      </Row>
    </div>
  )
}

export default TunnelChoice
