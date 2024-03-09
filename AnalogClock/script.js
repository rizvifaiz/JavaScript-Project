const secondhand = document.getElementById("second-hand")
const minutehand = document.getElementById("minute-hand")
const hourhand = document.getElementById("hour-hand")
function clockTick(){
    const date = new Date()
    const seconds = date.getSeconds()/60;
    const minutes = (seconds + date.getMinutes())/60;
    const hours = (minutes +  date.getHours())/12;
    
    rotateClockHand(secondhand, seconds)
    rotateClockHand(minutehand, minutes)
    rotateClockHand(hourhand, hours)
}

function rotateClockHand(element, rotation){
  element.style.setProperty('--rotate', rotation*360);
}

setInterval(clockTick, 1000);

function changewatchcolor(){
    let myclock = document.querySelector('.clock').style.background = "pink"
}

setInterval(changewatchcolor, 5000);

// digital clock

let digitalClock = document.querySelector('.digital-clock');

function digiclock(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = 'AM';
    if(hours >12 ){
        session = "PM"
        hours = hours-12
    }
    hours = hours <10 ?'0'+ hours:hours;
    minutes = minutes < 10 ?'0'+ minutes:minutes;
    seconds = seconds < 10 ? '0' + seconds:seconds;
    
    digitalClock.innerHTML = hours + ':' + minutes + ':' + seconds +' ' + session;
}

setInterval(digiclock, 1000);

let colors = ['#8c0606','#213702','#04562D','#10DEDB','#083E66','#083E66','#3254FA','#040F43',
'##7B45Eb','#000000','#29096D','#BD0FB7','#FC0920'];
 let index = 0;

 function changeBgcolor(){
    digitalClock.style.backgroundColor = colors[index]
    index = (index+1)% colors.length;
 }
 setInterval(changeBgcolor,5000);