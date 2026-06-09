const buscador = document.querySelector("#buscador");
const frutas = document.querySelectorAll(".fruta")

buscador.addEventListener('input', () => {
    const textoUsuario = buscador.value.toLowerCase();
    frutas.forEach((fruta) => {
        const nombreFruta = fruta.textContent.toLowerCase();

        if (nombreFruta.includes(textoUsuario)) {
            fruta.style.display = ""; 
        } else {
            fruta.style.display = "none"; 
        }

});
});


