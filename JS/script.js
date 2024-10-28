var countdownDate = new Date("oct 30, 2024 23:59:59").getTime();

var countdownFunction = setInterval(function() {

    var now = new Date().getTime();
    var distance = countdownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
  
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".timer").innerHTML = "EXPIRED";
    }
}, 1000);
