console.log(__dirname);
let i=setInterval(()=>{
    console.log("hello");
},1000);

setTimeout(() => {
    clearInterval(i);
    console.log('Interval stopped after 10 seconds.');
}, 10000);