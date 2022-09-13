const reverseString = function(string) {
    var reversed_string_list = string.split('');
    var reversed_String = '';

    for (let i = reversed_string_list.length-1; i >= 0; --i) {
        reversed_String += reversed_string_list[i];
    }
    
    return reversed_String;
};

// Do not edit below this line
module.exports = reverseString;
