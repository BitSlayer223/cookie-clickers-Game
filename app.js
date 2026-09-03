const btnCookie = document.getElementById("cookie");
const counterDisplay = document.getElementById("counter");
let cookieCount = 0;
/* let cookieCount = 0;
counterDisplay.innerText = cookieCount; */

btnCookie.addEventListener("click", updateCounter);
/* 
function updateCounter(){
    cookieCount += 1;
    counterDisplay.innerText = cookieCount;
} */

// this function will enable the counter to update when the cookie is clicked.

function updateCounter() {
    counterDisplay.innerText = parseInt(counterDisplay.innerText) + 1;
    saveGameData();
}



//below this, shows the shop function where the user can buy items to increase the cookie count per second.


const grandmotherBtn = document.getElementById("item-1");
const bakerBtn = document.getElementById("item-2");
const factoryBtn = document.getElementById("item-3");
const cps = document.getElementById("cps");

//grandmother button
grandmotherBtn.addEventListener("click", buyGrandmother);

function buyGrandmother(){
    if(parseInt(counterDisplay.innerText) >= 100){
        counterDisplay.innerText = parseInt(counterDisplay.innerText) - 100;
        grandmother();
        cps.innerText = `Cookies per second: ${parseInt(cps.innerText.split(": ")[1]) + 1}`;
        grandmotherBtn.classList.add("purchased");
        setTimeout(() => grandmotherBtn.classList.remove("purchased"), 200);
    }else{
        alert("you can't afford this item yet, keep clicking the cookie to earn more cookies!");
    }
    saveGameData();
}

function grandmother(){
    // Production is handled by the single shared timer below.
}

//baker button 
bakerBtn.addEventListener("click", buyBaker);

function buyBaker(){
    if(parseInt(counterDisplay.innerText) >= 500){
        counterDisplay.innerText = parseInt(counterDisplay.innerText) - 500;
        baker();
        cps.innerText = `Cookies per second: ${parseInt(cps.innerText.split(": ")[1]) + 10}`;
        bakerBtn.classList.add("purchased");
        setTimeout(() => bakerBtn.classList.remove("purchased"), 200);
    }else{
        alert("you can't afford this item yet, keep clicking the cookie to earn more cookies!");
    }
    saveGameData();
}

function baker(){
    // Production is handled by the single shared timer below.
}

//Factory Button
factoryBtn.addEventListener("click", buyFactory);

function buyFactory(){
    if(parseInt(counterDisplay.innerText) >= 5000){
        counterDisplay.innerText = parseInt(counterDisplay.innerText) - 5000;
        factory();
        cps.innerText = `Cookies per second: ${parseInt(cps.innerText.split(": ")[1]) + 100}`;
        factoryBtn.classList.add("purchased");
        setTimeout(() => factoryBtn.classList.remove("purchased"), 200);
    }else{
        alert("you can't afford this item yet, keep clicking the cookie to earn more cookies!");
    }
    saveGameData();
}

function factory(){
    // Production is handled by the single shared timer below.
} 



//Save the game data even after refreshing the page, using local storage to store the cookie count and cookies per second.

function saveGameData() {
    localStorage.setItem("cookieCount", counterDisplay.innerText);
    localStorage.setItem("cookiesPerSecond", cps.innerText.split(": ")[1]);
}

function loadGameData() {
    counterDisplay.innerText = localStorage.getItem("cookieCount") || "0";
    cps.innerText = `Cookies per second: ${localStorage.getItem("cookiesPerSecond") || "0"}`;
}

loadGameData();

// Keep one timer for all purchased items to prevent production from stacking
// unexpectedly when shop buttons are clicked repeatedly.
setInterval(function(){
    const cookiesPerSecond = parseInt(cps.innerText.split(": ")[1]) || 0;
    if (cookiesPerSecond > 0) {
        counterDisplay.innerText = parseInt(counterDisplay.innerText) + cookiesPerSecond;
        saveGameData();
    }
}, 1000);