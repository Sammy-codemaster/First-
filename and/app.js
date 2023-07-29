let barElement = document.querySelector(".bar");
let listElement = document.querySelector(".list");
 let line1Element = document.querySelector(".line1");
 let line2Element = document.querySelector(".line2");
 let line3Element = document.querySelector(".line3");
 let hourElement = document.querySelector(".hour");
 let minElement = document.querySelector(".min");
 let secElement = document.querySelector(".sec");
 let amElement = document.querySelector(".am");





barElement.onclick = function(){
    listElement.classList.toggle("shoe");
    line1Element.classList.toggle("shoe-line1");
    line2Element.classList.toggle("shoe-line2");
    line3Element.classList.toggle("shoe-line3");
}


function activateTime(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getMinutes();


    if (hour < 10){
        hour = "0" + hour;
    }

    if (min < 10){
        min = "0" + min;
    }

    if (sec < 10){
        sec = "0" + sec;
    }

    if (hour > 12){
        amElement.innerHTML ="am"
    }

    if (hour < 11){
        amElement.innerHTML ="pm"
    }

    hourElement.innerHTML = hour;
    minElement.innerHTML = min;
    secElement.innerHTML = sec;

    
}
setInterval(()=>{
    activateTime()
},1000)