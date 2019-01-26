import React, { Component } from 'react';
import './style.css';

class Schedule extends Component {
  render() {
    return (
      <div className="Schedule section" id="schedule">
        <h2>SCHEDULE:</h2>

        <table>
          <tr>
            <th>11:30 AM - 12:30 PM</th>
            <td>CHECK IN</td>
          </tr>
          <tr>
            <th>12:30 PM - 1:30 PM</th>
            <td>Opening Ceremony + Keynote Speaker</td>
          </tr>
          <tr>
            <th>1:30 PM - 7:30 PM</th>
            <td>Start Hacking!!!</td>
          </tr>
          <tr>
            <th>5:00 PM - 6:00 PM</th>
            <td>Dinner</td>
          </tr>
          <tr>
            <th>8:00 PM - 9:00 PM</th>
            <td>Closing Ceremony</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Schedule;
