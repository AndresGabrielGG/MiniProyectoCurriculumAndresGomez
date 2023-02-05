const name = document.getElementById('nombre')
const email = document.getElementById('correo')
const msj = document.getElementById('msj')
const form = document.getElementById('formulario')
const adv = document.getElementById('error')
const pattern = new RegExp('^[A-Z]+$', 'i')
form.addEventListener('submit', e=>{
    e.preventDefault()
    let enviar = true
    let er = ""
    alert(er)
    let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/
    adv.innerHTML=""
    if(name.value.length <6){
        er += 'El nombre es muy corto <br>'
        enviar= false

    }
    
    if(!pattern.test(name.value)){
        enviar= false
        er += 'El nombre no es válido <br>'}
    if(!regexEmail.test(email.value)){
        enviar= false
        er += 'El correo no es válido <br>'}

    if(!enviar){
        adv.innerHTML = er
    }else{
        const sname = name.value
        const semail=email.value
        const smsj=msj.value
        alert(`Nombre ${sname} \nCorreo ${semail}  \nMensaje: ${smsj}`)
        adv.innerHTML= "Datos Enviados con Éxito"
        name.innerHTML= ""
        email.innerHTML = ""
        msj.innerHTML = ""



        
    }

        /*NO HACE FALTA COMPROBAR EL MENSAJE, YA QUE EL USUARIO PUEDE PONER ALLÍ LO QUE
        QUIERA, Y CON EL REQUIRED YA ES SUFICIENTE*/ 
})
