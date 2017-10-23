
function draw(dataArray) {
    var svg = d3.select(".mySvg");

    var labels = svg.selectAll(".label")
        .data(dataArray);
    // labels.exit().remove();
    // why we have to exit it before create it?


    var enterLabels = labels.enter().append("text")
        .attr("class","label")
        .attr("y","20")
        .attr("font-size","8px")
        .attr("text-anchor","middle")
        .attr("x", function(d, index){
            return 50 *(index +1);

        });

    labels.merge(enterLabels)
        .text(function(d){
            return d.country;
        });



    var circles = d3.selectAll(".myDot")
        .data(dataArray);
    //why pass dataArray as argument into data function

    circles.exit()
        .transition().duration(1000)
        .attr("r",0)
        .remove();

    // var data=([20,4,6,8,20,43,12]);
    var enterCircles = circles.enter().append("circle")
        .attr("r","10")
        .attr("cx",function(d,index){
            return 50 *(index +1);
        })
        .attr("cy","50")
        .attr("class","dot");

    circles.merge(enterCircles)
        .transition().duration(1000)
        .attr("r",function (d) {
            return d.value;
        })
        .attr("fill",function(d){
            return d.color;
        });



}
// draw([20, 4, 6, 8, 25,2,7,14]);


// d3.text("file.txt", function(file){
//     console.log(file);
// });
// console.log("hey");


d3.json("data.json", function(e, data) {
    console.log(data);
    draw(data);
});
//data here is an object

//api
// var url = "https://api.datausa.io/api/?required=income&show=geo&sumlevel=state";
// var movieTitle="avengers";
// var url = "//www.omdbapi.com/?s="+movieTitle+"&apikey=c8eb008b";
// d3.json(url, function(error, data) {
//     console.log(data);
// });
// d3.json("data.json", function(error, data) {
//     console.log(data);
// });