const http = require('http')



let PORT=5000;
http.createServer((request,response)=>{
    response.end('<html><h3> hello node !</h3></html>')
}
).listen(PORT)
console.log(`server is running on http://127.0.0.1:${PORT}`)