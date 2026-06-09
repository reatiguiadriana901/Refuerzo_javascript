const password = document.querySelector("#password");
const mensajeError = document.querySelector("#mensaje-error");

password.addEventListener('input', () => {
    const longitud = password.value.length;

    if (longitud >= 8) {
        password.classList.add('borde-verde');
        password.classList.remove('borde-rojo');
        
        mensajeError.textContent = "";
    } else {
      
        password.classList.add('borde-rojo');
        password.classList.remove('borde-verde');
        
        mensajeError.textContent = "Complete los 8 caracteres requeridos";
    }
});
