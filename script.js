let count = document.querySelector("#count");
let decrement=document.querySelector("#decrement");
let increment=document.querySelector("#increment");
let clear=document.querySelector("#clear");
let x=0;
decrement.addEventListener("click",()=>{
    x--;
    
    if(x<=0){
        decrement.disabled=true;
        
    }else{
        count.innerText=x;
    }
});
increment.addEventListener("click",()=>{
    x++;
    count.innerText=x;
});
clear.addEventListener("click",()=>{
    x=0;
    count.innerText=x;
});