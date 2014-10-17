var metaphone = require('metaphone');

var compare = function(wordA, wordB) {
  return metaphone(wordA) === metaphone(wordB)
}

var compareOutput = function(wordA, wordB) {
  if(wordA === "" || wordB === "")
    return "please insert two words"
  return compare(wordA, wordB)?
    wordA + " sounds like " + wordB
  :
    wordA + " doesn't sound like " + wordB
}

var greaterThan = function(x, y) {
  return Number(x) > Number(y);
}

var greaterThanOutput = function(x, y) {
  if(x === "" || y === "")
    return "please insert two numbers"
  return greaterThan(x, y)?
    x + " is greater than " + y
  :
    x + " isn't greater than " + y
}

module.exports = {
  compare: compare,
  compareOutput: compareOutput,
  greaterThanOutput: greaterThanOutput
};
