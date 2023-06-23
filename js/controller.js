let memoria = JSON.parse(sessionStorage.getItem("datos"));

let contenedor = document.getElementById("contenedor");


memoria.forEach(function (cita, index) {
  let fila = document.createElement("div");
  fila.classList.add("row", "my-5", "shadow", "text-center", "p-5");

  let columnaUno = document.createElement("div");
  columnaUno.classList.add("col-4");

  let columnaDos = document.createElement("div");
  columnaDos.classList.add("col-8", "border-start", "p-4");

  let titulo = document.createElement("h1");
  titulo.textContent = "CITA ASIGNADA";

  
  var enlace = document.createElement("a");
  enlace.href = './editarformulario.html?index=' + index;
  let editar = document.createElement("i");
  editar.classList.add("bi", "bi-pencil-fill");
  editar.textContent = "editar ";
  enlace.appendChild(editar);

  let usuario = document.createElement("h3");
  usuario.textContent = cita.usuario;

  let fecha = document.createElement("p");
  fecha.textContent = "Fecha: " + cita.fecha;

  let hora = document.createElement("p");
  hora.textContent = "Hora: " + cita.hora;

  let correo = document.createElement("p");
  correo.textContent = "Correo: " + cita.correo;

  let telefono = document.createElement("p");
  telefono.textContent = "Telefono: " + cita.telefono;

  let documento = document.createElement("p");
  documento.textContent = "Documento: " + cita.documento;

  
  columnaUno.appendChild(titulo);
  columnaUno.appendChild(enlace); 
  columnaDos.appendChild(usuario);
  columnaDos.appendChild(documento);
  columnaDos.appendChild(correo);
  columnaDos.appendChild(telefono);
  columnaDos.appendChild(fecha);
  columnaDos.appendChild(hora);
  fila.appendChild(columnaUno);
  fila.appendChild(columnaDos);
  contenedor.appendChild(fila);
});