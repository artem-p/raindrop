import React from 'react';
import './ForecastChart.css';
import { Line } from '@reactchartjs/react-chart.js';


// const dataArr = [2, 8, 3, -5, -2, -3];

function ForecastChart({ forecast }) {
  let dataArr = [];
  let tempValues = [];

  if (forecast && forecast.list && forecast.list.length > 0) {
    const forecasts = forecast.list.slice(0, 7);
    
    console.log(forecasts);

    dataArr = forecasts.map((forecastElement) => {
      return {x: new Date(forecastElement.dt * 1000), y: (forecastElement.main.temp - 273.15).toFixed(1)}
    })

    tempValues = forecasts.map((forecastElement) => {
      return (forecastElement.main.temp - 273.15).toFixed(1)
    })

    // return forecasts.map((forecastElement) => {
    //   return <ForecastElement 
    //       key={forecastElement.dt}
    //       time={forecastElement.dt} 
    //       temp={forecastElement.main.temp} 
    //       weatherCode={forecastElement?.weather[0]?.id}
    //     />
    // })
  }


  console.log(tempValues);


  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        yAxisID: 'temp',
        data: dataArr,
        borderColor: 'white',
      },

      {
        yAxisID: 'prec',
        data: [10, 20, 30, 40, 50, 60, 70],
        type: 'bar',
        backgroundColor: 'white'
      }
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
        }
      ],
  
      xAxes: [
        {
          // type: 'time',
          
          // time: {
          //   unit: 'hour',
          //   tooltipFormat: 'lll'
          // },

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

  return (
    <div className="forecast-chart">
      <Line data={data} options={options} />
    </div>
  )
}

export default ForecastChart
