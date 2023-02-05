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
