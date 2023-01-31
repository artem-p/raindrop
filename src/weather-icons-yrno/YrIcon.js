import React from 'react'
import icons from './svg/__all'


// const yrReqSvgs = require.context('!@svgr/webpack!./svg', true, /\.svg$/)

// const icons = yrReqSvgs.keys().reduce((images, path) => {
//   const key = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
//   images[key] = yrReqSvgs(path).default
//   return images
// }, {})


function YrIcon({weatherSymbol}) {
  console.log(icons)

  const iconPath = icons[weatherSymbol] || null

  return iconPath ? <img src={iconPath} className='weather-icon' /> : <></>
}

export default YrIcon