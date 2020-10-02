const deadline = new Date('Oct 2, 2020 17:36:00').getTime(); // set date to christmas

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


    if(day === "00" && hour === "00" && minute === "00" && second === "00") {
        clearInterval(start)
    }
}

let start = setInterval(() => {
    christmas()
}, 1000);

 