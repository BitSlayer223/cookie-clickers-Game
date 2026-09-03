const btnCookie = document.getElementById("cookie");
const counterDisplay = document.getElementById("counter");
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
    counter.innerText = parseInt(counter.innerText) + 1;
    return counter.innerText;
}



//below this, shows the shop function where the user can buy items to increase the cookie count per second.


const grandmotherBtn = document.getElementById("item-1");
const bakerBtn = document.getElementById("item-2");
const factoryBtn = document.getElementById("item-3");
const cps = document.getElementById("cps");

//grandmother button
grandmotherBtn.addEventListener("click", buyGrandmother);

function buyGrandmother(){
    if(parseInt(counter.innerText) >= 100){
        counter.innerText = parseInt(counter.innerText) - 100;
        grandmother();
        cps.innerText = `Cookies per second: ${parseInt(cps.innerText.split(": ")[1]) + 1}`;
        grandmotherBtn.classList.add("purchased");
        setTimeout(() => grandmotherBtn.classList.remove("purchased"), 200);
    }else{
        alert("you can't afford this item yet, keep clicking the cookie to earn more cookies!");
    }
}

function grandmother(){
    setInterval(function(){
        counter.innerText = parseInt(counter.innerText) + 1;
    },1000)
}

//baker button 
bakerBtn.addEventListener("click", buyBaker);

function buyBaker(){
    if(parseInt(counter.innerText) >= 500){
        counter.innerText = parseInt(counter.innerText) - 500;
        baker();
        cps.innerText = `Cookies per second: ${parseInt(cps.innerText.split(": ")[1]) + 10}`;
        bakerBtn.classList.add("purchased");
        setTimeout(() => bakerBtn.classList.remove("purchased"), 200);
    }else{
        alert("you can't afford this item yet, keep clicking the cookie to earn more cookies!");
    }
}

function baker(){
    setInterval(function(){
        counter.innerText = parseInt(counter.innerText) + 10;
    },1000)
}

//Factory Button
factoryBtn.addEventListener("click", buyFactory);

function buyFactory(){
    if(parseInt(counter.innerText) >= 5000){
        counter.innerText = parseInt(counter.innerText) - 5000;
        factory();
        cps.innerText = `Cookies per second: ${parseInt(cps.innerText.split(": ")[1]) + 100}`;
        factoryBtn.classList.add("purchased");
        setTimeout(() => factoryBtn.classList.remove("purchased"), 200);
    }else{
        alert("you can't afford this item yet, keep clicking the cookie to earn more cookies!");
    }
}

function factory(){
    setInterval(function(){
        counter.innerText = parseInt(counter.innerText) + 100;
    },1000)
} 