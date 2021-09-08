var margin = { top: 20, right: 20, bottom: 30, left: 50 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// weight of the dots
var z = d3.scalePow().exponent(0.25).domain([0, 5000]).range([2, 50]); // changes size of the dots

// append the svg obgect to visualization #3
var svg = d3.select(".view4").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

var getdata = function () {
    var dataset = []
    for (var i = 0; i < 10; i++) {
        var x = d3.randomUniform(0, 100)();
        var y = d3.randomUniform(0, 100)();
        dataset.push({ "x": x, "y": y, "z": x });
    }

    // generates the two mark points from the dataset
    var p1 = 8; // mark point will be the same as the 8th element in the array
    var p2 = 9; // mark point will be the same as the 9th element in the array

    // push the mark points to the dataset
    dataset.push(dataset[p1]);
    dataset.push(dataset[p2]);

    return dataset;
}

// Get the data
var data = getdata()

// format the data
data.forEach(function (d) {
    d.x = +d.x;
    d.y = +d.y;
    d.z = +d.z;
});

// console.log(data);

// scale the range of the data
x.domain([0, 100]);
y.domain([0, 100]);

// add the dots
svg.selectAll("dot")
    .data(data)
    .enter().append("circle")
    .attr("r", function (d, i) {

        // if the index is over 9 then this must be the newly added points that represent the 2 marked points
        if (i > 9) {
            return 3; // make the size of the point with a radius of 3
        } else if (i == 8) { // this point will have a fixed radius size
            d3.select(this).style("opacity", 0.3); // makes the circles opaque
            return 17; // radius size is 17
        } else if (i == 9) { // this point will have a fixed radius size
            d3.select(this).style("opacity", 0.3); // makes the circles opaque
            return 20; // radius size is 20
        }
        else {
            // these are the randomly generated data points in the set
            d3.select(this).style("opacity", 0.3); // make the circles opaque
            return z(d.z);
        }
    })
    .attr("cx", function (d) { return x(d.x); })
    .attr("cy", function (d) { return y(d.y); })
    .attr("stroke", "#000").attr("stroke-width", 1.5);

// add the X Axis
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

// add the Y Axis
svg.append("g")
    .call(d3.axisLeft(y));

// random number generator for the number in the array
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}