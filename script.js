mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fyb2xpbmVuZWUiLCJhIjoiY201b2RhZmxtMGthajJucHRxcW5heGxiNyJ9.NMKAQoQvhYJ8RQq0NQuYkA'; // Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/carolinenee/cm6zbbxvf000n01qwgyu3elks', // style URL
    center: [-79.3832,43.7], // starting position [lng, lat]
    zoom: 11, // starting zoom level
});
map.on('load', () => {
    // Add a data source containing GeoJSON data
    map.addSource('uoft-data', {
    type: 'geojson',
    data: {
    "type": "FeatureCollection",
    "features": [
    {
    "type": "Feature",
    "properties": {
    "name": "Sidney Smith Hall"
    },
    "geometry": {
    "coordinates": [
    -79.39865237301687,
    43.662343395037766
    ],
    "type": "Point"
    }
    }
    ]
    }
    });
    map.addLayer({
    'id': 'uoft-pnt',
    'type': 'circle',
    'source': 'uoft-data',
    'paint': {
    'circle-radius': 6,
    'circle-color': '#B42222'
    }
    });
    });