let username=document.getElementById('username')
let age=document.getElementById('age')
let email=document.getElementById('email')
let password=document.getElementById('password')
let confirm_password=document.getElementById('confirm-password')
const btn=document.getElementById('submit')

let err=0;


btn.addEventListener('click',(event)=>{
   if(!validate()){
    event.preventDefault()
   }
})


function validate()
{  
    if(username.value==='')
    {
        set_error(username,"User name is required")
    }
    else 
    {
        remove_error(username)
       
    }
    
    if(age.value==='')
    {
        set_error(age,"Age is required")
       
    }
    else
    {
        remove_error(age)
       
    }
    
    if(email.value==='')
    {
      set_error(email,"Email is required")
    }
    else
    {
        remove_error(email)
        
    }
    if(password.value==='')
    {
        set_error(password,"Password is required")
    }
    else if(password.value.length<8)
    {
       set_error(password,'Password is must be atleast 8 charectors')
    }
    else{
        remove_error(password)
        
    }
    if(confirm_password.value==='')
    {
        set_error(confirm_password,"Enter confirm password")
    }
    else if(confirm_password.value != password.value)
    {
        set_error(confirm_password,"Password not mach ")
    }
    else{
        remove_error(confirm_password)
    }

}

function set_error(element,msg)
{  
     remove_error(element)
    const input_cont=element.parentElement;
    let err=input_cont.querySelector('.err')
    
    if(err.querySelector('.para')===null){
    
    let para=document.createElement('p')
    para.setAttribute('class','para')
    para.textContent=msg
    err.appendChild(para)
    let input_box= input_cont.querySelector('input')
    input_box.style.borderColor='red';
    input_box.style.borderStyle='solid';
    input_cont.style.marginBottom='-5px';
   }
    else
    {
        return;
    } 
}


function remove_error(element)
{
    const input_cont=element.parentElement;
    let err=input_cont.querySelector('.err')
    let para=err.querySelector('.para')
    if(para===null)
    {
     return;
    }
    else
    {
      let input_box= input_cont.querySelector('input')
      err.removeChild(para)
      input_box.style.borderColor='white';
      input_cont.style.marginBottom='30px';
    }
}

