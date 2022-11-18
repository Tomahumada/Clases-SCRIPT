/* 
    let nombre = prompt('Cual es tu nombre?').toLowerCase();
    let apellido = prompt('Cual es tu apellido?').toLowerCase();
    let edad = prompt('Cual es tu edad?');
    let ciudad = prompt('De que ciudad de argentina sos?').toLowerCase();


    localStorage.setItem('apellido', apellido);
    localStorage.setItem('edad', edad);
    localStorage.setItem('ciudad',ciudad) */

/* localStorage.setItem('nombre', 'tomas');

let emailUsuario = document.getElementById('emailAddress');
let btnLogin = document.getElementById('btnLogin')
let span = document.getElementById('infoUsuario')

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('email', emailUsuario.value);
    let nombreUsuario = localStorage.getItem('nombre');
    console.log(nombreUsuario);
    span.innerText = nombreUsuario;
})

let nombreUsuario = localStorage.getItem('nombre');
console.log(localStorage.length);



localStorage.setItem('altura', 1.78);
localStorage.setItem('esDarkMode', true);
localStorage.setItem('cuotas', [3, 6, 9, 12]);

let medida = parseFloat(localStorage.getItem('altura'));
console.log(medida);

let modo = (localStorage.getItem('esDarkMode')=='true');
console.log(modo);

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);

    console.log('Clave: ' + clave);
    console.log('Valor: ' + valor);
}

//localStorage.removeItem('cuotas');
localStorage.clear();
 */



/* let flor = {
    user: 'tomas',
    pass: 1234,
    esCasado: true,
    hijos:{
    primero: 'Ro',
    segundo: 'fran'
    }
}

sessionStorage.setItem('user',JSON.stringify(flor));
let usuarioRecuperado = JSON.parse(sessionStorage.getItem('user'));
console.log(usuarioRecuperado.pass); */

const btnLogin = document.getElementById('btnLogin'),
    btnVaciarTodo = document.getElementById('btnVaciarLocalStorage'),
    btnvaciarSessionStorage = document.getElementById('btnVaciarSessionStorage'),
    recordar = document.getElementById('rememberMe');


function borrarDatos(storage) {
    storage.clear();
}

function borrarDatoUnico(storage, key) {
    storage.removeItem(key);
}

function guardarDatos(storage) {
    let user = document.getElementById('emailAddress').value;
    let pass = document.getElementById('password').value;

    const usuario = {
        'user': user,
        'pass': pass
    }

    storage.setItem('user', JSON.stringify(usuario));
}


btnVaciarTodo.addEventListener('click', () => {
    borrarDatos(localStorage);
    borrarDatos(sessionStorage);
})

btnvaciarSessionStorage.addEventListener('click', () => {
    borrarDatos(sessionStorage);
})

btnLogin.addEventListener('click', () => {
    if (recordar.checked) {
        guardarDatos(localStorage);
    } else {
        guardarDatos(sessionStorage);
    }
});