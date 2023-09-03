var hours = 0
var minutes = 0
var seconds = 0
var millisec = 0
var gethrs = document.getElementById('hrs')
var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmsec = document.getElementById('msec')
var interval;



function start(){
    interval=setInterval(function(){
        millisec++
        getmsec.innerHTML=millisec
        if(millisec >=100) {
            seconds++
            getsec.innerHTML= seconds
            millisec=0
        }
        else if(seconds >=60){
            minutes++
            getmin.innerHTML=minutes
            seconds=0
        }
        else if (minutes >=60){
            hours++
            gethrs.innerHTML=hours
            minutes=0
        }
    },10)

    document.getElementById('abc').disabled = true
}

function stop(){
    clearInterval(interval)
    document.getElementById('abc').disabled = false
}

function reset (){
    minutes=0
    millisec=0
    seconds=0
    hours=0
    getmsec.innerHTML=millisec
    getsec.innerHTML=seconds
    getmin.innerHTML=minutes
    gethrs.innerHTML=hours

}