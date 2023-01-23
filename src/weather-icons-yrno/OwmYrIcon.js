import React from 'react'
import YrIcon from './YrIcon'


function OwmYrIcon({owmCode}) {
    // return yr icon by owm weather code
    let yrCode = '';

    switch(owmCode) {
        case 200:
            yrCode = 'lightrainandthunder'
        default:
            yrCode = 'clearsky_day'
    }

    return (
        <YrIcon weatherSymbol={yrCode}/>
    )
}

export default OwmYrIcon