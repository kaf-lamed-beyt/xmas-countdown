let deadline = new Date('Dec 25, 2020 00:00:00').getTime(); // set date to christmas

const christmas = () => {
    let currentDate = new Date().getTime();
    diff = deadline - currentDate;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let day = ("0" + Math.floor(diff / (days))).slice(-3);
    let hour = ("0" + Math.floor((diff % (days)) / (hours))).slice(-2);
    let minute = ("0" + Math.floor((diff % (hours)) / (minutes))).slice(-2);
    let second = ("0" + Math.floor(diff % (minutes) / seconds)).slice(-2);

    document.getElementById('days').innerText = day;
    document.getElementById('hours').innerText = hour;
    document.getElementById('minutes').innerText = minute;
    document.getElementById('seconds').innerText = second;

    if(days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(start)
    }
}

const addZero = (number, size =2) => {
    let s = String(number)
    while(s.length < size) {
        s = '0' + s;
    }
    return s
}

let start = setInterval(() => {
    christmas()
}, 1000);


// var start = setInterval(function() {
//     christmas()
//     // Clearing the interval
//     if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
//         clearInterval(start)
//     }
// }, 1000);
 