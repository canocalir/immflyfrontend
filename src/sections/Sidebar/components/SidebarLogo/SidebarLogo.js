import React, { Component } from 'react';
import SideLogo from './thy.png';
import './SidebarLogo.scss';

export default class SidebarLogo extends Component {
  render() {
    return (
      <div className="sidelogo">
        <img style={{width:"50%"}} src={SideLogo}/>
      </div>
    )
  }
}
