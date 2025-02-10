mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fyb2xpbmVuZWUiLCJhIjoiY201b2RhZmxtMGthajJucHRxcW5heGxiNyJ9.NMKAQoQvhYJ8RQq0NQuYkA'; // Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/carolinenee/cm6zbbxvf000n01qwgyu3elks', // style URL
    center: [-79.392221, 43.655417], // starting position [lng, lat]
    zoom: 18, // starting zoom level
});
// adding polygon location to map 
map.on('load', () => {
    // feature collection was copy pasted directly from geojson.io 
    map.addSource('MoozdaHome', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -79.39246519246132,
                                    43.65546778219394
                                ],
                                [
                                    -79.39252158937886,
                                    43.65545639520022
                                ],
                                [
                                    -79.39245338845492,
                                    43.65529697706148
                                ],
                                [
                                    -79.39240486087475,
                                    43.65530741516662
                                ],
                                [
                                    -79.39246519246132,
                                    43.65546778219394
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    }
                }
            ]
        }
    });
    //style for the MoozdaHome polygon
    map.addLayer({
        'id': 'uoft-pnt',
        'type': 'fill',
        'source': 'MoozdaHome', //needs to be same name as in map.addSource
        'paint': {
            "fill-color": "#FEA3AA", // Red color fill
            "fill-opacity": 0.6 // 60% transparenc
        }
    });
});