import React from 'react';
import './ForecastChart.css';
import { Line } from '@reactchartjs/react-chart.js'


const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        data: [2, 8, 3, -5, -2, -3],
        borderColor: 'white',
      },
    ],
  }
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },

    scales: {
      yAxes: [
        {
          gridLines: {
            display: false
          },

          ticks: {
            fontColor: 'white'
          }

        },
      ],

      xAxes: [
        {
          gridLines: {
            display: false
          },

          ticks: {
            fontColor: 'white'
          }
        }
      ]
    },
  }

function ForecastChart() {
    return (
        <div className="forecast-chart">
            <Line data={data} options={options} />
        </div>
    )
}

export default ForecastChart
