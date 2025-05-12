# Force-Directed Graph of Countries Sharing Borders

## Project Description

This project is a data visualization that displays countries as nodes in a force-directed graph. The graph illustrates which countries share land borders, with lines connecting adjacent nations. Each country's node is represented by its national flag. The visualization is interactive, allowing users to drag the flag nodes. Hovering over a flag provides a tooltip with the country's name. A small information section is included on the page detailing the project and its sources.

This project was built as part of the [freeCodeCamp Data Visualization Certification](https://www.freecodecamp.org/learn/data-visualization/) (mention the specific project if it is one of them, e.g., "part of the Data Visualization curriculum").

## Features

* **Force-Directed Layout:** Countries are positioned using a force simulation that pulls linked countries together (bordering nations) and pushes unconnected countries apart.
* **Country Flags as Nodes:** Each node visually displays the flag of the corresponding country.
* **Border Connections:** Lines connect countries that share a land border.
* **Interactive Dragging:** Users can click and drag country nodes to manipulate the layout (the simulation reacts to the user's interaction).
* **Country Name Tooltip:** Hovering over a flag displays the country's name in a browser tooltip.
* **Information Section:** A static section on the page provides details about the project's data and flag sources.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* [D3.js (v6)](https://d3js.org/) - For creating the force-directed graph visualization.
* [flag-icon-css](https://github.com/lipis/flag-icons) - CSS library for displaying flag icons (used via CDN).

## Data Source

* Country border data and country codes: [https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json](https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json)

## Setup and Running Locally

1.  **Clone or Download:** Download the project files to your local machine.
2.  **Install a Local Web Server:** To run the project, you need a local web server because browsers restrict direct file access for security reasons, which affects loading external data like the JSON file. If you use Visual Studio Code, the "Live Server" extension is an easy option. Other options include Python's built-in http.server, or simple Node.js http servers.
3.  **Serve the Files:** Start your local web server in the project's root directory (the folder containing `index.html`).
4.  **Open in Browser:** Open your web browser and go to the address provided by your local server (e.g., `http://127.0.0.1:5500` or `http://localhost:8080`).

