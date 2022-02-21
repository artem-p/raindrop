import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './Map.css';


mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0ZW1wdWdhY2hldiIsImEiOiJja3l1NWJwZ3owM2IxMnd0NDUydDZqazUyIn0.b1G2XUsJEhO49s7vTH2q1Q';

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [long, setLong] = useState(30);
  const [lat, setLat] = useState(59.9);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      center: [long, lat],
      zoom: zoom
    });
  });

  return <div id='map'>
      <div ref={mapContainer} className="map-container" />
  </div>;
}

export default Map;

  
  