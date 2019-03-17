(function() {
    var data = [
        [220, 506],
        [950, 1804],
        [1200, 1116],
        [1005, 1865],
        [1639, 930],
        [1698, 1633],
        [102, 1627],
        [626, 821],
        [808, 402],
        [300, 940],
    ];
    var svg = d3.select("#graph");

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);

    margin = ({ top: 20, right: 30, bottom: 30, left: 40 })

    x = d3.scaleLinear()
        .domain(d3.extent(data, d => d.x)).nice()
        .range([margin.left, width - margin.right]);

    xAxis = g => g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x))
        .call(g => g.select(".domain").remove())
        .call(g => g.append("text")
            .attr("x", width - margin.right)
            .attr("y", -4)
            .attr("fill", "#000")
            .attr("font-weight", "bold")
            .attr("text-anchor", "end")
            .text(data.x))

    yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select(".domain").remove())
        .call(g => g.select(".tick:last-of-type text").clone()
            .attr("x", 4)
            .attr("text-anchor", "start")
            .attr("font-weight", "bold")
            .text(data.y))
})();
