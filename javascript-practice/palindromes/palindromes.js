const palindromes = function(string) {
revertedString = string.toLowerCase().replace(/[^A-Za-z]/g, ''); // [a-zA-Z] means any a-z or A-Z at the start of a line
return revertedString
.split("")
.reverse()
.join("") == revertedString

};
module.exports = palindromes
