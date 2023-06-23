function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = decodeURIComponent(value.replace(/\+/g, ' '));
    });
    return vars;
}

function cargarDatos() {
    var memoria = JSON.parse(sessionStorage.getItem("datos"));
    var id = parseInt(getUrlVars()["index"]);

    if (isNaN(id) || id < 0 || id >= memoria.length) {
        console.error("ID inválido");
        return;
    }

    var cita = memoria[id];

    document.getElementById("usuario").value = cita.usuario;
    document.getElementById("correo").value = cita.correo;
    document.getElementById("telefono").value = cita.telefono;
    document.getElementById("fecha").value = cita.fecha;
    document.getElementById("hora").value = cita.hora;
    document.getElementById("documento").value = cita.documento;
}

window.addEventListener("DOMContentLoaded", cargarDatos);

function actualizarCita() {
    var memoria = JSON.parse(sessionStorage.getItem("datos"));
    var id = parseInt(getUrlVars()["index"]);

    if (isNaN(id) || id < 0 || id >= memoria.length) {
        console.error("ID inválido");
        return;
    }

    var cita = memoria[id];

    cita.usuario = document.getElementById("usuario").value;
    cita.correo = document.getElementById("correo").value;
    cita.telefono = document.getElementById("telefono").value;
    cita.fecha = document.getElementById("fecha").value;
    cita.hora = document.getElementById("hora").value;
    cita.documento = document.getElementById("documento").value;

    sessionStorage.setItem("datos", JSON.stringify(memoria));

    Swal.fire({
        title: "Cita actualizada",
        text: "Los datos de la cita han sido actualizados correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar"
    }).then(function () {
        window.location.href = "./agenda.html";
    });
}

document.getElementById("actualizar").addEventListener("click", function (event) {
    event.preventDefault();
    actualizarCita();
});


document.getElementById("eliminar").addEventListener("click", function (event) {
    event.preventDefault();

    Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción eliminará permanentemente la cita. ¿Deseas continuar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#dc3545",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar"
    }).then(function (result) {
        if (result.isConfirmed) {
            eliminarCita();
        }
    });
});


function eliminarCita() {
    var memoria = JSON.parse(sessionStorage.getItem("datos"));
    var id = parseInt(getUrlVars()["index"]);

    if (isNaN(id) || id < 0 || id >= memoria.length) {
        console.error("ID inválido");
        return;
    }


    memoria.splice(id, 1);


    sessionStorage.setItem("datos", JSON.stringify(memoria));


    Swal.fire({
        title: "Cita eliminada",
        text: "La cita ha sido eliminada correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar"
    }).then(function () {
        window.location.href = "./agenda.html";
    });
}
