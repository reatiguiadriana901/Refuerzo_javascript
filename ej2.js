const contadorPantalla = document.querySelector('#contador');
const btnIncrementar = document.querySelector('.btn-incrementar');
const btnDecrementar = document.querySelector('.btn-decrementar');
const btnResetear = document.querySelector('.btn-resetear');

let numeroActual = 0;


btnIncrementar.addEventListener('click', () => {
    numeroActual = numeroActual + 1; 
    contadorPantalla.textContent = numeroActual; 
});


btnDecrementar.addEventListener('click', () => {
    numeroActual = numeroActual - 1; 
    contadorPantalla.textContent = numeroActual; 
});


btnResetear.addEventListener('click', () => {
    numeroActual = 0; 
    contadorPantalla.textContent = numeroActual; 
});