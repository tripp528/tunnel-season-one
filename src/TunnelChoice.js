import React from 'react'
import { Row, Col } from 'antd'

import background from "./Assets/tunnel_choice/2_Background.jpg"
import choice1_img from "./Assets/tunnel_choice/tunnel_1.png"
import choice2_img from "./Assets/tunnel_choice/tunnel_2.png"
import choice3_img from "./Assets/tunnel_choice/tunnel_3.png"
import chooseatunnel from "./Assets/tunnel_choice/chooseatunnel.png"

const TunnelChoice = ({ set_page }) => {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      padding: 0,
      height: '100%',
      overflow: 'hidden',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%'
    }}>
      {/* top space */}
      <Row style={{ height: '5%' }}> </Row>

      <Row align="middle" justify="space-around"
        style={{
          height: '15%',
        }}
      >
        <img
          src={chooseatunnel}
          height="100%"
        />
      </Row>

      {/* between tunnel and choices */}
      <Row style={{ height: '5%' }}> </Row>

      {/* Tunnels */}
      <Row align="top" justify="space-around"
        style={{height: '55%'}}
      >
        <Col xs={{span: 8, offset: 16, pull: 8}} md={{span: 8, offset: 16, pull: 8}} lg={{span: 4, offset: 0, pull: 0}} xl={{span: 4, offset: 0, pull: 0}}>
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
        <Col xs={{span: 8, offset: 16, pull: 8}} md={{span: 8, offset: 16, pull: 8}} lg={{span: 4, offset: 0, pull: 0}} xl={{span: 4, offset: 0, pull: 0}}>
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
        <Col xs={{span: 8, offset: 16, pull: 8}} md={{span: 8, offset: 16, pull: 8}} lg={{span: 4, offset: 0, pull: 0}} xl={{span: 4, offset: 0, pull: 0}}>
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


      {/* Warning */}
      <Row align="bottom"
        style={{
          height: '20%',
        }}
      >
        <p style={{color: '#BD261C', backgroundColor: '#ECAAB5', textTransform: 'uppercase', margin: '0'}}> warning: after you have made your choice, there is no return </p>
      </Row>

    </div>
  )
}

export default TunnelChoice
