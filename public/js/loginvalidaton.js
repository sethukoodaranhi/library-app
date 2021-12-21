$(function(){
    var u_err=false
    var p_err=false
    $('#username').focusout(function(){
        checkuname()
    })
    $('#pswd').focusout(function(){
        checkpswd()
    })

   function checkuname(){
       var pattern=/^([A-Za-z0-9\_*-]+)$/
       var uname=$('#username').val()
       if(pattern.test(uname))
       {
        $('#uname_err').show()
       }
       else{
           $('#uname_err').html("")
       }
   }
})