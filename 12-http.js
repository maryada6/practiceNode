const http = require('http')

const server= http.createServer((req,res)=>{
    // console.log(req);
    if(req.url=="/")
    {res.end("Welcome to the home page")}

    if(req.url=="/about")
    {res.end("Welcome to the about")}
    
    if(req.url=="/contact")
    {res.end("Welcome to the contact")}

    res.end(`<h1>Cant find the page</h1>`)
    
})

server.listen(5000)