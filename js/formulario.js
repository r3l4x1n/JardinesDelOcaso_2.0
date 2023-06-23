let boton = document.getElementById("botonagenda")

let cajaNombres = document.getElementById("usuario")
let cajaCorreo = document.getElementById("correo")
let cajaTelefono = document.getElementById("telefono")
let cajaFecha = document.getElementById("fecha")
let cajaHora = document.getElementById("hora")
let cajaDocumento = document.getElementById("documento")

//Quiero programar el evento de hacer clic en el boton
boton.addEventListener("click", function (infoEvento) {
    infoEvento.preventDefault()

    let usuario = cajaNombres.value
    let correo = cajaCorreo.value
    let telefono = cajaTelefono.value
    let fecha = cajaFecha.value
    let hora = cajaHora.value
    let documento = cajaDocumento.value


    let errores = []
    let citas
    let datosMemoria = JSON.parse(sessionStorage.getItem("datos"))
    if (!datosMemoria) {
        citas = []
    } else {
        citas = datosMemoria
        //citas=citas.push(datosMemoria)
    }


    function eliminarDivError(elemento) {
        if (elemento.nextElementSibling && elemento.nextElementSibling.classList.contains("invalid-feedback")) {
            elemento.nextElementSibling.remove();
        }
        if (elemento.nextElementSibling && elemento.nextElementSibling.classList.contains("valid-feedback")) {
            elemento.nextElementSibling.remove();
        }
    }


    if (!usuario || usuario.length < 10) {
        errores.push("El nombre es obligatorio")
        eliminarDivError(cajaNombres);
        cajaNombres.classList.add("is-invalid")
        var divErrorNombre = document.createElement("div")
        divErrorNombre.className = "invalid-feedback"
        divErrorNombre.textContent = "El Nombre es Obligatorio de Minimo 10 Caracteres"
        cajaNombres.parentNode.appendChild(divErrorNombre)
    } else {
        cajaNombres.classList.remove("is-invalid")
        cajaNombres.classList.add("is-valid")
        eliminarDivError(cajaNombres);
        var divErrorNombre = document.createElement("div")
        divErrorNombre.className = "valid-feedback"
        divErrorNombre.textContent = "Ok"
        cajaNombres.parentNode.appendChild(divErrorNombre)
    }


    if (!correo || !/^[\w.-]+@[\w.-]+\.\w+$/.test(correo)) {
        errores.push("El correo es obligatorio")
        cajaCorreo.classList.add("is-invalid")
        eliminarDivError(cajaCorreo);
        var divErrorCorreo = document.createElement("div")
        divErrorCorreo.className = "invalid-feedback"
        divErrorCorreo.textContent = "El Correo es Obligatorio y debe ser Valido ejemplo@gmail.com"
        cajaCorreo.parentNode.appendChild(divErrorCorreo)
    } else {
        cajaCorreo.classList.remove("is-invalid")
        cajaCorreo.classList.add("is-valid")
        eliminarDivError(cajaCorreo);
        var divErrorCorreo = document.createElement("div")
        divErrorCorreo.className = "valid-feedback"
        divErrorCorreo.textContent = "Ok"
        cajaCorreo.parentNode.appendChild(divErrorCorreo)
    }

    if (!telefono) {
        errores.push("El telefono es obligatorio")
        cajaTelefono.classList.add("is-invalid")
        eliminarDivError(cajaTelefono);
        var divErrorTelefono = document.createElement("div")
        divErrorTelefono.className = "invalid-feedback"
        divErrorTelefono.textContent = "El Telefono es Obligatorio"
        cajaTelefono.parentNode.appendChild(divErrorTelefono)
    } else {
        cajaTelefono.classList.remove("is-invalid")
        cajaTelefono.classList.add("is-valid")
        eliminarDivError(cajaTelefono);
        var divErrorTelefono = document.createElement("div")
        divErrorTelefono.className = "valid-feedback"
        divErrorTelefono.textContent = "Ok"
        cajaTelefono.parentNode.appendChild(divErrorTelefono)
    }

    if (!fecha) {
        errores.push("La fecha es obligatoria")
        cajaFecha.classList.add("is-invalid")
        eliminarDivError(cajaFecha);
        var divErrorFecha = document.createElement("div")
        divErrorFecha.className = "invalid-feedback"
        divErrorFecha.textContent = "La Fecha es Obligatoria"
        cajaFecha.parentNode.appendChild(divErrorFecha)
    } else {
        cajaFecha.classList.remove("is-invalid")
        cajaFecha.classList.add("is-valid")
        eliminarDivError(cajaFecha);
        var divErrorFecha = document.createElement("div")
        divErrorFecha.className = "valid-feedback"
        divErrorFecha.textContent = "Ok"
        cajaFecha.parentNode.appendChild(divErrorFecha)
    }

    if (hora == 'Seleccione una hora') {
        errores.push("La hora es obligatorio")
        cajaHora.classList.add("is-invalid")
        eliminarDivError(cajaHora);
        var divErrorHora = document.createElement("div")
        divErrorHora.className = "invalid-feedback"
        divErrorHora.textContent = "La Hora es Obligatoria"
        cajaHora.parentNode.appendChild(divErrorHora)
    } else {
        cajaHora.classList.remove("is-invalid")
        cajaHora.classList.add("is-valid")
        eliminarDivError(cajaHora);
        var divErrorHora = document.createElement("div")
        divErrorHora.className = "valid-feedback"
        divErrorHora.textContent = "Ok"
        cajaHora.parentNode.appendChild(divErrorHora)
    }

    if (!documento) {
        errores.push("El Numero de Documento es Obligatorio")
        cajaDocumento.classList.add("is-invalid")
        eliminarDivError(cajaDocumento);
        var divErrorDocumento = document.createElement("div")
        divErrorDocumento.className = "invalid-feedback"
        divErrorDocumento.textContent = "El Numero De Documento es Obligatorio"
        cajaDocumento.parentNode.appendChild(divErrorDocumento)
    } else {
        cajaDocumento.classList.remove("is-invalid")
        cajaDocumento.classList.add("is-valid")
        eliminarDivError(cajaDocumento);
        var divErrorDocumento = document.createElement("div")
        divErrorDocumento.className = "valid-feedback"
        divErrorDocumento.textContent = "Ok"
        cajaDocumento.parentNode.appendChild(divErrorDocumento)
    }


    if (errores.length == 0) {

        let datosEnvio = {
            usuario,
            correo,
            fecha,
            hora,
            telefono,
            documento,
        }
        citas.push(datosEnvio)
        Swal.fire(
            'Te esperamos!',
            'Su cita ha sido agendada',
            'success'
        )

        //abrimos la memoria para almacenar la data
        sessionStorage.setItem("datos", JSON.stringify(citas))

    }

    if (!errores.length == 0) {
        Swal.fire({
            title: 'Error!',
            text: 'Porfavor llene Todos los Campos',
            icon: 'error',
            confirmButtonText: 'Reintentar'
        })
    }
    if (errores.length == 0) {
        // Restablecer los valores de los campos del formulario
        cajaNombres.value = '';
        cajaCorreo.value = '';
        cajaTelefono.value = '';
        cajaFecha.value = '';
        cajaHora.value = 'Seleccione una hora';
        cajaDocumento.value = '';

        // Restablecer las clases de validación
        cajaNombres.classList.remove("is-valid");
        cajaCorreo.classList.remove("is-valid");
        cajaTelefono.classList.remove("is-valid");
        cajaFecha.classList.remove("is-valid");
        cajaHora.classList.remove("is-valid");
        cajaDocumento.classList.remove("is-valid");

        // Eliminar los mensajes de error o validación
        eliminarDivError(cajaNombres);
        eliminarDivError(cajaCorreo);
        eliminarDivError(cajaTelefono);
        eliminarDivError(cajaFecha);
        eliminarDivError(cajaHora);
        eliminarDivError(cajaDocumento);
    }
})