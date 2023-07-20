

function comprobarTamanoPantalla(categoria) {
    const container = document.querySelector(`.${categoria}`);
  
    fetch('datos/dataComplete.json')
      .then(response => response.json())
      .then(data => {
        // Access the data from the JSON file
        const productos = data.images;
  
        // Generate a subarray containing elements with the specified category
        const filteredProductos = productos.filter(producto => producto.categoria === categoria);
  
        let imagesHTML = '';
        let numElementos = 0;
  
        // Determine the number of elements to show based on the screen width
        if (window.innerWidth > 1200) {
          numElementos = 6;
        } else {
          numElementos = 4;
        }
  
        // Generate the HTML for the elements to show
        for (let i = 0; i < numElementos && i < filteredProductos.length; i++) {
          imagesHTML += `
            <div class="card">
              <img class="card__imagen" src="./${filteredProductos[i].src}" alt="">
              <p class="card__titulo">${filteredProductos[i].nombre}</p>
              <p class="card__precio">${filteredProductos[i].precio}</p>
              <a class="card__link" href="productoDetail.html?id=${filteredProductos[i].id}">Ver Producto</a>
            </div>`;
        }
  
        container.innerHTML = imagesHTML;
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }
  
  // Call the function for each category initially
  comprobarTamanoPantalla('Consola');
  comprobarTamanoPantalla('otros');
  comprobarTamanoPantalla('StarWars');
  
  // Event 'resize' to check for changes in the screen size
  window.addEventListener('resize', () => {
    comprobarTamanoPantalla('Consola');
    comprobarTamanoPantalla('otros');
    comprobarTamanoPantalla('StarWars');
  });
