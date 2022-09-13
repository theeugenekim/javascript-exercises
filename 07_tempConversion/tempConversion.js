const ftoc = function(temp) {
  var converted = +((temp-32) * (5/9)).toFixed(1)
  if (converted % 1 == 0) {
    return ~~converted;
  } else {
    return converted
  }
};

const ctof = function(temp) {
  var converted = +(32 + (temp / (5/9))).toFixed(1)
  if (converted % 1 == 0) {
    return ~~converted;
  } else {
    return converted
  }

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
