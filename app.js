// Set up SVG dimensions
const width = window.innerWidth;
const height = window.innerHeight;

// Select the <svg> element from HTML
const svg = d3.select("svg")
.attr("width", width)
.attr("height", height);

// Load the countries dataset
d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json")
.then(data => {
const nodes = data.nodes;
const links = data.links;

// Create simulation
const simulation = d3.forceSimulation(nodes)
.force("link", d3.forceLink(links).id(d => d.index).distance(40)) // Link force with distance
.force("charge", d3.forceManyBody().strength(-20)) // Charge force (repulsion)
.force("center", d3.forceCenter(width / 2, height / 2)); // Center force

// Draw links (lines)
const link = svg.append("g")
.attr("stroke", "#aaa")
.attr("stroke-width", 1.5)
.selectAll("line")
.data(links)
.enter()
.append("line");

// Create flag nodes as <div> elements
const node = d3.select("body").append("div")
.attr("id", "nodes")
.selectAll("div")
.data(nodes)
.enter()
.append("div")
.attr("class", d => `node flag-icon flag-icon-${d.code.toLowerCase()}`) // Apply node and flag-icon classes
.attr("title", d => d.country) // Add tooltip for country name
.call(drag(simulation)); // Apply drag behavior

// On each tick, update positions
simulation.on("tick", () => {
link
.attr("x1", d => d.source.x)
.attr("y1", d => d.source.y)
.attr("x2", d => d.target.x)
.attr("y2", d => d.target.y);

node
.style("left", d => `${d.x}px`)
.style("top", d => `${d.y}px`);
});

})
.catch(error => {
console.error("Error loading or parsing data:", error);
});

// Drag behavior for nodes
function drag(simulation) {
return d3.drag()
.on("start", (event, d) => {
if (!event.active) simulation.alphaTarget(0.3).restart();
d.fx = d.x;
d.fy = d.y;
})
.on("drag", (event, d) => {
d.fx = event.x;
d.fy = event.y;
})
.on("end", (event, d) => {
if (!event.active) simulation.alphaTarget(0);
d.fx = null;
d.fy = null;
});
}