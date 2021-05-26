import React, { useState, useEffect } from "react"
import { Row, Col, Input } from 'antd'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import SubmissionLog from './SubmissionLog'
import SubmitForm from './SubmitForm'
import hammer from "./Assets/pages/hammer.jpg"
import bg_1 from "./Assets/pages/Tunnel_1BG.jpg"
import bg_2 from "./Assets/pages/Tunnel_2BG.jpg"
import bg_3 from "./Assets/pages/Tunnel_3BG.jpg"
// - Tunnel 1: https://vimeo.com/552161937
// - Tunnel 2: https://vimeo.com/552162265
// - Tunnel 3: https://vimeo.com/552162451

const assets = {
  1: {bg: bg_1, url: 'https://player.vimeo.com/video/552161937'},
  2: {bg: bg_2, url: 'https://player.vimeo.com/video/552162265'},
  3: {bg: bg_3, url: 'https://player.vimeo.com/video/552162451'},
}

const TunnelPage = ({
  socket,
  number
}) => {

  // <script src="https://www.paypal.com/sdk/js?client-id=sb&currency=USD" data-sdk-integration-source="button-factory"></script>

  // style: {
  //   shape: 'pill',
  //   color: 'black',
  //   layout: 'vertical',
  //   label: 'paypal',
  //
  // },
  //
  // createOrder: function(data, actions) {
  //   return actions.order.create({
  //     purchase_units: [{"description":"A premium, stainless steel bottle opener card. Each card is different. 40% chance of receiving a card with an engraving.\n","amount":{"currency_code":"USD","value":14,"breakdown":{"item_total":{"currency_code":"USD","value":11},"shipping":{"currency_code":"USD","value":3},"tax_total":{"currency_code":"USD","value":0}}}}]
  //   })
  // },
  //
  // onApprove: function(data, actions) {
  //   return actions.order.capture().then(function(details) {
  //     alert('Transaction completed by ' + details.payer.name.given_name + '!')
  //   })
  // },
  //
  // onError: function(err) {
  //   console.log(err)
  // }

  return (
    <div style={{
      backgroundImage: `url(${assets[number].bg})`,
      padding: 0,
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%'
    }}>
      <Row
        align="middle"
        style={{height: '100vh'}}
        // justify="center"
      >
        <Col span={4} style={{backgroundColor: 'black', color: 'white'}}>
          Tunnel # {number}
          <SubmissionLog socket={socket} />

        </Col>

        <Col span={16} style={{}}>
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
              src={assets[number].url}
              width="100%"
              height="auto"
              frameborder="0"
              allowFullScreen>
            </iframe>
          </div>
        </Col>

        <Col
          span={4}
          style={{
            backgroundImage: `url(${hammer})`,
            height: '90vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
          }}
        >
        <PayPalScriptProvider options={{
          "client-id": "sb",

        }}>
          <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>



        </Col>
      </Row>
    </div>
  )
}

export default TunnelPage
