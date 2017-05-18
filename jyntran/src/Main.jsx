import React, { Component } from 'react'

import Links from './Links.jsx'

export default class Main extends Component {
	render() {
    return (
        <div className="main">
          <div className="brand">
            <img src="logo-t.png" alt="Brand"/>
          </div>
          <h1>Jen Tran</h1>
          <h2>Software Developer | Artist</h2>
          <span>Waterloo, ON</span>
          <Links/>
        </div>
      )
	}
}