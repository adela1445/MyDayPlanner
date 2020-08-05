// Console logging to see js is connected to html
console.log("Hi, Checking if you are linked.");

// Trying to capture current date using Moment

var moment = moment().format("dddd, MMM Do YYYY");
console.log(moment);
var currentDate = $("#currentDay").text(moment);
