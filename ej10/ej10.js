const datos = ['Colombia', 'México', 'Argentina', 'Brasil', 'Chile', 'Perú', 'Ecuador', 'Venezuela', 'Bolivia', 'Paraguay', 'Uruguay', 'Cuba', 'Guatemala', 'Honduras', 'Costa Rica'];

const buscador = document.querySelector('#buscador');
const sugerencias = document.querySelector('#sugerencias');

buscador.addEventListener('input', () => {
    const texto = buscador.value.toLowerCase();
    sugerencias.innerHTML = '';

    if (!texto) return;

    const coincidencias = datos.filter(pais => pais.toLowerCase().includes(texto));

    coincidencias.forEach(pais => {
        const li = document.createElement('li');
        li.textContent = pais;
        li.addEventListener('click', () => {
            buscador.value = pais;
            sugerencias.innerHTML = '';
        });
        sugerencias.appendChild(li);
    });
});