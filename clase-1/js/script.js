/*let tiempo = 'soleado';

if (tiempo == 'lluvioso') {
    alert('salir con paraguas');
}
else if(tiempo=='soleado'){
    alert('no olvides usar protector solar');
}
else if(tiempo=="nublado"){
    alert('abrigate un poco');
}
else {
    alert('sali sin paraguas');
}*/



let pass = "12345";
let edadObligatoria = 18;
let edadOptativaMinima = 16;
let edadOptativaMaxima = 70;
let usuarioDni = true;

let passUser = prompt('ingresa tu contraseña para ingresar al padron');

if (passUser == "12345") {
    alert("Felicitaciones has logrado ingresar");
    let edadUsuario = parseInt(prompt('¿cual es tu edad?'));

    if ((edadUsuario >= edadObligatoria && edadUsuario < edadOptativaMaxima) && usuarioDni) {
        alert('tenes que votar de manera obligatoria');
    }
    else if ((edadUsuario >= edadOptativaMinima || edadUsuario >= edadOptativaMaxima) && usuarioDni) {
        alert('Podes votar si queres');
    }
    else {
        alert('No podes votar');
    }

}
else {
    alert("Los datos no son correctos");
}


/*let resultado=6%3;

if (resultado == 0) {
    alert("tu resultado es par");
}else if(resultado == 1){
    alert("tu resultado es impar");
}else{
    alert("El valor es inexistente");
}*/

