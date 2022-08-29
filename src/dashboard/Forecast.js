import React from 'react'
import Card from 'react-bootstrap/Card'

import './Forecast.css'


function Forecast({lat, lon}) {
  //  todo
  //  2 вкладки - обзор и график
  //  обзор как на фореке по дням. Значок и температура мин макс
  //  дни со значками в виде вкладок, по вкладке переход на день подробно?

  //  todo met.no пропуски в прогнозе
  //  сравнить met.no и owm для одинаковых координат
  //  по дням брать с owm?
  
  return (
      <Card className='forecast-card'>
          <Card.Body>
              <Card.Title>
                Forecast for 5 days
              </Card.Title>
          </Card.Body>
      </Card>
  )
}

export default Forecast