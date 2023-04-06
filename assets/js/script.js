//Elimina la clase para luego agregar la clase otra vez. Lo unico que me funciono con bootstrap

function comuniquemonos() {
  document.getElementById("comuniquemonos").removeAttribute("class");
  document
    .getElementById("comuniquemonos")
    .setAttribute("class", "formulario py-1 my-4");
}

function reserva() {
  document.getElementById("reserva").removeAttribute("class");
  document
    .getElementById("reserva")
    .setAttribute("class", "formulario py-1 my-4");
}

//Me di cuenta de que es pesima idea tener el mismo nombre de id por lo que modifique un poco los ids.
//Quizas era mejor reformular mejor el select para que de alguna manera incluyera a los DOM padres
//Tambien probando por primera vez el try err catch
$(document).ready(function () {
  $("#btnReserva").click(function () {
    let nombre = $("#rnombre").val();
    try {
      if (!nombre) throw alert("El campo 'Nombre' es obligatorio");
    } catch (err) {
      return false;
    }

    let correo = $("#rcorreo").val();
    try {
      if (!correo) throw alert("El campo 'Correo' es obligatorio");
    } catch (err) {
      return false;
    }

    let telefono = $("#rtelefono").val();
    try {
      if (!telefono) throw alert("El campo 'Telefono' es obligatorio");
    } catch (err) {
      return false;
    }

    let fecha = $("#rfecha").val();
    try {
      if (!fecha) throw alert("El campo 'Fecha' es obligatorio");
    } catch (err) {
      return false;
    }

    let hora = $("#rhora").val();
    try {
      if (!hora) throw alert("El campo 'Hora' es obligatorio");
    } catch (err) {
      return false;
    }

    let asistentes = $("#rasistentes").val();
    try {
      if (!asistentes) throw alert("El campo 'Asistentes' es obligatorio");
    } catch (err) {
      return false;
    }

    alert(
      "Estimado " +
        nombre +
        ", agradecemos por reservar con nosotros. Hemos registrado " +
        asistentes +
        " asistentes. Se ha enviado el código de confirmación al correo " +
        correo +
        "\nGracias por preferirnos"
    );
  });

  //Aprendiendo a usar "Modal". No se como hacer que la pagina principal se mueva de forma independiente al
  //modal.
  $(".card").click(function () {
    let titulo = $(this).children(".card-title").text();
    let imagen = $(this).children(".card-img-top").attr("src");
    let texto = $(this).find(".card-text").text();

    $(".modal-title").text(titulo);
    $(".modal-img").attr("src", imagen);
    $(".modal-img").css("width", "100%");
    $(".modal-text").text(texto);
    $("#myModal").modal("show");
  });

  $("#conozcamonos").click(() => {
    $("#modalConocenos").modal("show");
  });

  //Agregue un event listener. No se si este sera el metodo utilizado en general, pero logro su cometido.
  //Ahora bien no se si estara correcto la verificacion de los datos. Solo chequee de que estos existan

  let comentario = document.getElementById("comentario");

  comentario.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.forms["comentario"]["nombre"].value;
    if (!nombre) {
      alert("El campo 'Nombre' es obligatorio");
      return false;
    }
    //console.log(nombre);

    let correo = document.forms["comentario"]["correo"].value;
    if (!correo) {
      alert("El campo 'Correo' es obligatorio");
      return false;
    }
    //console.log(correo);

    let telefono = document.forms["comentario"]["telefono"].value;
    if (!telefono) {
      alert("El campo 'Teléfono' es obligatorio");
      return false;
    }
    //console.log(telefono);

    let texto = document.forms["comentario"]["texto"].value;
    if (!texto) {
      alert("El campo 'Texto' es obligatorio");
      return false;
    }

    alert(
      "Muchas gracias " +
        nombre +
        ", hemos recibido tu sugerencia y enviaremos una pronta respuesta al correo " +
        correo
    );
  });
});
