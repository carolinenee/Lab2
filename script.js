mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fyb2xpbmVuZWUiLCJhIjoiY201b2RhZmxtMGthajJucHRxcW5heGxiNyJ9.NMKAQoQvhYJ8RQq0NQuYkA'; // Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/carolinenee/cm6zbbxvf000n01qwgyu3elks', // style URL
    center: [-79.3832, 43.7], // starting position [lng, lat]
    zoom: 11, // starting zoom level
});
map.on('load', () => {
    // Add a data source containing GeoJSON data
   // map.addSource('buildings-data', {
   //     type: 'geojson',
   //     data: 'https://raw.githubusercontent.com/carolinenee/Lab2/refs/heads/main/wk5-data/buildings.geojson' // Your URL to your buildings.geojson file
   // });
    // Add a data source from a Mapbox tileset
    map.addSource('census-tracts', { // Create your own source ID
        'type': 'vector',
        'url': 'mapbox://carolinenee.8esaocaa' // Update to your mapbox tileset ID
    });
    map.addLayer({
        'id': 'idkbro', // Create your own layer ID
        'type': 'fill', // Note this is different to point data
        'source': 'census-tracts', // Must match source ID from addSource Method
        'paint': {
            'fill-color': '#888888', // Test alternative colours and style properties
            'fill-opacity': 0.4,
            'fill-outline-color': 'black'
        },
        'source-layer': 'torontoct-bjj60w' // Tileset NAME (diff to ID), get this from mapbox tileset page
    });
    //map.addLayer({
        //'id': 'buildings-point',
        //'type': 'circle',
        //'source': 'buildings-data',
        //'paint': {
            //'circle-radius': 5,
            //'circle-color': '#007cbf'
        //}
    //});
});