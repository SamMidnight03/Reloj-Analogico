const hours = document.querySelector(".hand#hours")
const minute = document.querySelector(".hand#minutes")
const second = document.querySelector(".hand#seconds")

const clock = document.querySelector("#clock")
const numbersContainer = document.querySelector("#numbers")

function position(num, index) {
    let angle = (Math.PI / 180) * (90 -(index * 30));
    let diameter = clock.clientWidth * 0.8

    let x = Math.cos(angle) * (diameter / 2);
    let y = Math.sin(angle) * (diameter / 2);

    num.style.transform = `translate( calc(-50% - ${-x}px), calc(-50% - ${y}px) ) `
}

for (let index = 1; index <= 12; index++) {
    let num = document.createElement("span")

    position(num, index)

    num.id = index
    num.innerHTML = index
    numbersContainer.appendChild(num);
}

const numbers = document.querySelectorAll("#numbers span")
window.onresize = function(e) {
    numbers.forEach(num => {
        position(num, num.id)
    })
}

function clockupdate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    const secondDeg = (seconds * 6) + 180;
    const minuteDeg = (mins * 6) + (seconds / 10) + 180;
    const hoursDeg  = (hour * 30) + (mins / 2) + 180;

    hours.style.transform = `rotate(${hoursDeg}deg)`;
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    second.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(clockupdate, 500)
clockupdate()