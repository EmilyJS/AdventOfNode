var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

run = input => {
    var messages = input.split('\n');
    var abba = /(\w)((?!\1).)\2\1/;
    var abbaInBrackets = /\[[^\]]*(\w)((?!\1).)\2\1[^\[]*\]/;
    var n = 0
    
    for (var i = 0; i < messages.length; i++) {
        if (messages[i].match(abba) && !messages[i].match(abbaInBrackets)) {
            n = n + 1;
        }
    }
    
    return n;
}