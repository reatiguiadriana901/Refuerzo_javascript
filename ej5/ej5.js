const imagenes = document.querySelector("#imagenes")
const principal = document.querySelector("#principal")


imagenes.addEventListener('click', (event) => {
    if (event.target.classList.contains('miniatura')) {
        principal.src = event.target.dataset.src
    }
})