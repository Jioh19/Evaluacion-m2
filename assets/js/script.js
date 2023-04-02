//Elimina la clase para luego agregar la clase otra vez. Lo unico que me funciono con bootstrap

function comuniquemonos() {
    document.getElementById("comuniquemonos").removeAttribute("class");
    document.getElementById('comuniquemonos').setAttribute("class", "formulario py-1 my-4");
}

function reserva() {
    document.getElementById("reserva").removeAttribute("class");
    document.getElementById("reserva").setAttribute("class", "formulario py-1 my-4");
}

//Agregue un event listener. No se si este sera el metodo utilizado en general, pero logro su cometido.
//Ahora bien no se si estara correcto la verificacion de los datos. Solo chequee de que estos existan

let comentario = document.getElementById("comentario");

comentario.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    if (!nombre) {
        alert("El campo 'Nombre' es obligatorio");
        return false;
    }
    let correo = document.getElementById("correo").value;
    if (!correo) {
        alert("El campo 'Correo' es obligatorio");
        return false;
    }
    let telefono = document.getElementById("telefono").value;
    if (!telefono) {
        alert("El campo 'Teléfono' es obligatorio");
        return false;
    }
    let texto = document.getElementById("texto").value;
    if (!texto) {
        alert("El campo 'Texto' es obligatorio");
        return false;
    }

    alert("Muchas gracias " + nombre +", hemos recibido tu sugerencia y enviaremos una pronta respuesta al correo " + 
    correo);
});


//Creo que este metodo es mejor ya que define explicitamente de que formulario se saca la infomracion
let reservar = document.getElementById("reservar");

reservar.addEventListener("submit", (e) => {
    e.preventDefault();
 
    let nombre = document.forms["reservar"]["nombre"].value;
    if (!nombre) {
    alert("El campo 'Nombre' es obligatorio");
    return false;
    }
    //console.log(nombre);
    
    let correo = document.forms["reservar"]["correo"].value;
    if (!correo) {
        alert("El campo 'Correo' es obligatorio");
        return false;
    }
    //console.log(correo);

    let telefono = document.forms["reservar"]["telefono"].value;
    if (!telefono) {
        alert("El campo 'Teléfono' es obligatorio");
        return false;
    }
    //console.log(telefono);

    let fecha = document.forms["reservar"]["fecha"].value;
    if (!texto) {
        alert("El campo 'fecha' es obligatorio");
        return false;
    }
    //console.log(fecha);

    let hora = document.forms["reservar"]["hora"].value;
    if (!texto) {
        alert("El campo 'hora' es obligatorio");
        return false;
    }
    //console.log(hora);

    let asistentes = document.forms["reservar"]["asistentes"].value;
    if (!texto) {
        alert("El campo 'asistentes' es obligatorio");
        return false;
    }
    //console.log(asistentes);

    alert("Muchas gracias " + nombre +", hemos recibido tu reserva y enviaremos una pronta confirmacion al correo " + 
    correo);
});