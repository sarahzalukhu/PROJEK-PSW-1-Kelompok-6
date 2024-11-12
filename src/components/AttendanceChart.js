
import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';

const AttendanceChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
          label: 'Attendance',
          data: [65, 59, 80, 81],
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false
        }]
      }
    });
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default AttendanceChart;
