const express=require('express')
const router=express.Router()
 const regdb=require('../model/register')
 const logindb=require('../model/login')
 const bcryptjs=require('bcryptjs')
 const jwt=require('jsonwebtoken')
 const auth=require('../middilewear/auth')
 const addbook=require('../model/addbuk')
 const multer=require('multer')
//  const localstorage=require('localstorage')
//  const popups=require('popups')
const alert=require('alert')
function view(){
router.get('/',(req,res)=>{
    res.render("index")
})
router.get('/register',(req,res)=>{
    res.render("registration")
})
router.post('/add',(req,res)=>{
    bcryptjs.hash(req.body.password,10,(error,hashval)=>{
        console.log(hashval)
    
    const data={ 
        uname:req.body.uname,

        password:hashval}
    const login=logindb(data)
    login.save().then(()=>{
       logindb.findOne({uname:req.body.uname})
       .then((response)=>{
           console.log(response)
        var id=response._id
        let regdata={
            login_id:id,
            name:req.body.name,
            address:req.body.address,
            phoneno:req.body.phoneno,
            mail:req.body.mail
        }
        var regitem=regdb(regdata)
        regitem.save().then((response)=>{
            res.redirect('/')
        })
       })
    })
})
})
    router.post('/login',(req,res)=>{
        let fetcheduser
        logindb.findOne({uname:req.body.uname})
        .then((response)=>{  
            console.log(response)                                 
           if(!response){
               console.log("username not found")
                // if(response.password===req.body.password){
                //     res.redirect('/register')
                //     console.log("working..")
                // }
                
            }
                fetcheduser=response
                return bcryptjs.compare(req.body.password,response.password)
            
            
        }).then((response)=>{
            
            if(!response){
                console.log("pls check password")
            }
            else{
                // popups.alert({content:"login successfully.."})
                alert("login successfully..")
                res.redirect("/home")
            }
            const id=fetcheduser._id
            regdb.findOne({login_id:id}).then((response)=>{
                const token=jwt.sign({uname:fetcheduser.uname,userid:fetcheduser._id},"secretkey")
                console.log(token)
            //    window.localStorage.setItem('logindata',token)
                
            })
           
        })
        
        console.log(req.body.uname)

        console.log(req.body.password)
    })

    // router.get('/books',function(req,res){
    //     res.render('books')
    // })
    router.get('/home', auth,(req,res)=>{
       const username=req.userdata.uname
       console.log(username) 
       res.render("home")
    })
    // router for add book
    router.get('/adbuk',(req,res)=>{
        res.render("addbooks")
    })
    const storage=multer.diskStorage({
        destination: function(req,file,callback)
        {
            callback(null,'./public/images')
        },
        filename: function(req,file,callback){
            callback(null,file.originalname)
        }
    })
    var upload=multer({storage:storage})
   router.post('/data_add',upload.single('image'),(req,res)=>{
       
       const items={
           title:req.body.title,
           author:req.body.author,
           genre:req.body.genre,
           image:req.file.filename
       }
       var aditem=addbook(items)
       aditem.save().then((data)=>{
        console.log(data)
        // const username=req.userdata.uname
        // console.log(username +"added new book")
        res.redirect('/api/books/books')
       })
   })
//    router.get('/api/books/books',(req,res)=>{
    
//    })
   router.get('/book/:id',function(req,res){
    const id=req.params.id
    addbook.findOne({_id:id}).then((response)=>{
        res.render("book",{response})
    })
        
    
   })
  router.get('/authors',(req,res)=>{
    res.render("authors")
  })
       
return router
}

module.exports=view
