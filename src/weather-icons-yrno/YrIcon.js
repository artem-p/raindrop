import React from 'react'

// https://stackoverflow.com/questions/45754739/how-to-import-an-entire-folder-of-svg-images-or-how-to-load-them-dynamically-i

// https://medium.com/@erickhoury/react-dynamically-importing-svgs-and-render-as-react-component-b764b6475896

const yrReqSvgs = require.context('!@svgr/webpack!./svg', true, /\.svg$/)

const icons = yrReqSvgs.keys().reduce((images, path) => {
  const key = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
  images[key] = yrReqSvgs(path).default
  return images
}, {})

console.log(icons)

// todo remove tryouts
// todo pass icon name

function YrIcon({weatherSymbol}) {
  const Icon = icons[weatherSymbol] || <></>

  console.log(Icon)
  return (
    // <img src={fair_day.default} className='weather-icon'></img>
    <Icon className='weather-icon' />
  )
}

export default YrIcon