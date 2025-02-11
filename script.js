mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fyb2xpbmVuZWUiLCJhIjoiY201b2RhZmxtMGthajJucHRxcW5heGxiNyJ9.NMKAQoQvhYJ8RQq0NQuYkA'; // default public map token from my Mapbox account
const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/carolinenee/cm6zbbxvf000n01qwgyu3elks', //  URL link for mapbox style that I made
    center: [-79.392221, 43.655417], // starting position [lng, lat] (moozda location)
    zoom: 18, // starting zoom level
});
map.on('load', () => {
    //add bike parking locations 
    // Add a data source from a GeoJSON file
    map.addSource('bike-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/carolinenee/Lab2/refs/heads/main/wk5-data/Bicycle%20Parking%20Map%20Data%20-%204326.geojson' // Your URL to bike geojson file that I published on github
    });
    map.addLayer({
        'id': 'bike-docks',
        'type': 'circle',
        'source': 'bike-data', //refers to the map.on source name from above
        paint: {
            'circle-radius': 3,  //size of circle 
            'circle-color': '#000000', //000000 is black 
            'circle-opacity': 0.5 //makes circles opaque because i thought it looked better 
        }
    });
    // adding polygon location to map 
    map.addSource('MoozdaHome', {
        type: 'geojson',
        data: {  // feature collection was copy pasted directly from geojson.io 
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
            "fill-color": "#FEA3AA", // pink color 
            "fill-opacity": 0.6 // 60% transparency
        }
    });
    // Add Snow Effect taken from mapbox example codes
    const zoomBasedReveal = (value) => {
        return [
            'interpolate',
            ['linear'],
            ['zoom'],
            5, 0.0,
            20, value
        ];
    };

    map.setSnow({
        density: zoomBasedReveal(0.85),
        intensity: .70,
        'center-thinning': 0.1,
        direction: [0, 50],
        opacity: 0.80,
        color: `#ffffff`,
        'flake-size': 0.21,
        vignette: zoomBasedReveal(0.3),
        'vignette-color': `#ffffff`
    });
    //code template for cat taken from https://docs.mapbox.com/mapbox-gl-js/example/add-image/
    map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
        (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            map.addImage('cat', image);

            // Add a data source containing one point feature.
            map.addSource('point', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-79.392459, 43.655427] //updates location 
                            }
                        }
                    ]
                }
            });

            // Add a layer to use the image to represent the data.
            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': 'point', // reference the data source
                'layout': {
                    'icon-image': 'cat', // reference the image
                    'icon-size': 0.1 //change size 
                }
            });
        }
    );

});
