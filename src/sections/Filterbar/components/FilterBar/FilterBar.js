import React, { Component } from 'react';
import './FilterBar.scss';
import TableMap from '../TableMap/TableMap';
import SortFilters from '../SortFilters/SortFilters';

export default class FilterBar extends Component {
  render() {
    return (
    
        <div className="filterwrap">
          <div className="filtermap">
              <TableMap/>
              <SortFilters/>
          </div>
        </div>

    )
  }
}
