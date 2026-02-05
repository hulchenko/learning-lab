const tooltip = document.getElementById('tooltip');
const colors = [
  'rgb(254, 224, 210)',
  'rgb(252, 187, 161)',
  'rgb(252, 146, 114)',
  'rgb(251, 106, 74)',
  'rgb(239, 59, 44)',
  'rgb(203, 24, 29)',
];

async function createChart() {
  const educationURLFetch = await fetch(
    'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json'
  );
  const education = await educationURLFetch.json();

  const countyURLFetch = await fetch(
    'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json'
  );
  const county = await countyURLFetch.json();

  const w = 1000;
  const h = 600;
  const path = d3.geoPath();
  const data = topojson.feature(county, county.objects.counties).features;
  const min = d3.min(education, (edu) => edu.bachelorsOrHigher);
  const max = d3.max(education, (edu) => edu.bachelorsOrHigher);
  const step = (max - min) / 8;

  const colorScale = d3
    .scaleThreshold()
    .domain(d3.range(min, max, step)) //reflect colors accordingly to the temperature
    .range(d3.schemeReds[9]); //amount of colors used(5)

  //create svg
  const svg = d3
    .select('.main')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

  svg
    .append('g')
    .selectAll('path')
    .data(data)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('class', 'county')
    .attr('fill', (d) =>
      colorScale(education.find((edu) => edu.fips === d.id).bachelorsOrHigher)
    )
    .on('mouseover', (d, i) => {
      const dataSet = education.find((edu) => edu.fips === i.id);
      tooltip.setAttribute('data-education', dataSet.bachelorsOrHigher);
      tooltip.innerHTML = `
      <b>County: ${dataSet.area_name}, ${dataSet.state}</b><br />
      <b>Percent: ${dataSet.bachelorsOrHigher}%</b>
    </p>`;
    })
    .on('mouseout', () => {
      tooltip.innerHTML = `
      <p>
      <b>County: </b><br />
      <b>Percent: </b>
    </p>`;
    });

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
createChart();
