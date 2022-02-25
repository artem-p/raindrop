import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './Map.css';
import { OWM_API_KEY } from '../requests';
console.log(OWM_API_KEY);

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0ZW1wdWdhY2hldiIsImEiOiJja3l1NWJwZ3owM2IxMnd0NDUydDZqazUyIn0.b1G2XUsJEhO49s7vTH2q1Q';

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [long, setLong] = useState(30);
  const [lat, setLat] = useState(59.9);
  const [zoom, setZoom] = useState(6);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [long, lat],
      zoom: zoom
    });

    map.current.on('load', function(){
      map.current.addLayer({
        "id": "precipitation",
        "type": "raster",
        "source": {
          "type": "raster",
          "tiles": ["https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=" + OWM_API_KEY],
          "tileSize": 256
        },
        "minzoom": 0,
        "maxzoom": 22
      });

      map.current.setPaintProperty(
        'precipitation',
        'raster-opacity',
        1
      )
    });
  });

  return <div id='map'>
      <div ref={mapContainer} className="map-container" />
  </div>;
}

export default Map;

  
  