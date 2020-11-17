class Carrito{

        //Añadir producto al carrito
        comprarProducto(e){
            e.preventDefault();
            if (e.target.classList.contains('agregar-carrito')) {
                const producto = e.target.parentElement.parentElement;
                this.leerDatos(producto);

            }
        }

        leerDatosProducto(producto){
            const infoProducto = {
                imagen : producto.querySelector('img').src,
                titulo : producto.querySelector('h4').textContent,
                precio : producto.querySelector('h3').textContent,
                id : producto.querySelector('a').getAttribute('data-id'),
                cantidad : 1
            }
            this.insertarCarrito(infoProducto);
        }

        guardarProductosLocalStorage(producto){
            let productos;
            productos = this.obtenerProductosLocalStorage();
            productos.push(producto);
            localStorage.setItem('productos', JSON.stringify(productos));
        }
        obtenerProductosLocalStorage()
        {
            let productosLS;
            if(localStorage.getItem('productos') == null){
                productoLS = [];
            } else{
                productoLS = JSON.parse(localStorage('productos'));
            }
            return productoLS;
        }
        calcularTotal(){
            let productoLS;
            let total = 0, subtotal = 0;
            productoLS = this.obtenerProductosLocalStorage();
            for (let i = 0; productoLS.length; i++) {
            let element = Number(productoLS[i].precio * productoLS[i].cantidad);
            total = total + element;
            }
            document.getElementById('subtotal').innerHTML = "S/. " + subtotal;
            document.getElementById('total').innerHTML = "S/. " + total.tofixed(2);

        }
    }
