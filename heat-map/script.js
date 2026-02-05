const tooltip = document.getElementById('tooltip');
const colors = [
  '#AA0000',
  '#D2122E',
  '#fd5c63',
  '#F88379',
  '#FBCEB1',
  '#F0F8FF',
  '#B9D9EB',
  '#89CFF0',
  '#6CB4EE',
  '#0066b2',
  '#002D62',
];
const months = [
  //as they're numerized (1-12) in JSON
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const yearFormat = d3.format('d'); //proper year formatting for the chart

fetch(
  'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json'
)
  .then((response) => response.json())
  .then((response) => {
    const { baseTemperature, monthlyVariance } = response;

    createChart(
      monthlyVariance.map((d) => ({ ...d, temp: baseTemperature - d.variance })) //create an array of data, calculate temp for each year/month
    );
  });

function createChart(data) {
  const w = 1000;
  const h = 500;
  const padding = 60;
  const cellWidth = Math.round(w / (data.length / 12));
  const cellHeight = Math.floor(h / 12) - 10;

  const xScale = d3
    .scaleTime()
    .domain([d3.min(data, (d) => d.year), d3.max(data, (d) => d.year)]) //pull data from 1753 to 2015
    .range([padding, w - padding]);

  const yScale = d3
    .scaleLinear()
    .domain([1, 12])
    .range([padding, h - padding]); //representing months (Jan at the top, Dec at the bottom)

  const tempScale = d3
    .scaleLinear()
    .domain([d3.max(data, (d) => d.temp), d3.min(data, (d) => d.temp)]) //reflect colors accordingly to the temperature
    .range([0, 10]); //amount of colors used(11)

  const svg = d3
    .select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

  svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'cell')
    .attr('data-month', (d) => d.month)
    .attr('data-year', (d) => d.year)
    .attr('data-temp', (d) => d.temp)
    .attr('fill', (d) => colors[Math.floor(tempScale(d.temp))])
    .attr('x', (d) => xScale(d.year))
    .attr('y', (d) => yScale(d.month) - 15)
    .attr('width', cellWidth)
    .attr('height', cellHeight)
    .on('mouseover', (d, i) => {
      tooltip.setAttribute('data-year', i.year);
      tooltip.innerHTML = `
      <p><b>Year: </b>${i.year}<br>
        <b>Month: </b>${months[i.month - 1]}<br>
        <b>Temp: </b>${i.temp.toFixed(1)}℃</p>
    `;
    })
    .on('mouseout', () => {
      tooltip.innerHTML = `
      <p><b>Year: </b><br>
      <b>Month: </b><br>
      <b>Temp: </b></p>`;
    });

  //create axis
  const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));
  const yAxis = d3.axisLeft(yScale).tickFormat((month) => {
    const date = new Date(0);
    date.setUTCMonth(month);
    return d3.timeFormat('%B')(date);
  });

  //set axis
  svg
    .append('g')
    .attr('id', 'x-axis')
    .attr('class', 'tick')
    .attr('transform', 'translate(0,' + (h - padding + 15) + ')')
    .call(xAxis);

  svg
    .append('g')
    .attr('id', 'y-axis')
    .attr('class', 'tick')
    .attr('transform', 'translate(' + padding + ', -15)')
    .call(yAxis);

  //create legend

  const legendWidth = 150;
  const legendHeight = 20;

  const legendBarWidth = legendWidth / colors.length; //to evenly distribute colors within the legend bar

  //set legend

  const legend = d3
    .select('#legend')
    .append('svg')
    .attr('width', legendWidth)
    .attr('height', legendHeight)
    .selectAll('rect')
    .data(colors)
    .enter()
    .append('rect')
    .attr('x', (x, i) => i * legendBarWidth)
    .attr('y', 0)
    .attr('width', legendBarWidth)
    .attr('height', legendHeight)
    .attr('fill', (c) => c);
}
