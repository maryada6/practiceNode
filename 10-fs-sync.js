const {readFileSync,writeFileSync}=require('fs')
// const fs=require('fs')
console.log("Start");

const first= readFileSync("./content/first.txt",'utf8')
const second= readFileSync("./content/second.txt",'utf8')
writeFileSync("./content/result-sync.txt",`Here is the result ${first+","+second}`,{flag:'a'})
console.log(first,second);
console.log("Done with the task");
console.log("Starting next task");
