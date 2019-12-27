var dateCounter = new Date('Jan 1, 2020 00:00:00').getTime();

const newYear = () => {
    var now = new Date().getTime();
        diff = dateCounter - now;

        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var d = Math.floor(diff / (day));
        var h = Math.floor((diff % (day)) / (hour));
        var m = Math.floor((diff % (hour)) / (minute));
        var s = Math.floor((diff % (minute)) / (second));
        
        document.getElementById('day').innerText = d;
        document.getElementById('hours').innerText = h;
        document.getElementById('minutes').innerText = m;
        document.getElementById('seconds').innerText = s;
}
setInterval(function() {
    newYear()
},1000)
