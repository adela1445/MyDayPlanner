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

$(".btn").on("click", function () {
  event.preventDefault();

  // Creating variable to store into local Storage
  var save9 = eventInput9am.value;
  var save10 = eventInput10am.value;
  var save11 = eventInput11am.value;
  var save12 = eventInput12pm.value;
  var save1 = eventInput1pm.value;
  var save2 = eventInput2pm.value;
  var save3 = eventInput3pm.value;
  var save4 = eventInput4pm.value;
  var save5 = eventInput5pm.value;

  // Adding variables to localStorage specifically the key

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
onScreenText();

function onScreenText() {
  var nineDisplayEvent = JSON.parse(localStorage.getItem("nineEvent"));
  var tenDisplayEvent = JSON.parse(localStorage.getItem("tenEvent"));
  var elevenDisplayEvent = JSON.parse(localStorage.getItem("elevenEvent"));
  var twelveDisplayEvent = JSON.parse(localStorage.getItem("twelveEvent"));
  var oneDisplayEvent = JSON.parse(localStorage.getItem("oneEvent"));
  var twoDisplayEvent = JSON.parse(localStorage.getItem("twoEvent"));
  var threeDisplayEvent = JSON.parse(localStorage.getItem("threeEvent"));
  var fourDisplayEvent = JSON.parse(localStorage.getItem("fourEvent"));
  var fiveDisplayEvent = JSON.parse(localStorage.getItem("fiveEvent"));

  eventInput9am.value = nineDisplayEvent;
  eventInput10am.value = tenDisplayEvent;
  eventInput11am.value = elevenDisplayEvent;
  eventInput12pm.value = twelveDisplayEvent;
  eventInput1pm.value = oneDisplayEvent;
  eventInput2pm.value = twoDisplayEvent;
  eventInput3pm.value = threeDisplayEvent;
  eventInput4pm.value = fourDisplayEvent;
  eventInput5pm.value = fiveDisplayEvent;
}

// $(".input").keyup(function () {
//   var newText = $(".input").val();
//   $(".displaytext").text(newText);
// });
// var usertext = $("#txtSpace").value;
// localStorage.setItem("event", usertext);
// usertext = localStorage.getItem("work", usertext);

// Creating an if statement so we can compare the to var in order to know if the time is present past or future

if (workHour === atmHour) {
  $("button").addClass("present");
} else if (workHour < atmHour) {
  $("button").addClass("past");
} else {
  $("button").addClass("future");
}
