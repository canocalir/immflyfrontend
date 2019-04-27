import React, { Component } from 'react';
import './SidebarMain.scss';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarLogo from '../SidebarLogo/SidebarLogo';
import SideBarItemIcon from '../SidebarItemIcon/SideBarItemIcon';
import Logout from '../Logout/Logout';
import SidebarClose from '../SidebarClose/SidebarClose';

export default class SidebarMain extends Component {
  componentDidMount() {
    var EventHandler = {
      ShowHideSideBar: function () {
          if (document.getElementById("side-panel").className.indexOf("open") !== -1) {
              document.getElementById("side-panel").className = "side-panel";
              document.getElementById("side-panel").className += " close";
              document.getElementById('show_hide').childNodes[0].className = "fa fa-angle-double-right";
              return;
          }
          document.getElementById("side-panel").className = "side-panel";
          document.getElementById("side-panel").className += " open";
          document.getElementById('show_hide').childNodes[0].className = "fa fa-angle-double-left";
      }
  };
  window.onload = function () {
      document.getElementById('show_hide').onclick = EventHandler.ShowHideSideBar;
  };
  }
  render() {
    return (
      <div className="side-panel" id="side-panel">
        <SidebarLogo/>
        <SidebarItem itemname="Platform Dashboard"/>
        <SidebarItem itemname="Aircraft Health"/>
        <SidebarItem itemname="Surveys"/>
        <SidebarItem itemname="CMS"/>
        <SidebarItem itemname="AdMS"/>
        <SidebarItem itemname="Retail"/>
        <SidebarItem itemname="Configuration"/>
        <Logout lo="Logout"/>
        <div data-position="left" className="side-bar" style={{marginTop:"-2px"}}>
          <div className="items">
        <SideBarItemIcon faico="fa fa-user"/>
        <SideBarItemIcon faico="fa fa-users"/>
        <SideBarItemIcon faico="fa fa-comments-o"/>
        <SideBarItemIcon faico="fa fa-folder-o"/>
        <SideBarItemIcon faico="fa fa-file-code-o"/>
        <SideBarItemIcon faico="fa fa-user"/>
        <SideBarItemIcon faico="fa fa-user"/>
        <SidebarClose/>
          </div>
        </div>
      </div>
    )
  }
}
