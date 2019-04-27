import React, { Component } from 'react';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick';
import Chart from 'chart.js';
import './Status.scss';

ReactChartkick.addAdapter(Chart)

export default class Status extends Component {
  render() {
    return (
      <div className="status">
        <PieChart data={[["Blueberry", 44], ["Strawberry", 23]]} />
      </div>
    )
  }
}
