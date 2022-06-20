//Clock
function clock() {
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let secs = fullDate.getSeconds();
    const amPm = hours >=12 ? 'PM' : 'AM';

    if (hours >=12) {
        hours -=12;
    }

    if( hours <10){
        hours = "0" + hours;
    }
    if( mins <10){
        mins = "0" + mins;
    }
    if( secs <10){
        secs = "0" + secs;
    }

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = mins;
    document.getElementById('second').innerHTML = secs;
    document.getElementById('am-pm').innerHTML =amPm;
}
setInterval(clock,100);



let start = document.getElementById('start');
let pause = document.getElementById('pause');

let workingmin = document.getElementById('workTimerMin');
let workingsec = document.getElementById('workTimerSec');

let breakmin = document.getElementById('breakTimerMin');
let breaksec = document.getElementById('breakTimerSec');

let startTimer;

start.addEventListener('click', function(){
    if (startTimer === undefined){
        startTimer = setInterval(timer,1000);
    }
})

pause.addEventListener('click',function(){
    stopTimer()
    startTimer=undefined;
})

function timer(){
    //timer for work countdown
    if(workingsec.innerText != 0){
        workingsec.innerText --;
    } else if (workingmin.innerText != 0 && workingsec.innerText == 0){
        workingsec.innerText = 59;
        workingmin.innerText--;
    }
    //timer for break countdown
    if(workingmin.innerText == 0 && workingsec == 0){
        if(breaksec.innerText != 0){
            breaksec.innerText -1;
        }else if (breakmin.innerText !=0 && breaksec.innertext ==0){
            breaksec.innertext = 59;
            breakmin.innertext -1;
        }
    }
}

function stopTimer(){
    clearInterval(startTimer);
}





