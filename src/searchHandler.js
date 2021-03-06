var url = require("url");
var read = require("./dictionary.js");

function wordSearch(request, response) {
  read(function(autocomplete) {
    var query = url.parse(request.url, true).query;
    var userInput = query.description;
    console.log(userInput);
    var output = [];
    for (var i = 0, l = autocomplete.length; i < l && output.length < 10; i++) {
      var word = autocomplete[i];
      if (userInput === ""){
        output = [];
      }
      if (word.indexOf(userInput) === 0) {
        output.push(word);
      }

    }
    console.log(output);
    response.end(JSON.stringify(output));
  });
}

module.exports = wordSearch;
