import React from 'react'
import YrIcon from './YrIcon'


function OwmYrIcon({owmCode, isDay}) {
    //  todo day night icons
    //  isDay={currentWeather?.sys?.sunrise <= currentWeather?.dt && currentWeather?.dt < currentWeather?.sys?.sunset}

    // return yr icon by owm weather code
    
    // owm codes https://openweathermap.org/weather-conditions
    // yr codes https://api.met.no/weatherapi/weathericon/2.0/documentation

    let yrCode = '';

    const owmYrDict = {
        // owmCode: ['yrDayIcon', yrNightIcon']
        200: ['lightrainandthunder', 'lightrainandthunder'],
        201: ['rainandthunder', 'rainandthunder'],
        202: ['heavyrainandthunder', 'heavyrainandthunder'],
        210: ['lightrainandthunder', 'lightrainandthunder'],
        211: ['rainandthunder', 'rainandthunder'],
        212: ['heavyrainandthunder', 'heavyrainandthunder'],
        221: ['heavyrainshowersandthunder_day', 'heavyrainshowersandthunder_night']
    }

    if (owmCode in owmYrDict) {
        const yrCodes = owmYrDict[owmCode]

        yrCode = isDay ? yrCodes[0] : yrCodes[1]
    }

    return (
        <div>
            {yrCode && <YrIcon weatherSymbol={yrCode}/>}
        </div>
    )
}

export {OwmYrIcon}