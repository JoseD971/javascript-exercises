const convertToCelsius = function(fahrenheit) {
  return Math.round((fahrenheit - 32) * (5/9));
};

const convertToFahrenheit = function(celcius) {
  return Math.round((celcius * 9/5) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
