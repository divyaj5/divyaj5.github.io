// script.js

// Load the data
let data;
d3.csv("data/economic_indicators_2023.csv").then(loadedData => {
    data = loadedData;
    data.forEach(d => {
        d["GDP (current US$)"] = +d["GDP (current US$)"];
        d["Trade (% of GDP)"] = +d["Trade (% of GDP)"];
        d["Unemployment Total (% of labor force)"] = +d["Unemployment Total (% of labor force)"];
    });

    // Initially show GDP data
    updateChart("GDP (current US$)");
});

function updateChart(indicator) {
    // Set up the margins and dimensions
    const margin = { top: 20, right: 30, bottom: 40, left: 120 }, // Increased left margin
          width = 800 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

    // Remove the old SVG if it exists
    d3.select("#container").selectAll("*").remove();

    // Create an SVG container
    const svg = d3.select("#container").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Set up the scales
    const x = d3.scaleLinear()
        .domain([0, d3.max(data, d => d[indicator])])
        .range([0, width]);

    const y = d3.scaleBand()
        .domain(data.map(d => d.Country))
        .range([0, height])
        .padding(0.1);

    // Create the bars
    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("y", d => y(d.Country))
        .attr("width", d => x(d[indicator]))
        .attr("height", y.bandwidth());

    // Add the x-axis
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).ticks(5));

    // Add the y-axis
    svg.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(y));

    // Add x-axis label
    svg.append("text")
        .attr("class", "axis-label")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom - 5)
        .style("text-anchor", "middle")
        .text(indicator);

    // Add y-axis label
    svg.append("text")
        .attr("class", "axis-label")
        .attr("x", -margin.left / 2)
        .attr("y", -10)
        .style("text-anchor", "middle")
        .text("Country");
}
