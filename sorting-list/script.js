const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) { //#2 replacing articles with empty string and trim spaces.
    return bandName.replace(/^(a |the |an)/i, "").trim();
}
const sortedBands = bands.sort(function(a, b) { //#1 alphabetizing list
    if (strip(a) > strip(b)) {
        return 1;
    } else {
        return -1;
    }
    ///OR ternary operator///
    //const sortedBands  = bands.sort((a,b)=> strip(a) > strip(b) ? 1 : -1);
});

document.querySelector("#bands").innerHTML = //#3 selecting ul id bands, since it's an array and not a string, innerHTML will apply .toString() function to the array by default, causing commas to be part of the list. To remove commas we will add .join("") function at the end of this function, to change the whole array to one big string without commas.
sortedBands //selecting existing function
    .map(band => `<li>${band}</li>`) //map through the ban array
        .join("");
console.log(sortedBands);