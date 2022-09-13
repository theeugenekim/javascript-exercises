const repeatString = function(string, num) {
    var repeated_string = '';
    for (let i = 0; i < num; i++) {
        repeated_string += string;
    }
    return repeated_string;
};

// Do not edit below this line
module.exports = repeatString;
