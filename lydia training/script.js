var bardata =[20, 40];
var height = 400;
var width = 600;
var barwidth = 50;
var baroffset = 10;


//add scales
var yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata)])
    .range([0,height])


// then we need to specify what we want as the domain and the range.
// The domain is sort of original information
// the range is the thing we want rto fit into


//ordinal scale
var xScale = d3.scaleOrdinal()
    .domain(d3.range(0,bardata.length))//generate a array
    .rangeBand([0,width])

//range就是现在柱状图不要超过canvas的大小，超过的话就看不到了，
// 比如说，你的canvas高度是400， 结果你dataarry里的有个数值是800，就超过了看不到??
//并不是，如果有个柱状图的height是800， 也会显示，那要这个range的意义在哪里？
// 就是为了看到本来会被超过canvas看不到的图
d3.select('#chart').append('svg')
    .attr('width',width)
    .attr('height',height)
    .style('_background', 'yellow')
    .selectAll('rect').data(bardata)
    .enter().append('rect')
        .style('fill','red')
        .attr('width',xScale.rangeBand())
        .attr('height',function (d) {
        return yScale(d);//意思是bardata里的数值都要被yscale筛选一下，如果有的数值超过canva的高，就filterout掉
        })
    //i是指的index，这是这个built in 函数中自带的第二个参数，是optional的
        .attr('x',function (d,i) {
        return i * (barwidth + baroffset);
        //i[0],index=0的时候就是起点, 第二个柱状在i=1， 1*60，以此类推

    })

    //目前为止图是反的，如何调整过来
    .attr('y',function (d) {
        return height - yScale(d);

    })
//不懂，为什么用SVG的高减去d,图就变正了



