const counter= document.getElementById('counter')
const increament= document.getElementById('increament')
const decreament= document.getElementById('decreament')
const Reset= document.getElementById('Reset')



let count =0;
//  update counter

function updateCounter(){
    counter.textContent=count;
}

// increament
increament.addEventListener('click',()=>{
    count++;
    updateCounter();
})
// decreament
decreament.addEventListener('click',()=>{
    count--;
    updateCounter();
})
// reset
Reset.addEventListener('click',()=>{
    count=0;
    updateCounter();
})

