// let numeroElegido = parseInt(prompt('Elegi un numero para mostrarte la tabla'));

// for(let i = 0; i<=10; i++){
//     console.log(numeroElegido+' * ' + i + ' = ' + (numeroElegido * i));
// }

/* let pass= 'goku';

for(let i = 0; i<3; i++){
    let userPass = prompt('Ingresa tu contraseña');

    if (pass == userPass) {
        alert('Login existoso');
    }
    break;
}


alert('fin del proceso'); */

/* let repetir = 0;

while (repetir<1) {
    console.log('soy un bucle while');
    repetir++;
}
 */


/* let edad = parseInt(prompt('¿Cual es tu edad?'));

while(edad < 16){
    console.log('Tenes que tener una edad diferente');
    edad = parseInt(prompt('¿Cual es tu edad?'));
} */

/* let palabraClave = 'pepito';

let palabraUsuario = prompt('Ingresa tu palabra');

while (palabraClave!=palabraUsuario) {
    alert('palabra incorrecta');
    palabraUsuario = prompt('ingresa tu palabra');
} */

/* let passGuardado = 'messi';
let passUsser = prompt('Ingresa tu contraseña');
let continuarPreguntando = true;

while(continuarPreguntando = true){
    if(passGuardado === passUsser){
        alert('Bienvenido/a');
        continuarPreguntando=false;
        break
    }
    alert('Contraseña incorrecta');
    passUsser = prompt('Ingresa tu contraseña');
} */


let opcion = prompt('Elegi una opcion: \n1 - Te \n2 - Cafe \n3 - Chocolatte');


while(opcion != '1','2','3'){
    switch (opcion) {
        case '1':
            alert('Elegiste un te');
            break;
        case '2':
            alert('Elegiste un Cafe');
            break;
        case '3':
            alert('Elegiste un Chocolatte');
            break;
        default:
            alert('elegiste una opcion incorreta');
            break;
    }
}