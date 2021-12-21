const { response } = require('express')
const express=require('express')
const router=express.Router()
const addbook=require('../model/addbuk')
router.get('/books',function(req,res){
    addbook.find().then((bukdata)=>{
        // console.log(bukdata)
        
       
        res.render("books",{bukdata})
    })
   
})
router.get('/edit/:id',function(req,res){
    const id=req.params.id
    addbook.findById(id).then((data)=>{
        res.render('edit',{data})
    })
})
router.post('/editdata/:id',function(req,res){
    const id=req.params.id
    const items={
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        
    }   
    addbook.findByIdAndUpdate(id,items).then((data)=>{
        console.log(data)
        res.redirect("/api/books/books")
        
    }).catch(err=>{
        console.log(err)
    })
    
//  console.log(req.body)
})
router.get('/delete/:id',function(req,res){
    const id=req.params.id
    addbook.findByIdAndDelete(id).then((response)=>{
        console.log(response)
        res.redirect('/api/books/books')
    })
})

module.exports=router

