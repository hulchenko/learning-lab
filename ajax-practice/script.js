const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

//By doing following command, we can find list of data locations, including json, which we would use in the command below the *test*, to pull the data out.
//const test = fetch(endpoint);
//console.log(test);


fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data))

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        //here we would compare the city/state name to the word searched
        const regex = new RegExp(wordToMatch, 'gi');
        //gi stands for 'global insensitive'
        return place.city.match(regex) || place.state.match(regex)
    });
}

//stack-overflow function, with commas for numbers:
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function displayMatches() {
       const matchArray = findMatches(this.value, cities);
       const html = matchArray.map(place => {
           const regex = new RegExp(this.value, 'gi');
           const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
           const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
           return `
           <li>
                <span class ="name">${cityName}, ${stateName}</span>
                <span class = "population">${numberWithCommas(place.population)}</span>
            <li>
            `;
       }).join('');
       suggestions.innerHTML = html;
    }

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);

