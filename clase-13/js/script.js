const btnSwal = document.getElementById('botonSwal');


btnSwal.onclick = () => {

    Swal.fire({
        title: '¡Bienvenido/a!',
        text: 'bienvenida/o a nuestro Complejo esperamos poder contar con usted muy Pronto',
        icon: 'info',
        iconColor: '#66f4ae',
        confirmButtonText: 'Gracias',
        showCancelButton: true,
        cancelButtonText: 'No me interesa',
        timer: 6000
    })
}

//Swal.fire('HOLA','Bienvenida A nuestra aplicacion web','info');

/* Swal.fire({
    title: 'Eliminar Producto',
    text: '¿Estas seguro de eliminar este producto?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText:'Si, Seguro',
    cancelButtonText:'No, no Quiero',
    backdrop: '#66f4ae50'
}).then((result)=>{
    if(result.isConfirmed){
        Swal.fire('Borrado','producto Eliminado','success')
    }else{
        Swal.fire('Conservado','Producto Conservado en el carrito','success')
    }
}) */


const btnToast = document.getElementById('botonToast');
let carrito = ['papas', 'pepinos', 'manzanas', 'naranjas', 'pilas', 'sandwich']


btnToast.onclick = () => {
    Toastify({
        text: `${ahora.toLocaleString(DateTime.DATE_HUGE)}`,
        duration: 2500,
        style: {
            color: 'white',
            width: '20vw',
            heigth: 80,
            background: 'radial-gradient(circle,rgba(235,0,255,1) 10%, rgba(86,9,121,1) 65%, rgba(68,0,50,1) 93%)'
        },
        offset: {
            x: 0,
            y: 20
        }, onClick: () => {
            Toastify({
                text: 'Hola Te voy a llevar a Quatar',
                duration: 1500,
                destination: 'https://www.qatarairways.com',
                newWindow: true,
                offset: {
                    x: 0,
                    y: 20
                }

            }).showToast();
        }
    }).showToast()
}

const DateTime = luxon.DateTime;

const ahora = DateTime.now();
console.log(ahora);

const dt = DateTime.local(2022, 12, 8, 12, 15);
console.log(dt);


console.log(ahora.toString());
console.log(ahora.toLocaleString());
console.log(ahora.toLocaleString(DateTime.DATE_FULL));
console.log(ahora.toLocaleString(DateTime.DATE_HUGE));
console.log(ahora.toLocaleString(DateTime.TIME_SIMPLE));

//Ejemplo integrador de librerias

const btnCalcular = document.getElementById('calcular');
let inputFecha = document.querySelectorAll('input[type="date"]');

let inicio = DateTime.now().toFormat('yyyy-MM-dd');
let fin = DateTime.now().plus({ months: 4 }).toFormat('yyyy-MM-dd');

inputFecha.forEach(element => {
    element.setAttribute('min', inicio);
    element.setAttribute('max', fin);
});

function calcularEstadia(checkIn, checkOut) {
    return checkOut.diff(checkIn).as('days');
}

function calcularPrecioTotal(estadia, precio) {
    return estadia * precio;
}

btnCalcular.addEventListener('click', () => {
    let checkIn = DateTime.fromISO(inputFecha[0].value);
    let checkOut = DateTime.fromISO(inputFecha[1].value);
    let estadia = calcularEstadia(checkIn, checkOut);
    let precioTotal = calcularPrecioTotal(estadia, 7000);

    Swal.fire({
        title: 'Realizar reserva',
        text: `Tu estadia de ${estadia} dias tiene un precio total de $${precioTotal}`,
        icon: 'info',
        iconColor: '#0096c7',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        position: 'top-center',
        backdrop: '#445566aa'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Reserva Exitosa',
                text: `Deseas pagar ahora o cuando te alojes en el hotel`,
                icon: 'success',
                iconColor: '#00ff00',
                showCancelButton: true,
                confirmButtonText: 'Pagar Ahora',
                cancelButtonText: 'Pagar Despues',
                position: 'top-center',
                backdrop: '#445566aa'
            }).then((result) => {
                if(result.isConfirmed){
                    Swal.fire({
                        title: 'Muchas gracias',
                        text: `En breve la administracion del hotel se comunicara con vos para seguir con el pago`,
                        icon: 'success',
                        confirmButtonText: 'OK',
                        position: 'top-center',
                        backdrop: '#445566aa'
                    })
                }else{
                    Swal.fire({
                        title: 'Muchas gracias',
                        text: `Cuando te alojes en el complejo podras realizar el pago de tu estadia`,
                        icon: 'success',
                        iconColor: '#00ff00',
                        confirmButtonText: 'OK',
                        position: 'top-center',
                        backdrop: '#445566aa'
                    })
                }
            })
        } else {
            Swal.fire({
                title: 'Reserva Cancelada',
                text: `si deseas relizar una reserva solo recarga la pagina boludo`,
                icon: 'error',
                iconColor: '#d00000',
                confirmButtonText: 'OK',
                position: 'top-center',
                backdrop: '#445566aa'
            })
        }
    })
})