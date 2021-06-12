import React, { useState, useEffect } from "react"
import { Row, Col, Input } from 'antd'
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import SubmissionLog from './SubmissionLog'
import SubmitForm from './SubmitForm'
import hammer from "./Assets/pages/hammer.jpg"
import bg_1 from "./Assets/pages/Tunnel_1BG.jpg"
import bg_2 from "./Assets/pages/Tunnel_2BG.jpg"
import bg_3 from "./Assets/pages/Tunnel_3BG.jpg"
// - Tunnel 1: https://vimeo.com/552161937
// - Tunnel 2: https://vimeo.com/552162265
// - Tunnel 3: https://vimeo.com/552162451

import './tunnelpage.css'

const assets = {
  1: {bg: bg_1, url: 'https://player.vimeo.com/video/552161937'},
  2: {bg: bg_2, url: 'https://player.vimeo.com/video/552162265'},
  3: {bg: bg_3, url: 'https://player.vimeo.com/video/552162451'},
}

const TunnelPage = ({
  socket,
  number
}) => {

  return (
    <div id="tunnelpage" style={{
      backgroundImage: `url(${assets[number].bg})`

    }}>
      <Row
        id="tunnelpagerow"
        align="middle"
        // justify="center"
      >
        <Col xs={24} s={24} xl={{span: 16, order: 2}} style={{
          paddingTop: 40,
          paddingBottom: 40,
        }}>
          <div style={{position: 'relative',
            width: '100%',
            height: '0px',
            paddingBottom: 'min(56.25%, 50vh)',
          }}>
            <iframe style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              margin: 0,
              padding: 0,
              border: '10px solid white',
              borderRadius: '10px',
              backgroundColor: 'white',
              ".vpPlayerLayout": 'margin: 0; padding: 0;'
            }}
              title="vimeo-player"
              src={assets[number].url}
              width="100%"
              height="100%"
              frameborder="0"
              // border="10px solid white"
              cellspacing="0"
              allowFullScreen>
            </iframe>
          </div>
        </Col>



        <Col
          xs={24} s={24}  xl={{span: 4, order: 3}}
          style={{
            backgroundImage: `url(${hammer})`,
            height: '90vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundOrigin: 'content-box',

            border: '10px solid white',
            borderRadius: '10px',
          }}
        >
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style={{
            // backgroundColor: 'black',
            justify: 'right'
          }} >
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="XF6S4N84SAXWJ"/>
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
              style={{
                // marginLeft: '40px',
                // padding: '10px',
                // height: '70px'
              }}
            />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
          </form>
        </Col>


        <Col xs={24} s={24}  xl={{span: 4, order: 1}} style={{
          paddingTop: 40,
          paddingBottom: 40,
        }}>
          <div
          style={{
            color: 'white',
            border: '10px solid white',
            borderRadius: '10px',
            backgroundColor: 'black',
          }} >
            <SubmissionLog socket={socket}

            />
          </div>

        </Col>
      </Row>
    </div>
  )
}

export default TunnelPage
