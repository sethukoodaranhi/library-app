const mongoose=require('mongoose')
const schema= new mongoose.Schema({
    title:{
        type:String,
        
    },
    author:{
        type:String,
        
    },
    genre:{
        type:String,
        
    },
    image:{
        type:String,
        
    }
},{strict:false})
const addbook=mongoose.model('addbook',schema)
module.exports=addbook