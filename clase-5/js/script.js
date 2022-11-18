class Producto{
    constructor(nombre,precio,categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.vendido = false;
    }

    sumarIVA(){
        this.precio = this.precio*1.21;
    }

    vender(){
        this.vendido = true;
        console.log('producto vendido');
    }
}


let productoIngresado = prompt('Ingresa el nombre del producto');
let precioIngresado = prompt('Ingresa el precio por unidad de venta sin IVA');
let categoriaIngresada = prompt('Ingresa la categoria del producto');

const producto1 = new Producto(productoIngresado, precioIngresado, categoriaIngresada);

console.log(producto1);

producto1.sumarIVA();

alert('El precio final del producto es: '+ producto1.nombre + ' es $' + producto1.precio);

producto1.vender();