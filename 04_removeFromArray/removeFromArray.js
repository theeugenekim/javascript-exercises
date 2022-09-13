function removeFromArray(array, remove) {
    // Define main array A
    var array_a = arguments[0];
    // Define array B for remove values
    var array_b = [];
    var array_c = [];

    for (let i = 1; i < arguments.length; i++) {
        array_b.push(arguments[i]);
    }

    // For i in array_a:
    for (let i = 0; i < array_a.length; i++) {

      // splice array a if the value exists in array b
      var exists = array_b.includes(array_a[i])

      if (exists === false) {
        array_c.push(array_a[i])
      } else {
        // pass
      }
    }
    return array_c;

  };

// Do not edit below this line
module.exports = removeFromArray;
