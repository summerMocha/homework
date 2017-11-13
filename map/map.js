
var mymap = L.map('mymap')
    .setView([42.360083,-71.058889], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2VpdGFuZzAzMjYiLCJhIjoiY2o4ZzN1MWY4MDhndTJxbjZsZmZ6YjZocSJ9.T2rAE5ilNhq3doaqBfqTpw', {
    attribution: 'Map data &copy; ' + '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoid2VpdGFuZzAzMjYiLCJhIjoiY2o4ZzN1MWY4MDhndTJxbjZsZmZ6YjZocSJ9.T2rAE5ilNhq3doaqBfqTpw'
}).addTo(mymap);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap. on('click', onMapClick);


d3.csv('towedUpdated.csv', function (data) {
    console.log(data)
    data.forEach(function (d) {
        if(d['Lat']&&d['Long']){
            L.circle([d['Lat'], d['Long']]).addTo(mymap);
        }
    });
    data.forEach(function (d) {
        if(d['DAY_OF_WEEK']&& d['OCCURRED_ON_DATE']){
            L.bindPopup("<h3 class='info-header'>Info:</h3> <p class='info-header'>"+d['DAY_OF_WEEK']+"</p> <p class='info-header'>"+d['OCCURRED_ON_DATE']+"</p>").addto(mymap);

        }
    })
});





//add a on/off button for morning time
$(".layerButton1").click(function(){
    if(mymap.hasLayer(x)) {
        mymap.removeLayer(x);
    } else{
        mymap.addLayer(x);
    };

});