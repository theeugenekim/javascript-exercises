const repeatString = function(string, num) {
    var repeated_string = '';
    // Edge-case fallback
    if (num < 0) {
        return("ERROR")
    } else if (string == '') {
        return('')
    }

    // Function call
    for (let i = 0; i < num; i++) {
        repeated_string += string;
    }
    return repeated_string;
};

// Do not edit below this line
module.exports = repeatString;
