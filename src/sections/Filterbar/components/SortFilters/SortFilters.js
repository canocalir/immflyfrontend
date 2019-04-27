import React, { Component } from 'react';
import './SortFilters.scss';
import { Button } from 'semantic-ui-react';

export default class SortFilters extends Component {
  render() {
    return (
      <div className="circbutton">
        <Button active circular icon='chart bar icon' />
        <Button circular icon='settings' />
      </div>
    )
  }
}
