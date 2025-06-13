// components/SatelliteMap.jsx

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Mapbox-ի API Key-ը ստացիր այստեղից՝ https://account.mapbox.com/access-tokens/
mapboxgl.accessToken = 'ՔՈ_MAPBOX_ACCESS_TOKEN';

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-v9', // Արբանյակային ոճ
      center: [43.91488, 40.06617], // Գեղեցիկ գյուղի կոորդինատները
      zoom: 16 // Zoom՝ որ տները լավ երևան
    });

    new mapboxgl.Marker()
      .setLngLat([43.91488, 40.06617])
      .addTo(map);

    return () => map.remove(); // Մաքրում ենք քարտեզը, երբ կոմպոնենտը հանվում է
  }, []);

  return (
    <div>
      <h2 className="text-xl mb-2">Գեղեցիկ գյուղ՝ արբանյակային քարտեզ</h2>
      <div
        ref={mapContainer}
        style={{ width: '100%', height: '100%',border: 'none' }}
      />
    </div>
  );
};

export default Map;
