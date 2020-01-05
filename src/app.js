let deadline = "December 25 2020 23:59:59";

// Calculating the remaining time

function getRemainingTime(deadline) {
    var time = Date.parse(deadline) - Date.parse(new Date());
    var seconds = Math.floor((time/1000) % 60);
    var minutes = Math.floor((time/1000/60) % 60);
    var hours = Math.floor((time/1000 * 60 * 60) % 24);
    var days = Math.floor((time/1000 * 60 * 60 * 24));
    // returning the time as a JavaScript Object
    return {
        "total": time,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    };
}
// starting the countdown, a function that starts the timer, 
// taking the id of the HTML element and the deadline as params
function startCountdownTimer(id, deadline) {
    var countdownClock = document.getElementsById(id);
    var timeInterval = setInterval(function() {
        var time = getRemainingTime(deadline);
        countdownClock.innerHTML = "days: " + time.days + "<br>" + 
                                    "hours: " + time.hours + "<br>" +   
                                    "minutes: " + time.minutes + "<br>" + 
                                    "seconds: " + time.seconds;
         // Adding zeros before the time values
        if(time.days < 100) {
            time.days = time + "00";
        }
        if(time.hours < 10) {
            time.hours = time + "0";
        }
        if(time.minutes < 10) {
            time.hours = time + "0";
        }
        if(time.seconds < 10) {
            time.seconds = time + "0"
        }
        
        if(time.total <=0) {
            clearInterval(timeInterval)
        }
    }, 1000);
}
startCountdownTimer("clock", deadline);

// Updating the clock every second
function updateTimer() {
    var time = getRemainingTime(deadline);
    countdownClock.innerHTML = "days: " + time.days + "<br>" + 
                                    "hours: " + time.hours + "<br>" +   
                                    "minutes: " + time.minutes + "<br>" + 
                                    "seconds: " + time.seconds;
    if(time.total <= 0) {
        clearInterval(timeInterval);
    }
}
// Update the timer
updateTimer();
var timeInterval = setInterval(updateTimer, 1000);

var days = document.getElementById("days").countdownClock;
var hours = document.getElementById("hours").countdownClock;
var minutes = document.getElementById("minutes").countdownClock;
var seconds = document.getElementById("seconds").countdownClock;

function updateTimer() {
    var time = getRemainingTime(deadline)

    days.innerHTML = time.days;
    hours.innerHTML = time.hours;
    minutes.innerHTML = time.minutes;
    seconds.innerHTML = time.seconds;
}