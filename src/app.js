// var deadline = new Date('Feb 13, 2020 00:00:00').getTime();
// // christmas 
// function christmas() {
//     var currentDate = new Date().getTime();
//     diff = deadline - currentDate;

//     var seconds = 1000;
//     var minutes = seconds * 60;
//     var hours = minutes * 60;
//     var days = hours * 24;

//     var d = Math.floor(diff / (days));
//     var h = Math.floor((diff % (days)) / (hours));
//     var m = Math.floor((diff % (hours)) / (minutes));
//     var s = Math.floor((diff % (minutes)) / seconds);

//     document.getElementById('days').innerText = d;
//     document.getElementById('hours').innerText = h;
//     document.getElementById('minutes').innerText = m;
//     document.getElementById('seconds').innerText = s;

     
// }

// var start = setInterval(function() {
//     christmas()
//     // Clearing the interval
//     if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
//         clearInterval(start)
//     }
// }, 1000);
