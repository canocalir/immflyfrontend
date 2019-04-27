import React, { Component } from 'react'
import Status from '../Status/Status';
import Users from '../Users/Users';
import './GraphContainer.scss';

export default class GraphContainer extends Component {
  render() {
    return (
      <div className="grcont">
        <Status/>
        <Users/>
      </div>
    )
  }
}
