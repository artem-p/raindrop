import React from 'react'
// import fair_day from './svg/fair_day.svg'


// https://stackoverflow.com/questions/45754739/how-to-import-an-entire-folder-of-svg-images-or-how-to-load-them-dynamically-i

// https://medium.com/@erickhoury/react-dynamically-importing-svgs-and-render-as-react-component-b764b6475896

const yrReqSvgs = require.context( './svg', true, /\.svg$/ )
const yrSvgPaths = yrReqSvgs.keys()

const yrSvgs = yrReqSvgs
.keys ()
.reduce ( ( images, path ) => {
  images[path] = yrReqSvgs ( path )
  return images
}, {} )

console.log(yrSvgs)

const fair_day = yrSvgs['./fair_day.svg']

console.log(fair_day)

function YrIcon({iconCode}) {
  return (
    <img src={fair_day} className='weather-icon'></img>
  )
}

export default YrIcon