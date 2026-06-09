const botones = document.querySelectorAll('.btn-favorito');

let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

function aplicarEstilosFavoritos() {
    favoritos.forEach(productoNombre => {
        const elementoLi = document.querySelector(`li[data-producto="${productoNombre}"]`);
        if (elementoLi) {
            elementoLi.classList.add('favorito');
            const boton = elementoLi.querySelector('.btn-favorito');
            if (boton) boton.textContent = "¡En Favoritos!";
        }
    });
}

aplicarEstilosFavoritos();

botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const elementoLi = e.target.closest('li');
        const productoNombre = elementoLi.getAttribute('data-producto');

        if (!favoritos.includes(productoNombre)) {
            favoritos.push(productoNombre);
            elementoLi.classList.add('favorito');
            boton.textContent = "¡En Favoritos!";
        } else {
            favoritos = favoritos.filter(item => item !== productoNombre);
            elementoLi.classList.remove('favorito');
            boton.textContent = "Añadir a Favoritos";
        }

        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    });
});


