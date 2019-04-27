import React, { Component } from 'react';
import './TopbarMain.scss';
import TopbarLogo from '../TopbarLogo/TopbarLogo';


export default class TopbarMain extends Component {
  render() {
    return (
    <header>
      <div className="wrap">
        <div className="mainlogo">
            <TopbarLogo/>
        </div>
      </div>
    </header>
    )
  }
}
