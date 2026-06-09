const btnIniciar = document.querySelector('#btn-iniciar');
const display = document.querySelector('#display');
const contenedor = document.querySelector('#contenedor');
let intervalo = null;

btnIniciar.addEventListener('click', () => {
    const segundos = parseInt(document.querySelector('#segundos').value);
    if (!segundos || segundos <= 0) return;

    clearInterval(intervalo);
    let tiempo = segundos;
    display.textContent = tiempo;

    intervalo = setInterval(() => {
        tiempo--;
        display.textContent = tiempo;
        if (tiempo <= 0) {
            clearInterval(intervalo);
            display.textContent = '¡Tiempo cumplido!';
            contenedor.classList.add('alerta');
        }
    }, 1000);
});