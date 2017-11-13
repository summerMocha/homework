var mymap = L.map('mapid')
    .setView([38.865375,-101.074219], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2VpdGFuZzAzMjYiLCJhIjoiY2o4ZzN1MWY4MDhndTJxbjZsZmZ6YjZocSJ9.T2rAE5ilNhq3doaqBfqTpw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: ''
}).addTo(mymap);


// var myIcon = L.divIcon({className: 'my-div-icon'});
// // you can set .my-div-icon styles in CSS
//
//
//
//
var marker = L.marker([42.42852,-71.0733]).addTo(mymap)

var marker = L.marker([42.35119,-71.07433]).addTo(mymap)

var circle = L.circle([42.339807,-71.089172], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
 }).addTo(mymap);
//
var x= L.geoJson(data,{
    onEachFeature: StatesLegalized}).addTo(mymap);

function StatesLegalized(feature,layer){
    layer.bindPopup("<h3 class='info-header'>Info:</h3> <p class='info-header'>"+feature.properties.day_of_week+"</p> <p class='info-header'>"+feature.properties.occurred_on_date+"</p>");


};
//add a on/off button for morning time
$(".layerButton1").click(function(){
    if(mymap.hasLayer(x)) {
        mymap.removeLayer(x);
    } else{
        mymap.addLayer(x);
    };

});

var y= L.geoJson(data,{
    onEachFeature: International}).addTo(mymap);

function International(feature,layer){
    layer.bindPopup("<h3 class='info-header'>Info:</h3> <p class='info-header'>"+feature.properties.day_of_week+"</p> <p class='info-header'>"+feature.properties.occurred_on_date+"</p>");


};

$(".layerButton2").click(function(){
    if(mymap.hasLayer(x)) {
        mymap.removeLayer(x);
    } else{
        mymap.addLayer(x);
    };

});