import React from 'react';
import './ForecastChart.css';
import { Line } from '@reactchartjs/react-chart.js'


const dataArr = [2, 8, 3, -5, -2, -3];

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        data: dataArr,
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
            fontColor: 'white',
            min: Math.min.apply(this, dataArr),
            max: Math.max.apply(this, dataArr),
            callback: function(value, index, values) {
              if (index === values.length - 1) return Math.min.apply(this, dataArr);
              else if (index === 0) return Math.max.apply(this, dataArr);
              else return '';
           },
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
