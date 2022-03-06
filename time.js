var count=document.querySelector(".counter");
var fool=document.querySelector(".followers");
let c=1;
setInterval(() => {
    if(c<1000){
    c++;
    count.innerText=c;}
},2)
/*The setInterval() method repeats a given function at every given time-interval it takes first expression or func then second is time interval b/w each execution in millisec*/
setTimeout(() => {
    fool.innerText="bdh gye h mja aa gya"
},7750) /* it execute a function after somemillisec*/
