const leapYears = function(year) {
// Leap years are years divisible by four (like 1984 and 2004). 
// However, years divisible by 100 are not leap years (such as 1800 and 1900)
// unless they are divisible by 400 (like 1600 and 2000, 
// which were in fact leap years). (Yes, it's all pretty confusing)

var divisibleBy4 = (year % 4 == 0)
var divisibleBy100 = (year % 100 == 0)
var divisibleBy400 = (year % 400 == 0)


  if (divisibleBy4 == true) {
      if (divisibleBy100 == true && divisibleBy400 != true) {
        return false;
      } else {
        return true;
      }
  } else {
      return false;
  }
 
 
};

// Do not edit below this line
module.exports = leapYears;
