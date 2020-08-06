// Console logging to see js is connected to html
console.log("Hi, Checking if you are linked.");

// Trying to capture current date using Moment

var momentdata = moment().format("dddd, MMM Do YYYY");
console.log(momentdata);
var currentDate = $("#currentDay").text(momentdata);

// Creating variables to ensure hour is being compared to a number

var atmHour = parseInt(moment().format("h"));
var workHour = parseInt($(".hour").text());

console.log(atmHour);
console.log(workHour);

var eventInput9am = $("#event9Title").val();
var eventInput10am = $("#event10Title").val();
var eventInput11am = $("#event11Title").val();
var eventInput12pm = $("#event12Title").val();
var eventInput1pm = $("#event1Title").val();
var eventInput2pm = $("#event2Title").val();
var eventInput3pm = $("#event3Title").val();
var eventInput4pm = $("#event4Title").val();
var eventInput5pm = $("#event5Title").val();

// Creating an if statement so we can compare the to var in order to know if the time is present past or future
if (workHour === atmHour) {
  $("input").addClass("present");
} else if (workHour < atmHour) {
  $("input").addClass("past");
} else {
  $("input").addClass("future");
}

$("button").on("click", function () {
  event.preventDefault();

  // Creating variable to store into local Storage
  var save9 = eventInput9am.text;
  var save10 = eventInput10am.value;
  var save11 = eventInput11am.value;
  var save12 = eventInput12pm.value;
  var save1 = eventInput1pm.value;
  var save2 = eventInput2pm.value;
  var save3 = eventInput3pm.value;
  var save4 = eventInput4pm.value;
  var save5 = eventInput5pm.value;

  // Adding variables to localStorage

  localStorage.setItem("nineEvent", JSON.stringify(save9));
  localStorage.setItem("tenEvent", JSON.stringify(save10));
  localStorage.setItem("elevenEvent", JSON.stringify(save11));
  localStorage.setItem("twelveEvent", JSON.stringify(save12));
  localStorage.setItem("oneEvent", JSON.stringify(save1));
  localStorage.setItem("twoEvent", JSON.stringify(save2));
  localStorage.setItem("threeEvent", JSON.stringify(save3));
  localStorage.setItem("FourEvent", JSON.stringify(save4));
  localStorage.setItem("FiveEvent", JSON.stringify(save5));
});
