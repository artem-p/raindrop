import React from 'react'
import YrIcon from './YrIcon'


function OwmYrIcon({owmCode, isDay, cloudiness}) {
    const CLOUDINESS_LIMIT = 80
    // return yr icon by owm weather code

    //  'showers' icons - sun. without showers - cloudy.
    //  clearksy, fair, cloudy, partly cloudy

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
        221: ['rainandthunder', 'rainshowersandthunder'],               //  ? ragged thunderstorm
        230: ['lightrainandthunder', 'lightrainshowersandthunder'],     //  thunderstorm with light drizzle
        231: ['lightrainandthunder', 'lightrainshowersandthunder'],     //  thunderstorm with drizzle
        232: ['lightrainandthunder', 'lightrainshowersandthunder'],     //  thunderstorm with heavy drizzle
    }

    if (owmCode in owmYrDict) {
        const yrCodes = owmYrDict[owmCode]
        
        if (cloudiness > CLOUDINESS_LIMIT) {
            // use neutral icon without day/night variants
            yrCode = yrCodes[0]
        } else {
            // use day/night icons
            const iconName = yrCodes[1]
            yrCode = iconName + (isDay ? '_day' : '_night')
        }
    }

    return (
        <div>
            {yrCode && <YrIcon weatherSymbol={yrCode}/>}
        </div>
    )
}

export {OwmYrIcon}