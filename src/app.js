var dateCounter = new Date('Dec 25, 2019 00:00:00').getTime();

const christmas = () => {
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
    christmas()
},1000)
