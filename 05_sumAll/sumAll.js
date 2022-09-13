const sumAll = function(x, y) {
    var range = []
    range.push(arguments[0])
    range.push(arguments[1])
    range.sort()

    console.log(range)
    // 1 + 2 + 3 + 4 = 15

    var min = range[0]
    var max = range[1]

    if (min < 0 || max < 0) return "ERROR";  // Negative numbers
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR'; // Non-integers

    var sum = 0;

    for (let i=min; i <= max; i++) {
        sum += i;
    }
    console.log(sum)
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
