import React, { useRef, useEffect, useState } from 'react';
// https://taylor.callsen.me/using-openlayers-with-react-functional-components/
// openlayers
import Map from 'ol/Map'
import View from 'ol/View'
import OSM from 'ol/source/OSM'
import GeoTIFF from 'ol/source/GeoTIFF.js'
import TileLayer from 'ol/layer/WebGLTile'
import ImageLayer from 'ol/layer/Image'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import {transform} from 'ol/proj'
import Static from 'ol/source/ImageStatic.js';
import Projection from 'ol/proj/Projection.js';
import {toStringXY, wrapX} from 'ol/coordinate';

import './Map.css'

function MapWrapper(props) {

  // todo add image
  // https://openlayers.org/en/latest/examples/static-image.html

  // set intial state
  const [ map, setMap ] = useState()
  const [ featuresLayer, setFeaturesLayer ] = useState()
  const [ selectedCoord , setSelectedCoord ] = useState()

  // pull refs
  const mapElement = useRef()
  
  // create state ref that can be accessed in OpenLayers onclick callback function
  //  https://stackoverflow.com/a/60643670
  const mapRef = useRef()
  mapRef.current = map

  // initialize map on first render - logic formerly put into componentDidMount
  useEffect( () => {

    // create and add vector source layer
    const initalFeaturesLayer = new VectorLayer({
      source: new VectorSource()
    })

    // create map
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        
        // USGS Topo
        // new TileLayer({
        //   source: new XYZ({
        //     url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
        //   })

        // }),

        new TileLayer({
          source: new OSM()
        }),

        // Google Maps Terrain
        /* new TileLayer({
          source: new XYZ({
            url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}',
          })
        }), */

        initalFeaturesLayer
        
      ],
      view: new View({
        projection: 'EPSG:3857',
        center: [0, 0],
        zoom: 2
      }),
      controls: []
    })

    // set map onclick handler
    initialMap.on('click', handleMapClick)

    // save map and vector layer references to state
    setMap(initialMap)
    setFeaturesLayer(initalFeaturesLayer)

    const extent = [0, -90, 360, 90]

    const projection = new Projection({
      units: 'degrees',
      extent: extent
    })

    // let imageLayer = new ImageLayer({
    //   source: new Static({
    //       url: '/grib/gfs/gfs.f000.png',
    //       projection: 'EPSG:4326',
    //       imageExtent: extent
    //   })
    // });
    
    // initialMap.addLayer(imageLayer)
    
    let gribTiff = new GeoTIFF({
      sources: [
        {
          url: '/grib/gfs/gfs.f000.geotiff',
          min: - 70,
          max: 70,
          nodata: -32768
        },
      ],
      wrapX: true
    })

    let band = ['band', 1]
    
    let style = {
      color: [
        'interpolate',
        ['linear'],
        band,
        // -71, [255, 255, 255, 0],
        -70, [30, 30, 30, 1],
        70, [200, 200, 200, 1],
        // 289, [196, 229, 183, 1],
        // 294, [217, 164, 73, 1],
        // 300, [199, 69, 40, 1]
      ]
    }

    let gribLayer = new TileLayer({
      source: gribTiff,
      style: style
    })

    

    initialMap.addLayer(gribLayer)
  },[])

  // update map if features prop changes - logic formerly put into componentDidUpdate
  useEffect( () => {

    if (props?.features?.length) { // may be null on first render

      // set features to map
      featuresLayer.setSource(
        new VectorSource({
          features: props.features // make sure features is an array
        })
      )

      // fit map to feature extent (with 100px of padding)
      map.getView().fit(featuresLayer.getSource().getExtent(), {
        padding: [100,100,100,100]
      })

    }

  },[props.features])

  // map click handler
  const handleMapClick = (event) => {

    // get clicked coordinate using mapRef to access current React state inside OpenLayers callback
    //  https://stackoverflow.com/a/60643670
    const clickedCoord = mapRef.current.getCoordinateFromPixel(event.pixel);

    // transform coord to EPSG 4326 standard Lat Long
    const transformedCoord = transform(clickedCoord, 'EPSG:3857', 'EPSG:4326')

    // set React state
    setSelectedCoord( transformedCoord )

    // console.log(transormedCoord)
    
  }

  // render component
  return (      
    <div ref={mapElement} className="map-container"></div>
  ) 

}


function MapPage() {
  
  return (
      <MapWrapper />
  )
}

export default MapPage;

  
  