import React, { Component } from 'react'
import ReactChartkick, { LineChart} from 'react-chartkick';
import Chart from 'chart.js';
import './Users.scss';

ReactChartkick.addAdapter(Chart)


export default class Users extends Component {
  render() {
    return (
      <div className="users">
        <LineChart data={{"2017-01-01": 11, "2017-01-02": 6}} />
      </div>
    )
  }
}
