import React, { Component } from 'react'

export default class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul>
          <li>
            <a href="/2017-jensentran-cv.pdf"><i className="fa fa-file-text-o fa-2x"></i></a>
          </li>
          <li>
            <a href="https://github.com/jyntran"><i className="fa fa-github fa-2x"></i></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jyntran"><i className="fa fa-linkedin fa-2x"></i></a>
          </li>
          <li>
            <a href="http://twitter.com/jyntran"><i className="fa fa-twitter fa-2x"></i></a>
          </li>
        </ul>
      </div>
    )
  }
}