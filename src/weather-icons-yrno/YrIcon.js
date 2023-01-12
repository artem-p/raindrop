import React from 'react'

const yrReqSvgs = require.context('!@svgr/webpack!./svg', true, /\.svg$/)

const icons = yrReqSvgs.keys().reduce((images, path) => {
  const key = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
  images[key] = yrReqSvgs(path).default
  return images
}, {})


function YrIcon({weatherSymbol}) {
  const Icon = icons[weatherSymbol] || null

  return Icon ? <Icon className='weather-icon' /> : <></>
}

export default YrIcon