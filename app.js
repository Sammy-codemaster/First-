let hourElement = document.querySelector(".hour");
let minElement = document.querySelector(".min");
let secElement = document.querySelector(".sec");



function activateTime(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();


if (hour < 10){
    hour = "0" + hour;
}

if (min < 10){
    min = "0" + min;
}


if (sec < 10){
    sec = "0" + sec;
}


 

hourElement.innerHTML = hour;
minElement . innerHTML = min;
secElement . innerHTML = sec;


}

setInterval(()=>{
    activateTime()
})