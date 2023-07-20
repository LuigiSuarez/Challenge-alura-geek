function comprobarTamanoPantalla() {
  const todosProductos_container = document.querySelector(".todosProductos");

  const jsonFilePath = "datos/dataComplete.json";

  fetch(jsonFilePath)
    .then((response) => response.json())
    .then((data) => {
      const productos = data.images;
      let imagesHTML = "";

      // Generate the HTML for all the elements
      for (let i = 0; i < productos.length; i++) {
        imagesHTML += `
          <div class="card">
            <img class="card__imagen" src="./${productos[i].src}" alt="">
            <p class="card__titulo">${productos[i].nombre}</p>
            <p class="card__precio">${productos[i].precio}</p>
            <a class="card__link" href="productoDetail.html?id=${productos[i].id}">Ver Producto</a>
          </div>`;
      }

      todosProductos_container.innerHTML = imagesHTML;
    })
    .catch((error) => console.error("Error while processing data:", error));
}

// Initial call to the function
comprobarTamanoPantalla();

// Event 'resize' to check for changes in screen size
window.addEventListener("resize", comprobarTamanoPantalla);
