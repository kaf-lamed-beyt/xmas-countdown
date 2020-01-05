var deadline = new Date('Dec 25, 2020 00:00:00').getTime();
// christmas 
function christmas() {
    var currentDate = new Date().getTime();
    diff = deadline - currentDate;

    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;

    var d = Math.floor(diff / (days));
    var h = Math.floor((diff % (days)) / (hours));
    var m = Math.floor((diff % (hours)) / (minutes));
    var s = Math.floor((diff % (minutes)) / seconds);

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}

setInterval(() => {
    christmas()
}, 1000);