// scriptcarrito.js
var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function añadirAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
    verificarCarrito(); // Verificar si el carrito está vacío después de agregar el producto
}

function mostrarCarrito() {
    var contenedorItemsCarrito = document.getElementById('cart-items');
    contenedorItemsCarrito.innerHTML = '';
    for (var i = 0; i < carrito.length; i++) {
        var itemCarrito = document.createElement('div');
        itemCarrito.innerHTML = `
            <div class="grid-item">
                <img src="${carrito[i].imagen}" alt="Producto ${i + 1}">
                <p class="product-name">${carrito[i].nombre}</p>
                <p class="product-price"><strong>$${carrito[i].precio}</strong></p>
            </div>
        `;
        contenedorItemsCarrito.appendChild(itemCarrito);
    }
}

function verificarCarrito() {
    // Obtener el contenedor de elementos del carrito
    var cartItemsContainer = document.getElementById('cart-items');
    // Obtener el párrafo que indica que el carrito está vacío
    var cartEmptyText = document.getElementById('cart-empty-text');

    // Verificar si hay elementos específicos dentro del contenedor de elementos del carrito
    var cartItemElements = cartItemsContainer.querySelectorAll('.grid-item');
    
    // Si no hay elementos específicos en el carrito, mostrar el texto de carrito vacío
    if (cartItemElements.length === 0) {
        cartEmptyText.style.display = "block";
    } else {
        cartEmptyText.style.display = "none";
    }
}

window.onload = function() {
    var botonesAñadirCarrito = document.getElementsByClassName('añadir-al-carrito');
    for (var i = 0; i < botonesAñadirCarrito.length; i++) {
        var boton = botonesAñadirCarrito[i];
        boton.addEventListener('click', function(evento) {
            var boton = evento.target;
            var producto = {
                nombre: boton.getAttribute('data-nombre'),
                precio: boton.getAttribute('data-precio'),
                imagen: boton.getAttribute('data-imagen')
            };
            añadirAlCarrito(producto);
        });
    }
    mostrarCarrito();
    verificarCarrito(); // Verificar si el carrito está vacío al cargar la página
}
