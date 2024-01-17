
//require fs
const fs = require('fs')

console.log(fs)
/*CREATE FILE WITH FS */
//fs.writeFile('Welcome.txt','hello Node!',function(err){
//   if (err){
//     console.log(err)
// }
// console.log("good job")
//})

//step 1
console.log("start...")

//step2
//read Async
fs.readFile("./Welcome.txt",function(err,data){
    if (err){
        console.log(err)
    }
    console.log("Async Read:"+data)
})




//(read file synch)
//let data = fs.readFileSync("./Welcome.txt")
//inconsole.log("sychronous read:"+data.toString())
//step3
console.log("finish...")