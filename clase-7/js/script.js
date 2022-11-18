/* let total = 0;

for(let i = 0; i<=10; i ++){
    total+= i; */
//}
/* console.log(total); */

/* function sumarRango(inicio,final) {
    let total = 0;
for(let i = inicio; i<=final; i ++){
    total+= i;
}
return total;
}

console.log(sumarRango(1,100)); */


const cursos = [
    {nombre: 'javascript JS',
    precio: 20000},
    {nombre: 'Angular',
    precio: 20500},
    {nombre: 'reacts JS',
    precio: 22000},
    {nombre: 'Desarrollo Web',
    precio: 16000}
]

/* const encontrado = cursos.find( curso => curso.precio<20000 );

console.log(encontrado);

const alguno = cursos.some( curso => curso.precio<20000 );

console.log(alguno); */

/* const filtrado = cursos.filter( curso => curso.precio>20000 );

console.log(filtrado); */
/* 
let keyword = prompt('Ingresa el termino de busqueda');

const otroFiltrado = cursos.filter( curso => curso.nombre.includes(keyword));

console.log(otroFiltrado);

const precioConDescuentos = otroFiltrado.map( curso => { 
    return{nombre: curso.nombre, precio: curso.precio * .50}
    });

    console.log(precioConDescuentos) */

let fecha = new Date();

console.log(fecha);