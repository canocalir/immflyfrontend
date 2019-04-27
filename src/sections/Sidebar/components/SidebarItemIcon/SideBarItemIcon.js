import React, { Component } from 'react'

export default class SideBarItemIcon extends Component {
  render() {
    return (
     <div className="item">
        <i className={this.props.faico} />
     </div>
    )
  }
}
