import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Slider from '@mui/material/Slider';
import './Map.css';
import { owmRequests } from '../requests';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0ZW1wdWdhY2hldiIsImEiOiJja3l1NWJwZ3owM2IxMnd0NDUydDZqazUyIn0.b1G2XUsJEhO49s7vTH2q1Q';

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [long, setLong] = useState(30);
  const [lat, setLat] = useState(59.9);
  const [zoom, setZoom] = useState(6);
  const [timestamps, setTimestamps] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);

  
  useEffect(() => {
    fetch(owmRequests.fetchRadarData)
      .then(response => response.json())
      .then(data => {
        if (data?.radar?.past) {
          const timestamps = data.radar.past;
          
          setTimestamps(timestamps);
          
          if (timestamps.length > 0) {
            setSliderValue(timestamps[timestamps.length - 1].time)
          }
        }    
      });
  }, []);


  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      center: [long, lat],
      zoom: zoom
    });
  });

  
  useEffect(() => {
    if (!timestamps || timestamps.length === 0) return;

    let lastRadarPath = timestamps[timestamps.length - 1].path;

    map.current.on('load', function(){
      map.current.addLayer({
        "id": "precipitation",
        "type": "raster",
        "source": {
          "type": "raster",
          "tiles": [`https://tilecache.rainviewer.com/${lastRadarPath}/512/{z}/{x}/{y}/1/1_0.png`],
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

  }, [timestamps]);

  
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  }

  const getSliderMin = () => {
    return timestamps ? timestamps?.length > 0 ? timestamps[0].time : 0 : 0;
  }

  const getSliderMax = () => {
    return timestamps ? timestamps?.length > 0 ? timestamps[timestamps.length - 1].time : 0 : 0;
  }
  
  return <div>
          <div id='map'>
            <div ref={mapContainer} className="map-container" />
          </div>

          <div className='bottom-controls'>
            <Slider value={sliderValue} defaultValue={getSliderMax()} onChange={handleSliderChange} marks={true} min={getSliderMin()} max={getSliderMax()} step={600}/>
          </div>
        </div>;
}

export default Map;

  
  