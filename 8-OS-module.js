const os = require ('os');

const user= os.userInfo();
 console.log(user);

console.log(`system uptime : ${os.uptime()/1440} days `);

const currentos = 
{
    name : os.type(),
    release : os.release(),
   totalMem: os.totalmem(),
   freeMem : os.freemem(),
}
console.log(currentos);