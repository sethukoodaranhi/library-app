const mongoose=require('mongoose')
const dbconnect=()=>{
mongoose.connect(process.env.CONNECTDB_URI,()=>{
    console.log("mongodb connected")
    })
// mongoose.connect("mongodb://localhost:27017/usersdb",()=>{
//          console.log("mongodb connected")
//          })
}
module.exports=dbconnect