import React, { Component } from 'react'

export default class SidebarItem extends Component {
  render() {
    return (
      <div id="sidepanel-heading" className="heading">
          <span id="content-heading">{this.props.itemname}</span>
        </div>
    )
  }
}
