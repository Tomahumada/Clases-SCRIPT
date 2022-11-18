let nombre = prompt('Hola Soy la calculadora ¿cual es tu nombre?');

let sentimiento = prompt('Bienvenido ' + nombre + ', ¿como te sientes hoy?');

switch (sentimiento) {
    case 'bien':
        alert('Me alegro por vos, Segui asi!');
        break;
    case 'mal':
        alert('Que lastima, levanta ese animo campeon!');
        break;
    default:
        alert('Todos sufrimos estres, estamos contigo para lo que necesites!');
        break;
}

let operacion = prompt("Mira " + nombre + " Vamos a realizar una operacion matematica \n¿que operacion deseas realizar?: \n1- suma \n2- resta \n3- multiplicacion \n4- division");

switch (operacion) {
    case '1' || 'suma' || 'sumar':
        let num1 = parseInt(prompt('dame el primer valor para la suma'));
        let num2 = parseInt(prompt('dame el segundo valor para la suma'));
        let resultado = num1 + num2;
        alert('el resultado de la suma es: ' + resultado);
        break;
    case '2' || 'resta' || 'restar':
        num1 = parseInt(prompt('dame el primer valor para la suma'));
        num2 = parseInt(prompt('dame el segundo valor para la suma'));
        resultado = num1 - num2;
        alert('el resultado de la suma es: ' + resultado);
        break;
    case '3' || 'multiplicacion' || 'multiplicacion':
        num1 = parseInt(prompt('dame el primer valor para la suma'));
        num2 = parseInt(prompt('dame el segundo valor para la suma'));
        resultado = num1 * num2;
        alert('el resultado de la suma es: ' + resultado);
        break;
    case '4' || 'division' || 'dividir':
        num1 = parseInt(prompt('dame el primer valor para la suma'));
        num2 = parseInt(prompt('dame el segundo valor para la suma'));
        resultado = num1 / num2;
        alert('el resultado de la suma es: ' + resultado);
        break;
    default:
        alert('elegiste una opcion invalida');
}

