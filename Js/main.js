let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".counter");
let started = false;

window.onscroll =function () {
    if (window.scrollY >= 2216) {
        
        if(!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el){
    
    let goal =el.dataset.goal;

    
    let count = setInterval(() =>{
        el.innerHTML++;
        
        
        if (el.innerHTML == goal){
            console.log(el.innerHTML);
            clearInterval(count);
        }
    }, 4500 / goal)
}