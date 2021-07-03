const os= require('os')
//info abt current user
const user= os.userInfo()
console.log(user);

//system uptime
console.log(`System uptime id ${os.uptime()} seconds`);

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),

}
console.log(currentOs);