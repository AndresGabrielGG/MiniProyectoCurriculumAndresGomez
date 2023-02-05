const imgArray = ['./imagenes/imagenes-de-stock.jpg','./imagenes/mar.jpg','./imagenes/tierra-de-fuego_63adbec1_800x800.jpg']

const img = document.getElementById('imgs')
let i = 0

const slideShow = () =>{
    img.src = imgArray[i]
    i = (i<imgArray.length-1) ? i+1 : 0
}

const interval = () => {
    setInterval(slideShow, 5000)
}
const skills = {'Ingles': '90%', 'Python': '70%', 'Java': '50%', 'Html': '40%', 'CSS' : '30%'}


const en = document.getElementById('a')
const py = document.getElementById('b')
const ht = document.getElementById('c')
const c = document.getElementById('d')
const js = document.getElementById('e')

const t1 = document.getElementById('ingles')
const t2 = document.getElementById('py')
const t3 = document.getElementById('jv')
const t4 = document.getElementById('html')
const t5 = document.getElementById('css')


en.innerHTML= skills.Ingles
py.innerHTML= skills.Python
ht.innerHTML= skills.Java
c.innerHTML= skills.Html
js.innerHTML= skills.CSS

t1.innerHTML= Object.keys(skills)[0]
t2.innerHTML= Object.keys(skills)[1]
t3.innerHTML= Object.keys(skills)[2]
t4.innerHTML= Object.keys(skills)[3]
t5.innerHTML= Object.keys(skills)[4]


const a = skills.Ingles
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
