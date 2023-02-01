import React from 'react'
import YrIcon from './YrIcon'


const TestSum = (first, second) => {
    return first + second
}

function OwmYrIcon({owmCode}) {
    // return yr icon by owm weather code
    
    // owm codes https://openweathermap.org/weather-conditions
    // yr codes https://api.met.no/weatherapi/weathericon/2.0/documentation

    let yrCode = '';

    switch(owmCode) {
        case 200:
            yrCode = 'lightrainandthunder'
        case 201:
            yrCode = 'rainandthunder'
        case 202:
            yrCode = 'heavyrainandthunder'
        case 210:
            yrCode = 'lightrainandthunder'
        case 211:
            yrCode = 'rainandthunder'
        case 212:
            yrCode = 'heavyrainandthunder'
    }

    return (
        <div>
            {yrCode && <YrIcon weatherSymbol={yrCode}/>}
        </div>
    )
}

export {OwmYrIcon, TestSum}