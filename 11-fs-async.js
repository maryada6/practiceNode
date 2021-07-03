const {readFile,writeFile}=require('fs')
console.log("Start");

readFile('./content/first.txt','utf-8',(error,result)=>{
    if(error)
    {
        console.log(error);
        return null
    }
    const first=result
    readFile("./content/second.txt","utf-8",(error,result)=>{
        if(error)
        {
            console.log(error);
            return null
        }
        const second=result
        writeFile("./content/result-async.txt",`Here is the result ${first+","+second}`,(error,result)=>{
            if(error)
            {
                console.log(error);
                return null
            }
            console.log("Done with this task");
        })
    })
    return
})

console.log("Starting next task");
