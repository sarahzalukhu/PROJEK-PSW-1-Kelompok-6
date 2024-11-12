// src/components/Schedule.js
import React from 'react';
import './Schedule.css';

const Schedule = () => {
  return (
    <div className="schedule-page">
      <h3>Weekly Schedule</h3>
      <div className="schedule-table-container">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>07:00 - 07:45</td>
              <td>Math</td>
              <td>Science</td>
              <td>History</td>
              <td>Math</td>
              <td>Geography</td>
              <td>English</td>
            </tr>
            {/* Add more rows as necessary */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
