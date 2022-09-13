const sumAll = function(x, y) {
    var range = []
    range.push(arguments[0])
    range.push(arguments[1])
    range.sort()

    console.log(range)
    // 1 + 2 + 3 + 4 = 15

    var startingNumber = range[0]
    var endingNumber = range[1]

    if (startingNumber < 0 || endingNumber < 0 || // Negative numbers
        typeof startingNumber != 'number' || typeof endingNumber != 'number') { // Value type is not int
        return('ERROR')
    }

    var sum = 0;

    for (let i=startingNumber; i <= endingNumber; i++) {
        sum += i;
    }
    console.log(sum)
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
