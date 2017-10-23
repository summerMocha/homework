var mymap = L.map('mapid')
             .setView([42.360083,-71.058889], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2VpdGFuZzAzMjYiLCJhIjoiY2o4ZzN1MWY4MDhndTJxbjZsZmZ6YjZocSJ9.T2rAE5ilNhq3doaqBfqTpw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoid2VpdGFuZzAzMjYiLCJhIjoiY2o4ZzN1MWY4MDhndTJxbjZsZmZ6YjZocSJ9.T2rAE5ilNhq3doaqBfqTpw'
}).addTo(mymap);

//
// var marker = L.marker([42.42852,-71.0733]).addTo(mymap)
//
// var marker = L.marker([42.35119,-71.07433]).addTo(mymap)
//
// var circle = L.circle([42.339807,-71.089172], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 50
 // }).addTo(mymap);
// circle.bindPopup("here is northeastern university");
// marker.bindPopup("Here is city of malden").openPopup();
// marker.bindPopup("Here is Back Bay").openPopup();
//

// var popup = L.popup()
//     .setLatLng([42.3505,-71.105399])
//     .setContent("Here is Boston University.")
//     .openOn(mymap);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap. on('click', onMapClick);




//define a new icon
// var myIcon = L.icon({
//     iconUrl: 'teardrop.png',
//     iconSize: [38, 95],
//     iconAnchor: [22, 94],
//
// });
//
// L.marker([42.42852,-71.0733], {icon: myIcon}).addTo(mymap);

//MorningTime :orange
function MorningTime(feature,layer){
    layer.bindPopup("<h3 class='info-header'>Info:</h3> <p class='info-header'>"+feature.properties.day_of_week+"</p> <p class='info-header'>"+feature.properties.occurred_on_date+"</p>");


};

//add some Geojson
var x= L.geoJson(orange,{
    onEachFeature: MorningTime}).addTo(mymap);

//add a on/off button for morning time

$(".layer1").click(function(){
    if(mymap.hasLayer(x)) {
        mymap.removeLayer(x);
    } else{
        mymap.addLayer(x);
    };

});


// // add another layer 6am-noon green color
// function NoonTime(feature,layer){
//     layer.bindPopup("<h3 class='info-header'>Info:</h3> <p class='info-header'>"+feature.properties.day_of_week+"</p> <p class='info-header'>"+feature.properties.occurred_on_date+"</p>");
//
//
// };
//
// //add some Geojson
// var y= L.geoJson(green,{
//     onEachFeature: NoonTime}).addTo(mymap);
//
//
// $(".layer2").click(function(){
//     if(mymap.hasLayer(y)) {
//         mymap.removeLayer(y);
//     } else{
//         mymap.addLayer(y);
//     }
//
// });
//
// //13pm-17pm blue
//
// function afterNoonTime(feature,layer){
//     layer.bindPopup("<h3 class='info-header'>Info:</h3> <p class='info-header'>"+feature.properties.day_of_week+"</p> <p class='info-header'>"+feature.properties.occurred_on_date+"</p>");
// }
//
// //add some Geojson
// var z= L.geoJson(blue,{
//     onEachFeature: afterNoonTime}).addTo(mymap);
//
//
// $(".layer3").click(function(){
//     if(mymap.hasLayer(z)) {
//         mymap.removeLayer(z);
//     } else{
//         mymap.addLayer(z);
//     }
//
// });
//
// //add evening time 19-midnight puple
// //13pm-17pm blue
//
// function eveningTime(feature,layer){
//     layer.bindPopup("<h3 class='info-header'>Info:</h3> <p class='info-header'>"+feature.properties.day_of_week+"</p> <p class='info-header'>"+feature.properties.occurred_on_date+"</p>");
// }
//
// //add some Geojson
// var k= L.geoJson(puple,{
//     onEachFeature: eveningTime}).addTo(mymap);
//
//
// $(".layer4").click(function(){
//     if(mymap.hasLayer(k)) {
//         mymap.removeLayer(k);
//     } else{
//         mymap.addLayer(k);
//     }
// });

