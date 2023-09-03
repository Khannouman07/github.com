// setInterval(function(){
//     document.write("Hello world")
// },1000)

// function timer(){
//     document.write("saad")
// }
// setInterval(timer,4000)

// setTimeout(() => {
//     document.write("Abc")
// },4000);

// var num = 0;
// setInterval((){
//     num++
//     console.log("num")
// },1000);

var minutes = 0o0;
var seconds = 0o0;
var miliseconds = 0;
var hours = 0o0;
var getmin = document.getElementById("min")
var getsec = document.getElementById("sec")
var getmili = document.getElementById("msec")
var gethour = document.getElementById("hours")
var interval;

function start() {
    interval = setInterval(function () {
        miliseconds++
        getmili.innerHTML = miliseconds
        if (miliseconds >= 100) {
            seconds++
            getsec.innerHTML = seconds
            miliseconds = 0o0
        }
        else if (seconds >= 60) {
            minutes++
            getmin.innerHTML = minutes
            seconds = 0o0
        }
        else if (minutes >= 60) {
            hours++
            gethour.innerHTML = hours
            minutes = 0o0,0o0
        }
    }, 10)
    document.getElementById("sss").disabled = true
}

function stop() {
    clearInterval(interval)
    document.getElementById('sss').disabled = false
}

function reset() {
    hours = 0o0
    minutes = 0o0
    miliseconds = 0o0
    seconds = 0o0

    getmin.innerHTML = minutes
    getsec.innerHTML = seconds
    getmili.innerHTML = miliseconds
    gethour.innerHTML = hours
    clearInterval(stop())
}
