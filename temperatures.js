
/**
 * getHighestAndLowest: find the highest and lowest temperature from these thousands values
 * @temperatyres: parameter is an array
 */
function getHighestAndLowest(temperatures) {
    // Your code here
    var lowestTemp = temperatures[0];
    var highestTemp = temperatures[temperatures.length - 1];

    return formatMyResult(lowestTemp.value, highestTemp.value);
}

/** DO NOT TOUCH THIS */

function formatMyResult(min, max) {
    return 'The minimum temperature is ' + min + '°C and the maximum temperature is ' + max + '°C';
}

var request = require("request");

request({
    url: 'http://ns323481.ip-37-187-0.eu/coding/temperature10000.json',
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.time('temperatures'); 
        var result = getHighestAndLowest(response.body);
        console.timeEnd('temperatures');
        console.log('Result: ' + result);
    }
})
