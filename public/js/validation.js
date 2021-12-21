$(function(){
    name_err=false;
    address_err=false;
    phone_err=false;
    mail_err=false;
    usrname_err=false;
    pswd_err=false
    function checkname(){
        const regexp= /^[a-zA-Z]*$/
        const name=$('#uname').val()

        if(regexp.test(name))
        {
            $('#uname_err').hide()
        }
        else{
            $('#uname_err').html("invalid name..")
            $('#uname_err').show();
            $('#uname').css("border","2px solid red")
             name_err=true
        }
    }
    function checkadrss(){
        // const regexp=/^([A-Za-z0-9]+)$/
        const adrss=$('#adrss').val()

        if(adrss!='')
        {
            $('#adrss_err').hide()
        }
        else{
            $('#adrss_err').html("inavlid address..")
            $('#adrss_err').show();
            $('#adrss').css("border","2px solid red")
            address_err=true
        }
    }
    function checkphone(){
        const phno=$('#phno').val()
        if(phno.length==10){
            $('#phone_err').hide()
           
        }
        else{
            $('#phone_err').html("10 digit require")
            $('#phone_err').show()
            $('#phno').css("border","2px solid red")
            phone_err=true;
        }
    }
    function checkemail(){
        const regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})([a-z]{2,3})?$/ 
        const mail=$('#email').val()
        if(regexp.test(mail)){
            $('#email_err').hide()
        }
        else{
            $('#email_err').html("invalid email..")
            $('#email_err').show()
            $('#email').css("border","2px solid red")
            mail_err=true; 
        }
    }
    function checkusername(){
        const regexp=/^([A-Za-z0-9]+)$/
        const username=$('#usrname').val()

        if(regexp.test(username))
        {
            $('#usrname_err').hide()
        }
        else{
            $('#usrname_err').html("inavlid username")
            $('#usrname_err').show();
            $('#usrname').css("border","2px solid red")
            usrname_err=true
        }
    }
    function checkpaswd(){
        const regexp=/^([A-Za-z0-9\_*@]+)$/
        const pswd=$('#pswd').val()

        if(regexp.test(pswd)&&pswd.trim().length>5)
        {
            $('#pswd_err').hide()
        }
        else{
            $('#pswd_err').html("password length should greter 5..")
            $('#pswd_err').show();
            $('#pswd').css("border","2px solid red")
            pswd_err=true
            }
        }
    
    $('#register').submit(function(){
        name_err=false;
        address_err=false;
        phone_err=false;
        mail_err=false;
        usrname_err=false;
        pswd_err=false
        checkname()
        checkadrss()
        checkphone()
        checkemail()
        checkusername()
        checkpaswd()
        if(name_err===false&&address_err===false&&phone_err===false&&mail_err===false&&usrname_err===false&&pswd_err===false){
            alert("Registration suceess")
            return true
        }
        else{
            alert("Please fill form correctly")
            return false
        }
    })
})