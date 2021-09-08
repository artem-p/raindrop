// https://gist.githubusercontent.com/tbranyen/62d974681dea8ee0caa1/raw/3405bfb2a76b7cbd90fde33d8536f0cd13706955/icons.json

// todo add more icons https://openweathermap.org/weather-conditions
let owmToWi = 
{
    "200": {
      "label": "thunderstorm with light rain",
      "icon": "storm-showers",
      "icon_code": "\uf010",
      "icon_night": "night-alt-storm-showers",
      "icon_code_night": "\uf02c"
    },
    "201": {
      "label": "thunderstorm with rain",
      "icon": "storm-showers",
      "icon_code": "\uf010",
      "icon_night": "",
      "icon_code_night": ""
    },
    "202": {
      "label": "thunderstorm with heavy rain",
      "icon": "storm-showers",
      "icon_code": "\uf010",
      "icon_night": "",
      "icon_code_night": ""
    },
    "210": {
      "label": "light thunderstorm",
      "icon": "storm-showers",
      "icon_code": "\uf016",
      "icon_night": "",
      "icon_code_night": ""
    },
    "211": {
      "label": "thunderstorm",
      "icon": "thunderstorm",
      "icon_code": "\uf016",
      "icon_night": "",
      "icon_code_night": ""
    },
    "212": {
      "label": "heavy thunderstorm",
      "icon": "thunderstorm",
      "icon_code": "\uf016",
      "icon_night": "",
      "icon_code_night": ""
    },
    "221": {
      "label": "ragged thunderstorm",
      "icon": "thunderstorm",
      "icon_code": "\uf016",
      "icon_night": "",
      "icon_code_night": ""
    },
    "230": {
      "label": "thunderstorm with light drizzle",
      "icon": "storm-showers",
      "icon_code": "\uf01e",
      "icon_night": "",
      "icon_code_night": ""
    },
    "231": {
      "label": "thunderstorm with drizzle",
      "icon": "storm-showers",
      "icon_code": "\uf01e"
    },
    "232": {
      "label": "thunderstorm with heavy drizzle",
      "icon": "storm-showers",
      "icon_code": "\uf01e"
    },
    "300": {
      "label": "light intensity drizzle",
      "icon": "sprinkle",
      "icon_code": "\uf01c"
    },
    "301": {
      "label": "drizzle",
      "icon": "sprinkle",
      "icon_code": "\uf01c"
    },
    "302": {
      "label": "heavy intensity drizzle",
      "icon": "sprinkle",
      "icon_code": "\uf019"
    },
    "310": {
      "label": "light intensity drizzle rain",
      "icon": "sprinkle",
      "icon_code": "\uf017"
    },
    "311": {
      "label": "drizzle rain",
      "icon": "sprinkle",
      "icon_code": "\uf019"
    },
    "312": {
      "label": "heavy intensity drizzle rain",
      "icon": "sprinkle",
      "icon_code": "\uf019"
    },
    "313": {
      "label": "shower rain and drizzle",
      "icon": "sprinkle",
      "icon_code": "\uf01a"
    },
    "314": {
      "label": "heavy shower rain and drizzle",
      "icon": "sprinkle",
      "icon_code": "\uf019"
    },
    "321": {
      "label": "shower drizzle",
      "icon": "sprinkle",
      "icon_code": "\uf01c"
    },
    "321": {
      "label": "shower drizzle",
      "icon": "sprinkle",
      "icon_code": "\uf01c"
    },
    "500": {
      "label": "light rain",
      "icon": "rain",
      "icon_code": "\uf019"
    },
    "501": {
      "label": "moderate rain",
      "icon": "rain",
      "icon_code": "\uf01a"
    },
    "502": {
      "label": "heavy intensity rain",
      "icon": "rain",
      "icon_code": "\uf01a"
    },
    "503": {
      "label": "very heavy rain",
      "icon": "rain",
      "icon_code": "\uf01a"
    },
    "504": {
      "label": "extreme rain",
      "icon": "rain",
      "icon_code": "\uf01a"
    },
    "511": {
      "label": "freezing rain",
      "icon": "rain-mix",
      "icon_code": "\uf017"
    },
    "520": {
      "label": "light intensity shower rain",
      "icon": "showers",
      "icon_code": "\uf01a"
    },
    "521": {
      "label": "shower rain",
      "icon": "showers",
      "icon_code": "\uf01a"
    },
    "522": {
      "label": "heavy intensity shower rain",
      "icon": "showers",
      "icon_code": "\uf01a"
    },
    "531": {
      "label": "ragged shower rain",
      "icon": "showers",
      "icon_code": "\uf01d"
    },
    "600": {
      "label": "light snow",
      "icon": "snow",
      "icon_code": "\uf01b"
    },
    "601": {
      "label": "snow",
      "icon": "snow",
      "icon_code": "\uf01b"
    },
    "602": {
      "label": "heavy snow",
      "icon": "snow",
      "icon_code": "\uf0b5"
    },
    "611": {
      "label": "sleet",
      "icon": "sleet",
      "icon_code": "\uf017"
    },
    "612": {
      "label": "shower sleet",
      "icon": "sleet",
      "icon_code": "\uf017"
    },
    "615": {
      "label": "light rain and snow",
      "icon": "rain-mix",
      "icon_code": "\uf017"
    },
    "616": {
      "label": "rain and snow",
      "icon": "rain-mix",
      "icon_code": "\uf017"
    },
    "620": {
      "label": "light shower snow",
      "icon": "rain-mix",
      "icon_code": "\uf017"
    },
    "621": {
      "label": "shower snow",
      "icon": "rain-mix",
      "icon_code": "\uf01b"
    },
    "622": {
      "label": "heavy shower snow",
      "icon": "rain-mix",
      "icon_code": "\uf01b"
    },
    "701": {
      "label": "mist",
      "icon": "sprinkle",
      "icon_code": "\uf014"
    },
    "711": {
      "label": "smoke",
      "icon": "smoke",
      "icon_code": "\uf062"
    },
    "721": {
      "label": "haze",
      "icon": "day-haze",
      "icon_code": "\uf0b6"
    },
    "731": {
      "label": "sand, dust whirls",
      "icon": "cloudy-gusts",
      "icon_code": "\uf063"
    },
    "741": {
      "label": "fog",
      "icon": "fog",
      "icon_code": "\uf014"
    },
    "751": {
      "label": "sand",
      "icon": "cloudy-gusts",
      "icon_code": "\uf063"
    },
    "761": {
      "label": "dust",
      "icon": "dust",
      "icon_code": "\uf063"
    },
    "762": {
      "label": "volcanic ash",
      "icon": "smog",
      "icon_code": "\uf063"
    },
    "771": {
      "label": "squalls",
      "icon": "day-windy",
      "icon_code": "\uf011"
    },
    "781": {
      "label": "tornado",
      "icon": "tornado",
      "icon_code": "\uf056"
    },
    "800": {
      "label": "clear sky",
      "icon": "day-sunny",
      "icon_night": "night-clear",
      "icon_code": "\uf00d",
      "icon_code_night": "\uf02e",
    },

    "801": {
      "label": "few clouds",
      "icon": "day-cloudy",
      "icon_code": "\uf002",
      "icon_night": "night-alt-cloudy",
      "icon_code_night": "\uf086"
    },

    "802": {
      "label": "scattered clouds",
      "icon": "cloudy",
      "icon_code": "\uf002",
      "icon_night": "night-alt-cloudy",
      "icon_code_night": "\uf086"
    },

    "803": {
      "label": "broken clouds",
      "icon": "cloudy",
      "icon_code": '\uf013'
    },
    
    "804": {
      "label": "overcast clouds",
      "icon": "cloudy",
      "icon_code": '\uf013'
      },
    "900": {
      "label": "tornado",
      "icon": "tornado",
      "icon_code": "\uf056"
    },
    "901": {
      "label": "tropical storm",
      "icon": "hurricane",
      "icon_code": "\uf01d"
    },
    "902": {
      "label": "hurricane",
      "icon": "hurricane",
      "icon_code": "\uf073"
    },
    "903": {
      "label": "cold",
      "icon": "snowflake-cold",
      "icon_code": "\uf076"
    },
    "904": {
      "label": "hot",
      "icon": "hot",
      "icon_code": "\uf072"
    },
    "905": {
      "label": "windy",
      "icon": "windy",
      "icon_code": "\uf021"
    },
    "906": {
      "label": "hail",
      "icon": "hail",
      "icon_code": "\uf015"
    },
    "951": {
      "label": "calm",
      "icon": "sunny",
      "icon_code": "\uf00d"
    },
    "952": {
      "label": "light breeze",
      "icon": "cloudy-gusts",
      "icon_code": "\uf063"
    },
    "953": {
      "label": "gentle breeze",
      "icon": "cloudy-gusts",
      "icon_code": "\uf063"
    },
    "954": {
      "label": "moderate breeze",
      "icon": "cloudy-gusts",
      "icon_code": "\uf063"
    },
    "955": {
      "label": "fresh breeze",
      "icon": "cloudy-gusts",
      "icon_code": "\uf063"
    },
    "956": {
      "label": "strong breeze",
      "icon": "cloudy-gusts",
      "icon_code": "\uf063"
    },
    "957": {
      "label": "high wind, near gale",
      "icon": "cloudy-gusts",
      "icon_code": "\uf050"
    },
    "958": {
      "label": "gale",
      "icon": "cloudy-gusts",
      "icon_code": "\uf063"
    },
    "959": {
      "label": "severe gale",
      "icon": "cloudy-gusts",
      "icon_code": "\uf063"
    },
    "960": {
      "label": "storm",
      "icon": "thunderstorm",
      "icon_code": "\uf016"
    },
    "961": {
      "label": "violent storm",
      "icon": "thunderstorm",
      "icon_code": "\uf016"
    },
    "962": {
      "label": "hurricane",
      "icon": "cloudy-gusts",
      "icon_code": "\uf063"
    }
  }

export default owmToWi;

export function getWiIconCode(owmIconCode, pod) {
  // pod - part of day (d or n)
  if (pod && pod == 'n') {
    if (owmToWi[owmIconCode].icon_code_night) {
      return owmToWi[owmIconCode].icon_code_night;
    }
  }

  // day icon by default
  return owmToWi[owmIconCode].icon_code;
}