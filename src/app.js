let deadline = new Date('Dec 25, 2020 00:00:00').getTime(); // set date to christmas

const christmas = () => {
    let currentDate = new Date().getTime();
    diff = deadline - currentDate;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let day = Math.floor(diff / (days));
    let hour = Math.floor((diff % (days)) / (hours));
    let minute = Math.floor((diff % (hours)) / (minutes));
    let second = Math.floor(diff % (minutes) / seconds);

    document.getElementById('days').innerText = day;
    document.getElementById('hours').innerText = hour;
    document.getElementById('minutes').innerText = minute;
    document.getElementById('seconds').innerText = second;

    if(days < 100) {
        days += "0";
    } else if (days < 10) {
        days += "00";
    }
    if (hours < 10) {
        hours += "0";
    }
    if(minutes < 10) {
        minutes += "0";
    }
}

let start = setInterval(() => {
    christmas()
}, 1000);


if(days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(start)
}

// var start = setInterval(function() {
//     christmas()
//     // Clearing the interval
//     if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
//         clearInterval(start)
//     }
// }, 1000);
