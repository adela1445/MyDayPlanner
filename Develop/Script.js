// Makes sure that the js doesnt get run until the HTML file is finished loading
$(document).ready(function () {
  // Console logging to see js is connected to html
  console.log("Hi, Checking if you are linked.");

  // Trying to capture current date using Moment

  var moment = require("moment");
  moment().format();
  console.log(moment);
});
