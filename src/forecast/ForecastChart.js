import React from 'react';
import './ForecastChart.css';
import { Line } from '@reactchartjs/react-chart.js';
import cloudIcon from '../icons/svg/wi-cloud.svg';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';


// const dataArr = [2, 8, 3, -5, -2, -3];

function ForecastChart({ forecast }) {
  let tempArr = [];
  let precArr = [];
  let weatherArr = [];
  let tempValues = [];

  let cloudImage = new Image(64, 64);
  cloudImage.src = cloudIcon;
  

  if (forecast && forecast.list && forecast.list.length > 0) {
    const forecasts = forecast.list.slice(0, 7);
    
    console.log(forecasts);

    tempArr = forecasts.map((forecastElement) => {
      return {x: new Date(forecastElement.dt * 1000), y: (forecastElement.main.temp - 273.15).toFixed(1)}
    })

    precArr = forecasts.map((forecastElement) => {
      return {x: new Date(forecastElement.dt * 1000), y: Math.random() * 100}
    })

    // dummy chart for weather icons. Use bars with zero height and add icon on top of them
    weatherArr = forecasts.map((forecastElement) => {
      return {x: new Date(forecastElement.dt * 1000), y: 0}
    })


    tempValues = forecasts.map((forecastElement) => {
      return (forecastElement.main.temp - 273.15).toFixed(1)
    })

  }


  const data = {
    // labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        yAxisID: 'weather',
        data: weatherArr,
        type: 'scatter',
        backgroundColor: 'white',
        pointStyle: [cloudImage, cloudImage, cloudImage, cloudImage, cloudImage, cloudImage, cloudImage],
        datalabels: {
          display: true,
          color: 'white'
        }
      },

      {
        yAxisID: 'temp',
        data: tempArr,
        borderColor: 'white',
      },

      {
        yAxisID: 'prec',
        data: precArr,
        type: 'bar',
        backgroundColor: '#004e89'
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
          id: 'temp',
          gridLines: {
            display: false
          },
  
          ticks: {
            fontColor: 'white',
            // min: Math.min.apply(this, tempValues),
            // max: Math.max.apply(this, tempValues),
            callback: function (value, index, values) {
              if (value === 0) return value;
              if (index === values.length - 1) return Math.min.apply(this, tempValues);
              else if (index === 0) return Math.max.apply(this, tempValues);
              else return '';
            },
          }
  
        },

        {
          id: 'prec',
          position: 'right',
          gridLines: {
            display: false
          },

          ticks: {
            fontColor: 'white'
          }
        },

        {
          id: 'weather',
          display: false,
        }
      ],
  
      xAxes: [
        {
          type: 'time',
          
          time: {
            unit: 'hour',
            tooltipFormat: 'lll'
          },

          gridLines: {
            display: false
          },
  
          ticks: {
            fontColor: 'white'
          }
        }
      ]
    },

    plugins: {
      datalabels: {
        display: false
      }
    }
  }

  return (
    <div className="forecast-chart">
      <Line data={data} options={options} />
    </div>
  )
}

export default ForecastChart
