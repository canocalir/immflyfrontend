import React, { Component } from 'react';
import './Logout.scss';

export default class Logout extends Component {
  render() {
    return (
      <div id="logout" className="heading">
          <i className="fa fa-lock"></i>
          <span id="content-heading">      {this.props.lo}</span>
        </div>
    )
  }
}
