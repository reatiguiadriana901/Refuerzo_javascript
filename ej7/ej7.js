const boton = document.querySelector(".button");
const modoGuardado = localStorage.getItem('modo')

if (modoGuardado === 'oscuro') {
    document.body.classList.add('dark_mode')
}

boton.addEventListener('click', (event) => {

     document.body.classList.toggle('dark_mode')

     if (document.body.classList.contains('dark_mode')) {
    localStorage.setItem('modo', 'oscuro')
    } else {
    localStorage.setItem('modo', 'claro')
    }
})