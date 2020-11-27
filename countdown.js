// get times
var countDownDate = new Date("May 21, 2021").getTime();

var joinedDate = new Date("Nov 25, 2020").getTime();

var now = new Date().getTime();

// calculate distances
var distance = countDownDate - now;

var initialDistance = countDownDate - joinedDate;

var elapsedDistance = now - joinedDate;

// calculate readable days and weeks form miliseconds
var days = Math.floor(distance / 1000 / 60 / 60 / 24);

var weeks = Math.floor(days / 7);


// show coutdown text
$("#countdown").text(`${days} days or ${weeks} weeks left`);

// calculate progress
var progress = Math.floor(elapsedDistance / initialDistance * 100);

// update progress bar
$(".progress-bar").css("width", `${progress}%`);
console.log(`${progress}%`);

// set progress color
if (progress < 25)
    $(".progress-bar").addClass("bg-success");
else if (progress < 50)
    $(".progress-bar").addClass("bg-info");
else if (progress < 75)
    $(".progress-bar").addClass("bg-warning");
else
    $(".progress-bar").addClass("bg-danger");