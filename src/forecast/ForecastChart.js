import React from 'react';
import './ForecastChart.css';
import { Line } from '@reactchartjs/react-chart.js';
import cloudIcon from '../icons/svg/wi-cloud.svg';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import owmToWi, {getWiIconCode} from '../owmToWi';


// const dataArr = [2, 8, 3, -5, -2, -3];

function ForecastChart({ forecast }) {
  let tempArr = [];
  let precArr = [];
  let weatherArr = [];
  // let tempValues = [];
  let precValues = [];

  let cloudImage = new Image(64, 64);
  cloudImage.src = cloudIcon;
  

  if (forecast && forecast.list && forecast.list.length > 0) {
    const forecasts = forecast.list.slice(0, 7);
    
    // console.log(forecasts);

    tempArr = forecasts.map((forecastElement) => {
      return {x: new Date(forecastElement.dt * 1000), y: (forecastElement.main.temp - 273.15).toFixed(1)}
    })

    precValues = forecasts.map((forecastElement) => {
      let rainAmount = forecastElement.rain ? forecastElement.rain['3h'] : 0;
      let snowAmount = forecastElement.snow ? forecastElement.snow['3h'] : 0;

      return rainAmount + snowAmount;
    })
    
    precArr = forecasts.map((forecastElement) => {
      let rainAmount = forecastElement.rain ? forecastElement.rain['3h'] : 0;
      let snowAmount = forecastElement.snow ? forecastElement.snow['3h'] : 0;

      let prec = rainAmount + snowAmount;
      return {x: new Date(forecastElement.dt * 1000), y: prec}
    })

    // dummy chart for weather icons. Use bars with zero height and add icon on top of them
    weatherArr = forecasts.map((forecastElement) => {
      let owmIconCode = getWiIconCode(forecastElement.weather[0]?.id);
      return {x: new Date(forecastElement.dt * 1000), y: 0, owmIconCode}
    })


    // tempValues = forecasts.map((forecastElement) => {
    //   return (forecastElement.main.temp - 273.15).toFixed(1)
    // });

  }


  const data = {
    datasets: [
      {
        yAxisID: 'weather',
        data: weatherArr,
        type: 'scatter',
        backgroundColor: 'white',
        pointRadius: 0,
        datalabels: {
          display: true,
          color: 'white',
          font: {
            family: 'WeatherIcons',
            size: 30
          },
          formatter: (value, context) => {
            console.log(value);
            let iconCode = value.owmIconCode ? value.owmIconCode : '';
            return iconCode;
          }
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

  let precMax = Math.max(1, Math.max(...precValues)); // prec upper bound at least 1

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
            stepSize: 2,
            fontSize: 16
            // min: Math.min.apply(this, tempValues) -1,
            // max: Math.max.apply(this, tempValues) + 1,
            // callback: function (value, index, values) {
            //   if (value === 0) return value;
            //   if (index === values.length - 1) return Math.round(Math.min.apply(this, tempValues);
            //   else if (index === 0) return Math.max.apply(this, tempValues);
            //   else return '';
            // },
          }
  
        },

        {
          id: 'prec',
          position: 'right',
          gridLines: {
            display: false
          },

          
          ticks: {
            max: precMax,
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
            tooltipFormat: 'lll',
            unitStepSize: 3
          },

          gridLines: {
            display: false
          },
  
          ticks: {
            fontColor: 'white',
            fontSize: 16
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
