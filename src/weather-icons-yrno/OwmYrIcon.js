import React from 'react'
import YrIcon from './YrIcon'

// todo generate icon imports https://github.com/smartprocure/directory-metagen

// mock require context - better don't use it at all 
// https://stackoverflow.com/questions/38332094/how-can-i-mock-webpacks-require-context-in-jest
// https://dev.to/ansonh/simplest-way-to-install-babel-plugins-in-create-react-app-7i5

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
        <YrIcon weatherSymbol={yrCode}/>
    )
}

export {OwmYrIcon, TestSum}