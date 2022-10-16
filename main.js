let latitude=39.76691, longitude=86.14996;

mapboxgl.accessToken = 'pk.eyJ1Ijoic3JpbGVraGFjaGludGEiLCJhIjoiY2w4cmR6dHVoMzMzejN3bzVia2M5N3o1ZSJ9.STdVUOw1SvU_2OtXv2yHXw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 4
});

var img1 = document.querySelector("#museum")
var img2 = document.querySelector("#beach")
var img3 = document.querySelector("#dunes")
var img4 = document.querySelector("#500")
var img5 = document.querySelector("#circle")

var marker1 = new mapboxgl.Marker({
    element: img1
})
.setlnglat([-86.156967, 39.810383])
.addTo(map);

var marker2 = new mapboxgl.Marker({
    element: img2
})
.setlnglat([-86.7711219, 40.7916253])
.addTo(map);

var marker3 = new mapboxgl.Marker({
    element: img3
})
.setlnglat([-87.0946713, 41.6391735])
.addTo(map);

var marker4 = new mapboxgl.Marker({
    element: img4
})
.setlnglat([-86.23444, 39.79472])
.addTo(map);

var marker5 = new mapboxgl.Marker({
    element: img5
})
.setlnglat([-86.157392, 39.767903])
.addTo(map);

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: True
        },
        trackUserLocation: true
    })
);

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
);