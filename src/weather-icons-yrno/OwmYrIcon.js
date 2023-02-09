import React from 'react'
import YrIcon from './YrIcon'


function OwmYrIcon({owmCode, isDay, cloudiness}) {
    //  todo clouds and no clouds icons
    
    //  'showers' icons - sun. without showers - cloudy.
    //  clearksy, fair, cloudy, partly cloudy

    // return yr icon by owm weather code
    
    // owm codes https://openweathermap.org/weather-conditions
    // yr codes https://api.met.no/weatherapi/weathericon/2.0/documentation

    let yrCode = '';

    const owmYrDict = {
        // owmCode: ['cloud (neutral) Icon', 'clear icon']

        200: ['lightrainandthunder', 'lightrainshowersandthunder'],
        201: ['rainandthunder', 'rainshowersandthunder'],
        202: ['heavyrainandthunder', 'heavysnowshowersandthunder' ],
        210: ['lightrainandthunder', 'lightrainshowersandthunder'],
        211: ['rainandthunder', 'rainshowersandthunder'],
        212: ['heavyrainandthunder', 'heavyrainshowersandthunder'],
        221: ['heavyrainandthunder', 'heavyrainshowersandthunder'],     //  ? ragged thunderstorm
        230: ['lightrainandthunder', 'lightrainshowersandthunder'],     //  thunderstorm with light drizzle
        231: ['lightrainandthunder', 'lightrainshowersandthunder'],     //  thunderstorm with drizzle
        232: ['lightrainandthunder', 'lightrainshowersandthunder'],     //  thunderstorm with heavy drizzle
    }

    //  todo cloudiness < 80 use first icon
    //  > =80 use second icon and add day/night

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