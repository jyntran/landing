import React, { Component } from 'react'

import Links from './Links.jsx'

export default class Main extends Component {
	render() {
    return (
        <div className="main">
          <div className="brand">
            <img src="logo-t.png" alt="Brand"/>
          </div>
          <h1>jen tran</h1>
          <Links/>
        </div>
      )
	}
}