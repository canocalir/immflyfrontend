import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import './Table.scss';

export default class AirTable extends Component {
  render() {
    return (
      <div className="tableair">
        <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Aircraft</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Flight</Table.HeaderCell>
        <Table.HeaderCell>From</Table.HeaderCell>
        <Table.HeaderCell>To</Table.HeaderCell>
        <Table.HeaderCell>STD</Table.HeaderCell>
        <Table.HeaderCell>STA</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
        <Table.Cell>13216546</Table.Cell>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
        <Table.Cell>13216546</Table.Cell>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
        <Table.Cell>13216546</Table.Cell>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
        <Table.Cell>13216546</Table.Cell>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
        <Table.Cell>13216546</Table.Cell>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
        <Table.Cell>13216546</Table.Cell>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
        <Table.Cell>13216546</Table.Cell>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
        <Table.Cell>13216546</Table.Cell>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
        <Table.Cell>13216546</Table.Cell>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
        <Table.Cell>13216546</Table.Cell>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
        <Table.Cell>13216546</Table.Cell>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
        <Table.Cell>13216546</Table.Cell>
        <Table.Cell>EC-LUD</Table.Cell>
        <Table.Cell>12.06.1985</Table.Cell>
      </Table.Row>
    
    </Table.Body>

    
  </Table>
      </div>
    )
  }
}
