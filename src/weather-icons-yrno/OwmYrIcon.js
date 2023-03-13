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

    const DRIZZLE_ICONS = ['lightrain', 'lightrainshowers']     

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

        //  all drizzle as light rain
        300: DRIZZLE_ICONS,
        301: DRIZZLE_ICONS,
        302: DRIZZLE_ICONS,
        310: DRIZZLE_ICONS,
        311: DRIZZLE_ICONS,
        312: DRIZZLE_ICONS,
        313: DRIZZLE_ICONS,
        314: DRIZZLE_ICONS,
        321: DRIZZLE_ICONS,

        500: ['lightrain', 'lightrainshowers'],
        501: ['rain', 'rainshowers'],
        502: ['heavyrain', 'heavyrainshowers'],
        503: ['heavyrain', 'heavyrainshowers'],
        504: ['heavyrain', 'heavyrainshowers'],
        511: ['sleet', 'sleetshowers'],
        520: ['lightrain', 'lightrainshowers'],
        521: ['rain', 'rainshowers'],
        522: ['heavyrain', 'heavyrainshowers'],
        531: ['rain', 'rainshowers'],

        600: ['lightsnow', 'lightsnowshowers'],
        601: ['show', 'showshowers'],
        602: ['heavysnow', 'heavysnowshowers'],
        611: ['sleet', 'sleetshowers'],
        612: ['lightsleet', 'lightsleetshowers'],
        613: ['sleet', 'sleetshowers'],
        615: ['lightsleet', 'lightsleetshowers'],
        616: ['sleet', 'sleetshowers'],
        620: ['lightsnow', 'lightsnowshowers'],
        621: ['snow', 'snowshowers'],
        622: ['heavysnow', 'heavysnowshowers'],

        701: ['fog', 'fog'],
        721: ['fog', 'fog'],
        731: ['fog', 'fog'],
        741: ['fog', 'fog'],
        751: ['fog', 'fog'],
        761: ['fog', 'fog'],
        762: ['fog', 'fog'],
        771: ['fog', 'fog'],
        781: ['fog', 'fog'],
        
        800: ['clearsky_day', 'clearsky'],

        801: ['fair_day', 'fair'],
        802: ['fair_day', 'fair'],
        803: ['fair_day', 'fair'],
        804: ['cloudy', 'cloudy']
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

        // some icons always neutral regardless of cloudiness
        if (700 <= owmCode && owmCode <= 799 || owmCode == 804) {
            yrCode = yrCodes[0]
        }

        // some icons always have day/night variants
        if (800 <= owmCode && owmCode <= 803) {
            yrCode = yrCodes[1]
        }
    }

    return (
        <div>
            {yrCode && <YrIcon weatherSymbol={yrCode}/>}
        </div>
    )
}

export {OwmYrIcon}