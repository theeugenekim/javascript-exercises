function removeFromArray(array, remove) {
    
    // Define main array A
    var originalValues = arguments[0];
    // Define array B for remove values
    var excludeValues = [];
    var filteredArray = [];

    //  Declare originalValues
    for (let i = 1; i < arguments.length; i++) {
        excludeValues.push(arguments[i]);
    }

    // Declare excludeValues
    for (let i = 0; i < originalValues.length; i++) {
        var exists = excludeValues.includes(originalValues[i])
        // If Value doesn't exist in excludeValues, add to filteredArray  
        if (exists === false) {
            filteredArray.push(originalValues[i])
      } else {
        // pass
      }
    }
    return filteredArray;
  };

// Cleaner way
function removeFromArray(...args) {
    const array = args[0];
    return array.filter(excludeValue => !args.includes(excludeValue));
}


// Do not edit below this line
module.exports = removeFromArray;
