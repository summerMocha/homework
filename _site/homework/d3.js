// A simple scatter plot
var width=800;//set the width is 500 px
var height=800;//set the height also 500px



var margin = {
    top: 100,
    left: 30,
    right: 30,
    bottom: 50
};

var svg = d3.select("#mysvg")
    .attr("width",width)
    .attr("height",height);



// Declare data

var data = [
    {x1: 2, y1: 3, x2:12, y2:3},
    {x1: 4, y1: 4, x2:2,  y2:6},
    {x1: 6, y1: 7, x2:12, y2:10},
    {x1: 8, y1: 6, x2:13, y2:12},
    {x1: 10, y1: 9, x2:12, y2:13}
    // {x: 12, y: 11, x3},
    // {x: 3, y: 2},
    // {x: 4, y: 4},
    // {x: 7, y: 6},
    // {x: 6, y: 8},
    // {x: 9, y: 10},
    // {x: 11, y: 12}
];

// Create scales
var xScale = d3.scaleLinear()
    .domain([0,20])
    .range([margin.left, width - margin.right]);

var yScale = d3.scaleLinear()
    .domain([0,20])
    .range([height - margin.bottom, margin.top]);

// Draw axes
var xAxis = svg.append("g")
    .attr("transform","translate(0," + (height-margin.bottom) + ")")
    .call(d3.axisBottom().scale(xScale));

var yAxis = svg.append("g")
    .attr("transform","translate(" + margin.left + ",0)")
    .call(d3.axisLeft().scale(yScale));

// Draw circles for scatter plot
var circles = svg.selectAll("circle")
    .data(data)
    .enter()//put  placeholds, every OBJ give a placeholders,
    .append("circle")// pass the circlrs to placehoulders
    .attr("cx", function(d) { return xScale(d.x1); })
    .attr("cy", function(d) { return yScale(d.y1); })
    .attr("r",15)
    .style("fill","green");

//change the color and coordniante

svg.selectAll("circle")
    .on("click",function(){
        console.log(this);
        d3.selectAll("circle")
            .transition()
            .delay(100)
            .duration(1000)

            .style("fill","lightblue")
            .attr("r",10)
            .attr("cx", function(d) { return xScale(d.x2); })
            .attr("cy", function(d) { return yScale(d.y2); });


    });


// change the chart to a bar chart once click


// var line = [
//     5000, 10000, 20000, 40000
// ];
//
// var age = [
//     10, 15, 20, 25, 30, 35, 40, 45, 50
//
// ];
//
// var dataArray = [
//     {age: 10, salary: 300},
//     {age: 15, salary: 600},
//     {age: 20, salary: 2000},
//     {age: 25, salary: 10000},
//     {age: 30, salary: 15000},
//     {age: 35, salary: 25000},
//     {age: 40, salary: 36000},
//     {age: 45, salary: 41000},
//     {age: 50, salary: 44638}
// ];

// svg.selectAll("circle")
//             .on("click",function(){
//                 d3.select("this")
//                     .data(data)
//                     .exit()
//                     .remove()
//                     .transition()
//                     .delay(100)
//                     .duration(1000)
//                     .attr("width",width)
//                     .attr("height",height)
//                     .selectAll('rect')
//                     .data(dataArra)
//                     .enter()
//                     .append('rect')
//                     .attr('fill', '#002b80')
//                     .attr('height', salaryToY)
//                     .attr('width', 50)
//                     .attr('x', ageToX)
//                     .attr('y', getYValue);
//             });
        // .append('rect')
        // .append(line)
        // .append(age)
        // .data(dataArray)
        // .style("fill","lightblue")
        // .enter();

// function ageToX (data) {
//     return (data.age / 5) * 60 - 100;
// };
//
// function salaryToY (data) {
//     return data.salary / 100;
// };
//
// function getYValue(data) {
//     return 489 - salaryToY(data);
// };
//
// for (var i = 0; i < line.length; i++) {
//     svg.append('line')
//         .attr('x1', 0)
//         .attr('y1', 500 - line[i] / 100)
//         .attr('x2', 10)
//         .attr('y2', 500 - line[i] / 100)
//         .attr('stroke', '#000000')
//         .attr('stroke-width', 2);
// }
//
// for (var i = 0; i < age.length; i++) {
//     var x1 = age[i] / 5 * 60 - 60;
//     svg.append('line')
//         .attr('x1', x1)
//         .attr('y1', 500)
//         .attr('x2', x1)
//         .attr('y2', 490)
//         .attr('stroke', '#000000')
//         .attr('stroke-width', 2);
// }


// var svg2 = d3.select('#mysvg')
//             .attr("width",width)
//             .attr("height",height)
//             .selectAll('rect')
//             .data(dataArray)
//             .enter()
//             .append('rect')
//             .attr('fill', '#002b80')
//             .attr('height', salaryToY)
//             .attr('width', 50)
//             .attr('x', ageToX)
//             .attr('y', getYValue);









