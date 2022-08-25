import React from 'react';
import { WiWindDeg } from 'react-icons/wi';


function WindIcon({wind}) {
    const speed = wind?.speed ? wind?.speed?.toFixed(0) : 0;
    const dir = wind?.deg ? wind?.deg : null;

    if (speed > 0 && dir !== null) {
        const rotateDeg = dir + 180 % 360
        const iconStyle = {'transform': `rotate(${rotateDeg}deg)`}
        return WiWindDeg({'style': iconStyle})
    } else {
        return null
    }
}

export default WindIcon;
