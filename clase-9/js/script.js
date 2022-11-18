
const botonSaludo = document.getElementById("saludar"),
    botonSaludopersonalizado = document.getElementById("saludarPersonalizado"),
    titulo = document.querySelector('.codertitulo'),
    btnTest = document.getElementById('prueba'),
    inputNombre = document.querySelector('#inputNombre'),
    inputApellido = document.querySelector('#inputApellido'),
    caja = document.querySelector('.embajada'),
    inputPassword = document.querySelector('#inputPassword'),
    fotoBotellas = document.getElementById('imgBotellas');



function saludoSimple() {
    alert("Hola ¿Como estas?");
}

function saludoPersonalizado(nombre) {
    alert('Hola ' + nombre + ' ¿Como estas?')
}
/* botonSaludo.addEventListener("click", saludoSimple);
botonSaludopersonalizado.addEventListener("click", () => {

    let nombre = inputNombre.value;
    saludoPersonalizado(nombre);
});

titulo.addEventListener('click', saludoSimple);
 */
btnTest.onclick = () => {
    console.log('Hiciste click en el boton');}


    let contador = 0;
btnTest.onmousemove = () =>{
    contador++;
    console.log(contador);
}


inputPassword.addEventListener('keydown', ()=>{
    console.log(inputPassword.value)
})

inputPassword.onchange= ()=>{
    comsole.log(inputNombre.value);
}