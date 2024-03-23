let count = document.querySelector("#count");
let error = document.querySelector(".error");
let decrement=document.querySelector("#decrement");
let increment=document.querySelector("#increment");
let clear=document.querySelector("#clear");
let x=0;
decrement.addEventListener("click",()=>{
    x--;
    
    if(x<0){
        decrement.disabled=true;
        error.innerHTML="Error : Cannot go below 0";
        x=0;

    }else{
        count.innerText=x;
    }
});
increment.addEventListener("click",()=>{
    x++;
    count.innerText=x;
    if(x==1){
        decrement.disabled=false;
        error.innerHTML="";
    }
});
clear.addEventListener("click",()=>{
    x=0;
    count.innerText=x;
});