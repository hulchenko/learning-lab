//pull data into the variable:
fetch(
  'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'
)
  .then((response) => response.json())
  .then((response) => {
    const { data } = response;
    console.log({ data });

    createChart(data.map((d) => [d[0], d[1]]));
  });

const tooltip = document.getElementById('tooltip');

function createChart(data) {
  const w = 1000;
  const h = 500;
  const padding = 60;

  const svg = d3
    .select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

  const xScale = d3
    .scaleTime()
    .domain([
      d3.min(data, (d) => new Date(d[0])),
      d3.max(data, (d) => new Date(d[0])),
    ])
    .range([padding, w - padding]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d[1])])
    .range([h - padding, padding]);

  //create axis
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('data-date', (d) => d[0])
    .attr('data-gdp', (d) => d[1])
    .attr('x', (d) => xScale(new Date(d[0])))
    .attr('y', (d) => yScale(d[1]))
    .attr('width', h / data.length)
    .attr('height', (d) => h - yScale(d[1]) - padding)
    .on('mouseover', (d, i) => {
      tooltip.setAttribute('data-date', d[0]);
      tooltip.innerHTML = `
      <b>Date: ${d[0]}<br>
      GDP: $${d[1]} bn.<b>`;
    })
    .on('mouseout', () => {
      tooltip.innerHTML = `<b>Date: <br> GDP: `;
    });

  //set axis
  svg
    .append('g')
    .attr('id', 'x-axis')
    .attr('class', 'tick')
    .attr('transform', 'translate(0,' + (h - padding) + ')')
    .call(xAxis);

  svg
    .append('g')
    .attr('id', 'y-axis')
    .attr('class', 'tick')
    .attr('transform', 'translate(' + padding + ', 0)')
    .call(yAxis);
}
