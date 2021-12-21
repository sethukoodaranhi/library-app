const mongoose=require('mongoose')
const Schema=mongoose.Schema
const schemargb=new Schema({
    login_id:{
        type:Schema.Types.ObjectId,
        ref:"logindb"
    },
    name:{
        type:String,
        
    },
    address:{
        type:String
       
    },
    phoneno:{
        type:String
      
    },
    mail:{
        type:String
       
       
    }
    
})
const regdb=mongoose.model('regdb',schemargb);
module.exports=regdb