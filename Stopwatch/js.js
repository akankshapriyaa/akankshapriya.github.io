let start= document.getElementById('start');
let stop= document.getElementById('stop');
let reset= document.getElementById('reset');
let lap=document.getElementById('lap');

let hr=00;
let min=00;
let sec=00;
let laps=00;
let lapnow=00;

start.addEventListener('click',function(){
    timer=true;
    stopwatch()
});
stop.addEventListener('click',function(){
    timer=false;
});
reset.addEventListener('click',function(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
    document.getElementById('hr').innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
});
lap.addEventListener('click',function(){
    lapnow=hr+":"+min+":"+sec;
    laps=document.getElementById('lap').innerHTML=lapnow;

    document.getElementById('lap').innerHTML=laps;
})
function stopwatch(){
    if(timer){
        sec++;

    if(sec==60){
        min++;
        sec=0;
    }
    if(min==60){
        hr++;
        min=0;
    }
    let hrString=hr;
    let minString=min;
    let secString=sec;

    if(hr<10){
        hrString="0"+hrString;
    }
    if(min<10){
        minString="0"+minString;
    }
    if(sec<10){
        secString="0"+secString;
    }
    document.getElementById('hr').innerHTML=hrString;
    document.getElementById('min').innerHTML=minString;
    document.getElementById('sec').innerHTML=secString;
    setTimeout(stopwatch,10);
}
}