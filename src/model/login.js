const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    uname:{
        type:String
        
    },
    password:{
        type:String
        
    }
})
const logindb=mongoose.model('logindb',schema);
module.exports=logindb