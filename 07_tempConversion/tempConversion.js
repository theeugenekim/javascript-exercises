const ftoc = function(temp) {
  var converted = +((temp-32) * (5/9)).toFixed(1)
  return (converted % 1 == 0) ? ~~converted : converted;
};

const ctof = function(temp) {
  var converted = +(32 + (temp / (5/9))).toFixed(1);
  return (converted % 1 == 0) ? ~~converted : converted;
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
