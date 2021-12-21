const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
   
    const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmFtZSI6ImFuamFsaSIsInVzZXJpZCI6IjYxYjQ1ODdjYjlkNTkzN2Y4Yzg0ODA1OCIsImlhdCI6MTYzOTM4OTQ5M30.A9tRLEDiVhJnCRqlsjV8WY52P_0gME6xh6PwwMDRKM4"
    var [header,payload,signature]=token.split(".")
    console.log(header)
    console.log(payload)
    console.log(signature)
    const decod=jwt.verify(token,"secretkey")
    req.userdata={
        uname:decod.uname,
        userid:decod.userid
    }
    console.log(req.userdata)
    next()
}