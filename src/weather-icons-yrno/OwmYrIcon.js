import React from 'react'
import YrIcon from './YrIcon'


function OwmYrIcon({owmCode}) {
    // return yr icon by owm weather code
    
    // owm codes https://openweathermap.org/weather-conditions
    // yr codes https://api.met.no/weatherapi/weathericon/2.0/documentation

    let yrCode = '';

    const owmYrDict = {
        200: 'lightrainandthunder',
        201: 'rainandthunder',
        202: 'heavyrainandthunder',
        210: 'lightrainandthunder',
        211: 'rainandthunder',
        212: 'heavyrainandthunder',
    }

    if (owmCode in owmYrDict) {
        yrCode = owmYrDict[owmCode]
    }

    return (
        <div>
            {yrCode && <YrIcon weatherSymbol={yrCode}/>}
        </div>
    )
}

export {OwmYrIcon}