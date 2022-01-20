function kelvinToCelcius(tempKelvin) {
    return tempKelvin ? (tempKelvin - 273.15).toFixed(0) : "";
}

export {kelvinToCelcius};