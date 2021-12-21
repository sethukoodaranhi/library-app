const express=require('express')
const app=express()
const router=require('./src/routes/router')()
const books=require('./src/routes/books')

const dbconnect=require('./src/database/connection')
const dotenv=require('dotenv')
dotenv.config({path:'config.env'})
const PORT=process.env.PORT||8080
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.set("views",__dirname+"/src/views")
app.use(express.static("./public"))
app.use('/',router)
app.use('/api/books',books)

dbconnect()
app.listen(PORT,()=>{
    console.log("server started..")
})
