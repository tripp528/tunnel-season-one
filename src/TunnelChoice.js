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
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%'
    }}>
      <Row align="middle" justify="space-around"
        style={{
          height: '10vh',
        }}
      >

      </Row>

      <Row align="middle" justify="space-around"
        style={{
          height: '15vh',
        }}
      >
        <img
          src={chooseatunnel}
          height="100%"
        />
      </Row>

      <Row align="middle" justify="space-around"
        style={{
          height: '10vh',
        }}
      >

      </Row>

      {/* Tunnels */}
      <Row align="top" justify="space-around"
        style={{height: '45vh'}}
      >
        <Col xs={{span: 4, offset: 20, pull: 10}} md={{span: 4, offset: 20, pull: 10}} lg={{span: 4, offset: 0, pull: 0}} xl={{span: 4, offset: 0, pull: 0}}>
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
        <Col xs={{span: 4, offset: 20, pull: 10}} md={{span: 4, offset: 20, pull: 10}} lg={{span: 4, offset: 0, pull: 0}} xl={{span: 4, offset: 0, pull: 0}}>
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
        <Col xs={{span: 4, offset: 20, pull: 10}} md={{span: 4, offset: 20, pull: 10}} lg={{span: 4, offset: 0, pull: 0}} xl={{span: 4, offset: 0, pull: 0}}>
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

      <Row align="middle" justify="space-around"
        style={{
          height: '10vh',
        }}
      >
        <p style={{color: '#BD261C', backgroundColor: '#ECAAB5', textTransform: 'uppercase'}}> warning: after you have made your choice, there is no return </p>
      </Row>

    </div>
  )
}

export default TunnelChoice
