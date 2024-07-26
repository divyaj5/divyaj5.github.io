// script.js

// Load the data
d3.csv("data/economic_indicators_2023.csv").then(data => {
    // Process the data
    data.forEach(d => {
        d["GDP (current US$)"] = +d["GDP (current US$)"];
        d["Trade (% of GDP)"] = +d["Trade (% of GDP)"];
        d["Unemployment Total (% of labor force)"] = +d["Unemployment Total (% of labor force)"];
    });

    // Set up the margins and dimensions
    const margin = { top: 20, right: 30, bottom: 40, left: 90 },
          width = 800 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

    // Create an SVG container
    const svg = d3.select("#container").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Set up the scales
    const x = d3.scaleLinear()
        .domain([0, d3.max(data, d => d["GDP (current US$)"])])
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
        .attr("width", d => x(d["GDP (current US$)"]))
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
        .text("GDP (current US$)");

    // Add y-axis label
    svg.append("text")
        .attr("class", "axis-label")
        .attr("x", -margin.left)
        .attr("y", -10)
        .style("text-anchor", "middle")
        .text("Country");

    // Add tooltips for additional data (Trade and Unemployment)
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    svg.selectAll(".bar")
        .on("mouseover", (event, d) => {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(`Trade (% of GDP): ${d["Trade (% of GDP)"]}<br>Unemployment: ${d["Unemployment Total (% of labor force)"]}%`)
                .style("left", (event.pageX + 5) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", (d) => {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
});
