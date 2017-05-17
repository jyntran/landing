import React, { Component } from 'react'

export default class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul>
          <li>
            <a href="#"><i className="fa fa-file-text-o fa-2x"></i></a>
          </li>
          <li>
            <a href="#"><i className="fa fa-github fa-2x"></i></a>
          </li>
          <li>
            <a href="#"><i className="fa fa-linkedin fa-2x"></i></a>
          </li>
          <li>
            <a href="#"><i className="fa fa-book fa-2x"></i></a>
          </li>
        </ul>
      </div>
    )
  }
}