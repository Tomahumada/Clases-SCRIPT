let savedPin = '3207';
 
function login() {
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {
        let usserPin = prompt('Ingresa tu PIN. Tenes ' + (i + 1) + ' oprtunidades');
        if (usserPin == savedPin) {
            alert('Ingreso Existoso. Bienvenido/a');
            ingresar = true;
            break;
        } else {
            alert('Error, Te quedan ' + i + ' intentos.')
        }
    }
    return ingresar;
}


if (login()) {
    let saldo = 10000;
    let opcion = prompt('Elegi una opcion:\n1 - saldo.\n2 - retiro de dinero.\n3 - Deposito.\n4 - Presion X para finalizar.');

    while (opcion != 'X' && opcion != 'x') {

        switch (opcion) {
            case '1':
                alert('Tu saldo es $' + saldo);
                break;

            case '2':
                let retiro = parseInt(prompt('Ingresa cantidad a retirar'));
                if (retiro <= saldo) {
                    saldo -= retiro;
                    //saldo = saldo - retiro;
                    alert('Retiro existoso. Tu nuevo saldo es $' + saldo);
                } else {
                    alert('Fondos Insuficiente');
                }
                break;

            case '3':
                let deposito = parseInt(prompt('Ingresa monto a depositar'));
                saldo += deposito;
                alert('Deposito exitoso. Tu nuevo saldo es: $' + saldo);
            default:
                alert('Elegiste una opcion invalida');
                break;
        }
    }
    opcion = prompt('Elegi una opcion:\n1 - saldo.\n2 - retiro de dinero.\n3 - Deposito.\n4 - Presion X para finalizar.')
} else {
    alert('Retendremos tu tarjeta');
}