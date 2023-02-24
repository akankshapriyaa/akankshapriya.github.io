setInterval(function () {
    let now = new Date();

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getUTCSeconds();
    let mer = "AM";

    if(hour==0){
        hour=12;
    }
    if(hour>12){
        hour=hour-12;
        mer="PM"
    }

    let time = hour + " : " + min + " : " + sec + " " +mer;

    let clock = document.getElementById("clock");
    clock.innerText = time;
}, 1000)