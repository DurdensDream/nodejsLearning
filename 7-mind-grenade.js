const num1=5;
const num2=10;
function addvalues(){
    console.log(`sum : ${num1+num2}`);
}
addvalues();
let i= setInterval(()=>{
    console.log(`nigga`);
},1000);
let n=10;

setTimeout(() => {
    clearInterval(i);
    console.log(`closed after ${n} seconds`);
}, n* 1000);
