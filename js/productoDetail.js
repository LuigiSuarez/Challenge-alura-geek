

    // Function to extract the URL parameter
    function getProductIdFromUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('id');
    }

    // Function to load product detail based on the provided ID
    function loadProductDetail() {
      const productId = getProductIdFromUrl();

      fetch('datos/dataComplete.json')
        .then(response => response.json())
        .then(data => {
          // Access the data from the JSON file
          const product = data.images.find(producto => producto.id === productId);
            console.log(product)
          // Check if the product with the given ID exists
          if (product) {
            const detailSection = document.querySelector('.productoDetail');
            const imageElement = detailSection.querySelector('.productoDetail__imagen');
            const titleElement = detailSection.querySelector('.productoDetail__titulo');
            const precioElement = detailSection.querySelector('.productoDetail__precio')
            const paragraphElement = detailSection.querySelector('.productoDetail__parrafo');
            // parrafo
            const contenedorProductosSimiliares = document.querySelector('.productos');
            const parrafoInsertar = document.createElement('div',)
            parrafoInsertar.classList.add(`${product.categoria}`)
            parrafoInsertar.classList.add(`star-wars`);
            contenedorProductosSimiliares.appendChild(parrafoInsertar);
            comprobarTamanoPantalla(`${product.categoria}`);
         
            // Fill in the product detail section with the retrieved data
            imageElement.src = product.src;
            titleElement.textContent = product.nombre;
            precioElement.textContent = `Precio: $${product.precio}`;
            paragraphElement.textContent = `${product.descripcion}`;
          } else {
            console.error('Product not found.');
          }
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
    }

    // Call the function to load product detail when the page loads
    loadProductDetail();
   