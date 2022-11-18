/* 
//Operador ++
let contador = 0;
contador = contador + 1;

contador =+ 1;
contador++;

console.log(contador); */

//operador ternario
//condicion ? algo : otraCosa

const edaUsuario = document.querySelector('#edad'),
    btnEnviar = document.querySelector('#enviar'),
    alerta = document.querySelector('#alerta');

btnEnviar.onclick = (e) => {
    e.preventDefault();

    let edad = edaUsuario.value;
    if (edad < 13) {
        alerta.innerHTML = `<p>No podes ingresar al cine</p>`;
        alerta.classList = 'negativo';
    } else {
        alerta.innerHTML = `<p>Disfruta la pelicula</p>`;
        alerta.classList = 'positivo';
    }
    //edad < 13 ? alerta.innerHTML = `<p>No podes ingresar al cine</p>` : alerta.innerHTML = `<p>Podes ingresar al cine<br>disfruta la pelicula</p>`
}

let producto = {
    nombre: 'Zapatilas',
    marca: 'converse',
    modelo: 'botitas',
    color: 'rojo',
    stock: 1
}

const btnComprar = document.querySelector('#comprar');

btnComprar.onclick = (e) => {
    e.preventDefault();
    console.log('El stock del producto es de ' + producto.stock);
    producto.stock > 0 ? alert('Gracias por tu compra') : alert('Producto sin stock');
    producto.stock--;
}



/* const carrito = [];

carrito.length === 0 && alert('carrito vacio');

 */
/* const usuario = {
    nombre:'tomas',
    edad: 20
}

const registroUsuario = usuario.edad>18 && usuario;

console.log(registroUsuario);


const nombreUsuario = usuario.nombre || 'nombre Inexistente';

console.log(nombreUsuario);
 */

/* let carrito;
const carritoUusuario = JSON.parse(localStorage.getItem('carrito')) || carrito == []; 

let puerto = 4000;
const PORT = puerto|| 3000;
 */

/* 
const usuario3 ={
    nombre: 'tomas',
    apellido:'undefined',
        edad:20,
        curso:'javascript',
        deuda:0
}

const deudaUsuarioOr = usuario3.deuda || 'sin informacion';
console.log(deudaUsuarioOr);

const deudaUsuarioNullish = usuario3.deuda ?? 'sin informacion'; 
console.log(deudaUsuarioNullish); */

/* 
const usuario2 = 'tomas';
const nuevoUsuario = usuario2?.nombre || 'usuario inexistente';
console.log(nuevoUsuario);  */
/* 
const estudiante2 = {
    nombre: 'Luciano',
    edad: 30,
    curso: 'javascript',
    telefono: {
        casa: 4979667,
        movil: 3518174905
    }
}
 */
/* let edad = estudiante2.edad;
 */
//let {nombre, edad, curso} = estudiante2;

/* window.addEventListener('click',({x,y})=>{
    console.log(x,y);
}) */

const frutas = ['manzana', 'pera', 'mangos', 'naranja', 'frutillas'];

const [a, , b, c,] = frutas;

console.log(a);
console.log(b);
console.log(c);

