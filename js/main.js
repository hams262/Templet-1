/*
scrollHeight: Entire Content &  Padding (Visible or Not)
clientHeight: Visible Content & Padding
*/

let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight ;

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);


window.addEventListener("scroll" , ()=> {
    let scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`;
});


let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; //function started ? no

window.onscroll = function () {
    if (window.scrollY >= statsSection.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
};


let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop -150) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};

//The End Of The Year Date To Countdown To
//1000 milliseconds = 1 second

let CountDownDate = new Date("Dec 31, 2024 23:59:59").getTime();
//console.log(CountDownDate);

let counter = setInterval(() =>{
    //Get Date Now
    let dateNow = new Date().getTime();

    //Find The Date Difference Between Now And Countdown Date
    let dateDiff = CountDownDate - dateNow;

    //Get Time Units
let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60));
let seconds = Math.floor((dateDiff % (1000 * 60 )) / 1000);

document.querySelector(".days").innerHTML = days;
document.querySelector(".hours").innerHTML = hours;
document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

if (dateDiff < 0) {
    clearInterval(counter);
}
}, 1000);















