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
