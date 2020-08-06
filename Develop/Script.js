// Console logging to see js is connected to html
console.log("Hi, Checking if you are linked.");

// Trying to capture current date using Moment

var momentdata = moment().format("dddd, MMM Do YYYY");
console.log(momentdata);
var currentDate = $("#currentDay").text(momentdata);

// Creating variables to ensure hour is being compared to a number

var hour = parseInt(moment().format("h"));
var workHour = parseInt($(".hour").text());

console.log(hour);
console.log(workHour);

var eventInput9am = $("#event9Title").val();
var eventInput10am = $("#event10Title").val();
var eventInput11am = $("#event11Title").val();
var eventInput12pm = $("#event12Title").val();
var eventInput1pm = $("#event1Title").val();
var eventInput2pm = $("#event2Title").val();
var eventInput3pm = $("#event3Title").val();
var eventInput4pm = $("#event4Title").val();
var eventInput5pm = $("#event4Title").val();

$("button").on("click", function () {
  event.preventDefault();
});
