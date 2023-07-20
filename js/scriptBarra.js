const toogle = document.querySelector('.toogle');
const barra = document.querySelector('.busqueda');
const padre = document.querySelector('.nav');
let divContenedor = null;

function cerrarDivContenedor() {
  if (divContenedor) {
    divContenedor.remove();
    divContenedor = null;
  }
}


function toggleDivContenedor() {
  if (divContenedor) {
    cerrarDivContenedor();
  } else {
    let input = document.createElement('input');
    let button = document.createElement('button');
    input.classList.add('busqueda__input');
    input.style.backgroundColor = 'white';
    input.style.borderRadius = '10px';
    input.placeholder = "¿Qué deseas buscar?";

    button.classList.add('button__login');
    button.classList.add('button__modificado');
    button.textContent = 'Buscar';
    button.style.fontSize = '1rem';

    divContenedor = document.createElement('div');
    divContenedor.classList.add('contenedorJs');
    divContenedor.style.zIndex = '2';
    divContenedor.appendChild(button);
    divContenedor.appendChild(input);
    padre.appendChild(divContenedor);
  }
}

toogle.addEventListener('click', function(event) {
  event.preventDefault();
  toggleDivContenedor();
});

window.addEventListener('resize', function() {
  cerrarDivContenedor();
});







