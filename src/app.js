const deadline = new Date('Dec 24, 2020 00:00:00').getTime(); // set date to christmas

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

        // invocation of xmas demo
        xmasDemo()
    }
}

let start = setInterval(() => {
    christmas()
}, 1000);

// preloader condition for the DOM
// the loader will only show when the browser is still
// loading the additional scripts
// and styles for the timer.

document.onreadystatechange = () => {
    if (document.readyState !== 'complete') {
      document.querySelector('#body').style.visibility = 'hidden'
      document.querySelector('#loader').style.visibility = 'visible'
    } else {
      document.querySelector('#loader').style.display = 'none'
      document.querySelector('#body').style.visibility = 'visible'
    }
}

// Once the countdown gets to christmas
// a function call exexutes an animation
// probably a presention of fireworks and/or an
// animation depicting one.

const xmasDemo = () => {
  const displayXmas = "hey it's christmas already"

  return (
    document.querySelector("xmas").innerHTML = displayXmas
  )
}