import React, { Component } from 'react';
import TopLogo from './immfly-logo-white.png';

export default class TopbarLogo extends Component {
  render() {
    return (
      <div>
        <a href="/"><img style={{width:"45%"}} src={TopLogo}></img></a>
      </div>
    )
  }
}
