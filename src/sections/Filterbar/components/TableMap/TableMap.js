import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import './TableMap.scss';

export default class TableMap extends Component {


  render() {
    return (
      <div className="mapbuttons">
        <Button.Group>
          <Button inverted color='red' active>Table</Button>
          <Button inverted color='red'>Map</Button>
        </Button.Group>
      </div>
      
    )
  }
}
