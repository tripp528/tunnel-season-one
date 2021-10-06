import React, { useEffect } from 'react'
import { Row, Col } from 'antd'


const TunnelChoice = ({ set_page }) => {


  return (
    <div style={{
      backgroundImage: `url("/Assets/tunnel_choice/2_Background.jpg")`,
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
          src="/Assets/tunnel_choice/chooseatunnel.png"
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
            src="/Assets/tunnel_choice/tunnel_1.png"
            width="100%"
            style={{
              borderRadius: 100,
              cursor: 'pointer',
              marginBottom: 20,
            }}
          />
        </Col>
        <Col xs={{span: 8, offset: 16, pull: 8}} md={{span: 8, offset: 16, pull: 8}} lg={{span: 4, offset: 0, pull: 0}} xl={{span: 4, offset: 0, pull: 0}}>
          <img
            onClick={() => set_page('tunnel_2')}
            src="/Assets/tunnel_choice/tunnel_2.png"
            width="100%"
            style={{
              borderRadius: 100,
              cursor: 'pointer',
              marginBottom: 20,
            }}
          />
        </Col>
        <Col xs={{span: 8, offset: 16, pull: 8}} md={{span: 8, offset: 16, pull: 8}} lg={{span: 4, offset: 0, pull: 0}} xl={{span: 4, offset: 0, pull: 0}}>
          <img
            onClick={() => set_page('tunnel_3')}
            src="/Assets/tunnel_choice/tunnel_3.png"
            width="100%"
            style={{
              borderRadius: 100,
              cursor: 'pointer',
              marginBottom: 20,
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
