// Set the date we're counting down to
let countdownDate = new Date("Jun 27, 2023 19:25:10");
let countdownTime = countdownDate.getTime();
var countdownMonth = countdownDate.getMonth();

// Update the count down every 1 second
var x =setInterval(function () {
    
    // Get today's date, time, month
    let currentTime = new Date().getTime();
    var currentMonth = new Date().getMonth();

    // Find the difference in countdown info and current info
    var timeDiff = countdownTime - currentTime;
    var monthDiff = countdownMonth - currentMonth

    // Time calculations for months, days, hours, minutes and seconds
    var months = monthDiff;
    var days = Math.floor(timeDiff % (1000 * 60 * 60 * 24 * 7) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    // If the count down is finished, write some text
    if (timeDiff < 0) {
        clearInterval(x);
        document.getElementById("months").innerHTML = 0;
        document.getElementById("days").innerHTML = 0;
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("minutes").innerHTML = 0;
        document.getElementById("seconds").innerHTML = 0;
        document.getElementById("countdown-title").style.opacity = 0;
        setInterval( () => {
        document.getElementById("countdown-title").innerHTML = `The Time Has Come`;
        document.getElementById("countdown-title").style.opacity = 1;
        },1000)
    }
    
    var top = document.getElementById("top-center");
    top.addEventListener('click', () => {
        countdownTime = new Date().getTime() +4000
        countdownMonth = currentMonth
    })

}, 1000);

