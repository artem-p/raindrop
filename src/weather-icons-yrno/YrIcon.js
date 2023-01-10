import React from 'react'
// import fair_day from './svg/fair_day.svg'


// https://stackoverflow.com/questions/45754739/how-to-import-an-entire-folder-of-svg-images-or-how-to-load-them-dynamically-i

// https://medium.com/@erickhoury/react-dynamically-importing-svgs-and-render-as-react-component-b764b6475896

let yrReqSvgs = require.context( './svg', true, /\.svg$/ )
const yrSvgPaths = yrReqSvgs.keys()
console.log(yrSvgPaths)

const yrSvgs = yrReqSvgs
.keys ()
.reduce ( ( images, path ) => {
  images[path] = yrReqSvgs ( path )
  return images
}, {} )

console.log(yrSvgs)

const fair_day = yrSvgs['./fair_day.svg']

console.log(fair_day)


// 

yrReqSvgs = require.context('!@svgr/webpack!./svg', true, /\.svg$/)

const icons = yrReqSvgs.keys().reduce((images, path) => {
  const key = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
  images[key] = yrReqSvgs(path).default
  return images
}, {})

console.log(icons)

// todo remove tryouts
// todo pass icon name
const Icon = icons['clearsky_day']

function YrIcon({iconCode}) {
  return (
    // <img src={fair_day.default} className='weather-icon'></img>
    <Icon className='weather-icon' />
  )
}

export default YrIcon